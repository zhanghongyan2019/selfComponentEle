<template>
  <form class="form">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'selfForm',
  props: {
    model: Object,
    rules: Object,
    labelWidth: String
  }
}
</script>
<style lang="scss" scoped>
.form{
  &-item{
    display: flex;
    margin-bottom: 16px;
    align-items: center;
  }
}
</style>