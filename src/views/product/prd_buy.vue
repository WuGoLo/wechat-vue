<template>
  <div class="crootbox">
    <img src="@/assets/images/product.jpg" alt="" width="100%">
    <div class="specification">
      <div class="slogan">
        <p>Raxwell 一次性防护口罩，医疗级溶喷布过滤层</p>
        <p>
          <van-tag plain type="danger">标签</van-tag>
          <span class="price unit">￥249.00</span>
          <span class="price">/ 盒</span>
        </p>
      </div>
      <div class="d-list">
        <ul>
          <li>品牌型号: </li>
          <li>订货号: </li>
          <li>最小起订量: </li>
          <li>预计出货日: </li>
        </ul>
      </div>
    </div>
    <div class="discounts">
      <span>服务</span>
      <span>由西域仓和西域优质供应商发货，全场满300包邮</span>
    </div>
    <div class="discounts condition">
      <span><van-icon name="warning-o" style="margin-top: 0.01rem;"/></span>
      <span>不支持7天无理由退换</span>
    </div>
  </div>
</template>

<script>
import { Tag, Icon } from 'vant';
export default {
  name: 'prd-buy',
  components: {
    [Tag.name]: Tag,
    [Icon.name]: Icon,
  },
  data() {
    return {
      active: 2,
    };
  }
};
</script>

<style lang="scss" scoped>
  $litter_font_size: 0.1rem;
  .crootbox {
    background-color: $gray-2;
    img {
      // padding: 0.1rem 0;
      background-color: #fff;
      margin-bottom: 0.04rem;
    }
  }
  .specification {
    padding: 0.1rem;
    background-color: #fff;
    overflow: hidden;
    .slogan {
      border-bottom: 1px solid $gray-5;
    }
    p {
      padding-bottom: 0.1rem;
    }
    .price {
      font-size: 0.12rem;
      margin-left: 0.06rem;
    }
    .unit {
      color: $red;
      font-weight: $font-weight-semibold;
    }
    .d-list {
      margin: 0.1rem 0;
      li {
        color: $gray-6;
        font-size: $litter_font_size;
        margin: 0.06rem 0;
      }
    }
  }
  .discounts {
    padding: 0.2rem 0.1rem;
    margin-top: 0.06rem;
    width: 100%;
    background-color: #fff;
    font-size: $litter_font_size;
    span {
      display:inline-block;
      margin-right: 0.06rem;
    }
    span:last-child {
      color: $gray-6;
    }
  }
  .condition {
    height: 0.16rem;
    line-height: 0.20rem;
    margin-bottom: 0.06rem;
    span:first-child {
      color: $gray-6;
      font-size: 0.16rem;
    }
    span:last-child {
      color: $gray-8;
      vertical-align: top;
    }
  }
</style>