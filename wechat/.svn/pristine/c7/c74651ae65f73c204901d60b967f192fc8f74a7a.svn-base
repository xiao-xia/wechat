<template>
	<view class="container">
		<view class="head">
				<view class="up">
					订单配送中
				</view>
				<view class="down">
					<view class="btn" @click="another">
						再来一单
					</view>

					<view class="customer">
						客服
						<button  open-type="contact" class="service">
						</button>
					</view>
					
				</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				timeMinute:'00',
				timeSecond:'00',
				interval:'',
				//isShow:true
			}
		},
		props:['goodsArr'],
		created() {
		},
		mounted() {
		},
		methods:{
			another(){
				uni.navigateTo({
						url:'../../pages/settle/settle?goodsArr='+JSON.stringify(this.goodsArr)
				})
			}
		}
    }
</script>

<style lang="scss" scoped>
	.head{
		padding: 40rpx 220rpx 20rpx;
		background-color: #fff;
		margin-bottom: 20rpx;
		.up{
			font-size: 32rpx;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.down{
			display: flex;
			justify-content: space-between;
			.btn{
				width: 140rpx;
				height: 50rpx;
				border: 1px solid #ccc;
				text-align: center;
				line-height: 50rpx;
				border-radius: 10rpx;
			}
		}
	}
	.customer{
		position: relative;
		width: 140rpx;
		height: 50rpx;
		border: 1px solid #ccc;
		text-align: center;
		line-height: 50rpx;
		border-radius: 10rpx;
		.service{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
		}
	}
</style>
