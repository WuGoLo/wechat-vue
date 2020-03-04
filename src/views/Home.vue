<template>
  <div class="home">
    <div class="header">
      <van-tabs bind:click="onClick">
        <van-tab title="商品">内容1</van-tab>
        <van-tab title="详情">内容2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vant';
	export default {
		components: { 
      [Tabs.name]: Tabs,
      [Tab.name]: Tab,
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
    margin-top: 0.1rem;
    background: $bg-color;
  }

</style>
