<template>
	<view class="goodsItem">
		<view class="goodscont">
			<view class="goodssearch">
				<view class="search" @click="goSearch">
					<image class="searchimg" src="../../static/homeimg/server.png"></image>
					<view class="searchinp">
						请输入关键字
					</view>
				</view>
			</view>
			<view class="alluptodate">
				<view class="alluptodatetion">
					<view class="alltion" @click="articleType('全部')" :class="{'cur':msg===0}">
						全部
					</view>
					<view class="newest" @click="articleType('最新')" :class="{'cur':msg===1}">
						最新
					</view>
					<view class="recommend" @click="articleType('推荐')" :class="{'cur':msg===2}">
						推荐
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
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex';
	import {
		showToast,
	} from '../../common/util.js';
	import {
		getwriiting,search
	} from '../../API/haowen/index.js'
	export default {
		data() {
			return {
				wridid:'',
				articleValue:'',
				wridetail:[],
				msg: 0,
				percentage: 50,
				excontentList:[],
				twcontentList:[
					{url:'../../static/mine/new.png',article:'中医养生知识大全',substance:'记住:睡觉是养生的第一要素'},
					{url:'../../static/mine/new.png',article:'中医养生知识大全',substance:'记住:睡觉是养生的第一要素'},
					{url:'../../static/mine/new.png',article:'中医养生知识大全',substance:'记住:睡觉是养生的第一要素'},
					{url:'../../static/mine/new.png',article:'中医养生知识大全',substance:'记住:睡觉是养生的第一要素'},
				],
				thcontentList:[
					{url:'../../static/mine/new.png',article:'中医养生知识大全',substance:'记住:睡觉是养生的第一要素'},
					{url:'../../static/mine/new.png',article:'中医养生知识大全',substance:'记住:睡觉是养生的第一要素'},
					{url:'../../static/mine/new.png',article:'中医养生知识大全',substance:'记住:睡觉是养生的第一要素'},
				],
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad() {
			this.articleType('全部')
		},
		onShow() {
		},
		onHide() {
		},
		methods: {
			async articleType(type) {
				if(type=='全部'){
				this.msg=0
				}else if(type=='最新'){
					this.msg=1
				}else{
					this.msg=2
				}
				
				uni.showLoading({
					 title:'加载中'
				})
				const res = await getwriiting(this.token,type,this.articleTitle);
				console.log(res)
				if(res) {
					uni.hideLoading()
					this.excontentList = res.articleList;
					this.wridetail = res.articleIds;
					// this.wridid = res.list.id;
					console.log(this.wridetail);
					console.log(this.excontentList);}
			},
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
				},
				goSearch(){
					uni.navigateTo({
						url:'../searchArticle/searchArticle'
					})
				}
			}
		
			
	}
</script>

<style lang="scss">
	.goodsItem{
		width: 100%;
		
		.goodssearch{
			width: 100%;
			background-color: #fff;
			padding: 20rpx 30rpx;
			.search{
				width: 100%;
				height: 60rpx;
				line-height: 60rpx;
				display: flex;
				flex-direction: row;
				background:#f8f8f8;
				border-radius: 50rpx;
				position: relative;
				
				.searchimg{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					left:10rpx;
					top:10rpx;
				}
				
				.searchinp{
					width: 100%;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 30upx;
					color: #666666; 
					padding-left: 30rpx;
					margin-left:40rpx;
				} 
			}
		}
		.alluptodate{
			width: 100%;
			
			.alluptodatetion{
				width: 100%;
				display: flex;
				padding: 20rpx 30rpx;
				background-color: #FFFFFF;
				view{
					font-size: 28rpx;
					text-align: center;
				}
				.newest,.recommend{
					margin-left: 60rpx;
				}
				.cur{
				    border-bottom:4rpx solid green;
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
		}
	}
</style>
