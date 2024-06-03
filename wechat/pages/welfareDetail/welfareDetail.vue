<template>
	<view class="container" v-if="pageShow">
		<view class="seller">
			<view class="people">
				<image :src="goodsObj.avatarUrl" mode=""></image>
				<view class="">
					<view class="">
						{{goodsObj.linkmanName}}
					</view>
					<view class="">
						{{goodsObj.createTime}} 发布
					</view>
				</view>
			</view>
			<view class="contact" @click="call">
				联系卖家
			</view>
		</view>
	
	    <view class="detail">
	    	<view class="item" style="font-size: 40rpx;color: #F86500;">
	    		¥{{goodsObj.productPrice}}
	    	</view>
			<view class="item">
				发货地址:{{goodsObj.linkmanAddress}}
			</view>
			<view class="item" style="border-bottom: 1px solid #ccc;">
				{{goodsObj.productDescribe}}
			</view>
			<image :src="item" v-for="(item,index) in  goodsObj.DetailPicArr" :key="index"></image>
	    </view>
	</view>
</template>

<script>
	import {
		detail
	} from '../../API/welfareArr/index.js'
	export default{
		data(){
			return{
				pageShow:false,
				goodsId:'',
				goodsObj:'',
				sellerImg:'',
				productDetailPic:''
			}
		},
		onLoad(options) {
			console.log(options.id)
			this.goodsId=options.id
		},
		onShow() {
			this.getDetail()
		},
		methods:{
		async getDetail(){
				uni.showLoading({
					title:'加载中'
				})
				const res=await detail(this.goodsId)
				console.log(res)
				if(res){
					uni.hideLoading()
					this.goodsObj=res
					this.goodsObj.DetailPicArr=this.goodsObj.productDetailPic.split(",")
					this.pageShow=true
				}	
			/*	var src='../../static/moren.png'
				if(this.goodsObj.avatarurl==''){
				this.sellerImg=src
				}else{
					this.sellerImg=this.goodsObj.avatarurl
				}*/
			},
		call(){
			  uni.makePhoneCall({
			      phoneNumber:this.goodsObj.linkmanTel
			  });
		  }
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		background-color: #fff;
	}
	.seller{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		align-items: center;
		border-bottom: 1px solid #ccc;
		.people{
			display: flex;
			image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			} 
		}
		.contact{
			width: 130rpx;
			height: 55rpx;
			background-color: #06c35f;
			text-align: center;
			line-height: 55rpx;
			color: #fff;
			border-radius: 10rpx;
		}
	}

    .detail{
		padding: 20rpx;
		.item{
			margin-bottom: 20rpx;
		}
		image{
			width: 100%;
		}
	}
</style>
