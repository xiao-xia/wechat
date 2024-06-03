<template>
	<view class="" v-if="pageShow">
		<view class="message">
			<view class="first">
				订单信息
			</view>
			<view class="theme">
				订单编号:{{messageObj.orderCode}}<text class="copy">复制</text> 
			</view>
			<view class="theme">
				下单时间:{{messageObj.createTime}}
			</view>
			<view class="theme" >
				支付时间:{{messageObj.updateTime}}
			</view>
		</view>
		<view class="goods">
			<text>商品</text>
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
			<view class="item">
				<view class="left" >
					配送费
				</view>
				<view class="right" >
					¥0
				</view>
			</view>
			<view class="item">
				<view class="left" style="font-size: 32rpx;">
					合计
				</view>
				<view class="right" style="font-size: 32rpx;">
					<text>¥{{messageObj.orderPrice}}</text>
				</view>
			</view>
			
			<view class="reason">
				申请理由：
				<picker @change="bindPickerChange" :value="index" :range="reasonArr">
					<view class="choose">
						<text v-if="index==-1">
							请选择退款理由
						</text>
						<text v-else>
							{{reasonArr[index]}}
						</text> 
						<text class="cuIcon-triangledownfill"></text>
					</view>
				</picker>
			</view>
			
			<view class="submit" @click="goSubmit">
				提交申请
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
				reasonArr:['不想要了','不能按预期时间送达','买错了','价格太贵','重复下单',
				'收货人有误','其他'],
				index:-1
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
			},
			bindPickerChange(e){
				 this.index = e.target.value
			},
		async	goSubmit(){
			if(this.index==-1){
				uni.showToast({
					title:'请选择退款理由',
					icon:'none'
				})
			}else{
				const res=await refund(this.token,this.reasonArr[this.index],this.messageObj.orderCode,this.messageObj.totalGoodsPrice)
				console.log(res)
				if(res){
					uni.redirectTo({
						url:'./detail?id='+this.detailId
					})
				}
			}
			}
		}
	}
</script>

<style lang="scss">
	.message{
		padding: 20rpx;
		background-color: #FFFFFF;
		.first{
			font-size: 32rpx;
		}
		.theme{
			margin-bottom: 10rpx;
			color: #aaa;
			.copy{
				display: inline-block;
				color:var(--button);
				border: 1px solid var(--button);
				margin-left: 20rpx;
				font-size: 20rpx;
				width: 50rpx;
				text-align: center;
			}
		}
	}
	.goods{
		margin-top: 20rpx;
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
			.typebox{
				width: 500rpx;
				display: flex;
				justify-content: space-between;
			}
		}
		.button{
			display: flex;
			margin-top: 20rpx;
			justify-content: flex-end;
			view{
				border: 1px solid #EEEEEE;
				font-size: 24rpx;
				border-radius: 40rpx;
				width: 150rpx;
				text-align: center;
			}
			.cart{
				margin-right: 20rpx;
			}
		}
	}
	.totalbox{
		background-color: #FFFFFF;
		padding: 40rpx 20rpx 20rpx;
		margin-bottom: 20rpx;
		.item{
			display: flex;
			justify-content: space-between;
			font-size:24rpx ;
			text{
				color: red;
			}
		}
	}

    .reason{
		display: flex;
		margin-top: 40rpx;
		.choose{
			display: flex;
			justify-content: space-between;
			border: 1px solid #ccc;
			width: 500rpx;
			color: #ccc;
		}
	}
	
	.submit{
		text-align: center;
		width: 300rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		margin: 60rpx auto 0;
		background-color: var(--button);
		color: #fff;
		border-radius: 20rpx;
	}
</style>
