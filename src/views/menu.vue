<template>
  <div>
    <span>水平菜单</span>
    <nav-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <menu-item index="1">处理中心</menu-item>
      <sub-menu index="2" title="我的工作台">
        <menu-item index="2-1">选项1</menu-item>
        <menu-item index="2-2">选项2</menu-item>
        <menu-item index="2-3">选项3</menu-item>
        <sub-menu index="2-4" title="选项4">
          <menu-item index="2-4-1">选项1</menu-item>
          <menu-item index="2-4-2">选项2</menu-item>
          <menu-item index="2-4-3">选项3</menu-item>
        </sub-menu>
      </sub-menu>
      <menu-item index="3" disabled>消息中心</menu-item>
      <menu-item index="4">订单管理</menu-item>
    </nav-menu>
    <span>垂直菜单</span>
    <nav-menu
      :default-active="activeIndex"
      backgroundColor="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect">
      <menu-item index="1">处理中心</menu-item>
      <sub-menu index="2" title="我的工作台">
        <menu-item index="2-1">选项1</menu-item>
        <menu-item index="2-2">选项2</menu-item>
        <menu-item index="2-3">选项3</menu-item>
        <sub-menu index="2-4" title="选项4">
          <menu-item index="2-4-1">选项1</menu-item>
          <menu-item index="2-4-2">选项2</menu-item>
          <menu-item index="2-4-3">选项3</menu-item>
        </sub-menu>
      </sub-menu>
      <menu-item index="3" disabled>消息中心</menu-item>
      <menu-item index="4">订单管理</menu-item>
    </nav-menu>
  </div>

</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect () {}
  }
}
</script>