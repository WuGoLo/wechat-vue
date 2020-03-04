<template>
  <div>
    <van-tabs v-model="active">
			<van-tab title="标签 1">内容 1</van-tab>
			<van-tab title="标签 2">内容 2</van-tab>
		</van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
  components: {
		[Tab.name]: Tab,
		[Tabs.name]: Tabs
	},
	data() {
    return {
      active: 2
    };
  }
};
</script>

<style lang="scss" scoped>

</style>