<template>
  <selfForm ref="form" :model="form" label-width="80px">
    <formItem label="活动名称">
      <selfInput v-model="form.name" @input="handleInput"></selfInput>
    </formItem>
    <formItem label="活动区域">
      <selfSelect v-model="form.region" placeholder="请选择活动区域">
        <selectOption label="区域一" value="shanghai"></selectOption>
        <selectOption label="区域二" value="beijing"></selectOption>
      </selfSelect>
    </formItem>
    <formItem label="即时配送">
      <selfSwitch v-model="form.delivery"></selfSwitch>
    </formItem>
    <formItem label="活动性质">
      <checkboxGroup v-model="form.type">
        <selfCheckbox label="美食/餐厅线上活动" name="type"></selfCheckbox>
        <selfCheckbox label="地推活动" name="type"></selfCheckbox>
        <selfCheckbox label="线下主题活动" name="type"></selfCheckbox>
        <selfCheckbox label="单纯品牌曝光" name="type"></selfCheckbox>
      </checkboxGroup>
    </formItem>
    <formItem label="特殊资源">
      <radioGroup v-model="form.resource">
        <selfRadio label="线上品牌商赞助"></selfRadio>
        <selfRadio label="线下场地免费"></selfRadio>
      </radioGroup>
    </formItem>
    <formItem label="活动形式">
      <selfInput type="textarea" v-model="form.desc"></selfInput>
    </formItem>
    <formItem>
      <selfButton type="primary" @click="onSubmit" style="margin-right: 16px">立即创建</selfButton>
      <selfButton>取消</selfButton>
    </formItem>
  </selfForm>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: 'gggg',
        region: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {},
    handleInput (value) {
      console.log(value)
    }
  }
}
</script>