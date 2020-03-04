<template>
    <div>
		<p class="wen">默认按钮</p>
      <van-button>默认按钮</van-button>
    </div>
</template>

<script>
import { Button } from 'vant';
	export default {
		components: { 
			[Button.name]: Button
		}
	}
</script>

<style lang="scss" scoped>
	.wen {
		font-size: 0.14rem;
	}
</style>