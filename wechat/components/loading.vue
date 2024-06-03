<template>
	<view class="loadingPage" >
		<view class="action" >
			<view class="cu-load load-icon loading loadingIcon"></view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name: 'loading',
		data() {
			return {

			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.loadingPage {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		z-index: 999999999999999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.loadingHide {
		display: none;
	}
	.loadingIcon {
		color: var(--globalColor);
	}
</style>
