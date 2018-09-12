<template>
  <div id="app">
    <HerosTop/>
    <div class="container-fluid">
      <div class="row">
        <HerosSide/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import HerosTop from '@/components/HerosTop.vue';
import HerosSide from '@/components/HerosSide.vue';
export default {
  components: {
    HerosTop,
    HerosSide
  }
};
</script>

<style scoped>
/* 只要加了这个属性：这个文件中的样式会有自己的作用域 */

</style>
