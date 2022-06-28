<template>
  <div :style="subMenuStyle" class="sub-menu">
    {{title}}
    <i class="iconfont icon-arrow-right-copy-copy" @mouseenter="openSubMenu" @mouseleave="closeSubMenu"></i>
    <transition name="transition" v-if="opened">
      <div class="sub-menu__panel" @mouseleave="closeSubMenu">
        <slot></slot>
      </div>
    </transition>
  </div>
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
      isActive: false,
      opened: false,
      timeout: ''
    }
  },
  created () {
  },
  computed: {
    subIndexArr () {
      return this.$slots.default.map(node => {
        if (this.opened) return node.componentInstance.index
      })
    },
    subMenuStyle () {
      return {
        color: this.isActive ? this.rootMenu.activeTextColor : this.rootMenu.textColor
      }
    },
    rootMenu () {
      let rootMenu = this.$parent
      while (rootMenu.$options._componentTag !== 'nav-menu') {
        if (rootMenu.$options._componentTag === 'nav-menu') {
          break
        } else {
          rootMenu = rootMenu.$parent
        }
      }
      return rootMenu
    },
    isFirstLevel () {
      // console.log(this.$parent.$options._componentTag)
      return false
    }
  },
  methods: {
    openSubMenu () {
      this.opened = true
    },
    closeSubMenu () {
      // 如果移入当前展开的subMenu,不关闭
      if (this.subIndexArr.includes(this.rootMenu.hoverIndex)) return
      this.timeout = setTimeout (() => {
        this.opened = false
      }, this.ShowTimeout)
    }
  },
  watch: {
    'rootMenu.activeIndex': {
      handler (newVal) {
        if (this.subIndexArr.includes(newVal)) {
          this.isActive = true
        } else {
          this.isActive = false
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.sub-menu{
  position: relative;
  padding: 8px 20px;
  cursor: pointer;
  &__panel{
    position: absolute;
    left: 20px;
    top: 50px;
    border: 1px solid #cccccc;
    width: 150px;
    background: #fff;
    box-shadow: 0px 2px 3px #cccccc;
  }
}
</style>