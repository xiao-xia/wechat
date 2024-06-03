<template>
	<view class="addressItem" >
		<view class="addressBlock"  @tap="selectEvent">
			<view class="leftBlock" v-if="address">
				<view class="leftTop">
					<view class="tag">
						{{address.addressTag}}
					</view>
					<view class="address">
						{{address.receiverRegion}}
						<text style="margin: 0 10rpx;">-</text>
						{{address.receiverCell}}
						<text style="margin: 0 10rpx;">-</text>
						{{address.receiverDetail}}
					</view>
				</view>
				<view class="leftCenter">
					<view class="name">
						{{address.receiverName}}{{address.receiverSex}}
					</view>
					<view class="phone">
						{{address.receiverTel}}
					</view>
				</view>
				<!-- <view class="leftBottom">
					<view class="businessTitle">
						配送时间：
					</view>
					<view class="business">
						2020.03.04~2020.03.28
					</view>
				</view> -->
			</view>
			<view class="leftBlockNo" v-else>
				选择收货地址 <text class="cuIcon-right writeIcon"></text>
			</view>
			<view class="cuIcon-right writeIcon" v-if="address"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'orderAddress',
		props: {
			address: {
				type:Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			selectEvent() {
				console.log(this.address)
				this.$emit('selectAddress')
			}
		}
	}
</script>

<style lang="scss">
	.addressItem {
		margin-top: 10rpx;
		background-color: #fff;
		padding: 0 30rpx;
		width: 100%;
		
		.defaultTitle {
			// padding: 0 20rpx;
			color: var(--globalColor);
			font-size: 30rpx;
		}
		.addressBlock {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 26rpx 30rpx;
			border-bottom: 1rpx solid #F4F2F2;
			
			.leftBlockNo {
				font-size: 36rpx;
				line-height: 60rpx;
				color: #8f8f8f;
			}
			
			.leftBlock {
				width: 85%;
				.leftTop {
					display: flex;
					align-items: center;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					.tag {
						font-size: 24rpx;
						line-height: 24rpx;
						height: 44rpx;
						width:auto;
						color: #fff;
						padding: 12rpx;
						background-color: var(--globalColor);
						border-radius: 22rpx;
					}
					.address {
						font-size: 32rpx;
						color: #101010;
						margin-left: 6rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				.leftCenter {
					display: flex;
					align-items: center;
					
					.name {
						font-size: 24rpx;
						color: #888888;
						line-height: 45rpx;
					}
					
					.phone {
						font-size: 24rpx;
						color: #888888;
						line-height: 45rpx;
						margin-left: 44rpx;
					}
				}
				.leftBottom {
					display: flex;
					align-items: center;
					
					.businessTitle {
						font-size: 30rpx;
						color: #101010;
						line-height: 45rpx;
					}
					.business {
						font-size: 30rpx;
						color: #E80A0A;
						line-height: 45rpx;
						margin-left: 44rpx;
					}
				}
			}
			.writeIcon {
				color: #888888;
				font-size: 30rpx;
			}
		}
	}
</style>
