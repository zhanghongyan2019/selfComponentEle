<template>
  <ul
    class="menu"
    :class="[mode]"
    :style="{backgroundColor: backgroundColor, color: textColor}">
    <slot :active="111"></slot>
  </ul>
</template>
<script>
export default {
  name: 'navMenu',
  data () {
    return {
      activeIndex: this.defaultActive || '',
      hoverIndex: ''
    }
  },
  mounted() {
  },
  methods: {
    open (index) {
      /*
      * 功能 展开指定的sub-menu
      * @params  index 需要打开的sub-menu的index
      * */
      console.log()
    },
    close (index) {
      /*
      * 功能 收起指定的sub-menu
      * @params  index 需要打开的sub-menu的index
      * */
      console.log(index)
    },
    handleItemClick (index) {
      this.activeIndex = index
    },
    handleMouseEnter (index) {
      this.hoverIndex = index
    },
    handleMouseLeave () {
      this.hoverIndex = ''
    }
  },
  props: {
    mode: {
      type: String,
      default: 'vertical' // 'horizontal', 'vertical'
    },
    collapse: {
      type: Boolean,
      default: false // 是否水平折叠收起菜单，仅在mode为vertical时可用
    },
    backgroundColor: {
      type: String,
      default: '#ffffff' // 菜单的背景色
    },
    textColor: {
      type: String,
      default: '#303133' // 菜单的文字颜色
    },
    activeTextColor: {
      type: String,
      default: '#409eff' // 当前激活菜单的文字颜色
    },
    defaultActive: [String], // 当前激活菜单的index
    defaultOpeneds: [Array], // 当前打开的sub-menu的index数组
    uniqueOpened: {
      type: Boolean,
      default: false // 是否只保持一个子菜单展开
    },
    menuTrigger: {
      type: String,
      default: 'hover' // 子菜单打开的触发方式，只在mode为horizontal时有效
    },
    router: {
      type: Boolean,
      default: false //是否使用vue-router的模式，启用该模式会在激活导航时以index作为path进行路由跳转
    },
    coolapseTransition: {
      type: Boolean,
      default: true // 是否开启折叠动画
    }
  }
}
</script>
<style lang="scss" scoped src="./index.scss"></style>