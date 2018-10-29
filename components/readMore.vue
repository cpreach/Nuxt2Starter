<template>
  <div class="read-more">
    <transition name="fade">
      <div v-show="!isOpen" class="read-more__title" @click="isOpen = true">
        <svg class="read-more__icon" width="16px" height="20px" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g class="read-more__icon--color" transform="translate(-525.000000, -1643.000000)" fill-rule="nonzero" stroke="#979797" stroke-width="2">
              <g id="Group-7" transform="translate(519.000000, 1362.000000)">
                <g id="Group-3" transform="translate(14.000000, 291.000000) rotate(180.000000) translate(-14.000000, -291.000000) translate(6.000000, 282.000000)">
                  <polyline id="Path-2" transform="translate(8.000000, 8.000000) rotate(-45.000000) translate(-8.000000, -8.000000) " points="3 3 13 3 13 13" />
                  <path id="Line-2" d="M8.25,2 L8.25,17.5" stroke-linecap="square" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p>More</p>
      </div>
    </transition>

    <div v-show="!isOpen" class="read-more__preview page-content">{{ preview }}</div>

    <transition name="fade">
      <div v-show="isOpen">
        <slot />
      </div>
    </transition>

    <transition name="fade">
      <div v-show="isOpen" class="read-more__end" @click="isOpen = false">
        <svg class="read-more__icon" width="16px" height="20px" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="About-mobile-Copy" class="read-more__icon--color" transform="translate(-27.000000, -3470.000000)" fill-rule="nonzero" stroke="#979797" stroke-width="2">
              <g id="Group-3" transform="translate(28.000000, 3472.000000)">
                <polyline id="Path-2" transform="translate(7.071068, 7.071068) rotate(-45.000000) translate(-7.071068, -7.071068) " points="2.07106781 2.07106781 12.0710678 2.07106781 12.0710678 12.0710678" />
                <path id="Line-2" d="M7.25,1 L7.25,16.5" stroke-linecap="square" />
              </g>
            </g>
          </g>
        </svg>
        <p>Close</p>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  props: {
    previewCount: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      isOpen: false,
      preview: null
    }
  },
   mounted () {
    this.showFirstWords()
  },
  methods: {
    showFirstWords () {
      //get text from slog
      this.preview = this.$slots.default[0].elm.innerHTML.substring(0, this.previewCount)
    }
  },

}
</script>

<style scoped lang='scss'>
.read-more {
  position: relative;

  &:hover {
    cursor: pointer;
  }
}
.read-more__title,
.read-more__end {
  @extend .trans;
  display: flex;
  align-items: center;
  color: $color-grey;

  &:hover {
    color: $color-green;
    .read-more__icon--color {
      @extend .trans;
      stroke: $color-green;
    }
  }
}

.read-more__icon {
  @extend .trans;
  margin-right: 10px;
}

.read-more__preview {
  opacity: 0.1;
  margin-top: 20px;
}
</style>