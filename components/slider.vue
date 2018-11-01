<template>
  <div class="slider centered padder">
    <div class="slider__inner">
      <div class="slider__title">Testimonials</div>

      <div class="slider__quotes-wrapper">
        <no-ssr>
          <v-touch
            :swipe-options="{ direction: 'horizontal', threshold: 100 }"
            @swipeleft="handleSwipe('left')"
            @swiperight="handleSwipe('right')"
          >
            <div class="slider__quote-single">
              <div v-for="(qoute, index) in qoutes" :key="index">
                <transition-group name="qoute">
                  <div v-show="qoute.active" :key="index" :class="{'qoute__text--active' : qoute.active}" class="qoute-text-wrapper qoute__text" >
                    <p>„<span class="qoute__text_inner" v-html="qoute.text" />“</p>
                    <p class="qoute__author" v-html="qoute.author" />
                  </div>
                </transition-group>
              </div>
            </div>
          </v-touch>
        </no-ssr>
        <div class="slider__paginator">
          <ul class="slider-paginator-list">
            <li v-for="(qoute, index) in qoutes" :key="index" class="slider-paginator-item" @click="handlePaginateClick(index)"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 0h22v20H0z"/></defs><g transform="translate(-1)" fill="none" fill-rule="evenodd"><mask fill="#fff"><use xlink:href="#a"/></mask><path :class="{'slider-paginator-item--active': qoute.active}" d="M27.141-13.591L-5.14 33.59" stroke="#fff" stroke-width="5" stroke-linecap="square" mask="url(#b)"/></g></svg></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: '3000'
    },
  },
  data () {
    return {
      qoutes: [
        {text: '&hellip; I have always admired your vision and ability to get things done&hellip; I will always regard you as a loyal friend and dynamic business partner &hellip;', author: 'Sandy Angus, Chairman Angus Montgomery Ltd, London', active: true},
        {text: '&hellip; You inspired me to think big, and you helped me to deal with major challenges and supported me to achieve great goals with Art Basel. You have been my best boss, partner and mentor one can wish for &hellip;', author: 'Sam Keller, Director Fondation Beyeler (former Global Director Art Basel)', active: false},
        {text:' &hellip; As the CEO of MCH, you brought unbelievable new impetus and opened up new perspectives for the future at a time of great challenges &hellip;', author: 'Robert A. Jeker †2012, former MCH Chairman', active: false},
        {text: '&hellip; You transformed a regional Swiss trade fair company into a dynamic international service group thanks to your strategic vision, your entrepreneurial courage and clever leadership &hellip;', author: 'Craig Robins, Founder and CEO of Dacra, Developer Miami Design District, Miami', active: false},
        {text: '&hellip; Thanks to your visionary leadership as Chairman of the event, we turned UFI‘s Global CEO Summit around to be a great success &hellip;', author: 'Kai Hattendorf, Managing Director UFI (The Global Association of the Exhibition Industry), Paris', active: false},
        {text: '&hellip; Thank you very much for working on my company’s Board&hellip;you are a great help for my sons in the gradual assumption of responsibility for the Winter Group &hellip;', author: 'Philipp Winter, Owner and Honorary Chairman of The Winter Group, Basel', active: false},
        {text: '&hellip; Your decision to acquire Art HK back in 2012 and turning it into Art Basel Hong Kong was strategic and visionary. You created  the most influential contemporary art event with a phenomenal success in the entire region &hellip;', author: 'Monica Lee-Müller, Managing Director, Hong Kong Convention and Exhibition Centre (Management) Ltd., Hong Kong', active: false},
        {text: '&hellip; Thank you so much for having served on the board of FC Basel 1893. As a courageous decision-maker and loyal team player you have contributed a great deal to the club‘s success on a national and international level &hellip;', author: 'Dr. Bernhard Heusler, former Chairman of FC Basel 1893', active: false}
     ],
     slide: 1,
     timer: null,
     initialX: null,
     initialY: null
    }
  },
  mounted: function () {
    this.runSlider()
  },
  methods: {
    // //detect the touchevents
    // startTouch (e) {
    //   this.initialX = e.touches[0].clientX
    //   this.initialY = e.touches[0].clientY
    // },

    // moveTouch(e) {
    //   if (this.initialX === null) {
    //     return
    //   }

    //   if (this.initialY === null) {
    //     return
    //   }

    //   var currentY = e.touches[0].clientY
    //   var currentX = e.touches[0].clientX

    //   var diffX = this.initialX - currentX
    //   var diffY = this.initialY - currentY

    //   if (Math.abs(diffX) > Math.abs(diffY)) {
    //     // sliding horizontally
    //     if (diffX > 0) {
    //       // swiped left
    //       this.handlePaginateClick(this.slide, 'left')
    //     } else {
    //       // swiped right
    //       this.handlePaginateClick(this.slide, 'right')
    //     }
    //   } else {
    //     // sliding vertically
    //     if (diffY > 0) {
    //       // swiped up
    //     } else {
    //       // swiped down
    //     }
    //   }

    //   this.initialX = null
    //   this.initialY = null

    //   e.preventDefault()
    // },


    handleSwipe (direction) {
       //set all items to false
      this.qoutes.map( (item) => {
        item.active = false
      })
      //clear timer
      clearInterval(this.timer)

      //get the next slide
      let index = this.slide
      const qoutesLength = this.qoutes.length -1

      if (direction === 'left') {
        index === qoutesLength ? index = 0 : index = this.slide + 1
      } else {
        index === 0 ? index = qoutesLength : index = this.slide - 1
      }

      this.qoutes[index].active = true
      this.slide = index
      //start timer again
      this.runSlider()
    },

    handlePaginateClick (index) {
      //set all items to false
      this.qoutes.map( (item) => {
        item.active = false
      })
      //clear timer
      clearInterval(this.timer)
      //activate the selected one
      this.qoutes[index].active = true
      this.slide = index
      //start timer again
      this.runSlider()
    },
    runSlider () {
      var self = this
      this.timer =  setInterval( function() {
         self.handlePaginateClick(self.slide)
         self.slide === self.qoutes.length-1 ? self.slide = 0 : self.slide ++
       }, self.time)
    }
  }
}
</script>

<style scoped lang='scss'>
.slider {
  height: 100%;
  width: 100%;
  background-color: $color-black;

  display: grid;
  grid-template:
    'slider-content' min-content /
    1fr;

  @include bp-small {
    grid-template:
      'slider-content' min-content /
      1fr;
  }

  @include bp-large {
    grid-gap: 50px;
    grid-template:
      '. . slider-content .' min-content /
      200px 1fr 950px 1fr;
  }
}

.slider__inner {
  color: $color-white;
  grid-area: slider-content;
  text-align: center;
}

.slider__title {
  color: $color-grey;
  font-size: 2rem;
  margin-top: 200px;
  display: inline-block;
  width: 200px;
}

.slider__quote-single {
  width: 100%;
  height: 100%;
  min-height: 324px;

  margin-top: 90px;
  position: relative;

  margin-bottom: 130px;

  @include bp-small {
    margin-bottom: 30px;
  }
}

.qoute__text {
  font-size: 4rem;
  line-height: 1.2;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
}

.qoute__text_inner {
  @extend .font-averta-regular;
}

.qoute__author {
  color: $color-green;
  font-size: 2rem;
  line-height: 1.5;
  margin-top: 20px;
}

.slider__paginator {
  width: 167px;
  margin-bottom: 260px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2000;
}

.slider-paginator-list {
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
}

.slider-paginator-item {
  @extend .trans;

  &:hover {
    cursor: pointer;
  }
  &--active {
    stroke: $color-green;
  }
}
</style>