<template>
	<div class="crootbox">
		<v-anchor :list=list>
			<template v-slot>
				<div>
					<div id="anchor-1">
						<img src="@/assets/images/details1.jpg" width="100%" alt="">
						<img src="@/assets/images/details2.jpg" width="100%" alt="">
						<img src="@/assets/images/details3.jpg" width="100%" alt="">
					</div>
					<div id="anchor-2">
						<img src="@/assets/images/details4.jpg" width="100%" alt="">
						<img src="@/assets/images/details5.jpg" width="100%" alt="">
					</div>
					<p id="anchor-3"></p>
					<img src="@/assets/images/details6.jpg" width="100%" alt="">
					<img src="@/assets/images/details7.jpg" width="100%" alt="">
					<p id="anchor-4"></p>
					<img src="@/assets/images/details8.jpg" width="100%" alt="">
					<img src="@/assets/images/details9.jpg" width="100%" alt="">
				</div>
			</template>
		</v-anchor>
	</div>
</template>

<script>
  import Vanchor from '@/views/product/v_anchor.vue'
	export default {
		name: "prd-details",
		components: { 
      [Vanchor.name]: Vanchor,
		},
		data() {
			return {
				list: [
          {index: 1, name: '商品介绍'},
          {index: 2, name: '规格参数'},
          {index: 3, name: '包装参数'},
          {index: 4, name: '保障生命'},
        ]
			}
		},
	}
</script>

<style lang="scss" scoped>
	.crootbox {
    background-color: $gray-2;
  }
</style>