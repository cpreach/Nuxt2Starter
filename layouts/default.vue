<template>
  <div :class="{'fixed': $store.state.mobileNavIsOpen, 'loaded': loaded}" class="loading">

    <div class="not-supported">
      <p>
        Your browser is outdated and not <span class="highlight">supported</span>. Please
        install a newer version or <a class="mailto__link" href="http://outdatedbrowser.com/" target="_blank" rel="noopener">try</a> another one.<br><br>
      </p>
    </div>

    <page-header id="header" :scrolled="headerScrolled" />
    <div class="outer-wrapper centered padder">
      <div class="sidebar-content-wrapper">
        <page-sidebar :scrolled="footerScrolled" class="side-bar" />
        <div class="main-content">
          <nuxt/>
        </div>
      </div>
    </div>
    <slider time="8000" />
    <page-footer id="footer" />
  </div>
</template>

<script>
import pageHeader from '~/components/pageHeader'
import slider from '~/components/slider'
import pageFooter from '~/components/pageFooter'
import pageSidebar from '~/components/pageSidebar'

export default {
  components: {
    pageHeader,
    slider,
    pageFooter,
    pageSidebar
  },
  data () {
    return {
      footerScrolled: false,
      headerScrolled: false,
      scrolledUp: false,
      loaded: false
    }
  },
  mounted () {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll, {passive: true})
      window.addEventListener("wheel", this.handleWheel, {passive: true})
    }
    this.loaded = true
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.handleWheel)
  },
  methods: {
    handleScroll (e) {
      this.checkFooterOnScroll()
      this.handleHeaderOnScroll(e)
    },
    checkFooterOnScroll () {
      if (process.browser) {
          //check if footer is in window and then change color of sidebar icon
          const footer = document.getElementById('footer')
          var distanceTop = footer.getBoundingClientRect().top
          if ( (distanceTop < 1800 && distanceTop > 436) ) {
            this.footerScrolled = true
          } else {
            this.footerScrolled = false
          }
      }
    },
    handleHeaderOnScroll () {
      //get window width
      if (process.browser) {
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      }
      const header = document.getElementById('header')
      var distanceTop = header.getBoundingClientRect().top

      if(width > 767) {
        if(distanceTop < 300 && (!this.scrolledUp && !this.$store.state.mobileNavIsOpen) ){
        this.headerScrolled = true
        } else {
          this.headerScrolled = false
        }
        if(distanceTop < 300 ){
          this.$store.commit('setStore', {key: 'smallHeader', value: true})
        } else {
          this.$store.commit('setStore', {key: 'smallHeader', value: false})
        }
      } else {
          if(distanceTop < 200 ){
          this.$store.commit('setStore', {key: 'smallHeader', value: true})
          } else {
          this.$store.commit('setStore', {key: 'smallHeader', value: false})
          }
      }
    },
    handleWheel (e) {
      e.deltaY < 0 ? this.scrolledUp = true : this.scrolledUp = false
    }
  }
}

</script>

<style lang="scss">
@import '~assets/stylesheets/sass/styles';

.main-content {
  grid-area: content;
  width: 100%;
  min-height: 400px;
  margin-bottom: 180px;
  overflow: hidden;
}

.side-bar {
  grid-area: sidebar;

  @supports not (display: grid) {
    display: none;
  }
}

.sidebar-content-wrapper {
  margin-top: 250px;

  display: grid;
  grid-template:
    'content' min-content /
    1fr;

  @include bp-small {
    margin-top: 370px;
  }

  @include bp-medium {
    grid-template:
      '. content' min-content /
      45px 1fr;
  }

  @include bp-large {
    grid-gap: 50px;
    grid-template:
      'sidebar . content content content content content .' min-content /
      175px 1fr 150px 150px 150px 150px 150px 1fr;
  }

  @include bp-xlarge {
    grid-gap: 50px;
    grid-template:
      'sidebar . content content content content content .' min-content /
      200px 1fr 150px 150px 150px 150px 150px 1fr;
  }
}

// .not-supported {
//   padding: 40px;
//   height: 100vh;
//   width: 100vw;
//   position: fixed;
//   background-color: white;
//   top: 0;
//   left: 0;
//   z-index: 20000;

//   display: none;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   img {
//     margin-bottom: 100px;
//   }

//   @supports not (display: grid) {
//     display: flex;
//   }
// }

// .loading {
//   @supports not (display: grid) {
//     position: fixed;
//   }
// }

//Fallback CSS Grid
.main-content {
  @supports not (display: grid) {
    .slogan-svg {
      display: none;

      @include bp-medium {
        display: block;
      }
    }
    @include bp-medium {
      padding-left: 200px;
    }
  }
}
.not-supported {
  position: absolute;
  top: 40px;
  z-index: 2000;
  left: 50%;
  transform: translateX(-50%);

  display: none;

  @supports not (display: grid) {
    display: block;
  }
}
</style>
