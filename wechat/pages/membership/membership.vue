<template>
	<view class="container">
		<view class="memberBack">
			<image style="z-index: -1;" src="../../static/home/memberBack.png"></image>
			<view class="openCard">
				<view class="openMember">开通会员卡</view>
				<view class="openMove">
					<image style="width: 20rpx;height: 20rpx;" src="../../static/home/member.png"></image>
					<view style="color:#F3D3BF;font-size: 30rpx;">独享多项会员特权</view>
					<image style="width: 20rpx;height: 20rpx;" src="../../static/home/member.png"></image>
				</view>
				
				<!-- <view class="colorItem">
					<view class="colorWidth">
						<view :class="index==bar?'colorBack':'writeBack'"  v-for="(item,index) in functionList" :key="index" @tap="select(index,item)">
							
							<view class="colorLittle" v-if="item.recommendationStatus=='0'">
								<text style="font-size: 24rpx;">推荐</text>
							</view>
							<view class="vIPword">
								<view style="color: #6E4C2B; font-size: 30rpx;margin-top: 10rpx;">{{item.membershipCardRuleName}}VIP</view>
								<view style="color: #543115; font-size: 46rpx; font-weight: bold;">￥{{item.membershipCardRuleActivityPrice}}</view>
								<view style="color: #373333; font-size: 22rpx; text-decoration: line-through; margin-top: -10rpx;">原价￥{{item.membershipCardRuleOriginalPrice}}</view>
								<view style="color: #6C4827; font-size: 22rpx;">限时活动价</view>
							</view>
							<view class="selectItem" v-if="index==bar">
								<view class="cuIcon-check selectItemIcon"></view>
							</view>
						</view>	
					</view>
				</view> -->
				
				<view class="colorItem">
					<view class="colorWidth">
						<!-- scroll-left="120"；右边的元素上来的距离 -->
						<scroll-view class="scroll-view_H" scroll-x="true">
							<!-- <view class="scroll-view-item_H" v-for="(huadong,index) in huadongs" :key="index"> -->
							<view  class="scroll-view-item_H"  :class="index==bar?'colorBack':'writeBack'"  v-for="(item,index) in functionList" :key="index" @tap="select(index,item)">	
								<view class="colorLittle" v-if="item.recommendationStatus=='0'">
									<text style="font-size: 24rpx;">推荐</text>
								</view>
								<view class="vIPword">
									<view style="color: #6E4C2B; font-size: 30rpx;margin-top: 10rpx;">{{item.membershipCardRuleName}}VIP</view>
									<view style="color: #543115; font-size: 47rpx; font-weight: bold;"><text style="font-size:16px;">￥</text>{{item.membershipCardRuleActivityPrice}}</view>
									<view style="color: #373333; font-size: 24rpx; text-decoration: line-through; margin-top: -10rpx;">原价<text>￥</text>{{item.membershipCardRuleOriginalPrice}}</view>
									<view style="color: #6C4827; font-size: 24rpx;">限时活动价</view>
								</view>
								<view class="selectItem" v-if="index==bar">
									<view class="cuIcon-check selectItemIcon"></view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				
				<view class="privilegesItem">		
					<view class="privileges">
						<span class="line"></span>
							会员特权
						<span class="line"></span>
					</view>
					<view class="Equityvalue">权益价值翻倍</view>
				</view>
				<view class="specialItem">
					<view class="Seckill" v-for="(item,index) in privilData" :key="index" @click="privilbar(index)">
						<image v-if="barindex==index" style="width: 100rpx;height: 100rpx;" src="../../static/home/seckillfan.png"></image>
						<image v-else style="width: 100rpx;height: 100rpx;" src="../../static/home/seckill.png"></image>
						
						<text class="area">{{item.membershipPrivilegesName}}</text>
					</view>
					<!-- <view class="Seckill">
						<image style="width: 100rpx;height: 100rpx;" src="../../static/home/volume.png"></image>
						<text  class="area">每月抵用券</text>
					</view>
					<view class="Seckill">
						<image style="width: 100rpx;height: 100rpx;" src="../../static/home/price.png"></image>
						<text class="area">商品会员价</text>
					</view>
					<view class="Seckill">
						<image style="width: 100rpx;height: 100rpx;" src="../../static/home/exclusive.png"></image>
						<text class="area">专属客服</text>
					</view> -->
				</view>
				<view class="areaItem">
					<view class="areaBox">
						<text style="color: #FFFFFF;">{{getcontent}}</text>
					</view>
				</view>
				<view class="buttonItem">
					<button class="buttonColor" @click="confirm()">
						<view style="font-size: 40rpx; color: #32303A;">确认支付</view>
						<view style="font-size: 40rpx; color: #32303A;margin: 20rpx">开通VIP</view>
						<view class="limit">限时</view>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getAllRule,privileges } from '../../API/membership/membership.js'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	export default {
		data() {
			return {
				membershipCardRuleEffectiveTime:'',
				privilData:[],
				functionList:[
					{membershipCardRuleName:3,membershipCardRuleActivityPrice:1600,membershipCardRuleOriginalPrice:2600,recommendationStatus:0},
					{membershipCardRuleName:2,membershipCardRuleActivityPrice:1100,membershipCardRuleOriginalPrice:2100},
					{membershipCardRuleName:1,membershipCardRuleActivityPrice:600,membershipCardRuleOriginalPrice:1600},
				],
				bar:0,
				barindex:0,
				getcontent:'',
				huadongs:[
					{img:'../../static/logo.png',name:'舟舟',info:'xxxxxxxx'},
					{img:'../../static/logo.png',name:'舟舟',info:'xxxxxxxx'},
					{img:'../../static/logo.png',name:'舟舟',info:'xxxxxxxx'},
					{img:'../../static/logo.png',name:'舟舟',info:'xxxxxxxx'},
					{img:'../../static/logo.png',name:'舟舟',info:'xxxxxxxx'},
					{img:'../../static/logo.png',name:'舟舟',info:'xxxxxxxx'},
				]
			}
		},
		computed:{
			...mapState(['unfoin','token','userInfo'])
		},
		onLoad() {
			
		},
		onShow() {
			this.getmember()
		},
		methods: {
			select(index,item){
				console.log(item)
				this.bar=index
				this.membershipCardRuleId = item.membershipCardRuleId
				this.membershipPrivileges = item.membershipPrivileges
				this.membershipCardRuleEffectiveTime = item.membershipCardRuleEffectiveTime
				console.log(this.membershipCardRuleEffectiveTime)
				console.log(this.membershipCardRuleId)
				console.log(this.membershipPrivileges)
				this.getprivileges()
				this.goodsList=this.content[index].goodsTypeVos;
			},
			privilbar(index){
				this.barindex = index;
				this.getcontent=this.privilData[index].membershipPrivilegesContent
				console.log(this.getcontent)
			},
			/* async getcontent(){
				const res = await privileges(this.token,this.membershipPrivileges)
				this.membershipPrivilegesContent = res.data[index].membershipPrivilegesContent
				console.log(this.membershipPrivilegesContent)
			}, */
			
			async getprivileges(){
				const res = await privileges(this.token,this.membershipPrivileges)
				this.privilData = res.data
				this.getcontent=this.privilData[0].membershipPrivilegesContent
				console.log(this.privilData)
			},
			async getmember(){
				const res = await getAllRule()
				console.log(res)
				this.functionList = res.data
				console.log(this.functionList)
				//如果没点就是第一项
				if(!this.membershipCardRuleId){
					this.membershipCardRuleId = this.functionList[0].membershipCardRuleId
					this.membershipCardRuleEffectiveTime = this.functionList[0].membershipCardRuleEffectiveTime
					console.log(this.membershipCardRuleId)
					console.log(this.membershipCardRuleEffectiveTime)
				}
				//如果没点就是第一项
				this.membershipPrivileges = this.functionList[0].membershipPrivileges
				this.getprivileges(this.token,this.membershipPrivileges)
				// this.getcontent=this.privilData[0].membershipPrivilegesContent
			},
			confirm(){
				uni.navigateTo({
					url:'./shipConfirm?membershipCardRuleId=' + this.membershipCardRuleId + '&membershipCardRuleEffectiveTime=' + this.membershipCardRuleEffectiveTime 
				})	
			},
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.container{
		width: 100%;
		height: 100%;
		.memberBack{
			position: relative;
			width: 100%;
			height: 100%;
			image{
				width:100%;
				height: 100%;
			}
			.openCard{
				width: 100%;
				z-index: 1;
				display: flex;
				justify-content: center;
				.openMember{
					color: #DEAA8A;
					font-size: 60rpx;
					position: absolute;
					top: 40rpx;
				}
				.openMove{
					width: 100%;
					color: #DEAA8A;
					font-size: 60rpx;
					position: absolute;
					top: 120rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 30rpx;
				}
				.colorItem{
					width: 100%;
					font-size: 60rpx;
					position: absolute;
					top: 120rpx;
					margin-top: 120rpx;
					text-align: center;
					.colorWidth{
						display: flex;
						justify-content: center;
						align-items: center;
						.scroll-view_H {
								/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
								white-space: nowrap;
								width: 100%;
							}
							.scroll-view-item_H {
								display: inline-block;
								width: 35%;
								height: 300upx;
								border: 1upx solid;
								text-align: center;
								font-size: 36upx;
								margin: 2%  1% 2% 1%;
							}
							.scroll-view-item_H view{
								box-sizing: border-box;
							}
							// .scroll-view-item_H view:nth-child(1){
							// 	width: 100%;
							// 	text-align: right;
							// 	padding: 1% 4%;
							// }
							// .scroll-view-item_H view:nth-child(2){
							// 	width: 100%;
							// 	height: 120upx;
							// }
							// .scroll-view-item_H view:nth-child(2) image{
							// 	width: 100upx;
							// 	height: 100upx;
							// }
							// .scroll-view-item_H view:nth-child(3){
							// 	width: 100%;
							// 	height: 50upx;
							// }
							// .scroll-view-item_H view:nth-child(4){
							// 	width: 100%;
							// 	height: 50upx;
							// }
						.colorBack{
							width: 236rpx;
							background-image: linear-gradient(to bottom, #EED6A5, #E0BD7D);
							background-repeat: no-repeat;
							border-radius: 20rpx;
							padding: 30rpx;
							position: relative;
							overflow: hidden;
							.colorLittle{
								background-color: #BB865B;
								width: 70rpx;
								text-align: center;
								height: 40rpx;
								line-height: 40rpx;
								position: absolute;
								top: -1rpx;
								left: -1rpx;
								color: #fff;
								z-index: 999;
								border-radius: 0 0 10rpx 10rpx;
							}
							.vIPword{
								display: flex;
								justify-content: center;
								align-items: center;
								flex-direction: column;
								position: relative;
							}
							.selectItem {
							  width: 100rpx;
							  height: 100rpx;
							  background-color: #A37550;
							  position: absolute;
							  right: -50rpx;
							  bottom: -50rpx;
							  transform: rotate(225deg); 
							  .selectItemIcon {
								  width: 100rpx;
								  height: 100rpx;
								  transform: rotate(125deg);
								  color: #fff;
								  font-size: 35rpx;
								  // line-height: 5rpx;
								  // margin-left: -25rpx;
									line-height: 5rpx;
									margin-left: -7rpx;
									margin-top: -30rpx;
								}
							}
						}
						.writeBack{
							width: 236rpx;
							background-color: #FFFFFF;
							border-radius: 20rpx;
							padding: 30rpx;
							position: relative;
							overflow: hidden;
							.colorLittle{
								background-color: #BB865B;
								width: 70rpx;
								text-align: center;
								height: 40rpx;
								line-height: 40rpx;
								position: absolute;
								top: -1rpx;
								left: -1rpx;
								color: #fff;
								border-radius: 0 0 10rpx 10rpx;
							}
							.vIPword{
								display: flex;
								justify-content: center;
								align-items: center;
								flex-direction: column;
								position: relative;
								z-index: 999;
								.check{
									
								}
							}
						}
					}
				}
				.privilegesItem{
					width: 100%;
					position: absolute;
					top: 550rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					.privileges{
						color: #DEAA8A;
						font-size: 40rpx;
						.line{
							display: inline-block;
							width: 70px;
							border: 1px dashed #cccccc;
							vertical-align: 5px;
							height: 4rpx;
							margin: 0 10px 0 10px;
						}
					}
					.Equityvalue{
						font-size: 26rpx;
						background-color: #E7B394;
						color: #32303A;
						text-align: center;
						width: 200rpx;
						height: 40rpx;
						line-height: 40rpx;
						border-radius: 40rpx;

					}
				}
				.specialItem{
					width: 100%;
					position: absolute;
					top: 700rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					.Seckill{
						width: 180rpx;
						text-align: center;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						.area{
							color: #BC875D;
							font-size: 30rpx;
						}
					}
				}
				.areaItem{
					width: 100%;
					position: absolute;
					top: 890rpx;
					display: flex;
					justify-content: center;
					.areaBox{
						width: 660rpx;
						height: 140rpx;
						border: 1px solid #BC875D;
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 20rpx;
						border-radius: 10rpx;
					}
				}
				.buttonItem{
					width: 100%;
					position: absolute;
					top: 1070rpx;
					display: flex;
					justify-content: center;
					.buttonColor{
						width: 600rpx;
						height: 100rpx;
						text-align: center;
						background-image: linear-gradient(to right, #F8E6D7, #E7B596)
						;
						border-radius: 50rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						.limit{
							width: 60rpx;
							height: 30rpx;
							border-radius: 50rpx;
							background-color: #FE040A;
							text-align: center;
							font-size: 18rpx;
							color: #fff;
							line-height: 30rpx;
						}
					}
				}
			}
		}
		
	}
</style>
