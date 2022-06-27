<template>
  <div :style="{color: index === activeIndex ? activeTextColor : ''}" class="sub-menu">111</div>
</template>
<script>
export default{
  name: 'subMenu',
  props: {
    index: {
      type: [String, null],
      default: null // 唯一标志
    },
    PopperClass: [String], // 弹出菜单的自定义类名
    ShowTimeout: {
      type: Number,
      default: 300 // 展开sub-menu的延时
    },
    hideTimeout: {
      type: Number,
      default: 300 // 收起sub-menu的延时
    },
    disabled: {
      type: Boolean,
      default: false //是否禁用
    },
    PopperAppendToBody: {
      type: Boolean,
      default: false // 一级子菜单true, 非一级子菜单false
    },
    title: String
  },
  data () {
    return {
      activeIndex: '',
      activeTextColor: ''
    }
  },
  created () {
    this.activeIndex = this.$parent.defaultActive || ''
    this.activeTextColor = this.$parent.activeTextColor || ''
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped></style>