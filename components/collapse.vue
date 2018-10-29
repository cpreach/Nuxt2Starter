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

  // mounted() {
  //   if (process.browser) {
  //     const self = this;
  //     document.addEventListener("click", function (e) {
  //       console.log(self.references, e)

  //       let el = self.references.collapse;
  //       let target = e.target;

  //       if (el.$el !== target && !el.$el.contains(target)) {
  //         self.opened = false;
  //       }

  //     });
  //   }
  // },
  // destroyed() {
  //   if (process.browser) {
  //     document.removeEventListener("click", this.documentClick);
  //   }
  // }
}
</script>

<style scoped lang='scss'>
.collapse {
  width: 100%;
  max-width: 750px;
  max-height: 100%;
  border-bottom: 2px solid $color-green;

  transition: border-bottom 0.5s ease-out, max-height 0.5s ease-out;

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
  line-height: 2.2;
  padding: 1.3rem 0;

  &:hover {
    color: $color-black;
  }

  .collapse--open & {
    color: $color-black;
  }
}

.collapse__content {
  padding-bottom: 2.7rem;
}
</style>