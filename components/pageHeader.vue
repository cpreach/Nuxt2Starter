<template>
  <div>
    <div class="nav-burger__wrapper" @click="$store.commit('toggleMobileNav')">
      <svg v-show="!$store.state.mobileNavIsOpen" class="nav-burger__icon" width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="About-mobile" transform="translate(-312.000000, -52.000000)" fill-rule="nonzero">
            <g transform="translate(312.000000, 52.000000)">
              <g fill="#000000">
                <circle cx="20" cy="20" r="20" />
              </g>
              <g transform="translate(9.000000, 15.000000)" stroke="#00FF00" stroke-linecap="square">
                <path id="nav-burger__icon-line1" d="M22,1 L0,1" />
                <path id="nav-burger__icon-line2" d="M22,5.25 L0,5.25"/>
                <path id="nav-burger__icon-line3" d="M22,10.25 L0,10.25" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg v-show="$store.state.mobileNavIsOpen" width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Home-mobile-Navi-open" transform="translate(-312.000000, -57.000000)" fill-rule="nonzero">
            <g id="Group-4" transform="translate(312.000000, 57.000000)">
              <g >
                <g fill="#FFFFFF">
                  <circle cx="20" cy="20" r="20" />
                </g>
                <g transform="translate(20.000000, 20.500000) rotate(45.000000) translate(-20.000000, -20.500000) translate(9.000000, 20.000000)" stroke="#000000" stroke-linecap="square">
                  <path d="M22,0.25 L0,0.25" />
                </g>
              </g>
              <g transform="translate(20.000000, 20.500000) scale(1, -1) rotate(45.000000) translate(-20.000000, -20.500000) translate(9.000000, 20.000000)" stroke="#000000" stroke-linecap="square">
                <path d="M22,0.25 L0,0.25"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <transition name="fade">
      <div v-show="!scrolled" :class="{'small-header': $store.state.smallHeader}" class="header-wrapper">
        <header class="main-header outer-wrapper centered">
          <transition name="fade">
            <div v-show="!$store.state.smallHeader" class="logo-wrapper">
              <nuxt-link :to="{name: 'index'}">
                <img
                  src="~/assets/images/logo.svg"
                  title="logo"
                  class="logo-image">
              </nuxt-link>
            </div>
          </transition>
          <div class="nav-wrapper">
            <nav>
              <ul class="nav__list">
                <li class="nav__list-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="nav__list-item"><nuxt-link :to="{name: 'services'}">Services</nuxt-link></li>
                <li class="nav__list-item"><nuxt-link :to="{name: 'approach'}">Approach</nuxt-link></li>
                <li class="nav__list-item"><nuxt-link :to="{name: 'about'}">About</nuxt-link></li>
                <li class="nav__list-item"><a href="#" @click.prevent="scrollTo('#footer')" >Contact</a></li>
              </ul>
            </nav>
          </div>
          <transition
            @enter="enter"
            @leave="leave"
            @after-leave="afterLeave"
            @css="false"
          >
            <div v-show="$store.state.mobileNavIsOpen" class="mobile-menu" >
              <div class="mobile-menu__inner">
                <div class="nav-wrapper-mobile">
                  <nav class="nav__list-mobile-wrapper">
                    <ul class="nav__list-mobile">
                      <li class="nav__list-item-mobile" @click.capture="$store.commit('toggleMobileNav')"><nuxt-link :to="{name: 'index'}" event=" " @click.native.prevent="selectedRoute = 'index'" >Home</nuxt-link></li>
                      <li class="nav__list-item-mobile" @click.capture="$store.commit('toggleMobileNav')"><nuxt-link :to="{name: 'services'}" event=" " @click.native.prevent="selectedRoute = 'services'" >Services</nuxt-link></li>
                      <li class="nav__list-item-mobile" @click="$store.commit('toggleMobileNav')"><nuxt-link :to="{name: 'approach'}" event=" " @click.native.prevent="selectedRoute = 'approach'">Approach</nuxt-link></li>
                      <li class="nav__list-item-mobile" @click="$store.commit('toggleMobileNav')"><nuxt-link :to="{name: 'about'}" event=" " @click.native.prevent="selectedRoute = 'about'">About</nuxt-link></li>
                    </ul>
                  </nav>

                  <div class="nav__list-mobile nav__list-mobile--contact">Contact</div>
                  <br><br>
                  <div class="contact-details">
                    <strong>Kammaco AG</strong><br>
                    Bäumleingasse 22 /&nbsp;4051 Basel<br>
                    Switzerland
                    <br><br>
                    T <a href="tel:+41615353030" rel="noopener">+41 615 35 30 30</a><br>
                    <a class="mailto__link" href="mailto:hello@kammaco.com">Send an email</a><br>
                    <a href="https://linkedin.com/in/rené-kamm-96a58a8" target="_blank" rel="noopener"><img class="linkedin-mobile-icon" src="~assets/images/linkedin_mobile_icon.svg"></a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </header>
      </div>
    </transition>
  </div>
</template>

<script>
import {Back, TimelineLite} from "gsap"

export default {
  props: {
    scrolled: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      mobileMenuOpen: false,
      selectedRoute: null,
    }
  },
  methods: {
     enter (el, done) {
      var tl = new TimelineLite({onComplete:done})
      tl.to(el, 0.5, {display:"block", opacity: 1, autoAlpha:1})
      tl.staggerFromTo(".nav__list-item-mobile", 0.5, {opacity:0, x: -10, ease:Back}, {opacity:1, x: 0, ease:Back}, 0.2, "-=0.25")
      tl.fromTo(".nav__list-mobile--contact", 0.5, {opacity:0, y: -20, ease:Back}, {opacity:1, y: 0, ease:Back})
      tl.fromTo(".contact-details", 0.5, {opacity:0, y: 20, ease:Back}, {opacity:1, y: 0, ease:Back})
    },
    leave (el, done) {
      var tl = new TimelineLite({onComplete:done})
      tl.staggerTo(".nav__list-item-mobile", 0.5, {opacity:0, x: -10, ease:Back}, 0.2)
      tl.fromTo(".nav__list-mobile--contact", 0.5, {opacity:1, y: 0, ease:Back}, {opacity:0, y: -20, ease:Back}, "-=0.5")
      tl.fromTo(".contact-details", 0.5,{opacity:1, y: 0, ease:Back}, {opacity:0, y: 20, ease:Back}, "-=0.25")
      tl.to(el, 0.5, {autoAlpha: 0})
      this.$store.commit('setStore', {key: 'smallHeader', value: false})
    },
    afterLeave () {
      this.$router.push({name: this.selectedRoute})
      this.selectedRoute = null
    }
  }
}
</script>

<style lang="scss">
.logo-wrapper {
  grid-area: logo;
}

.logo-image {
  width: 100%;

  @supports not (display: grid) {
    width: 200px;
  }
}

.nav-wrapper {
  grid-area: nav;

  display: none;

  justify-self: end;

  @include bp-small {
    display: block;
    margin-top: 20px;
  }

  @include bp-large {
    margin-top: 23px;

    justify-self: center;
  }
}

.header-wrapper {
  width: 100%;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: transparent;
  z-index: 1000;
  height: 180px;

  @include bp-small {
    height: 324px;
    background-color: white;
  }

  &.small-header {
    height: 110px;
  }
}

.main-header {
  padding-top: 40px;
  @extend .trans;

  .header-wrapper--isFixed & {
    padding-top: 44px;
  }

  .small-header & {
    padding-top: 20px;
  }

  padding-right: 20px;
  padding-left: 20px;

  @include bp-small {
    padding-right: 76px;
    padding-left: 76px;
    padding-top: 88px;
  }

  display: grid;

  grid-template:
    'logo burger' min-content /
    125px 1fr;

  @include bp-small {
    grid-template:
      'logo nav' min-content /
      125px 1fr;
  }

  @include bp-medium {
    grid-gap: 50px;
    grid-template:
      'logo nav' min-content /
      150px 1fr;
  }

  @include bp-large {
    grid-gap: 50px;
    grid-template:
      'logo .  nav nav nav nav nav .' min-content /
      175px 1fr 150px 150px 150px 150px 150px 1fr;
  }

  @include bp-xlarge {
    grid-gap: 50px;
    grid-template:
      'logo .  nav nav nav nav nav .' min-content /
      200px 1fr 150px 150px 150px 150px 150px 1fr;
  }
}

.nav-burger__wrapper {
  grid-area: burger;
  justify-self: end;

  position: fixed;
  top: 40px;
  right: 20px;
  z-index: 12000;

  @include bp-small {
    display: none;
  }
}

.nav-burger__icon {
  @include bp-small {
    display: none;
  }

  // &:hover {
  //   cursor: pointer;

  //   #nav-burger__icon-line1 {
  //     transform: translateY(-10%);
  //   }
  //   #nav-burger__icon-line3 {
  //     transform: translateY(10%);
  //   }
  // }
}

#nav-burger__icon-line1 {
  @extend .trans;
}

#nav-burger__icon-line3 {
  @extend .trans;
}

.nav__list {
  display: flex;
}

.nav__list-item {
  margin-right: 3rem;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: $color-grey;
    @extend .trans;

    font-size: 2rem;
    line-height: 2.5rem;
    @extend .font-averta-semibold;

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: $color-green;
      transition: width 0.3s;
    }

    &:hover {
      cursor: pointer;
      color: $color-black;

      &:after {
        width: 100%;
      }
    }

    &.nuxt-link-exact-active {
      color: $color-black;
    }
  }
}

.mobile-menu {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  overflow-y: scroll;

  background-color: $color-black;
  color: $color-white;

  padding: 60px 20px 0 60px;

  @include bp-small {
  }
}

.mobile-menu__inner {
  margin-bottom: 200px;
}

.nav-wrapper-mobile {
  margin-top: 100px;
}

.nav__list-mobile {
  font-size: 40px;
  line-height: 50px;
}

.nav__list-item-mobile {
  a {
    &.nuxt-link-exact-active {
      color: $color-green;
    }
  }
}

.nav__list-mobile-wrapper {
  margin-bottom: 60px;
}

.contact-details {
  font-size: 16px;
  line-height: 20px;
}

.linkedin-mobile-icon {
  margin-top: 30px;
}
</style>