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
					<view class="alltion" @click="articleType('0')" :class="current==0?'titleActive':''">
						全部
					</view>
					<view class="newest" @click="articleType('1')" :class="current==1?'titleActive':''">
						销量
					</view>
					<view class="" style="display: flex;align-items: center;" @click="range(2)">
						<text class="recommend" :class="current==2?'titleActive':''">价格</text>
						<view class="">
							<view class="cuIcon-triangleupfill" style="line-height: 20rpx;font-size: 30rpx;" :class="clickTimes%2!=0?'titleActive':''">
							</view>
							<view class="cuIcon-triangledownfill" style="line-height: 8rpx;font-size: 30rpx;margin-bottom: 6rpx;" :class="clickTimes!=0&&clickTimes%2==0?'titleActive':''">
							</view>
						</view>
					</view>
				</view>
				<view class="SpecialItem">
				<view class="SpecialReview">
					<view class="SpecialBack" @click="handleFinance(item)" v-for="(item,index) in Financialdata" :key="index">
						<view class="SpecialBox">
							<view class="Specialreport">
								{{item.goodsVo.goodsName}}
							</view>
							<view class="SpecialWold">
								{{item.goodsVo.goodsSource}}
							</view>
							<view class="reviewBox">
								<view class="reportWord">
									<view class="wordColor">
										<text style="font-size: 24rpx;color: red;">￥</text><text style="font-size: 38rpx;font-weight: 600;">{{item.goodsVo.goodsSuggestedRetailPrice}}</text>
										<view class="sizeColor">
											￥{{item.goodsVo.goodsOriginalPrice}}
										</view>
									</view>
									
								</view>
								<view class="reportCircular">
									抢
								</view>
							</view>
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
		getClassifi,goodsList
	} from '../../API/classificationArr/index';
	export default {
		data() {
			return {
				Financialdata:[],
				seq:0,
				current:0,
				clickTimes:0
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad(options) {
			// this.articleType('全部')
			this.goodsType = options.goodsTypeId
			this.goodfinType()
		},
		onShow() {
			// this.getClassifi()
		},
		methods: {
			goSearch(){
				uni.navigateTo({
					url:'../searchs/searchs'
				})
			},
			async goodfinType(){
				uni.showLoading({
					title:'加载中'
				})
				const res=await goodsList(this.goodsType,this.seq);
				console.log(res)
				uni.hideLoading()
				this.Financialdata = res.data
				console.log(this.Financialdata)
			},
			articleType(item){
				console.log(item)
				this.seq=item
				this.current=item
				if(this.seq==0||this.seq==1){
					this.goodfinType()
				}
			},
			range(item){
				this.seq=item
				this.clickTimes++
				console.log(this.clickTimes)
				console.log(this.clickTimes%2!=0)
				console.log(this.clickTimes!=0&&this.clickTimes%2==0)
				this.current=item
				if(this.clickTimes!=0&&this.clickTimes%2==0){
					this.Financialdata=this.Financialdata.reverse()
				}else if(this.clickTimes%2!=0){
					this.goodfinType()
				}
			},
			// async getClassifi(){
			// 	const res=await getClassifi();
			// 	var Arr = res.data
			// 	Arr.forEach((item,index)=>{
			// 		 if(item.categoryName =='财务审计'){
			// 			this.Financialdata=res.data[index].goodsTypeVos;
			// 			console.log(this.Financialdata)
			// 		}
			// 	})
			// },
			handleFinance(item){
				console.log(item)
				if(!this.token){
					this.unLoadEvent()
				}else{
					uni.navigateTo({
						url:'../seckill/seckdeil?goodsTypeId=' +item.goodsTypeId+ '&superiorId=' +item.superiorId
					})
				}
			},
			unLoadEvent() {
				uni.showModal({
				    title: '提示',
				    content: '您还未登录哦，请先登录~',
					showCancel: false,
					confirmText: '立即登录',
				    success: function (res) {
				        if (res.confirm) {
							uni.reLaunch({
								url: '../login/login'
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
		},
		
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
				.titleActive{
					// color:var(--button);
					color:#008CFF;
				}
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
			
			.SpecialReview{
				display: flex;
				 flex-wrap:wrap;
				.SpecialBack{
					width: 94%;
					background-color: #f6fdf5;
					border-radius: 20rpx;
					margin: 20rpx 0 0 20rpx;
					box-shadow: 0 5rpx 5rpx #e6e6e6;
					.SpecialBox{
						margin: 20rpx 20rpx 20rpx 20rpx;
						.Specialreport{
							font-size: 28rpx;
						}
						.SpecialWold{
							font-size: 28rpx;
							color: #dbd6d3;
						}
						.reviewBox{
							margin-top: 20rpx;
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;
							.reportWord{
								.wordColor{
									color: #f77a76;
									font-size: 32rpx;
									line-height: 1;
									display: flex;
									align-items: center;
									.sizeColor{
										color: #CCCCCC;
										font-size: 24rpx;
										text-decoration: line-through;
										line-height: 1;
										margin-left: 20rpx;
										margin-top: 10rpx;
									}
								}
							}
							.reportCircular{
								height: 50rpx;
								width: 50rpx;
								border-radius: 50%;
								color: #fff;
								// background-color: #f47a25;
								background-image: linear-gradient(to bottom, #F66933, #F7AF22);
								text-align: center;
								margin-left: 10rpx;
							}
						}
					}
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
