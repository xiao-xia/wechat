<template>
	<view class="pageWidth ">
	<view class="bar">
		<view :class="index==barCur?'barBlockStyle':'barBlock'" v-for="(bar,index) in barList" :key="index" @tap="selectBar(index)">
			{{bar}}
		</view>
	</view>
	<view class="noCoupon" v-if="couponList.length==0">
		<image src="../../../static/coupon/noCoupon.png" mode="widthFix"></image>
		<view class="" style="color: #aaa;">
			暂无优惠券~
		</view>
	</view>
	<!-- <Coupon></Coupon> -->
	  <!-- 未使用 -->
		<view class="VoucherBack" v-if="barCur==0">
			<view class="VoucherMove" v-for="(item,index) in couponList" :key="index">
				<view class="VoucherRule">
				<view>
					<view class="VoucherBox">
						<view class="VoucherPrice">
							<view class="voucherCoupon">￥</view>
							<view class="fullPrice">{{item.couponPrice}}</view>
						</view>
						<view class="priceBack">
							<view class="voucherMOre">{{item.couponName}}</view>
							<view class="voucherfull">满{{item.fullDiscountPrice}}元可用</view>
						</view>
					</view>
					<view class="Effective">
						<view style="color: #fff;font-size: 20rpx;margin-top: -40rpx;
						padding-bottom: 20rpx;">有效日期：{{item.usefulStartTime}}-{{item.usefulEndTime}}</view>
						<text style="color: #fff;font-size: 20rpx;margin: -40rpx 0 0 100rpx;
						padding-bottom: 20rpx;" :class="item.status==false?'cuIcon-unfold':'cuIcon-fold'" @click="openRule(item)"></text>
					</view>
				</view>
				
				<view class="ge"></view>
				<view class="immediately" @click="goUse()">
					立即使用
				</view>
				</view>
				<view class="couponRuleItem" v-if="item.status==true">
					<view class="use-rule">
						<view class="useRule">使用规则</view>
						<view class="time">{{item.usableRange}}</view>
						<view v-if="item.usableRange=='指定类型'" class="regulations">{{item.goodsType}}</view>
						<view v-if="item.usableRange=='指定商品'" class="regulations">{{item.goods}}</view>
					</view>
				</view>
			</view>	
		</view>
		<!-- 已使用 -->
		<view class="UsedBack" v-if="barCur==1">
			<view class="UsedMove" v-for="(item,index) in couponList" :key="index">
				<view class="UsedRule">
				<view>
					<view class="UsederBox">
						<view class="UsederPrice">
							<view class="UsederCoupon">￥</view>
							<view class="UsedersPrice">{{item.couponPrice}}</view>
						</view>
						<view class="UsederBack">
							<view class="UsederMOre">{{item.couponName}}</view>
							<view class="Usederfull">满{{item.fullDiscountPrice}}元可用</view>
						</view>
					</view>
					<view class="Usertive">
						<view style="color: #fff;font-size: 20rpx;margin-top: -40rpx;
						padding-bottom: 20rpx;">有效日期：{{item.usefulStartTime}}-{{item.usefulEndTime}}</view>
						<text style="color: #fff;font-size: 20rpx;margin: -40rpx 0 0 100rpx;
						padding-bottom: 20rpx;" :class="item.status==false?'cuIcon-unfold':'cuIcon-fold'" @click="openRule(item)"></text>
					</view>
				</view>
				
				<view class="ge"></view>
				<view class="Userimmediately">
					已使用
				</view>
				</view>
				<view class="UserRuleItem" v-if="item.status==true">
					<view class="use-rule">
						<view class="useRule">使用规则</view>
						<view class="time">{{item.usableRange}}</view>
						<view v-if="item.usableRange=='指定类型'" class="regulations">{{item.goodsType}}</view>
						<view v-if="item.usableRange=='指定商品'" class="regulations">{{item.goods}}</view>
					</view>
				</view>
			</view>	
		</view>
		<!-- 已过期 -->
		<view class="UsedBack" v-if="barCur==2">
			<view class="UsedMove" v-for="(item,index) in couponList" :key="index">
				<view class="UsedRule">
				<view>
					<view class="UsederBox">
						<view class="UsederPrice">
							<view class="UsederCoupon">￥</view>
							<view class="UsedersPrice">{{item.couponPrice}}</view>
						</view>
						<view class="UsederBack">
							<view class="UsederMOre">{{item.couponName}}</view>
							<view class="Usederfull">满{{item.fullDiscountPrice}}元可用</view>
						</view>
					</view>
					<view class="Usertive">
						<view style="color: #fff;font-size: 20rpx;margin-top: -40rpx;
						padding-bottom: 20rpx;">有效日期：{{item.usefulStartTime}}-{{item.usefulEndTime}}</view>
						<text style="color: #fff;font-size: 20rpx;margin: -40rpx 0 0 100rpx;
						padding-bottom: 20rpx;" :class="item.status==false?'cuIcon-unfold':'cuIcon-fold'" @click="openRule(item)"></text>
					</view>
				</view>
				
				<view class="ge"></view>
				<view class="Userimmediately">
					已过期
				</view>
				</view>
				<view class="UserRuleItem" v-if="item.status==true">
					<view class="use-rule">
						<view class="useRule">使用规则</view>
						<view class="time">{{item.usableRange}}</view>
						<view v-if="item.usableRange=='指定类型'" class="regulations">{{item.goodsType}}</view>
						<view v-if="item.usableRange=='指定商品'" class="regulations">{{item.goods}}</view>
					</view>
				</view>
			</view>	
		</view>
	<view style="height: 200rpx;"></view>
	<view class="collect">
		<view class="bao">
			<view class="center">
				<view class="ling">
					<view class="content">
						领劵
					</view>
					<view class="content">
						中心
					</view>
				</view>
				<view class="right" style="color: #fff;">
					您有{{couponCount}}张优惠卷可领取
				</view>
			</view>
			<view class="">
				<view class="yuan" @tap="rollCenter" :class="state==false?'bg':''">
					点击<br/>
					领取
				</view>
			</view>
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
		enableList,
		CouponRecordList
		// getlist,
		// exchangeCoupon
	} from '../../../API/couponArr/index.js'
	import Coupon from '../../../components/coupon/coupon.vue'
	export default {
		components:{
			Coupon
		},
		data() {
			return {
				couponList:[],
				barList: ['未使用','已使用','已过期'],
				barCur:0,
				couponCount:0,
				state:true,
				pageNum:1 ,//页数
				pageSize:5,
				totalRow:'',
				nomore:false,
				// couponRecordId:'0',
				// usableType:'0',
				// usableGoods:'0',
				currentTime: new Date(), // 获取当前时间
				curtime:'', 
				curdata:[],
				overdueData:[],
				rollcouponList:[],
				goodsTypeId:'',
				price2:'',
				goodsId:'',
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad() {
			this.curtime = new Date(this.currentTime).getTime();
			
		},
		onShow() {
			this.selectBar(0) ;
			this.getrollcenter();
		},
		onHide() {
		},
		methods: {
			created() {
			    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
			    this.timer = setInterval(function() {
			      _this.currentTime = //修改数据date
			        new Date().getFullYear() +
			        "-" +
			        (new Date().getMonth() + 1) +
			        "-" +
			        new Date().getDate() +
			        " " +
			        new Date().getHours() +
			        ":" +
			        new Date().getMinutes() +
			        ": " +
			        new Date().getSeconds();
			    }, 1000);
			  },
			  
			  beforeDestroy() {
			    if (this.timer) {
			      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
			    }
			  },
			selectBar(index) {
				console.log(index)
				this.couponStatus = index
				this.barCur = index;
				this.pageNum=1
				this.getCoupon()
			},
			async getrollcenter(){
				 uni.showLoading({
					title:'加载中'
				}) 
				const res = await enableList(this.token);
				console.log(res)
				this.rollcouponList = res.data
				console.log(this.rollcouponList)
				this.couponCount=this.rollcouponList.length
				uni.hideLoading()
				/* this.rollcouponList.forEach(item=>{
					var time1 = new Date(item.usefulEndTime).getTime();
					if(this.curtime<time1){
						item.overdue = true
						this.couponCount++
					}
				})
				console.log(this.rollcouponList) */
			},
			async getCoupon(){
				 uni.showLoading({
					title:'加载中'
				}) 
				const res = await CouponRecordList(this.token,this.couponStatus,this.goodsTypeId,this.price2,this.goodsId);
				console.log(res)
				uni.hideLoading()
				this.couponList = res.data
				console.log(this.couponList)
			},
			
			openRule(item) {
				console.log(item)
				item.status=!item.status
				console.log(item.status)
			},
			rollCenter(){
				// if(this.couponCount==0){
				// 	return
				// }
				uni.navigateTo({
					url:'./rollCenter'
				})
			},
			goUse(){
				uni.switchTab({
					url:'../../classification/goodsClassify'
				})
			},
		async  more(){
			if(this.couponList.length==this.totalRow){
				console.log('到底了')
				this.nomore=true
				return
			}
				console.log('触底了')
				this.pageNum++
				const res = await getlist(this.token,this.barCur,this.pageNum,this.pageSize);
				res.data.list.map(item=>{
					item.flag=false
				});
				console.log(res)
				this.couponList=[...this.couponList,...res.data.list];
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pageWidth{
		height: 100%;
		position: relative;
		.listScroll{
			height: calc(100% - 100rpx);
		}
		.noCoupon{
			position: absolute;
			width: 100%;
			top:40%;
			transform: translateY(-50%);//垂直居中
			text-align: center;
			image{
				width: 300rpx;
			}
		}
		.VoucherBack{
			width: 100%;
			padding: 0 20rpx 20rpx 20rpx;
			.VoucherMove{
				background-image: linear-gradient(to right, #3775FE, #3775FE);
				box-shadow: 0 5rpx 10rpx #ABCAFB;
				border-radius: 10rpx;
				margin-top: 20rpx;
				.VoucherRule{
					display: flex;
					justify-content: space-around;
					align-items: center;
					.VoucherBox{
						display: flex;
						align-items: center;
						.VoucherPrice{
							display: flex;
							.voucherCoupon{
								color: #FFFFFF;
								margin-top: 30rpx;
							}
							.fullPrice{
								color: #FFFFFF;
								font-size: 100rpx;
							}
						}
						.priceBack{
							margin-left: 30rpx;
							.voucherMOre{
								font-size: 40rpx;
								color: #fff;
							}
							.voucherfull{
								font-size: 28rpx;
								color: #fff;
								margin-top: -15rpx;
							}
						}
					}
				}
				.couponRuleItem {
					width: 100%;
					background-color: #fff;
					position: relative;
					border-radius: 10rpx;
					// top: -30rpx;
					.use-rule{
						padding: 30rpx;
					}
					.useRule{
						font-size: 28rpx;
						font-weight: 600;
						// padding-top: 20rpx;
					}
					.time{
						font-size: 26rpx;
						font-weight: 600;
						color:#999
					}
					.numb{
						font-size: 20rpx;
						font-weight: 600;
						color:#999
					}
					.regulations{
						font-size: 24rpx;
						font-weight: 600;
						color:#999;
						// padding-top: 20rpx;
					}
					.regulations1{
						font-size: 24rpx;
						font-weight: 600;
						color:#999
					}
				}
				.Effective{
					display: flex;
				}
				.ge{
					height: 150rpx;
					width: 10rpx;
					border-left: 1px #FFFFFF dashed;
				}
				.immediately{
					font-size: 34rpx;
					width: 13%;
					color: #fff;
				}
			}
		}
		//已使用
		.UsedBack{
			width: 100%;
			padding: 0 20rpx 20rpx 20rpx;
			.UsedMove{
				background-image: linear-gradient(to right, #D0D0CF, #D2D2D1);
				box-shadow: 0 5rpx 10rpx #ABCAFB;
				border-radius: 10rpx;
				margin-top: 20rpx;
				.UsedRule{
					display: flex;
					justify-content: space-around;
					align-items: center;
					.UsederBox{
						display: flex;
						align-items: center;
						.UsederPrice{
							display: flex;
							.UsederCoupon{
								color: #FFFFFF;
								margin-top: 30rpx;
							}
							.UsedersPrice{
								color: #FFFFFF;
								font-size: 100rpx;
							}
						}
						.UsederBack{
							margin-left: 30rpx;
							.UsederMOre{
								font-size: 40rpx;
								color: #fff;
							}
							.Usederfull{
								font-size: 28rpx;
								color: #fff;
								margin-top: -15rpx;
							}
						}
					}
				}
				.UserRuleItem {
					width: 100%;
					background-color: #fff;
					position: relative;
					border-radius: 10rpx;
					// top: -30rpx;
					.use-rule{
						padding: 30rpx;
					}
					.useRule{
						font-size: 28rpx;
						font-weight: 600;
						// padding-top: 20rpx;
					}
					.time{
						font-size: 20rpx;
						font-weight: 600;
						color:#999
					}
					.numb{
						font-size: 20rpx;
						font-weight: 600;
						color:#999
					}
					.regulations{
						font-size: 20rpx;
						font-weight: 600;
						color:#999;
						padding-top: 20rpx;
					}
					.regulations1{
						font-size: 20rpx;
						font-weight: 600;
						color:#999
					}
				}
				.Usertive{
					display: flex;
				}
				.ge{
					height: 150rpx;
					width: 10rpx;
					border-left: 1px #FFFFFF dashed;
				}
				.Userimmediately{
					font-size: 31rpx;
					width: 13%;
					color: #fff;
				}
			}
		}
		
		.bar {
			width: 100%;
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 88rpx;
			background-color: #FFFFFF;
			//position: fixed;
		    //left: 0;
			//top: 10rpx;
			.barBlockStyle {
				font-size: 32rpx;
				// color: var(--globalColor);
				color:#008CFF;
				line-height: 80rpx;
				text-align: center;
			}
			
			.barBlock {
				font-size: 32rpx;
				color: #101010;
				line-height: 80rpx;
				text-align: center;
			}
		}
		
		.exchangeItem {
			width: 100%;
			height: 80rpx;
			padding: 0 16rpx 0 48rpx;
			display: flex;
			justify-content: space-between;
			
			.inputItem {
				width: 450rpx;
				height: 80rpx;
				background-color: #fff;
				border-radius: 100rpx;
				display: flex;
				justify-content: space-between;
				padding: 8rpx 40rpx;
				
				.inputBlock {
					width: calc(100% - 80rpx);
					height: 64rpx;
					font-size: 32rpx;
					color: #888888;
				}
				.inputIcon {
					font-size: 50rpx;
					color: #A4A5A5;
					line-height: 64rpx;
				}
			}
		}
		
		.couponItem {
			width: 100%;
			padding: 38rpx 38rpx 0 ;
			
			.couponBlock {
				width: 100%;
				z-index: 99;
				background-color: #fff;
				border-radius:20rpx ;
				padding: 40rpx 20rpx 20rpx 20rpx;
				
		
				.couponcont{
					width: 100%;
					display: flex;
					justify-content: space-between;
					border-bottom:1rpx solid #F0F0F0;
					padding: 0 0 10px 0;
					
					.couponLeft {
						width: 250rpx;
						color: #FE771E;
						.fade{
						   color: #ccc;
						}
					   .topMoney {
					   	font-size: 50rpx;
					   	text-align: center;
					   	line-height: 80rpx;
					   	font-weight: 400;
					   	margin-top: -6px;
					   	.moneyIcon {
					   		font-size: 36rpx;
					   		margin-right: -10rpx;
					   		font-weight: 500;
					   	}
							.moneyPrice{
								font-size: 60rpx;
							}
					   }
					   .bottomMoney {
					   	font-size: 30rpx;
					   	text-align: center;
					   	line-height: 30rpx;
					   }
					}
					.couponRight {
						width: 250rpx;
						  // width: calc(100% - 250rpx);
						  .couponName{
							  font-size: 28rpx;
							  color: #666666;
						  }
						  .couponDate{
							  font-size: 24rpx;
							  color: #999999;
						  }
					}
					
					.goUserBlock {
					  width:112rpx;
					  position: relative;
					  .used{
						  width: 100rpx;
						  height: 100rpx;
						  image{
							  width: 100%;
							  height: 100%;
						  }
					  }
					  .goUser {
						  padding:6rpx 20rpx;
						  font-size: 25rpx;
						  position: absolute;
						  bottom: 26rpx;
						  color:#FE771E;
						  border: 1rpx solid #FE771E;
						  text-align: center;
						//background: #FE771E;
						  border-radius: 30rpx;
							width: 120rpx;
					  }
					  
					  .goUserIcon {
						  font-size: 30rpx;
						  color: #ff6600;
						  line-height: 30rpx;
						  margin-top: 20rpx;
						  text-align: center;
						  font-weight: 800;
					  }
					  
					}
				}
				.couponbottom{
					width: 100%;
					padding: 10rpx 0 0 0;
					
					.bottomcont{
						display: flex;
						justify-content: space-between;
						.yuandian{
							margin-left:40rpx;
							position: relative;
							color: #999999;
							font-size: 26rpx;
							
						}
						.yuandian:after {
							content:"";
						    width: 10rpx;
						    height: 10rpx;
						    background-color: #797979;
							position: absolute;
							top:17rpx;
							left:-30rpx;
						}
					}
				}
			}
			
			.couponRuleItem {
				width: 100%;
				background-color: #fff;
				position: relative;
				border-radius: 30rpx;
				// top: -30rpx;
				.use-rule{
					padding: 30rpx;
				}
				.useRule{
					font-size: 28rpx;
					font-weight: 600;
					// padding-top: 20rpx;
				}
				.time{
					font-size: 20rpx;
					font-weight: 600;
					color:#999
				}
				.numb{
					font-size: 20rpx;
					font-weight: 600;
					color:#999
				}
				.regulations{
					font-size: 20rpx;
					font-weight: 600;
					color:#999;
					padding-top: 20rpx;
				}
				.regulations1{
					font-size: 20rpx;
					font-weight: 600;
					color:#999
				}
			}
		}
		.placehold-view{
			width: 100%;
			height: 240rpx;
		}
		.collect{
			width: 100%;
			height: 200rpx;
			padding: 0 20rpx;
			margin-top: 20rpx;
			position: fixed;
			bottom: 0;
			left:0;
			background-color: #fff;
			z-index: 999;
			.bao{
				height: 100%;
				padding: 40rpx 20rpx 40rpx 40rpx;
				background-image: url(../../../static/coupon/coupon.png);
				background-size: 100% 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.center{
					display: flex;
					align-items: center;
					padding-top: 10rpx;
					.ling{
						.content{
							font-size: 38rpx;
							font-size: 550;
							color: #fff;
							line-height: 1.5;
						}	
					}
					.right{
						margin-left: 50rpx;
						font-size: 550;
					}
				}
				.yuan{
					background-color: #FCA91A;
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					text-align: center;
					color: #fff;
					line-height: 40rpx;
					padding-top: 10rpx;
				}
				.bg{
					background-color:#ccc;
				}
			}
		}
	}
	
</style>
