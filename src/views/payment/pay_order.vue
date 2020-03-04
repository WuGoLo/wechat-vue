<template>
  <div class="home">
    <div class="header">
      <van-icon name="arrow-left" />
    </div>
    <div class="address">
    </div>
    <div class="address">

    </div>
    <div class="address">

    </div>
  </div>
</template>

<script>
import { Icon, } from 'vant';
	export default {
        components: { 
            [Icon.name]: Icon,
        }
	}
</script>
<style lang="scss">
$bg-color: #ffffff;
  .header{
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;
  }
  .address{
    width: 100%;
    height: 1.5rem;
    background: #ff6c01;
    margin-bottom: 0.1rem; 
  }

</style>
