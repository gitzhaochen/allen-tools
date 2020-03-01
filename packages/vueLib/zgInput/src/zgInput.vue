<template>
  <div class="zg-input">这是一个ZgInput组件</div>
</template>
<script>
export default {
  name: 'ZgInput',
  data() {
    return {}
  },
  mounted() {
    const abc = Object.assign({}, { x: 'ZgInput' })
    console.info(abc)
  }
}
</script>
<style lang="stylus" scoped>
.zg-input{
  font-size 20px
}
</style>
