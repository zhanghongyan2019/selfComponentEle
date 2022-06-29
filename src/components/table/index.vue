<template>
  <div class="table">
    <div class="hidden-columns"><slot></slot></div>
    <div class="table-header__wrapper">
      <tableHeader :store="store"></tableHeader>
    </div>
    <div class="table-body__wrapper">
      <tableBody :store="store"></tableBody>
    </div>
  </div>
</template>
<script>
import { createStore } from "./store/index"
import tableHeader from './components/tableHeader'
import tableBody from './components/tableBody'
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      store: {}
    }
  },
  created () {
    this.store = createStore(this, {
      data: this.data
    })
  },
  components: {
    tableHeader,
    tableBody
  }
}
</script>
<style lang="scss" scoped src="./index.scss"></style>