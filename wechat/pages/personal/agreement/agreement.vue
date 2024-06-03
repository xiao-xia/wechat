<template>
	<view class="paltItem">
		<view class="userItem" v-for="(item,index) in PlatData" :key="index" >
			<view class="textContent">{{item.content}}</view>
		</view>
		
	</view>
</template>

<script>
	import {getPlatform} from '../../../API/agreement/index.js';
	export default {
		data() {
			return {
				PlatData:[],
				platformType:'用户协议'
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getPlat()
		},
		onHide() {
		},
		methods: {
			async getPlat(){
				console.log(this.platformType)
				const res=await getPlatform(this.platformType);
				this.PlatData = res.data;
				console.log(this.PlatData)
			},
		}
	}
</script>

<style lang="scss">
	.paltItem {
		width: 100%;
		height: 84%;
		padding: 20rpx;
		background-color: #fff;
		.userItem{
			height: 96vh;
			width: 100%;
			// background-color: #fff;
			border:1px solid #CCCCCC;
			.textContent{
				font-size: 28rpx;
				line-height: 40rpx;
				padding: 20rpx;
			}
		}
	}	
	
		
</style>
