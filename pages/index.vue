<template>
  <section class="page-section">
    <h2 class="page-intro">
      <span class="highlight">Visions for Growth</span> — Kammaco is an independent, boutique management advisory
      firm based in Switzerland. Our clients are investors such as private equity
      and venture capital groups, as well as corporate boards of directors and senior management.
    </h2>

    <div class="navigation-boxes">
      <div class="navigation__box navigation__box--slogan">
        <img class="slogan__image" src="~assets/images/kammaco_descriptor.svg" >
      </div>

      <div class="navigation__box navigation__box--services" @click="goToPage('services')" >
        <span class="navigation__box-text">Services</span>
      </div>

      <div class="navigation__box navigation__box--approach" @click="goToPage('approach')" >
        <span class="navigation__box-text">Approach</span>
        <img class="approach__arrow" src="~assets/images/green_arrow_up.svg">
      </div>
      <div class="navigation__box navigation__box--about" @click="goToPage('about')" >
        <span class="navigation__box-text">About</span>
      </div>
    </div>
  </section>
</template>

<script>

export default {
}
</script>

<style lang="scss">
section {
  min-height: 800px;
  height: 100%;
  width: 100%;
}

.navigation-boxes {
  display: grid;
  grid-template:
    '. slogan .' 142px
    '. services .' 279px
    '. . .' 120px
    '. approach .' 255px
    '. . .' 210px
    '. about .' min-content /
    1fr minmax(min-content, 334px) 1fr;

  @include bp-small {
    grid-gap: 28px;
    grid-row-gap: 0;

    grid-template:
      'slogan . . services services' 142px
      '. . . services services ' 63px
      'approach approach approach . . ' min-content
      '. . . . . ' 110px
      '. . about about .' min-content /
      100px 100px 100px 100px 100px;
  }

  @include bp-medium {
    grid-gap: 50px;
    grid-row-gap: 0;

    grid-template:
      'slogan . services services' 166px
      ' . . services services ' 144px
      'approach approach . . ' min-content
      '. . . . ' 140px
      '. about about .' min-content /
      150px 150px 150px 150px;
  }

  @include bp-large {
    grid-gap: 50px;
    grid-template:
      'services services . . . ' min-content
      '. . approach approach approach' min-content
      '. about about . .' min-content /
      150px 150px 150px 150px 150px;
  }
}

.navigation__box-text {
  position: absolute;
  line-height: 4rem;
}

.navigation__box {
  position: relative;
  width: 100%;

  @extend .font-averta-semibold;
  font-size: 4rem;

  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &--slogan {
    grid-area: slogan;
    height: 158px;
    display: block;
    margin-left: 40px;
    z-index: 10;

    @include bp-small {
      margin-left: 0;
    }

    @include bp-large {
      display: none;
    }

    .slogan__image {
      width: 105px;
    }
  }

  &--services {
    margin-top: -40px;
    grid-area: services;
    height: 100%;
    background-size: 100%;
    background-position: center center;
    background-image: url('~assets/images/icon_white_green_bg.svg');
    background-repeat: no-repeat;

    @extend .trans;

    @include bp-small {
      margin-top: 43px;
    }

    @include bp-medium {
      margin-top: 120px;
      height: 301px;
    }

    .navigation__box-text {
      @extend .trans;
      bottom: -14px;

      @include bp-small {
        bototm: -25px;
      }
    }

    &:hover {
      // transform: rotate(5deg);
      background-size: 80%;

      .navigation__box-text {
        // transform: rotate(-8deg);
        bottom: 25px;
      }
    }
  }

  &--approach {
    background-color: black;
    grid-area: approach;
    height: 100%;

    @extend .trans;

    @include bp-small {
      height: 257px;
    }

    @include bp-large {
      height: 395px;
      margin-top: -50px;
      margin-bottom: 130px;
    }

    .navigation__box-text {
      @extend .trans;
      color: $color-white;
      top: 80px;
      max-width: 212px;
      transform: scale(1);
      text-align: center;

      line-height: 5rem;

      @include bp-small {
        top: 63px;
      }

      @include bp-large {
        top: 160px;
        max-width: 272px;
      }
    }

    .approach__arrow {
      @extend .trans;
      position: absolute;
      bottom: -84px;
      width: 234px;

      @include bp-small {
        // bottom: -70px;
        bottom: -50px;
        width: 217px;
      }
    }

    &:hover {
      .approach__arrow {
        @extend .trans;
        transform: scaleY(0.8);
      }

      .navigation__box-text {
        transform: scale(0.9);
      }
    }
  }

  &--about {
    @extend .trans;
    grid-area: about;
    background-size: 100%;
    background-position: center center;
    background-image: url('~assets/images/pic_rene@2x.jpg');
    background-repeat: no-repeat;
    height: 360px;
    margin-bottom: 20px;

    @include bp-small {
      height: 255px;
    }

    @include bp-medium {
      height: 375px;
    }

    .navigation__box-text {
      @extend .trans;
      bottom: 0;

      @include bp-small {
        bottom: -15px;
      }
    }

    &:hover {
      background-size: 105%;

      .navigation__box-text {
        @extend .trans;
        bottom: 20px;
      }
    }
  }
}
</style>
