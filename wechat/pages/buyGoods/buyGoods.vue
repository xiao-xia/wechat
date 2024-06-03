<template>
	<view class="container">
		<view class="orderset">
			<view class="myhome">
				<view class="homecont" @click="goAddress">
					<view class="homeaddress">
						<image src="../../static/orderImg/address.png" mode="" class="img"></image>
						<view class="add" v-if="addressList.receiverName">
							<view class="up">
								{{selectedObj.receiverCell||addressList.receiverCell}}
							</view>
							<view class="down">
								{{selectedObj.receiverName||addressList.receiverName}}({{selectedObj.receiverSex||addressList.receiverSex}}) {{selectedObj.receiverTel||addressList.receiverTel}} 
							</view>
						</view>
						<view class="up" v-else style="margin-left: 20rpx">
							新增收货地址
						</view>
					</view>
					<view class="cuIcon-right right" ></view>
				</view>
			</view>
			<view class="" style="width: 100%;height: 20rpx;"></view>
			<view class="myhome">
				<view class="homecont" @click="establish">
					<view class="homeaddress">
						<image src="../../static/orderImg/qiye.png" mode="" class="img"></image>
						<view class="add"  v-if="eatablishData.companyName">
							<view class="up">
								{{eatablishObj.companyName||eatablishData.companyName}}
							</view>
							<view class="down">
								{{eatablishObj.companyContactName||eatablishData.companyContactName}} {{eatablishObj.companyMobile||eatablishData.companyMobile}}
							</view>
						</view>
						<view class="up" v-else style="margin-left: 20rpx">
							新增企业信息
						</view>
					</view>
					<view class="cuIcon-right right"></view>
				</view>
			</view>
			<view class="setproduct">
				<view class="endproduct">
					<view class="head">
						<text>订单信息</text>
						<text>{{goodsObj.goodsNums}}件</text>
					</view>
					<view class="proimg" v-if="goodsObj.goodsSpecificationName">
							<view class="producttycont">
								<view class="producttys">
									<image class="producttyimg" :src="goodsObj.goodsMainImage" mode=""></image>
								</view>
								<view class="detail">
									<view class="brandName">
										{{goodsObj.goodsSpecificationName}}
									</view>
									<view class="brandPrice">
										¥{{goodsData.goodsReceiptsPrice||goodsData.seckillPrice}}
									</view>
								</view>
							</view>
						<view class="piecenum" >
							<view class="productchange">
								<!-- <view class="productJian">
									<image src="../../static/product/jian.png"></image>
								</view> -->
								<text style="margin:10rpx;">x{{goodsObj.goodsNums}}</text>
								<!-- <view class="productJia">
									<image src="../../static/product/jia.png"></image>
								</view> -->
							</view>
						</view>
					</view>
					
					<!-- 购物车 -->
					<view class="proimg" v-else v-for="(item,index) in sentdata" :key='item.goodsId'>
							<view class="producttycont">
								<view class="producttys">
									<image class="producttyimg" :src="item.goodsDetailImage" mode=""></image>
								</view>
								<view class="replenishment" v-if="item.status==false">
									<view class="progressMent">已下架</view>
								</view>
								<view class="detail">
									<view class="brandName">
										{{item.goodsSpecificationName}}
									</view>
									<view class="brandPrice" v-if="item.goodsPrice">
										¥{{item.goodsPrice}}
									</view>
									<view class="brandPrice" v-else>
										¥{{item.goodsPresentPrice}}
									</view>
								</view>
							</view>
						<view class="piecenum" >
							<view class="productchange">
								<text style="margin:10rpx;">x{{item.goodsNums||item.goodsNum}}</text>
							</view>
						</view>
					</view>

					<view class="amount">
						<view class="amountbot">
							<text>总价</text>
							<text style="font-weight: bold;margin-right: 30rpx;">￥{{totalPrice||totalPrices||seckilltotal}}</text>
						</view>
					</view>
					<view class="pieces">
						<view class="piecepro" v-if="goodsData.seckillPrice">
							<view class="">
								<text>抵用券</text>
								<text style="margin-left: 10rpx;color: rgb(195,195,195);">(0张可用)</text>
							</view>
							<view class="right">
								<text style="font-weight: bold;">￥-{{couponPrices}}</text>
								<text class="cuIcon-right" style="color: #A4A5A5;"></text>
							</view>
						</view>
						<view class="piecepro" v-else>
							<view class="">
								<text>抵用券</text>
								<text style="margin-left: 10rpx;color: rgb(195,195,195);">({{totalNUm}}张可用)</text>
							</view>
							<view class="right" @click="openList">
								<text style="font-weight: bold;">￥-{{couponPrices}}</text>
								<text class="cuIcon-right" style="color: #A4A5A5;"></text>
							</view>
						</view>
					</view>
					<!-- <view class="setdistribution">
						<view @click="delivery" style="line-height: 100rpx; align-items: center; display: flex;">
							<text>快递费</text>
							<image style="width: 30rpx;height: 30rpx; margin-left: 8rpx;" src="../../static/orderImg/question.png"></image>
						</view>
							<text style="font-weight: bold;margin-right: 30rpx;">￥{{Expressfee}}</text>
					</view> -->
					<view class="total">
						<text>合计</text>
						<text style="font-weight: bold;margin-right: 30rpx;color: red;font-size: 34rpx;">¥{{totalcoupon||seckillcoupon||nocouponTotal}}</text>
					</view>
				</view>
			</view>
			<view class="beizhu">
				<text>备注</text>
				<view class="right" @click="goRemarks">
					<view class="remarkmsg">{{msg}}</view>
					<text class="cuIcon-right" style="color: #A4A5A5;margin-right: 20rpx;"></text>
				</view>
			</view>
			<view class="box" style="height: 170rpx;">
				
			</view>
			<view class="advertisement" v-if="memberData.membershipStatus == '0'">
				<view class="left">
					开通企瑞宝立减500元
				</view>
				<view class="right">
					<text class="kai" @click="activate()">立即开通</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="setbottom" >
				<view class="setends">
					<view class="endscont">
						<text class="endcope">应付金额 ￥{{totalcoupon||seckillcoupon||nocouponTotal}}</text>
						<text class="discount">已优惠 ￥{{Preferential}}</text>
					</view>
					<view class="endbutton" @click="orderpays">
						确认订单
					</view>
				</view>
			</view>
			
			<view class="cu-modal bottom-modal " :class="bottomshow?'show':''" >
				<view class="cu-dialog">
					<view class="cu-bar bg-white">
						<view class="specibox">
							<view class="Trademark">
								<view class="brand">
									支付方式
								</view>
							</view>
						</view>
						<view class="cuIcon-roundclose guan" @tap="hideModal"></view>
					</view>
					<view class="payItem">
						<radio-group name="" @change="radioChange">
							<view class="radioBlock" v-for="(item,index) in radioArr" :key="index">
								<view class="radioLeft">
									<image class="radioIcon" :src="item.img" mode=""></image>
									<view class="radioName">{{item.name}}</view>
								</view>
								<radio class="radioStyle blue" :value="item.name" :checked="index === currentRadio" />
							</view>
						</radio-group>
					</view>
					<view class="informent" v-if="currentRadio==1">
						<view class="infoItem">
							<view class="title">
								企瑞宝对公账户信息
							</view>
							<view class="content">
								开户名称：{{Bankobj.depositBank}}
							</view>
							<view class="content">
								开户银行：{{Bankobj.AccountBame}}
							</view>
							<view class="content">
								银行卡号：{{Bankobj.depositBank}}
							</view>
							<view class="botton">
								<view class="copy" @click="copytext">
									复制
								</view>
							</view>
						</view>
					</view>
					<!-- <view class="" style="border: 5rpx solid #ccc; width: 100%;"></view> -->
					<view class="now" v-if="currentRadio==1">
						<view class="title">
							线下支付须知:
						</view>
						<view class="content">
							由于企业网银到账时间由银行系统转账时间决定，因此我们确认收款与您的转账时间有-定间隔期，会导致您的转账未能及时到账，我们以收到您的实际转账为准，请您谅解。
						</view>
					</view>
					<view class="" style="width: 100%;height: 100rpx;"></view>
					<view class="setbottom" >
						<view class="setends">
							<view class="endscont">
								<text class="endcope">应付金额 ￥{{totalcoupon||seckillcoupon}}</text>
								<text class="discount" style="text-align: left;">已优惠 ￥{{Preferential}}</text>
							</view>
							<view class="endbutton" @click="comfirmList()">
								确认支付
							</view>
						</view>
					</view>
					
				</view>
			</view>
			<pay v-if="ordershow" :orderCode="orderCode" :orderId="orderId"></pay>
			<!-- 抵用券 -->
			<view class="coupon" v-if="isShow">
				<view class="couponlist">
					<view class="top">
						<text class="cuIcon-close guanbi" @click="close"></text>
						<view class="up" style="width: 100%;text-align: center;">
							抵用券
						</view>
					</view>
					<scroll-view scroll-y="true" style="height: 600rpx;">
						<view class="VoucherBack">
						<view class="VoucherMove" v-for="(item,index) in couponData" :key="index" v-if="item.available!=='购买价格未达到使用门槛'">
						<radio-group @change="radioChangees(index,item,$event)">
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
								<view class="">
									<radio :checked="index==current"  :value="item.couponPrice" :disabled="item.isUseful==false" style="transform:scale(0.7)"/>
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
						</radio-group>
							</view>
						</view>
						
						<view class="overBack">
							<view class="overMove" v-for="(item,index) in couponData" :key="index"  v-if="item.available=='购买价格未达到使用门槛'">
								<view class="overRule">
									<view>
										<view class="overBox">
											<view class="overPrice">
												<view class="overCoupon">￥</view>
												<view class="overfullPrice">{{item.couponPrice}}</view>
											</view>
											<view class="overPriceBack">
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
									<view class="overimmediately">
										不符合
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
					</scroll-view>
					
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
	import pay from '../../components/pay.vue'
	import { defaultAddress } from '../../API/defaultAddresss/index.js'
	import { add } from '../../API/olderArr/index.js'
	import { payadd,advancePay } from '../../API/orderpay/index.js'
	import {showCoupon } from '../../API/couponArr/index.js'
	import { getAddress }from '../../API/addressArr/index.js';
	import { companyList } from '../../API/eatablishment/index.js'
	import { getMemberMsg } from '../../API/personArr/index.js'
	import { CouponRecordList } from '../../API/couponArr/index.js'
	export default{
		data(){
			return{
				godetailPrice:'',
				orderPrice:0,
				ducetotalPrices:'',
				typeData:[],
				godetailData:[],
				ReceiptPrice:'',
				current:-1,
				ordershow:false,
				show:false,
				ayChoose:false,
				orderCode:'',
				orderId:'',
				addressObj:{},
				selectedObj:{},
				eatablishObj:{},
				payitem:'',
				payitemtotal:'',
				// Specifid:'',
				addressObj:{},
				eatablishData:{},
				couponData:[
					/* couponName:'测试优惠券',
					usefulEndTime:'2021-02-14',
					usefulStartTime:'2021-01-02',
				},*/],
				msg:'选填，补充说明',
				goodsObj:{},
				totalPrices:'',
				totalPrice:'',
				seckilltotal:'',
				seckillcoupon:'',
				totalcoupon:0,
				nocouponTotal:0,
				id:'',
				goodsData:{},
				goodsArr:[],
				sentdata:[],
				sentItem:[],
				PayableData:[],
				numData:[],
				isShow:false,
				bottomshow:false,
				addressList:{},
				radioArr: [
					{img:"../../static/orderImg/wx.png",name:"微信支付"},
					{img:"../../static/orderImg/yhk.png",name:"线下支付"},
				],
				currentRadio: 0,
				currentRadioes: 0,
				couponPrices:0,
				Expressfee:0,
				Preferential:0,
				payable:'',
				couponStatus:'0',
				goodsCouponId:'',
				TypeCouponId:'',
				goodsCouponIdData:[],
				TypeCouponIdData:[],
				seckillData:[],
				goCartData:[],
				confirmData:[],
				againData:[],
				usableGoods:'',
				usableType:'',
				willBuyGoods:'',
				willBuyType:'',
				couponId:'',
				couponPrice:'',
				goodarr:'',
				totalNUm:0,
				remark:'',
				seckillGoodsId:'',
				Bankobj:{
					depositBank:'企瑞宝科技有限公司',
					AccountBame:'XXXXX银行有限公司福州分行营业厅',
					cardNumber:'8888 8888 8888 8888'
				}
				
			}
		},
		components:{
			pay
		},
		onLoad(options) {
			this.getMember()
			//详情页面
			if(options.goodsItem){
				console.log(111)
				console.log(options)
				let goodsItem=JSON.parse(options.goodsItem)
				this.goodsObj=goodsItem
				this.goodsObj.goodsMainImage = JSON.parse(decodeURIComponent(this.goodsObj.goodsMainImage))
				console.log(this.goodsObj)
				this.goodsCouponId = this.goodsObj.goodsId //优惠券
				console.log(this.goodsCouponId)
				this.TypeCouponId = this.goodsObj.superiorId //优惠券
				console.log(this.TypeCouponId)
				this.willBuyGoods = this.goodsCouponId
				this.willBuyType = this.TypeCouponId
				this.goodsData.goodsSpecification=this.goodsObj.goodsSpecificationName
				this.goodsData.id = this.goodsObj.goodsSpecificationId
				this.goodsData.goodsNums=this.goodsObj.goodsNums
				var numarr =[]
				numarr.push(this.goodsData.goodsNums)
				this.numData = numarr
				console.log(this.numData)
				this.goodsData.seckillOrder = 0
			} else if(options.seckillItem){ //秒杀页面
				console.log(222)
				console.log(options)
				let seckilltem=JSON.parse(options.seckillItem)
				this.goodsObj=seckilltem
				this.goodsData.goodsSpecification=this.goodsObj.goodsSpecificationName
				this.goodsData.id = this.goodsObj.seckillGoodsSpecificationId
				this.goodsData.goodsNums=this.goodsObj.goodsNums
				this.seckillGoodsId = this.goodsObj.seckillGoodsId
				console.log(this.seckillGoodsId)
				this.goodsObj.goodsMainImage = JSON.parse(decodeURIComponent(this.goodsObj.goodsMainImage))
				var numarr =[]
				numarr.push(this.goodsData.goodsNums)
				this.numData = numarr //每个数量
				console.log(this.numData)
				
				this.goodsData.seckillPrice=this.goodsObj.seckillPrice
				var priceArr = []
				var priceObj={};
				priceObj= this.goodsObj.seckillPrice * this.goodsData.goodsNums
				priceArr.push(priceObj)
				this.seckillData = priceArr
				console.log(this.seckillData)//每个价钱
				this.ReceiptPrice = this.seckillData
				console.log(this.ReceiptPrice)
				this.goodsData.seckillOrder = 1
				this.getseckill()
				console.log(this.goodsData.seckillPrice)
			}else if(options.orderItem){ //再来一单
			  this.goodsData.seckillOrder = 0
				console.log(333)
				console.log(options)
				this.goodsObj.goodsNums = options.goodsNums//总数量
				this.TypeCouponIdData=JSON.parse(options.goodVo)//优惠券typeId
				console.log(this.TypeCouponIdData)
				this.sentdata =JSON.parse(options.orderItem)
				console.log(this.sentdata)
				var confirmArr = [] //每个价钱
				var numarr = [] //每个数量
				var Specifid = [] //规格id
				this.totalgoods=0
				this.sentdata.forEach(item=>{
					if(item.status==false){
						item.goodsNum = 0
					}
					if(item.goodsPrice>0){
						var a =item.goodsPrice
						var b =item.goodsNum
						var c= a*b
						console.log(c)
						this.orderPrice = this.orderPrice+c
					}
					console.log(this.orderPrice)
					this.totalPrices =this.orderPrice//总价
					item.goodsDetailImage = JSON.parse(decodeURIComponent(item.goodsSmallImage))
					//每个goodsId
					var Couponobj={};
					Couponobj = item.goodsId
					if(item.goodsPrice>0){
						this.goodsCouponIdData.push(Couponobj)//优惠券id
						this.willBuyGoods = this.goodsCouponIdData
						this.willBuyType = this.TypeCouponIdData
						console.log(this.goodsCouponIdData)
						console.log(this.willBuyType)
					}
					//每个价格
					var firobj={};
					var firobjNum={}
					var firobjnumPrice = {}
					if(item.goodsPrice){
						firobj= item.goodsPrice
						firobjNum = item.goodsNum
						firobjnumPrice = firobj * firobjNum //价格和数量相乘
						confirmArr.push(firobjnumPrice)  
					}
					this.goCartData= confirmArr
					console.log(this.goCartData)
					this.ReceiptPrice =this.goCartData //不使用优惠券为空
					//每个规格id
					if(item.goodsPrice){
						var idobj={};
						idobj = item.goodsSpecificationId
						Specifid.push(idobj)
					}
					//每个数量
					if(item.goodsPrice){
						var numobj={};
						numobj = item.goodsNum
						numarr.push(numobj) //每个数量
					}
					
				})
				this.goodsData.id = Specifid
				this.numData = numarr
				console.log(this.goodsData.id)
				console.log(this.numData)
			}else{ //购物车
				console.log(444)
				console.log(options)
				this.sentdata=JSON.parse(options.list)
				console.log(this.goodsCouponId)
				console.log(this.TypeCouponId)
				var goCartArr = [] //每个价钱
				var numarr = [] //每个数量
				var Specifid = [] //规格id
				console.log(this.sentdata)
				this.sentdata.forEach((item,index)=>{
					item.goodsDetailImage = JSON.parse(decodeURIComponent(item.goodsDetailImage))
					var obj={};
					var objNum={}
					var objnumPrice = {}
					console.log(123123)
					console.log(goCartArr)
					if(item.goodsPresentPrice){
						obj= item.goodsPresentPrice
						objNum = item.goodsNums
						objnumPrice = obj * objNum //价格和数量相乘
						goCartArr.push(objnumPrice) 
					}
					this.goCartData= goCartArr//每个价钱
					console.log(this.goCartData)
					this.ReceiptPrice =this.goCartData //不使用优惠券为空
					var numobj={};
					numobj = item.goodsNums
					numarr.push(numobj) //每个数量
					
					var idobj={};
					idobj = item.goodsSpecificationId //规格id
					Specifid.push(idobj) //每个规格id
					
					var Couponobj={};
					Couponobj = item.goodsId
					this.goodsCouponIdData.push(Couponobj)//优惠券id
					this.TypeCouponIdData.push(item.superiorId)//优惠券
				})
				console.log(this.goodsCouponIdData)
				console.log(this.TypeCouponIdData)
				this.willBuyGoods = this.goodsCouponIdData
				this.willBuyType = this.TypeCouponIdData
				
				this.numData = numarr
				this.goodsData.id = Specifid
				console.log(this.numData)
				console.log(this.goodsData.id)
				this.goodsObj.goodsNums = options.goodsNums//数量
				this.goodsData.goodsNums=this.goodsObj.goodsNums
				this.totalPrices = options.totalPrice//总价
				this.goodsData.seckillOrder = 0
			}
		},
		onShow() {
			this.getAddressList()
			this.getcompanyList()
			// this.getCoupon()
			//接收地址的数据
			uni.$on('select', (data)=>{
			    // data即为传过来的值
			  console.log(data);
				if(data.receiverSex==1){
					data.receiverSex = '女士'
				} else if(data.receiverSex==0){
					data.receiverSex = '先生'
				}
				this.selectedObj=data
			});
			console.log(this.selectedObj)
			
			//接收企业的数据
			uni.$on('selectment', (data)=>{
			  console.log(data);
				this.eatablishObj=data
			});
			console.log(this.eatablishObj)
			uni.$on('beizhu',(data)=>{
				console.log(data)
				if(data.text!=''){
					this.msg=data.text
					this.remark = this.msg
				}else{
					this.msg='选填，补充说明'
				}
			})
			
		},
		computed:{
			...mapState(['unfoin','token','userInfo'])
		},
		methods:{
			copytext(){
				uni.setClipboardData({
					//准备复制的数据
					data:this.Bankobj.depositBank + this.Bankobj.AccountBame + this.Bankobj.cardNumber,
					success: function (res) {
						uni.showToast({
							title: '复制成功',
							icon:'none'
						});
					}
				})
			},
			
			//优惠券
			async getCoupon(){
				if(this.TypeCouponId){
					var str = this.TypeCouponId
				} else{
					var str = this.TypeCouponIdData.join(","); //goodsTypeId
					console.log(str)
				}
				console.log(this.godetailPrice)
				if(this.godetailPrice){
					var ptr = this.godetailPrice
					console.log(ptr)
				} else if(this.goCartData){
					var ptr = this.goCartData.join(",");//price2 每个价格
					console.log(ptr)
				}
				
				if(this.goodsCouponId){
					var gtr = this.goodsCouponId
				} else{
					var gtr = this.goodsCouponIdData.join(",");
				}
				const res = await CouponRecordList(this.token,this.couponStatus,str,ptr,gtr);
				console.log(res)
				this.couponData = res.data
				this.totalNUm=this.couponData.length
				console.log(this.couponData)
				this.couponData.forEach((item,index)=>{
					//全场通用
					if(item.usableGoods){
						console.log(123)
						var str = item.usableGoods
						var arr = str.split(",")
						console.log(arr)
						item.arr = arr
						//循环对比 单个"指定商品"
						// console.log(index)
						/* arr.forEach(item=>{
							// this.goodarr = item
							console.log(item)
							console.log(this.goodsCouponId)
								if(item==this.goodsCouponId){
									this.couponData[index].goodStatus = true
									this.totalNUm++
								}
						}) */
					}
					/* if(item.usableRange=='全场通用'){
						this.totalNUm++
					} */
				})
				console.log(this.totalNUm)
				console.log(this.couponData)
			},		
			
			//地址
			async getAddressList(){
				console.log(this.token)
				const res = await getAddress(this.token)
				console.log(res)
				this.addressList = res.data.records[0];
				console.log('123123123123!!!!!!!!!!!!!!!!s')
				console.log(this.addressList)
				if(this.addressList.receiverSex== '0'){
					this.addressList.receiverSex = '先生'
				}else{
					this.addressList.receiverSex = '女士'
				}
			},
			//企业
			async getcompanyList(){
				const res=await companyList(this.token)
				this.eatablishData = res.data[0];
				console.log(this.eatablishData)
			},
			
			getseckill(){ //秒杀
				if(this.goodsData.seckillPrice){
					console.log(1111)
					this.goodsData.seckillPrice=this.goodsObj.seckillPrice//原价
					this.seckilltotal = this.goodsObj.seckillPrice * this.goodsObj.goodsNums//总价
					this.seckillcoupon = this.seckilltotal - this.couponPrices + this.Expressfee//应付金额
					console.log(this.seckilltotal)
					console.log(this.seckillcoupon)
				}
			},
			//判断是否会员
			async getMember(){ //商品详情
				const res=await getMemberMsg(this.token);
				this.memberData = res.data
				console.log(this.memberData)
				if(this.memberData.membershipStatus == '0'){
					this.goodsData.goodsReceiptsPrice=this.goodsObj.goodsPresentPrice//原价
					console.log(this.goodsData.goodsReceiptsPrice)
					this.godetailData.push(this.goodsData.goodsReceiptsPrice * this.goodsObj.goodsNums)
					console.log(this.godetailData)  //价钱和数量相乘
					this.godetailData.forEach(item=>{
						this.godetailPrice = item
					})
					console.log(godetailPrice)
					if(this.ReceiptPrice.length==0){
						this.ReceiptPrice = this.godetailData
					}
					this.totalPrice = this.goodsObj.goodsPresentPrice * this.goodsObj.goodsNums//总价
					this.totalcoupon = this.totalPrice - this.couponPrices + this.Expressfee //应付金额
					this.Preferential = this.couponPrices//已优惠价
					
					if(this.totalPrices){  //购物车传来数据
						this.totalcoupon = this.totalPrices - this.couponPrices + this.Expressfee//应付金额
						this.Preferential = this.couponPrices//已优惠价
						console.log(this.totalcoupon)
					}
				} else if(this.memberData.membershipStatus == '1'){ //商品详情
					this.goodsData.goodsReceiptsPrice=this.goodsObj.goodsVipPrice//会员价
					this.godetailData.push(this.goodsData.goodsReceiptsPrice * this.goodsObj.goodsNums)
					console.log(this.godetailData) //价钱和数量相乘
					this.godetailData.forEach(item=>{
						this.godetailPrice = item
					})
					console.log(this.godetailPrice)
					if(this.ReceiptPrice.length==0){
						this.ReceiptPrice = this.godetailData
					}
					this.totalPrice = this.goodsObj.goodsVipPrice * this.goodsObj.goodsNums//会员总价
					this.totalcoupon = this.totalPrice - this.couponPrices +this.Expressfee//会员应付金额
					// this.Preferential = this.couponPrices//会员已优惠价
					console.log(this.totalPrices)
					
					if(this.totalPrices){  //购物车传来数据传来数据
						this.totalcoupon = this.totalPrices - this.couponPrices +this.Expressfee//应付金额
						console.log(this.totalcoupon)
						this.Preferential = this.couponPrices
						this.totalPrice = this.totalPrices
					}
				}	
				this.getCoupon()
			},
			
			//确认支付
			async comfirmList() {
				if(null == this.token || '' == this.token){
					var timer = setTimeout(function() {
						uni.navigateTo({
							url: '../login/login'
						})
					}, 1500);
				}
				if(this.currentRadio==null){
					return showToast('请选择支付方式')
				}
				if(this.seckilltotal&&this.seckillcoupon){
					this.totalPrice = this.seckilltotal
					this.totalcoupon = this.seckillcoupon
				}
				if(this.seckillData.length!==0){//秒杀
					console.log(111)
					this.PayableData = this.seckillData
					console.log(this.PayableData)
				}else if(this.goCartData.length!==0){//购物车
					console.log(222)
					this.PayableData = this.goCartData
					console.log(this.PayableData)
				}else if(this.godetailData.length>0){
					console.log(333)
					this.PayableData = this.godetailData
					console.log(this.PayableData)
				}
				console.log(this.PayableData)
				console.log(this.ReceiptPrice)
				const res = await payadd(this.token,this.goodsData.id,this.totalcoupon,this.totalPrice,this.PayableData,this.numData,this.shoppingAddressId,this.receiverTel,this.receiverName,this.companyId,this.goodsData.seckillOrder,this.remark,this.seckillGoodsId,this.ReceiptPrice,this.usableGoods,this.usableType,this.willBuyGoods,this.willBuyType,this.couponId,this.couponPrice);
				console.log(res)
				
				this.payChoose=true
				this.bottomshow=false
				this.ordershow=true
				this.orderCode=res.msg.orderCode
				this.orderCode = this.orderCode
				console.log(this.orderCode)
				this.orderId=res.msg.orderId
			},
			
			//单选优惠券
			radioChangees: function(index,item,e) {
				this.current=index
				console.log(item)
				if(item.usableRange=='指定类型'){
					this.usableType= item.usableType
					this.usableGoods = ''
					this.couponId = item.couponRecordId
					this.couponPrice = item.couponPrice
				} else if(item.usableRange=='指定商品'){
					this.usableGoods= item.usableGoods
					this.usableType = ''
					this.couponId = item.couponRecordId
					this.couponPrice = item.couponPrice
				} else if(item.usableRange=='全场通用'){
					this.usableGoods= ''
					this.usableType = ''
					this.couponId = item.couponRecordId
					this.couponPrice = item.couponPrice
				}
				// console.log(this.goodsCouponIdData)
				// console.log(this.TypeCouponIdData)
				// this.typeData = item.usableType.split(",");
				// console.log(this.typeData)
				// console.log(this.sentdata)
				this.couponPrices = item.couponPrice
				if(this.totalPrice<this.couponPrices){
					this.nocouponTotal=0
					console.log(this.nocouponTotal)
					this.totalcoupon=this.nocouponTotal
				}else{
					this.totalcoupon = this.totalPrice - this.couponPrices +this.Expressfee
					console.log(this.totalcoupon)
				}
				console.log(this.totalcoupon)
				this.Preferential = this.couponPrices
				console.log(this.couponPrices) //优惠券的钱
				console.log(this.PayableData)
				this.PayableData.forEach((item,index)=>{
					console.log(item)
					var payitem = 0
					this.payitemtotal = payitem + item
					console.log(this.payitemtotal)
				})
				console.log(this.payitemtotal)
			
			},
			
			activate(){
				uni.navigateTo({
					url:'../membership/membership'
				})
			},
			myAddress(){
				uni.navigateTo({
					url:'../shippingAddress/shippingAddress'
				})
			},
			//单选支付
			radioChange: function(evt) {
				console.log(evt)
				for (let i = 0; i < this.radioArr.length; i++) {
					if (this.radioArr[i].name === evt.target.value) {
						this.currentRadio = i;
						console.log(this.currentRadio)
						break;
					}
				}
			},
			
			//规则
			openRule(item){
				// console.log(item)
				item.status=!item.status
				console.log(item.status)
			},
			//确认订单
			orderpays(){
				if(!this.addressList){
					uni.showToast({
						title:'请选择收货地址',
						icon:'none'
					})
					return
				}
				if(!this.eatablishData){
					uni.showToast({
						title:'请选择企业信息',
						icon:'none'
					})
					return
				}
				if(this.addressList.shoppingAddressId){ //默认地址信息
					this.shoppingAddressId = this.addressList.shoppingAddressId
					this.receiverTel = this.addressList.receiverTel
					this.receiverName = this.addressList.receiverName
					this.companyId = this.eatablishData.companyId //默认企业信息
					// console.log(this.selectedObj.receiverName)
					// console.log(this.companyId)
					if(this.selectedObj.shoppingAddressId){ //接收地址的数据
						this.addressList.shoppingAddressId = ''//旧的为空
						this.addressList.receiverTel = ''
						this.addressList.receiverName = ''
						this.eatablishData.companyId = ''
						this.shoppingAddressId = ''
						this.companyId = ''
						this.receiverTel = ''
						this.receiverName = ''
						// console.log(this.receiverName)
						// console.log(this.selectedObj.receiverName)
						this.shoppingAddressId = this.selectedObj.shoppingAddressId//接收地址
						this.receiverTel = this.selectedObj.receiverTel
						this.receiverName = this.selectedObj.receiverName
						this.companyId = this.eatablishObj.companyId //接收企业
						// console.log(this.receiverTel)
					}
				}
				this.bottomshow=true;
			},
			establish(){
				uni.navigateTo({
					url:'../personal/establishment/establishment'
				})
			},
			goAddress(){
				uni.navigateTo({
					url:'../shippingAddress/shippingAddress'
				})
			},
			pays(){
				uni.navigateTo({
					url:'../personal/myolder/whole'
				})
			},
			delivery(){
				uni.navigateTo({
					url:'./expressFee'
				})
			},
			hideModal(e) {
				this.bottomshow=false;
			},
			async  wxPay(orderNumber){
				const result=await advancePay(this.token,orderNumber)
				console.log(result)
				//console.log(res)
				if(result){
					uni.hideLoading()
				}
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
					},
					fail: function (err) {
						console.log(err);
						var index=1
						uni.navigateTo({
							url:'../personal/myolder/whole?index='+index
						})
					}
				});
			},
			openList(){
					this.isShow=true
				},
			close(){
				this.isShow=false
			},
			goRemarks(){
				if(this.msg=='选填，补充说明'){
				uni.navigateTo({
					url:'../remarks/remarks'
				})
				}else{
					uni.navigateTo({
						url:'../remarks/remarks?value='+this.msg
					})
				}
			},
		} 
	}
</script>

<style lang="scss">
	.page{
		height: 100%;
	}
	.payments{
		width: 70%;
		height:23%;
		background-color: rgb(102,102,102);
		position: relative;
		left:0;
		right:0;
		bottom:0;
		top:0;
		margin:auto;
		
		.paymentscont{
			padding: 20rpx;
			position: relative;
			
			.payuan{
				position: absolute;
				top:20rpx;
				left:20rpx;
				width: 40rpx;
				height: 40rpx;
				line-height: 40rpx;
				border-radius:50% ;
				font-weight: bold;
				background-color: rgb(51,51,51);
				color: rgb(102,102,102);
				text-align: center;
			}
			.paytent{
				display: flex;
				
				
				.payzhifu{
					width: 100%;
					text-align: center;
					font-size: 34rpx;
					color: #fff;
				}
			}
			.paymoneys{
				height: 80rpx;
				text-align: center;
				line-height: 110rpx;
				font-size: 66rpx;
				color: #ff6600;
			}
		}
		
		.pwass{
			border-top:4rpx solid #fff;
			
			.bortop{
				padding: 20rpx 20rpx;
				display: flex;
				justify-content: space-between;
				
				view{
					width: 60rpx;
					height: 60rpx;
					background-color: #fff;
				}
			}
		}
	}
	.setheight{
		width: 100%;
		height: 150rpx;
	}
	.orderset{
		width: 100%;
		padding: 20rpx;
		width: 100%;
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
				z-index: 1000;
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
						.couponRuleItem {
							width: 100%;
							background-color: #fff;
							position: relative;
							border-radius: 10rpx;
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
					}	
				}
				
				//已过期
				.overBack{
					width: 100%;
					padding: 0 20rpx 20rpx 20rpx;
					.overMove{
						background-image: linear-gradient(to right, #D0D0CF, #D2D2D1);
						box-shadow: 0 5rpx 10rpx #ABCAFB;
						border-radius: 10rpx;
						margin-top: 20rpx;
						.overRule{
							display: flex;
							justify-content: space-around;
							align-items: center;
							.overBox{
								display: flex;
								align-items: center;
								.overPrice{
									display: flex;
									.overCoupon{
										color: #FFFFFF;
										margin-top: 30rpx;
									}	
										.overfullPrice{
											color: #FFFFFF;
											font-size: 100rpx;
										}
								}
								.overPriceBack{
										margin-left: 30rpx;
										.voucherMOre{
											font-size: 40rpx;
											color: #fff;
											overflow: hidden;    
											text-overflow:ellipsis;    
											whitewhite-space: nowrap;
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
							.Effective{
								display: flex;
							}
							.ge{
								height: 150rpx;
								width: 10rpx;
								border-left: 1px #FFFFFF dashed;
							}
							.overimmediately{
								font-size: 31rpx;
								width: 13%;
								color: #fff;
							}
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
				align-items: center;
				// border-bottom: 2rpx solid #ccc;
				.homeaddress{
					display: flex;
					align-items: center;
					.img{
						width: 50rpx;
						height: 50rpx;
					}
					.add{
						margin-left: 20rpx;
						.up{
							
						}
						.down{
							color: #ccc;
						}
					}
				}
				.right{
					color: #ccc;
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
			margin-top:20rpx;
			.endproduct{
				margin-bottom:20rpx;
				padding: 30rpx 0 0;
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
							.brandName{
								font-size: 25rpx;
							}
							.brandPrice{
								font-size: 24rpx;
							}
						}
						.producttys{
							width: 120rpx;
							height: 120rpx;
							flex-shrink: 0;//不让元素进行挤压
							image{
								width: 100%;
								height: 100%;
							}
						}
						.replenishment{
							width: 120rpx;
							height: 120rpx;
							background-color: #CCCCCC;
							// top: 20rpx;
							opacity: 0.8;
							position: absolute;
							justify-content: center;
							display: flex;
							align-items: center;
							.progressMent{
								color: #FFFFFF;
								background-color: #000000;
								border-radius: 50rpx;
								// margin-top: 50rpx;
								display: flex;
								justify-content: center;
								width: 240rpx;
							}
						}
					}
				}
				.proimg,.piecenum{
					display: flex;
					justify-content: space-between;
					align-items: center;
					}
					.productchange{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						.productJian{
							width: 40rpx;
							height: 40rpx;
							image{
								width: 100%;
								height: 100%;
							}
						}
						.productJia{
							width: 40rpx;
							height: 40rpx;
							image{
								width: 100%;
								height: 100%;
							}
						}
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
				width: 80%;
				.remarkmsg{
					width: 550rpx;
					margin-right: 40rpx;
					color: #ccc;
					display: -webkit-box;
					-webkit-box-orient: vertical;    
					-webkit-line-clamp: 1;    
					overflow: hidden;
					text-align: right;
				}
		  }
	  }
	.advertisement{
		position: fixed;
		left:0;
		bottom: 100rpx;
		width: 100%;
		height: 70rpx; 
		align-items: center;
		background-color: #B1D9FB;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		.left{
			color: #41A5FC;
		}
		.right{
			color: #F86500;
		}
	}
	.setbottom{
			margin-top:20rpx;
			width: 100%;
			position: fixed;
			left:0;
			bottom: 0;
			background-color: rgb(228,228,228);
			// border-top: 1rpx solid #f2f2f2;
			z-index: 999;
			
			.setends{
				padding-left: 30rpx;
				display: flex;
				justify-content: space-between;
				background-color: #FFFFFF;
				.endscont{
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
	.guan{
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		font-size: 40rpx;
	}
	.payItem {
		margin-top: 10rpx;
		width: 100%;
		background-color: #fff;
		padding: 20rpx 30rpx;
		
		.radioBlock {
			width: 100%;
			height: 70rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.radioLeft {
				display: flex;
				align-items: center;
				
				.radioIcon {
					width: 50rpx;
					height: 50rpx;
				}
				.radioName {
					font-size: 28rpx;
					color: #101010;
					margin-left: 20rpx;
				}
			}
			
			.radioStyle {
				transform: scale(0.9);
			}
			
		}
	}
	.informent{
		margin-top: 10rpx;
		width: 100%;
		background-color: #fff;
		padding: 20rpx 30rpx;
		.infoItem{
			width: 100%;
			background-image: linear-gradient(to right, #A0CAFD, #D5E5F8);
			border-radius: 20rpx;
			.title{
				color: #5C77EA;
				padding: 20rpx 20rpx;
			}
			.content{
				color:  #5C77EA;
				padding: 0 20rpx;
				text-align: left;
			}
			.botton{
				display: flex;
				justify-content: flex-end;
				margin-right: 40rpx;
				padding: 20rpx 0;
				.copy{
					width: 120rpx;
					height: 50rpx;
					background-color:#5C77EA;
					color: #fff;
					text-align: center;
					border-radius: 40rpx;
				}
			}
		}
	}
	.now{
		margin-top: 10rpx;
		width: 100%;
		background-color: #fff;
		padding: 20rpx 30rpx;
		border-bottom: 1rpx solid #f2f2f2;
		.title{
			padding: 20rpx 20rpx;
		}
		.content{
			padding: 0 20rpx;
			text-align: left;
		}
	}
	.specibox{
		display: flex;
		.Trademark{
			padding: 20rpx;
			.brand{
				color: #333333;
				font-size: 14px;
				font-weight: bold;
			}
			.brandBox{
				display: flex;
				.registratPrice{
					color: #F63737;
					font-size: 40rpx;
				}
				.registratVip{
					font-size: 16px;
					color: #333333;
					margin: 8rpx 0 0 20rpx;
				}
				.brandPrice{
					font-size: 32rpx;
					color: #F63737;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
	

