<template>
	<view>
		<view class="noOrderItem" v-if="evaluateData.length==0">
			<image class="noOrderImg" src="../../../static/personal/evaluate.png" mode="widthFix"></image>
			<view class="noOrderText">您还没填写过评价呢~</view>
			<button class="buttonColor" @click="comments">去评价</button>
		</view> 
		<view class="Specifications" v-for="(item,index) in evaluateData" :key="index">
			<view class="trademark">
				<view class="moreline"></view>
				<view class="trademarkTime">{{item.createTime}}</view>
				<view class="trademarktions">{{item.orderGoodsVo.goodsSpecificationName}}</view>
			</view>
			<view class="evaluateBox">
				<view class="evaluateMove">
					<image style="width: 150rpx;height: 150rpx;" :src="item.orderGoodsVo.goodsSmallImage"></image>
					<view class="evaluatePrice">
						<view style="font-size: 34rpx;color: #333333;">{{item.orderGoodsVo.goodsType}}</view>
						<view style="font-size: 34rpx;color: #666666;margin-top: 20rpx">￥{{item.orderGoodsVo.goodsReceiptsPrice}}</view>
					</view>
					<view style="font-size: 34rpx;color: #333333;">x{{item.orderGoodsVo.goodsNum}}</view>
				</view>
				<view class="Favorable">
					<view style="color: #FE771E; font-size: 26rpx;">综合评分{{item.evaluateStarLevel}}</view>
					<view style="color: #333333; font-size: 26rpx;">{{item.evaluateContent}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getAllEvaluate } from '../../../API/evaluate/index.js'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	export default {
		data() {
			return {
				evaluateData:[],
				// orderStatus:0,
				wholeStatus:'全部',
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getAll()
		},
		computed: {
			...mapState(['unfoin','token','userInfo']),
		},
		methods: {
			async getAll(){
				uni.showLoading({
					title:'加载中'
				})
				const res = await getAllEvaluate(this.token)
				console.log(res)
				uni.hideLoading()
				this.evaluateData = res.data.records
			},
			comments(){
				uni.navigateTo({
					url:'../myolder/whole?orderStatus=' +'&this.orderStatus'+ '&wholeStatus=' +this.wholeStatus
				})
			}
		}
	}
</script>

<style lang="scss">
	.noOrderItem{
		position: absolute;
		top:44%;
		width: 100%;
		transform: translateY(-50%);//元素垂直居中效果
		text-align: center;
		.noOrderImg{
			width: 300rpx;
		}
		.noOrderText{
			font-size: 30rpx;
			color: #999999;
			margin: 0 0 20rpx 0;
		}
		.buttonColor{
			height: 60rpx;
			width: 190rpx;
			border-radius: 30rpx;
			text-align: center;
			line-height: 60rpx;
			color: #FFFFFF;
			font-size: 26rpx;
			background-image: linear-gradient(to right, #1093FE, #55AFF9);
		}
	}
	.Specifications{
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		.trademark{
			width: 100%;
			display: flex;
			padding: 20rpx 20rpx 20rpx 40rpx;
			.moreline{
				width: 4rpx;
				height: 20rpx;
				background-color: #008CFF;
				margin: 12rpx 16rpx 0 -14rpx;
			}
			.trademarkTime{
				font-size: 26rpx;
				color: #999999;
			}
			.trademarktions{
				font-size: 26rpx;
				color: #999999;
				margin-left: 20rpx;
			}
		}
		.evaluateBox{
			width: 100%;
			background-color: #F9F9F9;
			.evaluateMove{
				display: flex;
				padding: 20rpx 0 20rpx 40rpx;
				.evaluatePrice{
					width: 65%;
					margin-left: 26rpx;
				}
			}
			.Favorable{
				width: 100%;
				background-color: #FFFFFF;
				padding: 20rpx 0 20rpx 40rpx;
			}
		}
	}
</style>
