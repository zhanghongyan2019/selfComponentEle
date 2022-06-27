<template>
  <li :style="{color: index === activeIndex ? activeTextColor : ''}" class="menu-item">111</li>
</template>
<script>
export default{
  name: 'menuItem',
  props: {
    index: String, // 唯一标志
    route: Object, // vue router路径对象
    disabled: {
      type: Boolean,
      default: false, // 是否禁用
    }
  },
  data () {
    return {
      activeIndex: '',
      activeTextColor: ''
    }
  },
  created () {
    this.activeIndex = this.$parent.defaultActive
    this.activeTextColor = this.$parent.activeTextColor
  }
}
</script>
<style lang="scss" scoped></style>