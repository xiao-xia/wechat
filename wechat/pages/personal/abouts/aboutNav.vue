<template>
	<view class="navbar">
		<!-- 状态栏 -->
		<view :style="{height:statusBarHeight+'px'}"></view>
		<!-- 导航栏内容 -->
		<view class="navbarPerson" :style="{paddingTop:navBarHeight+'px'}">
			<view class="navbarText">关于我们</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45
			};
		},
		created() {//组件加载时执行
			const info = uni.getSystemInfoSync()
			
			//获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo);
			//胶囊底部 - 状态栏的高度 + (胶囊顶部高度 - 状态栏的高度) = 导航栏的高度
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
		}
	}
</script>

<style lang="scss">
	.navbar{
		width: 100%;
		height:45rpx;
		position: absolute;
		top: 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		// padding: 0 15rpx;
		.navbarPerson{
			width: 120rpx;
			height: 30rpx;
			
			color: #fff;
			display: flex;
			justify-content: center;

			.navbarText{
				font-size: 12px;
				color: #fff;
			}
		}
	}
</style>
