<template>
  <div class="zg-logo">这是一个zglogo组件</div>
</template>
<script>
export default {
  name: 'ZgLogo',
  data() {
    return {}
  },
  mounted() {
    const abc = Object.assign({}, { x: 'ZgLogo' })
    console.info(abc)
  }
}
</script>
<style lang="stylus" scoped>
.zg-logo{
  font-size 20px
}
</style>
