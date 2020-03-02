<template>
  <div class="zg-logo">
    这是一个zglogoaaaaaa组件
    <img src="../img/img1.png" alt="" />
    <img src="../img/img2.png" alt="" />
  </div>
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
  transform scale3d(0.7,0.7,1)
}
</style>
