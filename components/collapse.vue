<template>
  <div :class="{'collapse--open': opened}" class="collapse" @click="opened = !opened">
    <div class="collapse__title"> {{ title }} </div>
    <transition :duration="400" name="fade" >
      <div v-show="opened" class="collapse__content" >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Titel'
    },
    isOpen:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      opened: this.isOpen,
      uid: null
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener("resize", this.closeCollapse)
     }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.closeCollapse)
  },
  methods: {
    closeCollapse () {
      if (process.browser) {
        //close collapse on mobile
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        if (width < 768) {
          this.opened = false
        }
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.collapse {
  width: 100%;
  max-width: 750px;
  max-height: 100%;
  border-bottom: 2px solid $color-green;

  transition: border-bottom 0.5s ease-out, max-height 0.5s ease-out;

  letter-spacing: 0.1;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid $color-black;
  }

  &--open {
    max-height: 100rem;
    border-bottom: 2px solid $color-black;
    transition: max-height 0.5s ease-in;
  }
}

.collapse__title {
  @extend .trans;

  color: $color-grey;

  @extend .font-averta-semibold;
  height: 100%;
  min-height: 7rem;
  height: 100%;

  display: flex;
  align-items: center;

  &:hover {
    color: $color-black;
  }

  .collapse--open & {
    color: $color-black;
  }
}

.collapse__content {
  padding-bottom: 2.7rem;
  line-height: 1.5;
}
</style>