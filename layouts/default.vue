<template>
  <div :class="{'fixed': $store.state.mobileNavIsOpen, 'loaded': loaded}" class="loading">
    <page-header id="header" :scrolled="headerScrolled" :small-header="smallHeader"/>
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
      smallHeader: false,
      loaded: false
    }
  },
  mounted () {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll)
      window.addEventListener("wheel", this.handleWheel)
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
      const header = document.getElementById('header')
      var distanceTop = header.getBoundingClientRect().top
      if(distanceTop < 300 && (!this.scrolledUp && !this.$store.state.mobileNavIsOpen) ){
        this.headerScrolled = true
      } else {
        this.headerScrolled = false
      }
       if(distanceTop < 300 ){
        this.smallHeader = true
      } else {
        this.smallHeader = false
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
}

.sidebar-content-wrapper {
  // margin-top: 195px;
  margin-top: 370px;

  display: grid;
  grid-template:
    'content' min-content /
    1fr;

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
</style>
