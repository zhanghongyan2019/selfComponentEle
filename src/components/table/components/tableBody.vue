<template>
  <table>
    <tr v-for="row in store.states.data" :key="row.date">
      <td v-for="col in store.states._columns" :key="col.prop" :style="{width: `${col.width}px`}">
        {{row[col.prop]}}
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    store: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
}
</script>