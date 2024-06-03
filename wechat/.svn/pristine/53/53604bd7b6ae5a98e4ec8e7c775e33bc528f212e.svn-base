<template>
	<view class="orderset">
		<view class="myhome">
			<view class="homecont">
				<view class="homeaddress" v-if="selectedObj.receiverName ||addressObj.receiverName">
					<view style="padding: 0 0 20rpx 0;display: flex;">
						<view class="homebor" style="color: #02B089;background-color:#DDF7EF ;">{{selectedObj.addressTag||addressObj.addressTag}}</view>
						<view class="bottomBlock" @click="address()">
							<view  class="bottomAddress" style="border: none;font-size: 32rpx;">
						{{ selectedObj.receiverCell||addressObj.receiverCell}} {{ selectedObj.receiverDetail||addressObj.receiverDetail}}
							</view>
							<view class="cuIcon-right" style="color: #A4A5A5;"></view>
						</view>
					</view>
					<view class="" >
						<text> {{selectedObj.receiverName ||addressObj.receiverName}} （{{selectedObj.receiverSex||addressObj.receiverSex}}）</text>
						<text>{{selectedObj.receiverTel||addressObj.receiverTel}}</text>
					</view>
				</view>
				<view class="addHome" v-else @click="goAddress">
				   新增收货地址
				</view>
			</view>
		
		</view>
		
		<view class="setproduct">
			<view class="endproduct">
				<view class="head">
					<text>商品</text>
					<text>{{totalNum}}件</text>
				</view>
				<view class="proimg" v-for="(item,index) in goodsList" :key="index">
						<view class="producttycont">
							<view class="producttys">
								<image class="producttyimg" :src="item.goodsSmallImage" mode=""></image>
							</view>
							<view class="detail">
								<view class="name">
									{{item.goodsName}}
								</view>
								<view class="price">
									¥{{item.goodsPrice}}
								</view>
							</view>
						</view>
					
					<view class="piecenum">
						<text>x{{item.orderCount}}</text>
					</view>
				</view>
				<view class="amount">
					<view class="amountbot">
						<text>总价</text>
						<text style="font-weight: bold;margin-right: 30rpx;">￥{{totalPrice}}</text>
					</view>
				</view>
				<view class="pieces">
					<view class="piecepro">
						<view class="">
							<text>优惠卷</text>
							<text style="margin-left: 10rpx;color: rgb(195,195,195);">({{usefulCount}}张可用)</text>
						</view>
						<view class="right" @click="openList">
							<text style="font-weight: bold;">￥ -{{chooseCoupon}}</text>
							<text class="cuIcon-right" style="color: #A4A5A5;"></text>
						</view>
					</view>
				</view>
				<view class="setdistribution">
						<text>配送费</text>
					   <text style="font-weight: bold;margin-right: 30rpx;">￥{{0}}</text>
				</view>
				<view class="total">
					<text>合计</text>
					<text style="font-weight: bold;margin-right: 30rpx;">¥{{afterPrice}}</text>
				</view>
			</view>
		</view>
		<view class="beizhu">
			<text>备注</text>
			<view class="right" @click="goRemarks">
				<text style="margin-right: 40rpx;width:400rpx;overflow:hidden; white-space:nowrap; text-overflow:ellipsis;text-align: right;">{{msg}}</text>
				<text class="cuIcon-right" style="color: #A4A5A5;margin-right: 20rpx;"></text>
			</view>
		</view>
		<view class="box" style="height: 100rpx;">
			
		</view>
		<view class="setbottom">
			<view class="setends">
				<view class="endscont">
					<text class="endcope">应付金额 ￥{{afterPrice}}</text>
					<text class="discount">已优惠 ￥{{chooseCoupon}}</text>
				</view>
				<view class="endbutton" @click="pay">
					立即支付
				</view>
			</view>
		</view>
		
		<view class="coupon" v-if="isShow">
			<view class="couponlist">
				<view class="top">
					<text class="cuIcon-close guanbi" @click="close"></text>
					<view class="up" style="width: 100%;text-align: center;">
						优惠券
					</view>
				<!--	<view class="down">
						<view>不使用优惠券</view>
						<view class="">
							<radio  style="transform:scale(0.7)"/>
						</view>
					</view> -->
				</view>
				
				<scroll-view scroll-y="true" style="height: 600rpx;">
				<view class="showList" v-for="(item,index) in allCoupon" :key="index">
					<radio-group @change="radioChange(index,item,$event)">
				 	 <view class="card">
				 	 	 <view class="" style="width: 150rpx;">
				 	 	 	 <view v-if="item.couponType=='满减券'" class="" style="text-align: center;font-size: 40rpx;color: #ff6600;" :class="item.isUseful==false?'active':''">
				 	 	 	 	¥{{item.couponPrice}}
								<view class="" style="color: #ff6600;" :class="item.isUseful==false?'active':''">
									满{{item.fullDiscountPrice}}元可用
								</view>
				 	 	 	 </view>
							 <view v-else-if="item.couponType=='折扣券'" class="" style="text-align: center;font-size: 40rpx;color: #ff6600;" :class="item.isUseful==false?'active':''">
							 	{{item.couponPrice/10}}折
								<view class="" style="color: #ff6600;" :class="item.isUseful==false?'active':''">
									满{{item.fullDiscountPrice}}元可用
								</view>
							 </view>
							 <view v-else-if="item.couponType=='兑换券'" class="" style="text-align: center;font-size: 40rpx;color: #ff6600;" :class="item.isUseful==false?'active':''">
							 	<view class="" style="color: #ff6600;" :class="item.isUseful==false?'active':''">
							 		兑换券
							 	</view>
								<view class="" style="color: #ff6600;" :class="item.isUseful==false?'active':''">
									兑换数量：1
								</view>
							 </view>
				 	 	 </view>
						 <view class="" style="width:400rpx;margin-left:40rpx;">
						 	 <view class="" :class="item.isUseful==false?'active':''">
						 	 	{{item.couponName}}
						 	 </view>
							 <view class="" :class="item.isUseful==false?'active':''">
							 	截止时间：{{item.usefulEndTime}}
							 </view>
						 </view>
						 <view class="">
						 	<radio :checked="index==current"  :value="item.couponPrice" :disabled="item.isUseful==false" style="transform:scale(0.7)"/>
						 </view>
				 	 </view>
					 <view class="rule">
					 	<view class="" :class="item.isUseful==false?'active':''">
					 		使用规则 
					 	</view>
						<text class="cuIcon-right"></text>
					 </view>
					</radio-group>
				</view>
				</scroll-view>
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
	import pay from '../../components/settle/pay.vue'
	import {defaultAddress} from '../../API/defaultAddresss/index.js'
	import {add} from '../../API/olderArr/index.js'
	import {advancePay} from '../../API/orderpay/index.js'
	import {showCoupon} from '../../API/couponArr'
	export default{
		data(){
			return{
				useId:'',
				totalOne:0,
				totalTwo:0,
				cartIdStr:'',
				orderId:'',
				current:-1,
				allCoupon:[],
				goodsList:[],
				addressObj:{},
				selectedObj:{},
				msg:'商品、配送补充说明',
				isShow:false,
				goodsObj:{},
				id:'',
				manPrice:'',
				chooseCoupon:0,
				usefulCount:0,
				afterPrice:''
			}
		},
		components:{
			pay
		},
		onLoad(options) {
			this.getDefault();
			console.log(options)
		//	let goodsItem=JSON.parse(options.goodsItem)
		//	console.log(goodsItem)
		//	this.goodsList=goodsItem
		//	console.log(this.goodsObj,123)
			if(options.list){//从购物车到结算页面
				let list=JSON.parse(options.list);
				console.log(list);
				this.goodsList=list;
				let cartIdArr=[]
				this.goodsList.forEach(item=>{
					console.log(item.id)
					cartIdArr.push(item.id)
				})
				console.log(cartIdArr)
				this.cartIdStr=cartIdArr.join()
				console.log(this.cartIdStr)
			}else if(options.orderItem){
				//console.log(options)  //从商品详情页到结算页面
				this.goodsObj=JSON.parse(options.orderItem)
				console.log(this.goodsObj)
				this.goodsList=this.goodsObj.list
			}else if(options.goodsArr){
				this.goodsList=JSON.parse(options.goodsArr)
			}
			this.afterPrice=this.totalPrice
			//this.goodsList.forEach(item=>item.id=item.goodsId)
			//console.log(this.goodsList)
			
		},
		onShow() {
			uni.$on('select', (data)=>{
			    // data即为传过来的值
				console.log(123);
			    console.log(data);
				this.selectedObj=data
			});
			console.log(this.selectedObj)
			uni.$on('beizhu', (data)=>{
			    // data即为传过来的值
				console.log(456);
			    console.log(data);
				if(data.text!='')
				{this.msg=data.text}
				else{
					this.msg='商品、配送补充说明'
				}
			});
			//console.log(this.msg)
			this.getCouponList()
		},
		computed:{
			...mapState(['phoneNumber','token','userInfo']),
			totalNum() {
				let totalNum = 0;
				this.goodsList.map(item => {
					totalNum += item.orderCount 
				})
				return totalNum
				},
			totalPrice() {
				let totalPrice = 0;
				this.goodsList.map(item => {
					totalPrice += item.orderCount* item.goodsPrice 
				})
				return totalPrice.toFixed(2)
			}
		},
		methods:{
			address(){
				uni.navigateTo({
					url:'../shippingAddress/shippingAddress'
				})
			},
			async getDefault(){
				const res= await defaultAddress(this.token);
				console.log(res) 
				this.addressObj=res.data
				console.log(this.addressObj.id)
				console.log(this.selectedObj.id)
			    if(this.selectedObj.receiverCell){
					if(this.addressObj){
						this.id=this.selectedObj.id
					}
					this.id=this.selectedObj.id
				}else{
					this.id=this.addressObj.id
				}
				console.log(this.id)
			},
		async	pay(){
		   if(!this.phoneNumber){
			  uni.showModal({
			      title: '提示',
			      content: '您还未绑定手机号，不能下单',
				  showCancel:'false',
			  	  confirmText: '确定',
			      success: function (res) {
			          if (res.confirm) {
			  			uni.navigateTo({
			  				url:'../login/login'
			  			})
			          }
			      }
			  });
			  return
		   }
	       uni.showLoading({
	       	  title:'加载中'
	       })
		   console.log(this.id)
		   const res=await add(this.token,this.afterPrice,JSON.stringify(this.goodsList),this.id,this.msg,0,this.cartIdStr,this.useId)
		   //普通订单
		   console.log(res)
		   if(this.afterPrice==0){
			  uni.hideLoading()
			  var index=1
			  uni.navigateTo({
			  	url:'../personal/myolder/whole?index='+index
			  }) 
			  return
		   }
		   var orderNumber=res.msg.orderCode
		   this.orderId=res.msg.orderId
		   this.wxPay(orderNumber)
		},
		async  wxPay(orderNumber){
			const result=await advancePay(this.token,orderNumber)
			console.log(result)
			//console.log(res)
			if(result){
				uni.hideLoading()
			}
			var that=this
			uni.requestPayment({
				provider: 'wxpay',
				timeStamp: result.data.timeStamp,
				nonceStr: result.data.nonceStr,
				package: result.data.package,
				signType: result.data.signType,
				paySign: result.data.paySign,
				success: function (res) {
					console.log(res);
					uni.showToast({
						title:'支付成功',
						icon:'none'
					})
					var index=2
					uni.navigateTo({
						url:'../personal/myolder/whole?index='+index+'&state='+'配送中'
					})
				},
				fail: function (err) {
					console.log(err);
					var index=1
					uni.navigateTo({
						url:'../personal/myolder/whole?index='+index+'&state='+'待支付'
					})
				}
			});
		},
			goAddress(){
				uni.navigateTo({
					url:'../shippingAddress/shippingAddress'
				})
			},
			goRemarks(){
				if(this.msg=='商品、配送补充说明'){
				uni.navigateTo({
					url:'../remarks/remarks'
				})
				}else{
					uni.navigateTo({
						url:'../remarks/remarks?value='+this.msg
					})
				}
			},
			openList(){
				this.isShow=true
			},
			close(){
				this.isShow=false
			},
		async  getCouponList(){
				const res=await showCoupon(this.token,JSON.stringify(this.goodsList),this.totalPrice)
				console.log(res)
				this.allCoupon=res.data
				this.usefulCount=res.usefulCount
				this.manPrice=res.data[0].fullDiscountPrice
			},
			radioChange(index,item,e){
				this.current=index
				this.useId=item.id
				console.log(item)
				//console.log(this.totalPrice)
				console.log(e)
			if(item.couponType=='满减券'){
					this.chooseCoupon=e.detail.value
					console.log(this.chooseCoupon)//20
					if(this.totalPrice>=this.manPrice){
						let total=this.totalPrice
						console.log(total)//105
						/*if(total==this.chooseCoupon){
							console.log(total)
							console.log(111111111)
							console.log(this.chooseCoupon)
							this.afterPrice=0
						}else{*/
							this.afterPrice=(total-this.chooseCoupon).toFixed(2)
							console.log(this.afterPrice)
							if(this.afterPrice<0){
								this.afterPrice=0
							}
						//}
					}
			}else if(item.couponType=='折扣券'){
				if(item.usableType==74){
					let total=this.totalPrice
					this.chooseCoupon=(total-total*(e.detail.value/100)).toFixed(2)
					this.afterPrice=total*(e.detail.value/100)
				}else if(item.usableType==76){
					this.afterPrice=0
					let total=this.totalPrice
					console.log(total)
					let copyList=JSON.stringify(this.goodsList)
					JSON.parse(copyList).forEach(goods=>{
						if(goods.goodsId==item.goodsId){
							goods.goodsPrice=goods.goodsPrice*(e.detail.value/100)
						}
					})
					JSON.parse(copyList).map(goodItem => {
						this.afterPrice += goodItem.orderCount*goodItem.goodsPrice 
					})
					console.log(total-this.afterPrice)
					this.chooseCoupon=total-this.afterPrice
				}else if(item.usableType==75){//指定分类
					this.afterPrice=0
					let total=this.totalPrice
					console.log(total)
					let copyList=JSON.stringify(this.goodsList)
					JSON.parse(copyList).forEach(goods=>{
						if(goods.goodsCategory==item.goodsCategory){
							//goods.goodsPrice=goods.goodsPrice*(e.detail.value/100)
							//this.totalOne=0
							this.totalOne+=(goods.orderCount*goods.goodsPrice)*(e.detail.value/100)
						}else{
							//this.totalTwo=0
							this.totalTwo+=goods.orderCount*goods.goodsPrice 
						}
					})
					this.afterPrice=this.totalOne+this.totalTwo
					/*JSON.parse(copyList).map(goodItem => {
						this.afterPrice += goodItem.orderCount*goodItem.goodsPrice 
					})*/
					console.log(total-this.afterPrice)
					this.chooseCoupon=total-this.afterPrice
				}
			}else if(item.couponType=='兑换券'){
				if(this.totalNum>1){
					uni.showModal({
					    title: '提示',
					    content: '限定商品数量为1，不能使用',
						showCancel: false,
						confirmText: '确定',
					    success: function (res) {
					        
					    }
					})
				}else{
					this.chooseCoupon=this.totalPrice
					this.afterPrice=0
				}
			}
		} 
		}
	}
</script>

<style lang="scss">
	page{
	   height:100%
	}
	
	.orderset{
		width: 100%;
		padding: 20rpx;
		height: 100%;
		position: relative;
		.coupon{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.5);
			.couponlist{
				position: absolute;
				left: 0;
				top:50%;
				width: 100%;
				//height: 50%;
				background-color: #F6F6F6;
				.top{
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;
					background-color: #fff;
					padding: 20rpx;
					position: relative;
					.guanbi{
						position: absolute;
						left: 20rpx;
						top: 20rpx;
					}
					.down{
						width: 100%;
						display: flex;
						justify-content: space-between;
					}
				}
				.showList{
					padding: 30rpx;
					.card{
						width: 100%;
						height: 200rpx;
						background-color: #fff;
						display: flex;
						padding: 20rpx;
						align-items: center;
						border: 1px solid #eee;
						
					}
					.rule{
						display: flex;
						justify-content: space-between;
						background-color: #fff;
						padding: 0 20rpx;
					}
				}
			}
		}
		
		.myhome,.setproduct{
			background-color: #fff;
			border-radius: 20rpx;
			
			
			.homecont{
				padding: 20rpx;
				display: flex;
				justify-content: space-between;
				// border-bottom: 2rpx solid #ccc;
				.cuIcon-right{
					align-self:center;
				}
				
				.homebor{
					border-radius: 20rpx;
					background-color: rgb(242,242,242);
					color: rgb(180,180,180);
					width: 150rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
				}
				.bottomBlock{
					display: flex;
					align-self: center;
					margin-left: 20rpx;
				}
				.homeadd{
					margin-left:30rpx ;
				}
			}
			.settime{
				padding: 10rpx 30rpx;
			}
			.settime,.setright{
				display: flex;
				justify-content: space-between;
				
				text,.cuIcon-right{
					height: 104rpx;
					line-height: 104rpx;
				}
				.setpro{
					font-size: 36rpx;
					font-weight: bold;
				}
				.setright{
					.setdate{
						margin-right:20rpx;
						color: #ccc;
					}
				}
				
			}
		}
		
		.setproduct{
			margin-top:40rpx;
			.endproduct{
				margin-bottom:20rpx;
				padding: 40rpx 0 0;
				.head{
					padding-left: 20rpx;
					padding-right: 40rpx;
					display: flex;
					justify-content: space-between;
				}
				.proimg{
					padding: 0 20rpx;
					margin-top: 20rpx;
					.producttycont{
						display: flex;
						.detail{
							margin-left: 40rpx;
						}
						.producttys{
							width: 100rpx;
							height: 100rpx;
							image{
								width: 100%;
								height: 100%;
							}
						}
					}
				}
				.proimg,.piecenum{
					display: flex;
					justify-content: space-between;	
						
					}
					.piecenum,.cuIcon-right{
						
						
						
						text{
							margin-right: 30rpx;
							
						}
					}
				}
				
				.amount{
					border-bottom: 2rpx solid #eee;
					
					.amountbot{
						padding: 20rpx;
						display: flex;
						justify-content: space-between;
						
						text{
							font-size: 30rpx;
						}
					}
					
				}
				
				.pieces{
					
					.piecepro{
						padding: 30rpx 20rpx;
						display: flex;
						justify-content: space-between;
						border-bottom: 2rpx solid #eee;
						text{
							font-size: 30rpx;
						}
					}
				}
				.setdistribution{
					height: 100rpx;
					line-height: 100rpx;
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #eee;
					padding:0 20rpx;
				}
				.total{
					height: 100rpx;
					line-height: 100rpx;
					display: flex;
					justify-content: space-between;
					padding:0 20rpx;
					font-size: 30rpx;
				}
			}
		}
	
	  .beizhu{
		  display: flex;
		  justify-content: space-between;
		  padding-left: 20rpx;
		  background-color: #fff;
		  border-radius: 20rpx;
		  height: 100rpx;
		  line-height: 100rpx;
		  font-size: 32rpx;
		  .right{
			  display: flex;
			  align-items: center;
		  }
	  }
	.setbottom{
			margin-top:20rpx;
			width: 100%;
			position: fixed;
			left:0;
			bottom: 0;
			background-color: rgb(228,228,228);
			
			
			
			.setends{
				padding-left: 30rpx;
				display: flex;
				justify-content: space-between;
				background-color: #FFFFFF;
				.endscont{
					font-size: 30rpx;
					.discount{
						color: rgb(155,155,155);
					}
					text{
						display: block;
					}
				}
				.endbutton{
					height: 100rpx;
					line-height: 100rpx;
					width: 180rpx;
					color: #fff;
					background-color: #F86500;
					text-align: center;
				}
			}
		}
	
	.addHome{
		width: 230rpx;
		height: 80rpx;
		border: 2rpx solid #04C891;
		color: #04C891;
		line-height: 80rpx;
		margin: 0 auto;
		text-align: center;
		border-radius: 40rpx;
	}
	.active{
		color: #ccc!important;
	}
</style>
	

