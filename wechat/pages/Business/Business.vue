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
					<!-- <view class="recommend" @click="articleType('2')" :class="current==2?'titleActive':''">
						价格
					</view> -->
				</view>
				<view class="serviceMore">
					<view class="serviceItem" @tap="goSeckeil(item)" v-for="(item,index) in goodsTypedata" :key="index" >
						<view class="serviceBack">
							<view class="serviceBox">
								<view class="serviceCompany">
									{{item.goodsVo.goodsName}}
								</view>
								<view class="serviceWold">
									{{item.goodsVo.goodsSource}}
								</view>
								<view class="priceItem">
									<view class="priceLeft">
										<view class="priceColor">现价:<text style="font-size: 24rpx;color: red;">￥</text><text style="font-size: 38rpx;font-weight: 600;">{{item.goodsVo.goodsSuggestedRetailPrice}}</text></view>
										<view class="priceoRiginal">原价:￥{{item.goodsVo.goodsOriginalPrice}}</view>
									</view>
									<view class="immediately">
										<image src="../../static/home/button.png" class="butImg"></image>
										<view class="text">
											立即办理
										</view>
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
				goodsTypedata:[],
				seq:0,
				current:0,
				clickTimes:0,
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad(options) {
			console.log(options)
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
				this.goodsTypedata = res.data
				console.log(this.goodsTypedata)
			},
			//点击
			articleType(item){
				console.log(item)
				this.seq=item
				this.current=item
				console.log(this.current)
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
					this.goodsTypedata=this.goodsTypedata.reverse()
				}else if(this.clickTimes%2!=0){
					this.goodfinType()
				}
			},
			// async getClassifi(){
			// 	const res=await getClassifi();
			// 	var Arr = res.data
			// 	console.log(Arr)
			// 	Arr.forEach((item,index)=>{
			// 		if(item.categoryName =='工商服务'){
			// 			this.goodsTypedata=res.data[0].goodsTypeVos;
			// 			console.log(this.goodsTypedata);
			// 		}
			// 	})
			// },
			goSeckeil(item){
				console.log(item)
					uni.navigateTo({
						url:'../seckill/seckdeil?goodsTypeId=' +item.goodsTypeId + '&superiorId=' +item.superiorId
					})
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
			.serviceMore{
				width: 100%;
				height: auto;
				// background-color: #FFFFFF;
				margin: 10rpx 0 20rpx 0;
				.serviceItem{	
					display: flex;
					justify-content: center;
					.serviceBack{
						width: 94%;
						background-color: #fff8f5;
						border-radius: 20rpx;
						margin: 10rpx 0 10rpx 0;
						box-shadow: 0 5rpx 5rpx #e6e6e6;
						.serviceBox{
							margin: 20rpx 20rpx 20rpx 20rpx;
							.serviceCompany{
								font-size: 14px;
							}
							.serviceWold{
								font: 12px;
								color: #dbd6d3;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.priceItem{
								width: 100%;
								display: flex;
								justify-content: space-between;
								align-items: center;
								.priceLeft{
									display: flex;
									align-items: center;
									.priceColor{
										color: #f77a76;
										font-size: 28rpx;
									}
									.priceoRiginal{
										color: #CCCCCC;
										font-size: 22rpx;
										text-decoration: line-through;
										margin-top: 10rpx;
										margin-left: 20rpx;
									}
								}
								
								.immediately{
									position: relative;
									top: 10rpx;
									.butImg{
										width: 150rpx;
										height: 50rpx;
									}
									.text{
										position: absolute;
										top: 6rpx;
										left: 15rpx;
										color: #fff;
										font-size: 24rpx;
									}
									
								}
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
