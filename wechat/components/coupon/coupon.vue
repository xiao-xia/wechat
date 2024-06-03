<template>
	<view class="VoucherBack" >
			<view class="VoucherMove" v-for="(item,index) in 2" :key="index">
				<view>
					<view class="VoucherBox">
						<view class="VoucherPrice">
							<view class="voucherCoupon">￥</view>
							<view class="fullPrice">20</view>
						</view>
						<view class="priceBack">
							<view class="voucherMOre">抵用券</view>
							<view class="voucherfull">满100元可用</view>
						</view>
					</view>
					<view style="color: #fff;font-size: 20rpx;margin-top: -40rpx;
	padding-bottom: 20rpx;">有效日期：2019.12.12-2020.01.12</view>
				</view>
				
				<view class="ge"></view>
				<view class="immediately" @click="goUse()">
					立即使用
				</view>
			</view>	
		</view>
</template>

<script>
	export default {
		name: 'Coupon',
		data() {
			return {
				
			};
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
		},
		methods:{
			goUse(){
				uni.navigateTo({
					url:'@/pages/classification/goodsClassify'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.VoucherBack{
		width: 100%;
		padding: 0 20rpx 20rpx 20rpx;
		.VoucherMove{
			background-image: linear-gradient(to right, #3775FE, #3775FE);
			box-shadow: 0 10rpx 10rpx #ABCAFB;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-radius: 10rpx;
			margin-top: 20rpx;
			.VoucherBox{
				display: flex;
				align-items: center;
				.VoucherPrice{
					display: flex;
					.voucherCoupon{
						color: #FFFFFF;
						margin-top: 30rpx;
					}
					.fullPrice{
						color: #FFFFFF;
						font-size: 100rpx;
					}
				}
				.priceBack{
					margin-left: 30rpx;
					.voucherMOre{
						font-size: 40rpx;
						color: #fff;
					}
					.voucherfull{
						font-size: 28rpx;
						color: #fff;
						margin-top: -15rpx;
					}
				}
			}
			.ge{
				height: 150rpx;
				width: 10rpx;
				border-left: 1px #FFFFFF dashed;
			}
			.immediately{
				font-size: 34rpx;
				width: 13%;
				color: #fff;
			}
		}
	}
</style>
