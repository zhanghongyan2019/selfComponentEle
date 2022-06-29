<template>
  <div class="input">
    <input
      ref="input"
      class="input-inner"
      :placeholder="placeholder"
      @input="handleInput">
  </div>
</template>
<script>
export default {
  props: {
    value: [String,Number],
    placeholder: String
  },
  data () {
    return {
      realValue: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.realValue = e.target.value
      this.$emit('input', this.realValue)
    }
  },
  watch: {
    value: {
      handler (newVal) {
        this.$nextTick(() => {
          if (newVal) {
            this.$refs.input.value = newVal
            this.realValue = newVal
          }
        })
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.input{
  height: 32px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 0 4px;
  /deep/ input{
    border: none;
    height: 30px;
    border-radius: 4px;
  }
}
</style>