<template>
  <div class="form-item">
    <label class="form-item__label" :style="{width: formRoot.labelWidth}">{{ label }}</label>
    <div class="form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    prop: String
  },
  computed: {
    formRoot () {
      let formRoot = this.$parent
      while (formRoot && formRoot.$options._componentTag !== 'selfForm') {
        formRoot = formRoot.$parent
      }
      return formRoot
    }
  }
}
</script>
<style lang="scss" scoped>
.form-item__content{
  display: flex;
}
</style>