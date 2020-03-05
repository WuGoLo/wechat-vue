<template>
 	<div class="anchor-box">
		<div class="anchor-nav">
			<a 
				href="javascript:void(0)" 
				rel="external nofollow" 
				@click="goAnchor('#anchor-'+item.index, item.index)"
				v-for="item in list" 
				:key="item.index"
				:class="item.index == activeClass ? 'active' : ''"
			>
				{{item.name}}
			</a>
		</div>
		<div class="anchor-content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'v-anchor',
	props: {
		list: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	data(){
		return {
			activeClass: 1,
		}
	},
	methods: {
		goAnchor(selector, index) {
			this.activeClass = index;
			var anchor = this.$el.querySelector(selector)
			var content = this.$el.querySelector('.anchor-content')
			document.documentElement.scrollTop = anchor.offsetTop - content.offsetTop
		}
	}
}
</script>
<style lang="scss" scoped>
	.anchor-box {
		overflow: hidden;
	}
	.anchor-nav {
		width: 100%;
		height: 0.4rem;
		line-height: 0.4rem;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		margin-bottom: 0.1rem;
		position: fixed;
		a {
			color: $gray-8;
			font-size: 0.14rem;
			text-align: center;
			display: inline-block;
			flex: 1;
			&.active {
				color: $green;
			}
		}
	}
	.anchor-content {
		margin-top: 0.5rem;
	}
</style>