<template>
  <li :style="itemStyle" class="menu-item" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <slot></slot>
  </li>
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
    }
  },
  created () {
  },
  computed: {
    itemStyle () {
      return {
        color: this.index === this.rootMenu.activeIndex ? this.rootMenu.activeTextColor : this.rootMenu.textColor
      }
    },
    rootMenu() {
      return this.$parent.rootMenu || this.$parent
    }
  },
  methods: {
    handleClick () {
      if (this.rootMenu.router && this.$route.name !== this.route.name) {
        this.$router.push(this.route)
      }
      this.rootMenu.handleItemClick(this.index)
    },
    handleMouseEnter () {
      this.rootMenu.handleMouseEnter(this.index)
    },
    handleMouseLeave () {
      this.rootMenu.handleMouseLeave()
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-item {
  padding: 8px 20px;
  cursor: pointer;
  color: #2c3e50
}
li{
  list-style: none;
}
</style>