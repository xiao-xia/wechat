<template>
	<view class="container">
		<view class="top">
			<view class="search">
				<text class="cuIcon-search" style="margin: 0 20rpx;"></text>
				<input type="text"  placeholder="请输入关键字" confirm-type ="search" @confirm='search' v-model="productName"/>
			</view>
			<view class="btn" @click="search">
				搜索
			</view>
		</view>
		<view class="list" v-for="(item,index) in medicallist" :key="index" @click="goDetail(item.id)">
			<view class="left">
				<image :src="item.productMainPic" mode=""></image>
			</view>
			
			<view class="right">
				<view class="name">
					{{item.productName}}
				</view>
				<view class="price">
					￥{{item.productPrice}}
				</view>				
			</view>
		</view>
	</view>
</template>

<script>
	import {
		searchList
	} from '../../API/welfareArr/index.js'
	export default{
		data(){
			return{
				 medicallist:[],
				 productName:''
			}
		},
		methods:{
		async search(){
				uni.showLoading({
				     title: '加载中',
				   })
				const res = await searchList(this.productName);
				console.log(res)
				if(res) {
					uni.hideLoading()
					
					this.medicallist = res.list;
					//console.log(this.medicallist);
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.container{
		padding: 0 20rpx;
	}
	.top{
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
		.search{
			display: flex;
			align-items: center;
			border-radius: 50rpx;
			background-color: #EDECF1;
			input{
				width: 520rpx;
				height: 100%;
			}
		}
		.btn{
			background-color: #06c35f;
			width: 100rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			color: #fff;
			border-radius: 50rpx;
		}
	}
	
	.list{
	   padding: 40rpx;
	   display: flex;
	   justify-content: space-between;
		 border-bottom: 2rpx solid #F0F0F0;
		 background-color: #fff;
	   .left{
		   width: 300rpx;
		   height: 200rpx;
		   margin-right: 40rpx;
		   image{
			   width: 100%;
			   height: 100%;
		   }
	   }
	   .right{
		   width: calc(100% - 350rpx);
		   text-align: center;
		   display: flex;
		   flex-direction: column;
		   justify-content: center;
		   .name{
			   margin-bottom: 20rpx;
				 font-size: 30rpx;
		   }
		   .price{
			   margin-bottom: 20rpx;
			   color: #F86500;
				 font-size: 30rpx;
		   }
	   }
			 
	}
</style>
