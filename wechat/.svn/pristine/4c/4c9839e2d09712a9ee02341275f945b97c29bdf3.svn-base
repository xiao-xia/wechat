<template>
	<view class="" v-if="pageShow">
		<view class="">
			<view class="topBg">
				<view class="" style="text-align: center;font-size: 32rpx;">
					订单退款中
				</view>
				<view class="service">
					客服
				</view>
			</view>
			
			<view class="reason">
				<view class="">
					申请理由：{{messageObj.refundReason}}
				</view>
				<view class="">
					
				</view>
			</view>
			
			<view class="goods">
				<text>退款商品</text>
				<view class="discrible" v-for="(item,index) in goodsArr" :key='index'>
				    <view class="photo">
						<image :src='item.goodsSmallImage' mode=""></image>
				    </view>
					<view class="type">
						<view class="typebox">
							<view>
								<view class="type" >
									{{item.goodsName}}
								</view>
								<view class="money" >
									¥{{item.goodsPrice}}
								</view>
							</view>
							<view class="number" >
								x{{item.orderCount}}
							</view>
						</view>
					</view>
				</view>
				
				<view class="totalbox">
						<view class="item">
							<view class="left">
								商品总价
							</view>
							<view class="right">
								¥{{messageObj.totalGoodsPrice}}
							</view>
						</view>
						<view class="item ">
							<view class="left" >
								优惠券
							</view>
							<view class="right" >
								¥0
							</view>
						</view>
					<!--	<view class="item">
							<view class="left" >
								配送费
							</view>
							<view class="right" >
								¥0
							</view>
						</view> -->
						<view class="item">
							<view class="left" style="font-size: 32rpx;">
								退款金额合计
							</view>
							<view class="right" style="font-size: 32rpx;">
								<text>¥{{messageObj.orderPrice}}</text>
							</view>
						</view>	
					</view>
				</view>
			</view>
	
	        <view class="" style="padding: 20rpx;background-color: #fff;margin-top: 20rpx;">
	        	<view class="">
	        		订单信息
	        	</view>
				<view class="">
					退款订单编号：{{messageObj.orderCode}}
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
	import {getDetail} from '../../API/skedetail/index.js'
	import {refund}  from '../../API/orderDetail/index.js'
	export default {
		data() {
			return {
				pageShow:false,
				messageObj:{},
				goodsArr:[],
				detailId:''
			}
		},
		computed: {
			...mapState(['token','openId','userInfo']),
		},
		onLoad(options) {
			console.log(options)
			this.detailId=options.id
		},
		onShow() {
			this.getDetails()
		},
		methods:{
			async getDetails(){
				uni.showLoading({
					title:'加载中'
				})
				const res = await getDetail(this.token,this.detailId);
				console.log(res);
				if(res){
					uni.hideLoading()
					this.messageObj=res.data.data;
					this.goodsArr=res.data.goods;
					this.pageShow=true
				}
			}
	    }
	}
</script>

<style lang="scss">
	.topBg{
		background-color: #fff;
		padding: 40rpx 0;
		.service{
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			line-height: 50rpx;
			margin: 20rpx auto;
			border-radius: 1px solid #ccc;
			border: 1px solid #ccc;
		}
	}
	.reason{
		padding: 20rpx;
		background-color: #fff;
		margin: 20rpx 0;
	}
	.goods{
		border-bottom: 1px solid #eee;
		background-color: #FFFFFF;
		padding: 40rpx 20rpx;
		.discrible{
			display: flex;
			width: 100%;
			margin-bottom: 20rpx;
			.photo{
				width: 150rpx;
				height: 150rpx;
				margin-right: 30rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.totalbox{
			background-color: #FFFFFF;
			padding: 40rpx 0 0;
			border-top:1px solid #ccc;
			.item{
				display: flex;
				justify-content: space-between;
				font-size:24rpx ;
				text{
					color: red;
				}
			}
		}
	}
</style>
