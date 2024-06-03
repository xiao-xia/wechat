<template>
	<view class="">
		<view class="top">
			<view class="search">
				<text class="cuIcon-search" style="margin: 0 20rpx;"></text>
				<input type="text"  placeholder="请输入关键字" confirm-type ="search" @confirm='getArticle' v-model="articleValue"/>
			</view>
			<view class="btn" @click="getArticle">
				搜索
			</view>
		</view>
		<view class="excontent">
			<view class="paddcontent">
				<view class="excontentone" v-for="(exitem,index) in excontentList" :key="index" @tap="wheregoodscont(exitem.id)">
					<view class="onecontent">
						<text class="onecont">{{exitem.articleTitle}}</text>
						<view class="remember">
							<text>云居家</text>
							<text class="time">{{exitem.period}}</text>
						</view>
					</view>
					<view class="contentimg">
						<image class="centerimg" :src="exitem.img" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getwriiting,search
	} from '../../API/haowen/index.js'
	export default{
		data(){
			return{
				excontentList:[],
				wridetail:[]
			}
		},
		methods:{
			async getArticle(){
				uni.showLoading({
					 title:'加载中'
				})
				const res = await search(this.articleValue);
				if(res) {
						uni.hideLoading()
						this.excontentList = res.articleList;
						this.wridetail = res.articleIds;
						// this.wridid = res.list.id;
						console.log(this.wridetail);
						console.log(this.excontentList);
						}
				},
				wheregoodscont(id){
					uni.navigateTo({
						url:'../goodwriiting/articledetail?id=' + id + '&ids=' + JSON.stringify(this.wridetail)+'&type=好文'
					})
				}
		}
	}
</script>

<style lang="scss">
	.top{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		background-color: #fff;
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
	.excontent{
		width: 100%;
		padding: 20rpx 20rpx;
		.paddcontent{
			
			
			.excontentone{
				padding: 30rpx 20rpx;
				background-color: #fff;
				border-radius: 15rpx;
				margin-bottom:20rpx;
				display: flex;
				justify-content: space-between;
				
				.onecontent{
					display: flex;
					flex-direction:column;
					justify-content: space-around;
					
					.onecont{
						font-size: 30rpx;
						color:#666666;
					}
					
					.remember{
						width: 90%;
						font-size:26rpx ;
						color:#BABFC2;
						display: flex;
						justify-content: space-between;
					}
				}
				.contentimg{
					width: 200rpx;
					margin-top:15rpx;
					border-radius: 15rpx;
					background-color: #ccc;
					position: relative;
				
						
						.centerimg{
							// width: 100%;
							height: 180rpx;
							display: block;
							border-radius: 15rpx;
						}
					.contentwhite,.contentcneter{
						
						position: absolute;
						top:0;
						left:0;
						right:0;
						bottom:0;
						margin:auto;
					}
				}
			}
		}
	}
</style>
