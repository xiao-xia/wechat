<template>
	<view class="container">
		<view class="orderCompleted">
			<view class="complete">本次订单已完成</view>
			<view class="evaluate">请对本商品进行评价</view>
			<!-- <view class="evaluateOrder">
				<view class="favorableBox" v-for="(item,index) in favorData" :key="index" @tap="selectState(index,item)">
					<image class="favorableImg" :src="item.banner"></image>
					<view class="favorableWord">{{item.favorName}}</view>
				</view>
			</view> -->
			<view class="attitude">
				<rate @change="onChange"></rate>
			</view>
		</view>
		<view class="textItemBox">
			<view class="textItem">
				<textarea class="textarea" v-model="formList.evaluateContent" placeholder="请评价商品" />
				<button class="buttonColor" @tap="pickUp()">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	import rate from '../../../components/rate.vue'//星
	import { createEvaluate } from '../../../API/evaluate/index.js'
	export default {
		components:{
		  rate
		},
		data() {
			return {
				evaluateContent:'',
				formList:{},
				evaluateStarLevel:'',
				favorData: [],
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad(options) {
			console.log(options)
			this.orderCode = options.orderCode
			this.orderId = options.orderId
			this.orderGoodsId = options.orderGoodsId
			this.lastOne = options.lastOne
		},
		onShow() {
			
		},
		methods: {
			onChange(d){
				console.log(d)
				this.evaluateStarLevel = d.value
				console.log(this.evaluateStarLevel)
			},
			async pickUp() {
				if(!this.evaluateStarLevel){
					uni.showToast({
						title:'请对商品进行星级评价',
						icon:'none'
					})
					return
				}else if(!this.formList.evaluateContent){
					uni.showToast({
						title:'请评价商品',
						icon:'none'
					})
					return
				}
				console.log(this.formList)
					const res = await createEvaluate(
						this.token,
						this.orderCode,
						this.orderId,
						this.evaluateStarLevel,
						this.formList.evaluateContent,
						this.orderGoodsId,
						this.lastOne,
					);
					if(res) {
						console.log(res)
						if(res.data=="评价提交成功") {
							uni.showToast({
								title: "评价提交成功!",
								icon: 'success'
							})
							// uni.reLaunch({
							// 	url: 'address'
							// })
							setTimeout(() => {
								uni.navigateBack({//返回上一级
									delta: 1
								})
							},1000)
						}else {
							showToast('修改失败')
						}
					}else {
						showToast('服务器错误')
					}
				
			},
	
		
			
		}
	}
</script>

<style lang="scss">
	.container{
		.orderCompleted{
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 20rpx;
			.complete{
				color: #333333;
				font-weight: bold;
				font-size: 34rpx;
				margin-top: 10rpx;
			}
			.evaluate{
				color: #CCCCCC;
				font-size: 25rpx;
			}
			.evaluateOrder{
				display: flex;
				width: 100%;
				justify-content: space-around;
				margin-top: 20rpx;
				.favorableBox{
					display: flex;
					.favorableImg{
						width: 36rpx;
						height: 36rpx
					}
					.favorableWord{
						color: #F54830;
						font-size: 26rpx;
						margin: -4rpx 0 0 10rpx;
					}
				}
				.mediumBox{
					display: flex;
					.mediumImg{
						width: 36rpx;
						height: 36rpx
					}
					.mediumWord{
						color: #F54830;
						font-size: 26rpx;
						margin: -4rpx 0 0 10rpx;
					}
				}
				.negativeBox{
					display: flex;
					.negativeImg{
						width: 36rpx;
						height: 36rpx
					}
					.mnegativeWord{
						color: #F54830;
						font-size: 26rpx;
						margin: -4rpx 0 0 10rpx;
					}
				}
			}
			.attitude{
				display: flex;
				margin: 10rpx 0 10rpx 0;
			}
		}
		.textItemBox{
			margin: 20rpx;
			.textItem {
				width: 100%;
				height: 84%;
				background-color: #fff;
				padding: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				.textarea{
					height: 260rpx;
					width: 660rpx;
					border:1px solid #CCCCCC;
					font-size: 28rpx;
					line-height: 40rpx;
					padding: 20rpx;
				}
				.buttonColor{
					height: 80rpx;
					width: 630rpx;
					border-radius: 50rpx;
					text-align: center;
					line-height: 80rpx;
					color: #FFFFFF;
					background-image: linear-gradient(to right, #1093FE, #55AFF9);
					font-size: 34rpx;
					margin-top: 40rpx;

				}
			}
			
		}
		
	}
</style>
