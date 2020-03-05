<template>
  <div class="home">
    <div class="header">
      <van-tabs bind:click="onClick" sticky>
        <van-tab title="商品">
          <prd-buy></prd-buy>
        </van-tab>
        <van-tab title="详情">
          <prd-details></prd-details>
        </van-tab>
      </van-tabs>
    </div>
    <div class="purchase-box">
      <van-stepper v-model="value" input-width="0.8rem" button-size="0.46rem"/>
      <van-button type="primary" size="large" class="btn">立即购买</van-button>
    </div>
  </div>
</template>

<script>
  import { Tabs, Tab, Stepper, Button } from 'vant';
  import ProBuy from '@/views/product/prd_buy.vue'
  import ProDetails from '@/views/product/prd_details.vue'
	export default {
		components: { 
      [Tabs.name]: Tabs,
      [Tab.name]: Tab,
      [ProBuy.name]: ProBuy,
      [ProDetails.name]: ProDetails,
      [Stepper.name]: Stepper,
      [Button.name]: Button,
    },
    data() {
      return {
        value: 1,
      }
    }
	}
</script>
<style lang="scss">
$bg-color: #ffffff;
  .header{
    width: 100%;
    overflow: hidden;
  }
  .van-tabs--line .van-tabs__wrap {
    height: 0.45rem;
  }
  .van-sticky {
    background-color: $gray-2;
    padding-bottom: 0.1rem;
  }
  .van-tabs__line {
    background-color: #04b164;
  }
  .van-tab__text {
    font-size: 0.17rem;
    font-weight: 600;
  }
  .van-tab {
    color: #ababab;
  }
  .van-tab--active {
    color: #333333;
  }
  .van-tabs__content{
    background: $gray-2;
  }
  .purchase-box {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.06rem 0.1rem;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    .van-stepper {
      flex: 1;
      width: 50%;
    }
    .van-button {
      width: 50%;
      .btn {
        border-radius: 0;
        height: 0.46rem;
      }
    }
    .van-button--large {
      height: 0.46rem;
      line-height: 0.44rem;
    }
  }
</style>
