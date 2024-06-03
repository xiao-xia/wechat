<template>
	<view class="goodItem">
		<view class="goodBlock" v-for="(good,index) in goodList" :key="index">
			<image class="goodImg" src="../../static/mine/purse.png" mode=""></image>
			<view class="goodInfo">
				<view class="goodInfoName">
					<view class="goodInfoText">{{good.goodInfo.goodsName}}</view>
					<view class="goodInfoNum">x{{good.mealData.num + good.mealData.give}}</view>
					<view class="goodInfoPrice">
						￥{{good.goodInfo.finalPrice}}
					</view>
				</view>
				<view class="goodInfoBlock">
					<view class="blockTitle">配送日期</view>：
					<view class="blockText">{{good.startDate}}~{{good.endDate}}</view>
				</view>
				<view class="goodInfoBlock">
					<view class="blockTitle">配送方式</view>：
					<view class="pickerView" v-if="pickerShow">
						<picker @change="bindPickerChange($event,'mode',index)" :value="modeIndex" :range="modeArray">
							<view class="picker">
								{{good.mode}}
								<text style="margin-left: 10rpx;" class="cuIcon-unfold"></text>
							</view>
						</picker>
					</view>
				</view>
				<view class="goodInfoBlock">
					<view class="blockTitle">配送时间段</view>：
					<view class="pickerView" v-if="pickerShow">
						<picker @change="bindPickerChange($event,'time',index)" :value="timeIndex" :range="timeArray">
							<view class="picker">
								{{good.timeSlot}}
								<text style="margin-left: 10rpx;" class="cuIcon-unfold"></text>
							</view>
						</picker>
					</view>
				</view>
				<view class="goodInfoBlock">
					<view class="blockTitle">配送商</view>：
					<view class="blockText">XXXXXXXXX</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: 'orderGood',
		props: {
			goodList: {
				type: Array,
				default() {
					return []
				}
			},
			timeArray: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				list: [],
				modeArray: ['每日配送', '单次送', '工作日配送', '自提'],
				modeIndex: 0,
				// timeArray: ['晨配：06:30~07:00', 
				// 			'晨配：07:00~07:30',
				// 			'晨配：07:30~08:00', 
				// 			'晚配：18:00~18:30',
				// 			'晚配：18:30~19:00',
				// 			'晚配：19:00~19:30',
				// 			'晚配：19:30~20:00',],
				timeIndex: 0,
				pickerShow: true,
			};
		},
		methods: {
			bindPickerChange(e,type,index) {
				if(type == 'mode') {
					this.modeIndex = e.target.value;
					this.$emit('pickerChange',type,this.modeArray[this.modeIndex],index)
				}else {
					this.timeIndex = e.target.value;
					this.$emit('pickerChange',type,this.timeIndex,index)
				}
			},
			
		},
	}
</script>

<style lang="scss">
	.goodItem {
		width: 100%;
		margin-top: 10rpx;
		background-color: #fff;
		
		.goodBlock {
			padding: 15rpx 30rpx 26rpx;
			width: 100%;
			display: flex;
			
			.goodImg {
				width: 240rpx;
				height: 240rpx;
			}
			
			.goodInfo {
				width: calc(100% - 260rpx);
				margin-left: 20rpx;
				
				.goodInfoName {
					width: 100%;
					display: flex;
					justify-content: space-between;
					
					.goodInfoText {
						width: 60%;
						font-size: 32rpx;
						color: #101010;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						line-height: 50rpx;
					}
					.goodInfoPrice {
						color: #FF9601;
						font-size: 28rpx;
						line-height: 50rpx;
					}
					.goodInfoNum {
						line-height: 50rpx;
						color: #a8a8a8;
						font-size: 22rpx;
					}
				}
				
				.goodInfoBlock {
					width: 100%;
					display: flex;
					padding: 5rpx 0;
					height: 46rpx;
					
					.blockTitle {
						min-width: 120rpx;
						text-align: justify;
						text-align-last: justify;
						font-size: 24rpx;
						color: #6F7070;
					}
					.blockText {
						font-size: 24rpx;
						color: #6F7070;
					}
					
					.pickerView {
						max-width: calc(100% - 120rpx);
						border: 1rpx solid #BBBBBB;
						padding-right: 10rpx;
						border-radius: 10rpx;
						display: flex;
						line-height: 36rpx;
						font-size: 24rpx;
						color: #6F7070;
						
						.picker {
							width: 100%;
							margin: 5rpx 10rpx;
							line-height: 36rpx;
							font-size: 22rpx;
							color: #6F7070;
							white-space: nowrap;
							overflow: hidden;
						}
					}
				}
			}
		}
		
	}
</style>
