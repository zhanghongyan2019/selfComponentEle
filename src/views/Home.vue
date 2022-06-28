<template>
  <div class="home">
    <div class="left">
      <nav-menu
        :router="true"
        :default-active="activeIndex"
        active-text-color="#ffd04b">
        <menu-item index="navMenu" :route="{name: 'menuView'}">navMenu菜单</menu-item>
        <menu-item index="table" :route="{name: 'tableView'}">table表格</menu-item>
        <menu-item index="form" :route="{name: 'formView'}">form表单</menu-item>
        <menu-item index="datePicker" :route="{name: 'datePicker'}">datePicker日期选择</menu-item>
      </nav-menu>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data () {
    return {
      activeIndex: 'navMenu'
    }
  },
  created () {
    if (this.$route.name !== 'menuView') {
      this.$router.push({name: 'menuView'})
    }
  },
  components: {
  },
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
}
.left{
  height: 100%;
}
.right{
  padding: 20px;
}
</style>
