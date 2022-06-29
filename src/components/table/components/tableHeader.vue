<template>
  <div class="table-header__content">
    <tr>
      <th v-for="col in store.states._columns" :key="col.prop" :style="{width: `${col.width}px`}">
        {{col.label}}
      </th>
    </tr>
  </div>
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