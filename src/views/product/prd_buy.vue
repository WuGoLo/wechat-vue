<template>
  <div>
    <img src="" alt="">
    <div class="specification">
      <div>
        <p>Raxwell 一次性防护口罩，医疗级溶喷布过滤层</p>
        <div>
          <van-tag plain type="danger">标签</van-tag>
          <span class="price unit">￥249.00</span>
          <span class="price">/ 盒</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tag } from 'vant';
export default {
  name: 'prd-buy',
  components: {
    [Tag.name]: Tag,
  },
  data() {
    return {
      active: 2
    };
  }
};
</script>

<style lang="scss" scoped>
  .specification {
    margin: 0.1rem;
    .price {
      font-size: 0.12rem;
      margin-left: 0.06rem;
    }
    .unit {
      color: $red;

    }
  }
</style>