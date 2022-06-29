<template>
  <div><slot></slot></div>
</template>
<script>
export default {
  props: {
    prop: String,
    label: String,
    width: [String,Number]
  },
  computed: {
    tableRoot () {
      let tableRoot = this.$parent
      while (tableRoot && tableRoot.$options._componentTag !== 'selfTable') {
        tableRoot = tableRoot.$parent
      }
      return tableRoot
    }
  },
  created () {
    this.tableRoot.store.commit('insertColumns',this.$options.propsData)
  }
}
</script>
