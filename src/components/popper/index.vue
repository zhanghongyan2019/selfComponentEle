<template>
  <div>
    <slot name="reference"></slot>
    <div class="popper" :class="[popperClass]">
      111
    </div>
  </div>
</template>
<script>
export default {
  props: {
    trigger: {
      type: String,
      default: 'click', // 触发方式， click,focus,hover,manual
      validator(value) {
        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
      }
    },
    title: String,
    content: String, // 显示的内容，也可以通过slot传入dom
    width: [String, Number],
    placement: {
      type: String,
      default: 'bottom' // 出现位置
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 0 // 出现位置的偏移量
    },
    transition: {
      type: String,
      default: 'fade-in-linear' //定义渐变动画
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    popperOptions: [Object],
    popperClass: [String],
    openDelay: [Number],
    closeDelay: {
      type: Number,
      default: 200
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.popper{
  position: absolute;
  left: 0;
  top: 0;
}
</style>