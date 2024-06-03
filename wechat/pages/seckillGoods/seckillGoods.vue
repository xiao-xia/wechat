<template>
	<view class="detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
			    <image :src="goodsObj.goodsImage"></image>
			</swiper-item>
			<swiper-item>
				<image :src="goodsObj.goodsImage"></image>
			</swiper-item>
		</swiper>
		<view class="time">
			<view class="title" style="color: #fff;">
				<text style="font-size: 32rpx;">秒杀中</text>
				<text class="cuIcon-titles"></text>
				<text>仅剩{{goodsObj.seckillGoodsStock}}份</text>
			</view>
			<view class="remain">
				<text style="color: #fff;margin-right: 10rpx;">仅剩</text>
				 <view class="show">
				 	<view class="box">
				 		{{timeHour}}
				 	</view>
					<text>:</text>
					<view class="box">
						{{timeMinute}}
					</view>
					<text>:</text>
					<view class="box">
						{{timeSecond}}
					</view>
				 </view>
			</view>
		</view>
	
	     <view class="narrate">
	     	<view style="font-size: 32rpx;font-weight: 700;">
	     		{{goodsObj.goodsName}}
	     	</view>
			<view class="">
				<text style="color:#F86500;font-size: 40rpx;">¥{{goodsObj.goodsSuggestedRetailPrice}}</text>
				<text style="text-decoration: line-through;margin-left: 10rpx;color: #ccc;">¥{{goodsObj.seckillPgetSeckillTimeListrice}}</text>
			</view>
			<view class="share">
				<text class="cuIcon-share lg"></text>
				<text>分享</text>
				<button open-type="share"></button>
			</view>
	     </view>
		 
		 <view class="send">
		 	<text class="cuIcon-goodsfill"></text>
			<text style="margin-left: 20rpx;">现在下单,最早将于为您配送</text>
		 </view>
		 
		 <view class="describle">
		 	商品详情
			<image :src="goodsObj.goodsImage"></image>
		 </view>
		 
	<view class="foot">
	
		<view class="item" @click="goHome">
			<text class="cuIcon-home lg"></text>
			<view class="">
				首页
			</view>
		</view>
			
		 
		    <view class="item" @click="goCart">
			 	<text class="cuIcon-cart lg"></text>
				<view class="">
					购物车
				</view>
				<view class="badge" v-if="flag">
					{{num}}
				</view>
			 </view>
		
			 <view class="pay" @click="payNow">
			 	 {{payMsg}}
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
	import {
		totalNum
	} from '../../API/classificationArr/index';
	import {getId} from '../../API/skeillArr/index.js'
	export default{
		data(){
			return{
				payMsg:'立即购买',
				state:'',
				goodsObj:{},
				finalTime:'',
				timeHour:'00',
				timeMinute:'00',
				timeSecond:'00',
				num:'',
				flag:true
			}
		},
		onLoad(options) {
			console.log(options)
			console.log(JSON.parse(options.goodsObj))
			this.goodsObj=JSON.parse(options.goodsObj)
			this.finalTime=options.goodsFinalTime
			this.id=options.id
			this.state=options.state
			if(this.state=='距开始'){
				this.payMsg='即将开抢'
			}
			this.countDown();
			setInterval(this.countDown,1000);
		},
		onShow() {
			this.getCart()
			this.getDetail()
		},
		computed:{
			...mapState(['unfoin','token','userInfo']),
		},
		methods:{
			countDown(){
				var resultTime=new Date(this.finalTime);
				var resultHms=resultTime.getTime();
				var curTime=new Date();
				var curHms=curTime.getTime();
				if(resultHms-curHms<0){
					var cz=curHms-resultHms
				}else{
					var cz=resultHms-curHms
				}
				var h=Math.floor(cz/1000/60/60%24);
				h=h<10?"0"+h:h;
				this.timeHour=h;
				var m=Math.floor(cz/1000/60%60);
				m=m<10?"0"+m:m;
				this.timeMinute=m;
				var s=Math.floor(cz/1000%60);
				s=s<10?"0"+s:s;
				this.timeSecond=s;
				},
			async getCart(){
				const curAll=await totalNum(this.token);
				console.log(curAll)
				let cartNum = curAll.sum;  //通过后台接口获取
				if(cartNum==null){
					this.flag=false
				}
				this.num=cartNum
			},
			payNow(){
				if(this.state=='距开始'){
					return
				}
				let data={}
				data.goodsName=this.goodsObj.goodsName
				data.count=1
				data.price=this.goodsObj.goodsSuggestedRetailPrice
				data.totalPrice=this.goodsObj.goodsSuggestedRetailPrice
				data.photo=this.goodsObj.goodsImage
				data.id=this.id
				uni.navigateTo({
					//url:'../settle/settle?goodsItem='+JSON.stringify(data)
					url:'../buyGoods/buyGoods?goodsItem='+JSON.stringify(data)
				})
			},
			goCart(){
				uni.switchTab({
					url:'../shopcart/shoppingCart'
				})
			},
			goHome(){
				uni.switchTab({
					url:'../home/home'
				})
			},
			async getDetail(){
				const res=await getId(this.id)
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	swiper{
		width: 100%;
		height: 400rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.time{
		height: 80rpx;
		background-color: red;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.remain{
			display: flex;
			align-items: center;
			.show{
				display: flex;
				align-items: center;
				text{
					color: #fff;
					font-size: 40rpx;
				}
				.box{
					width: 40rpx;
					height: 40rpx;
					background-color: #fff;
					text-align: center;
					line-height: 40rpx;
					color: red;
				}
			}
		}
	}

    .narrate{
		padding: 40rpx 0 20rpx 40rpx;
		background-color: #fff;
		position: relative;
		.share{
			position: absolute;
			width: 120rpx;
			height: 70rpx;
			background-color: #eee;
			color: #aaa;
			bottom: 50rpx;
			right: 0;
			text-align: center;
			border-top-left-radius: 30rpx;
			border-bottom-left-radius: 30rpx;
			line-height: 70rpx;
			button{
				position: absolute;
				opacity: 0;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				
			}
		}
	}

    .send{
		padding: 40rpx;
		background-color: #fff;
		margin: 10rpx 0;
		font-size: 32rpx;
		color: #aaa;
	}
	
	.describle{
		padding: 40rpx 20rpx;
		background-color: #fff;
		image{
			margin-top: 20rpx;
			width: 100%;
		}
	}
	
	.foot{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		border-top: 1px solid #ccc;
		align-items: center;
		background-color: #fff;
		.item{
			text-align: center;
			font-size: 40rpx;
			line-height: 50rpx;
			margin-left: 40rpx;
			position: relative;
			.badge{
				position: absolute;
				background-color: red;
				color: #fff;
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				top:0;
				right: 0;
				text-align: center;
				line-height: 30rpx; 
				font-size: 20rpx;
			}
		}
		.pay{
			width: 300rpx;
			height: 80rpx;
			text-align: center;
			background-color: #FFB101;
			line-height: 80rpx;
			color: #fff;
			font-size: 32rpx;
			border-radius:50rpx;
			margin-left: 200rpx;
		}
	}
</style>
