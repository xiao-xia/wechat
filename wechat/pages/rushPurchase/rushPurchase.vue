<template>
	<view class="detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiperitem" v-for="(item,index) in mainPhoto" :key='index'>
			    <image :src="goodsObj.goodsMainImage"></image>
			</swiper-item>
		</swiper>
		
		<view class="rushItem">
			<view class="timeItem">
				<view class="timePrice">
					<view class="rushItitle">
						<text style="font-size: 24rpx;">￥</text>
						{{goodsObj.goodsSuggestedRetailPrice}}<text style="font-size: 28rpx;color: red;">起</text>
						<view class="Second">秒杀中</view>
					</view>
					<view style="text-decoration: line-through;font-size: 20rpx;color: #FFFFFF;">￥1600</view>
				</view>
				<view class="numItem" v-if="seckillrushing=='正在抢购'">
					<view style="color: #FD0855;font-size: 28rpx;">距结束还剩</view>
					<view class="numBox">
						<view class="num">{{timeHour}}</view>
						<view class="symbol">:</view>
						<view class="num">{{timeMinute}}</view>
						<view class="symbol">:</view>
						<view class="num">{{timeSecond}}</view>
					</view>
				</view>
				<view class="numItem" v-else>
					<view style="color: #FD0855;font-size: 28rpx;">距结束还剩</view>
					<view class="numBox">
						<view class="num">{{latimeHour}}</view>
						<view class="symbol">:</view>
						<view class="num">{{latimeMinute}}</view>
						<view class="symbol">:</view>
						<view class="num">{{latimeSecond}}</view>
					</view>
				</view>		
			</view>
			<view class="contentdetail">
				<view class="productMove">
					<view class="productdetail">
						{{goodsObj.goodsName}}
					</view>
					<view style="font-size: 14px; color: #7B7B7B;">
						已售{{goodsObj.goodsStock}}件
					</view>
				</view>
				
				<view style="display: flex; align-items: center;" v-if="memberData.membershipStatus ==0">
						<view class="activities">
							会员用户才能参与秒杀活动
						</view>
						<view class="detailMoneys" @click="activate">立即开通</view>
						<text style="color: #F63737;" class="cuIcon-right" @click="activate"></text>
				</view>
				<view v-else style="height: 30rpx;"></view>
				<view class="share">
					<text class="cuIcon-share lg"></text>
					<text>分享</text>
					<button open-type="share"></button>
				</view>
				
			</view>
		</view>
		<view class="heng">
		</view>
		<view class="rushdetail">
			<view class="words">
				<view class="left">
					<text style="margin-right: 10px;" >规格</text>		
				</view>
				<view class="right" @click="Specifications">
					<text style="color: #999999;"  v-if="goodsSpecificationName==''">请选择规格</text>
					<text v-else>{{goodsSpecificationName}}</text>
					<text class="cuIcon-right" ></text>
				</view>		
			</view>
			<view class="brief">
				<view class="left" style="margin-right: 10px;">简介</view>
				<view class="right" style="color: #999999;">{{goodsObj.goodsSource}}</view>
			</view>
		</view>
		<view class="heng"></view>
		<view class="commodity">
			<view class="Product">
				<view class="ProductDetail" :class="barcar==index?'Productevaluate':''" v-for="(item,index) in ProductData" :key="item.id" @click="detailClick(index)">
					{{item.productName}}
				</view>
			</view>
			<view v-if="barcar==1">
				<view class="estableTab">
					<view class="services" :class="select==index?'active':''"  v-for="(item,index) in evaluatent" :key='item.id' @click="serviceCliak(index,item)">
						{{item.categoryName}}
					</view>
				</view>
				<view class="orderEvaluate" v-for="(item,index) in assessData">
					<view class="imgSize">
						<image src="../../static/orderImg/head.png"></image>
					</view>
					<view class="Nickname">
						<view class="NicknameTime">
							<text>昵称</text>
							<text style="margin-left: 65%;">2020-11-01</text>
						</view>
						<text style="color: #FFDA44;" class="cuIcon-favorfill"></text>
						<text style="color: #FFDA44;" class="cuIcon-favorfill"></text>
						<text style="color: #FFDA44;" class="cuIcon-favorfill"></text>
						<text style="color: #FFDA44;" class="cuIcon-favorfill"></text>
						<text style="color: #999999;" class="cuIcon-favorfill"></text>
						<br/>
						<text>服务态度很好，专业性很强，效率也很高，我很满意！期待下次再合作</text>
					</view>
				</view>	
			</view>
			<view class="describle" v-if="barcar==0">
				商品详情
				<view class="photo">
					<image :src="goodsObj.goodsMainImage" mode="widthFix"></image>
				</view>
			</view>
		</view>	 
		 
	<view class="detailbottom">
		<view class="detailState">
			<view class="orderBlock" @click="goHome">
				<text style="color: #999999;" class="cuIcon-home lg"></text>
				<view style="font-size: 24rpx;text-align: center;color: #bbb;margin-top: 10rpx;">
					首页
				</view>
			</view>
			<view class="orderBlock">
				<button open-type="contact" class="botttomLeft">
					<image class="customerImg" src="../../static/orderImg/customer.png"></image>
					<view style="font-size: 24rpx;text-align: center;color: #bbb;">
						客服
					</view>
				</button>
			</view>
		    <view class="orderBlock" @click="goCart">
				<text style="color: #999999;" class="cuIcon-cart lg"></text>
				<view style="font-size: 24rpx;text-align: center;color: #bbb;margin-top: 10rpx;">
					购物车
				</view>
				<view class="badge" v-if="flag">
					{{num}}
				</view>
			</view>
		</view>
		<view class="orderbutton">
			<view  class="orderleft">
				加入购物车
			</view>
			
			<view class="orderright" @click="toStart" v-if="seckillrushing=='即将开抢'">
				即将开抢
			</view>
			<view class="orderright" @click="goBuyGoods" v-else>
				立即购买
			</view>
		</view>
	</view>
	<!-- 选择规格 -->
	<view class="cu-modal bottom-modal " :class="bottomshow?'show':''" >
		<view class="cu-dialog">
			<view class="cu-bar bg-white">
				<view class="specibox">
					<view class="SpecificaImg">
						<image :src="goodsObj.goodsMainImage" mode=""></image>
					</view>
					<view class="Trademark">
						<view class="brand">
							{{TrademarkData.goodsSpecificationName}}
						</view>
						<view class="brandBox">
							<view class="registratPrice"><text style="font-size: 24rpx;color: red;">￥</text>{{TrademarkData.seckillPrice}}</view>
							<!-- <view class="registratVip">vip</view>
							<view class="brandPrice"><text style="font-size: 24rpx;color: red;">￥</text>500</view> -->
						</view>
						<text style="color: #CCCCCC;font-size: 12px;display: flex;text-decoration: line-through;"><text style="font-size: 24rpx;">￥</text>{{TrademarkData.goodsOriginalPrice}}</text>
					</view>
				</view>
				<view class="cuIcon-roundclose guan" @tap="hideModal"></view>
			</view>
			<view class="modalItem">
				<view style="display: flex;margin-left: 12rpx;">
					请选择规格
				</view>
				<view class="SelectRegister">
					<view class="RegisterWold" :class="selectBar==index?'active':''"  v-for="(item,index) in Register" :key='item.goodsSpecificationId' @click="selectItem(item,index)">
						{{item.goodsSpecificationName}}
					</view>
				</view>
				<view class="productNumber">
					<view style="margin-left: 20rpx;">数量</view>
					<view class="productchange">
						<view class="productJian" @click="subNum(item)">
							<image src="../../static/product/jian.png"></image>
						</view>
						<text style="margin: 0 10rpx 10rpx 10rpx;">{{payNum}}</text>
						<view class="productJia" @click="increaseNum()">
							<image src="../../static/product/jia.png"></image>
						</view>
					</view>
				</view>
				<view class="determine">
					<view class="buttonColor" @tap="goBuyGoods">
						立即购买
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
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	import {
		showToast,
	} from '../../common/util.js';
	import {
		addNum,deleteNum,updateNum
	} from '../../API/classificationArr/index';
	import {
		getId
	} from '../../API/skeillArr/index.js'
	import {
		getDetail,seckillSpecification
	} from '../../API/goodsDetail/index.js'
	import {
		getMemberMsg
	} from '../../API/personArr/index.js'
	import {
		totalNum
	} from '../../API/classificationArr/index.js'
	import{
		goodsEvaluate
	} from '../../API/evaluate/index.js'
	export default{
		data(){
			return{
				payNum:1,
				select:0,
				barcar:0,
				bottomshow:false,
				pageShow:false,
				// selectBar:'',
				selectBar:-1,
				goodsObj:{},
				goodsEndTime:'',
				timeHour:'00',
				timeMinute:'00',
				timeSecond:'00',
				latimeHour:'00',
				latimeMinute:'00',
				latimeSecond:'00',
				num:'',
				flag:false,
				finalTime:'',
				presentPrice:'',
				originalPrice:'',
				seckillrushing:'',
				mainPhoto:['http://47.93.61.34:8081/trademark.png'],
				assessData:[],
				evaluatent:[{
					categoryName:'好评',
					id:'1',
				},{
					categoryName:'中评',
					id:'2',
				},{
					categoryName:'差评',
					id:'3',
				},],
				Register:[{
					goodsSpecificationName:'商标注册（15-31个工作日）'
				},{
					goodsSpecificationName:'商标注册（15-41个工作日）'
				}],
				goodsSpecificationName:'',
				ProductData:[{
					productName:'商品详情',
					id:'1',
				},{
					productName:'商品评价',
					id:'2',
				}],
				TrademarkData:{},
				goodsNums:'',
				seckillPrice:'',
				goodsPresentPrice:'',
				seckillOrder:'',
				memberData:{},
				seckillGoodsId:'',
				endtime:'',
				loginType:1,
			}
		},
		onLoad(options) {
			this.getMember()
			console.log(options)
			this.endtime= options.seckillEndTime
			this.startime = options.seckillBeginTime
			console.log(this.endtime)
			console.log(this.startime)
			this.seckillGoodsId = options.seckillGoodsId
			this.getData(options.goodsTypeId);
			this.getseckill(options.seckillGoodsId);
			this.seckillOrder = 1
			this.seckillrushing = options.seckillrushing
			console.log(this.seckillrushing)

			this.startTimer()
			this.latimer()
		},
		onShow() {
			this.getCart()
			// this.getDetail()
			
		},
		computed:{
			...mapState(['unfoin','token','userInfo']),
		},
		methods:{
		//定时器
		startTimer() {
			var that = this;
			clearInterval(that.timer)
			that.timer = setInterval(function(){
				that.timerAction()
			},1000)
		},
		latimer(){
			var that = this;
			clearInterval(that.lastimer)
			that.lastimer = setInterval(function(){
				that.lastimerAction()
			},1000)
		}, 

		happenTimeFun(num){ //时间转换
			let date = new Date(num);
			var h = date.getHours();
			var minute = date.getMinutes();
			minute = minute < 10 ? ('0' + minute) : minute;
			var s= date.getSeconds();
			s = s < 10 ? ('0' + s) : s;
			return h+':'+minute+ ':' +s;
		},	
			
			timerAction() {
				var nowtime = new Date();  //获取当前时间
				this.nowtime = this.happenTimeFun(nowtime)
				// console.log(this.nowtime)
				let getMs = (time) => new Date(`1970-01-01T${time}Z`).valueOf()
				let a= getMs(this.endtime)
				// console.log(this.endtime)
				let b= getMs(this.nowtime)
				var lefttime = a-b
				// var lefttime = endtime.getTime() - nowtime.getTime(); //距离结束时间的毫秒数
				var leftd,lefth,leftm,lefts;
				// console.log(lefttime)
				if(lefttime > 0) {
				 leftd = Math.floor(lefttime/(1000*60*60*24));  //计算天数
				 lefth = Math.floor(lefttime/(1000*60*60)%24);  //计算小时数
				 leftm = Math.floor(lefttime/(1000*60)%60);  //计算分钟数
				 lefts = Math.floor(lefttime/1000%60); //计算秒数
				 if(leftd > 0) {
					 lefth += leftd * 24;
				 }
				 if(lefth < 10) {
					 lefth = '0' + lefth
				 }
				 if(leftm < 10) {
					 leftm = '0' + leftm
				 }
				 if(lefts < 10) {
					 lefts = '0' + lefts
				 }
				}else {
				 clearTimeout(this.timer)
				 leftd = lefth = leftm = lefts = '00';
				 // this.getListTile()
				 // this.SeckillGoods('',this.barList[this.barCur].id);
				}
				this.timeHour = lefth;
				this.timeMinute = leftm;
				this.timeSecond = lefts;
				// console.log(this.timeHour)
				// console.log(this.timeMinute)
				// console.log(this.timeSecond)
			 },
			 
			lastimerAction(){
			 // console.log(this.nowtime)
			 let getMss = (time) => new Date(`1970-01-02T${time}Z`).valueOf()
			 let getMs = (time) => new Date(`1970-01-01T${time}Z`).valueOf()
			 let c= getMss(this.startime)
			 let d= getMs(this.nowtime)
			 var lasttime = c-d
			 // console.log(lasttime)
			 var lastd,lasth,lastm,lasts;
			 // console.log(lasttime)
			 if(lasttime > 0) {
			  lastd = Math.floor(lasttime/(1000*60*60*24));  //计算天数
			  lasth = Math.floor(lasttime/(1000*60*60)%24);  //计算小时数
			  lastm = Math.floor(lasttime/(1000*60)%60);  //计算分钟数
			  lasts = Math.floor(lasttime/1000%60); //计算秒数
			  if(lastd > 0) {
			 	 lasth += lastd * 24;
			  }
			  if(lasth < 10) {
			 	 lasth = '0' + lasth
			  }
			  if(lastm < 10) {
			 	 lastm = '0' + lastm
			  }
			  if(lasts < 10) {
			 	 lasts = '0' + lasts
			  }
			 }else {
			  clearTimeout(this.lastimer)
			  lastd = lasth = lastm = lasts = '00';
			  // this.getListTile()
			  // this.SeckillGoods('',this.barList[this.barCur].id);
			 }
			 this.latimeHour = lasth;
			 this.latimeMinute = lastm;
			 this.latimeSecond = lasts;
			}, 
				 
			async getMember(){
				const res=await getMemberMsg(this.token);
				this.memberData = res.data
				console.log(this.memberData)
			},
			
			selectItem(item,index){
				console.log(item)
				this.selectBar=index
				this.TrademarkPrice(index)
				this.goodsSpecificationName=item.goodsSpecificationName
				this.seckillGoodsSpecificationId=item.seckillGoodsSpecificationId
				this.seckillPrice=item.seckillPrice
				this.goodsPresentPrice=item.goodsPresentPrice
				this.goodsVipPrice=item.goodsVipPrice
				console.log(this.goodsSpecificationName)
				console.log(this.seckillGoodsSpecificationId)
			},
			serviceCliak(index,item){
				this.select=index
				this.evaluateTags=item.categoryName
				this.select=index
				this.goodsEvaluate()
			},
			detailClick(index){
				this.barcar=index;
				console.log(this.barcar)
			},
			Specifications(){
				// console.log(111)
				this.bottomshow=true;
			},		
			showModal(e) {
				this.show=true
			},
			hideModal(e) {
				this.bottomshow=false;
			},
			/* confim(){
				this.bottomshow=false;
				if(!this.goodsSpecificationName){
					this.goodsSpecificationName=this.TrademarkData.goodsSpecificationName
					this.goodsSpecificationId=this.TrademarkData.goodsSpecificationId
					this.goodsPresentPrice=this.TrademarkData.goodsPresentPrice
					this.goodsVipPrice=this.TrademarkData.goodsVipPrice
				}
			}, */

			//详情
			async getData(goodsTypeId){
				const res=await getDetail(this.token,goodsTypeId);
				console.log(res);
				if(res){
					uni.hideLoading()
					this.goodsObj=res.data;
					this.goodsId = this.goodsObj.goodsId
					this.goodsCode = this.goodsObj.goodsCode
					console.log(this.goodsId)
					this.goodsEvaluate()
				}
			},
			async goodsEvaluate(){
				const res=await goodsEvaluate(this.token,this.goodsId,this.evaluateTags);
				console.log(res);
				this.assessData = res.data
			},
			//规格
			async getseckill(seckillGoodsId){
				const res=await seckillSpecification(this.token,seckillGoodsId);
				console.log(res)
				this.Register = res.data
				this.TrademarkPrice(0)//刚进去null
			},
			//头部默认规格数据
			async TrademarkPrice(index){
				console.log(index)
				console.log(this.Register)
				this.TrademarkData=this.Register[index];
				console.log(this.TrademarkData)
			},
			//加入购物车
			async toCart(){
				if(this.goodsSpecificationName==''){
					return showToast('请选择规格')
				}else{
					uni.showToast({
						title:'加入成功',
						icon:'success',
						mask:true
					})
					console.log(typeof(this.count))
					this.count++;
					const res=await addNum(this.token,this.goodsId,this.count);
					this.getCart();
					console.log(res)
				}
			},
			async getCart(){
				const res=await totalNum(this.token);
				console.log(res)
				let cartNum = res.data.goodsNums;  //通过后台接口获取
				console.log(cartNum)
				if(cartNum!==0) {
					this.flag=true
				   this.num=cartNum
				}
			},
			goBuyGoods(){
				if(this.memberData.phone==''){
				 var that = this;
				 uni.showModal({
				     title: '提示',
				     content: '您还未绑定手机号，不能购买',
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
				}else if(this.goodsSpecificationName==''){
					this.bottomshow=true;
					uni.showToast({
						title:'请选择规格！',
						icon: 'none'
					})
					return true
					// if(!this.goodsSpecificationName){ //默认数据
					// 	this.goodsSpecificationName=this.TrademarkData.goodsSpecificationName
					// 	this.seckillGoodsSpecificationId=this.TrademarkData.seckillGoodsSpecificationId
					// 	this.seckillPrice=this.TrademarkData.seckillPrice
					// }
				}else{
					let data={}
					data.goodsSpecificationName=this.goodsSpecificationName
					data.seckillGoodsSpecificationId=this.seckillGoodsSpecificationId
					data.seckillPrice=this.seckillPrice
					data.goodsNums=this.payNum
					data.seckillOrder=this.seckillOrder
					data.seckillGoodsId=this.seckillGoodsId
					data.goodsMainImage=encodeURIComponent(JSON.stringify(this.goodsObj.goodsMainImage))
					this.bottomshow=false;//自动关闭
					if(this.memberData.membershipStatus ==0){
						uni.showToast({
							title:'会员用户才能参与',
							icon:'none'
						})
					} /* else if(this.memberData.phone==''){
						uni.showToast({
							title:'手机号为空不能购买',
							icon:'none'
						})
					} */else{
						uni.navigateTo({
							url:'../buyGoods/buyGoods?seckillItem=' + JSON.stringify(data)
						})
					}
					
				}	
			},
			toStart(){
				uni.showToast({
					title:'抢购还未开始',
					icon:'none'
				})
			},
			async increaseNum(item){
				this.payNum++
				if(this.payNum > 1){
				}else if(this.goodsNums < 1){
					
				}
			},
			async subNum(item){
				  if(this.payNum > 1){
						this.payNum--
				}
			},	
			
			payNow(){
				let data={}
				data.goodsName=this.goodsObj.goodsName
				data.id=this.goodsObj.goodsId
				data.count=1
				data.price=this.presentPrice
				data.totalPrice=this.presentPrice
				data.photo=this.goodsObj.mainList[0]
				uni.navigateTo({
					//url:'../settle/settle?seckillGoods='+JSON.stringify(data)
					url:'../buyGoods/buyGoods?goodsItem='+JSON.stringify(data)
				})
			},
			activate(){
				uni.navigateTo({
					url:'../membership/membership'
				})
			},
			goCart(){
				uni.switchTab({
					url:'../shopcart/shoppingCart'
				})
			},
			goHome(){
				uni.switchTab({
					url:'../home/home'
				})
			},
			/* async getDetail(){
				uni.showLoading({
					title:'加载中'
				})
				const res=await getId(this.id)
				console.log(res)
				if(res){
					uni.hideLoading()
					this.goodsObj=res.data
					this.pageShow=true
				}
				setInterval(this.countDown,1000);
			} */
		}
	}
</script>

<style lang="scss">
	swiper{
		width: 100vw;
		height: 100vw;
		.swiperitem {
			width: 100%;
			height: 100%;
			 image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.rushItem{
		width: 100%;
		background-color: #FFFFFF;
		.timeItem{
			// height: 80rpx;
			background-image: url(../../static/orderImg/timeImg.png);
			// background-size: cover;
			background-size: 100% 100%;
			width: 100%;
			padding: 10rpx;
			display: flex;
			// align-items: center;
			justify-content: space-around;
			.timePrice{
				display: flex; 
				flex-direction: column;
				width: 46%;
				margin-left: 50rpx;
				.rushItitle{
					color: #fff;
					display: flex;
					align-items: center;
					.Second{
						font-size: 24rpx;
						width: 110rpx;
						height: 36rpx;
						line-height: 34rpx;
						text-align: center;
						background-color: #ED054E;
						color: #FFFFFF;
						margin-left: 20rpx;
					}
				}
			}
			.numItem{
				padding-left: 100rpx;
				text-align: center;
				.numBox{
					display: flex;
					text-align: center;
					justify-content: center;
					align-items: center;
					.num{
						width: 44rpx;
						height: 44rpx;
						line-height: 44rpx;
						border-radius: 10%;
						background-color: #FB1467;
						color: #FFFFFF;
					}
					.symbol{
						color: #FB1467;
						margin: 0 5rpx;
					}
				}
			}
			
			.remain{
				display: flex;
				align-items: center;
				.show{
					display: flex;
					align-items: center;
					text{
						color: #fff;
						font-size: 40rpx;
					}
					.box{
						width: 40rpx;
						height: 40rpx;
						background-color: #fff;
						text-align: center;
						line-height: 40rpx;
						color: red;
					}
				}
			}
		}
		.contentdetail {
			width: 100%;
			padding: 30rpx 20rpx;
			position: relative;
			.productMove{
				display: flex;
				.productdetail {
					width: 80%;
					color: black;
					display: flex;
					justify-content: space-between;
					color: #333333;
					font-size: 16px;
					.datailimg {
						width: 64rpx;
						height: 62rpx;
					}
					.productsname {
						font-size: 26rpx;
						width: calc(100% - 136rpx);
					}
						
				}
			}	
			.activities {
				font-size: 26rpx;
				color: #999999;
			}
			.detailMoneys{
				// margin: 10rpx 0 0 0;
				font-size: 28rpx;
				color: #F63737;
				margin-left: 10rpx;
			}
		}	
	}
	
	.heng{
		 height: 8rpx;
		 background-color: #EEEEEE;
	}
	.rushdetail{
		padding: 40rpx 20rpx 30rpx;
		background-color: #FFFFFF;
			.words{
			 margin-bottom: 30rpx;
			 display: flex;
			 border-bottom:1rpx solid #f2f2f2;
			 width: 100%;
			 height: 80rpx;
			 padding: 0 20rpx;
			 .left{
				 
			 }
			 .right{
				 display: flex;
				 justify-content: space-between;
				 color: #cccccc;
				 width: 88%;
			 }
		}
		.brief{
			 display: flex;
			 padding: 0 20rpx;
			 .left{
				 // width: 15%;
			 }
			 .right{
				 
			 }
		}
	}
	
	.commodity{
		width: 100%;
		background-color: #FFFFFF;
		padding: 40rpx 20rpx 130rpx;
		.Product{
			width: 100%;
			height: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: space-between;
			// border-bottom:1px solid #cccccc;
			.ProductDetail{
				font-size: 14px;
				color: #999999;
				width: 180rpx;
			}
			.Productevaluate{
				font-size: 14px;
				color: #333333;
				width: 180rpx;
			}
		}
		.scoreMove{
			display: flex;
			justify-content: space-around;
			padding: 30rpx 0;
			border-top: 1rpx solid #f2f2f2;
			border-bottom: 1rpx solid #f2f2f2;
			.score{
				width: 30%;
				border-right: 1px solid #F1F1F1;
				.scoreColor{
					color: #F63737;
					font-size: 46rpx;
					font-weight: 650;
					padding-left: 10rpx;
				}
				.scoreSize{
					color: #333333;
					font-size: 28rpx;
				}
			}
			.attitude{
				display: flex;
			}
		}
		
		.estableTab{
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin: 20rpx 0 20rpx 0;
			.services{
				width: 150rpx;
				height: 50rpx;
				background-color: #FFFFFF;
				border-radius: 10rpx;
				font-size: 24rpx;
				text-align: center;
				color: #666666;
				line-height: 50rpx;
				padding-left: 10rpx;
				border: 1rpx solid #ccc;
	
			}
			.active{
				width: 150rpx;
				height: 50rpx;
				background-color: #FFFFFF;
				border-radius: 10rpx;
				font-size: 24rpx;
				text-align: center;
				color: #008CFF;
				line-height: 50rpx;
				padding-left: 10rpx;
			}
			
		}
		.orderEvaluate{
			width: 100%;
			display: flex;
			margin-bottom: 20rpx;
			.imgSize{
				width: 130rpx;
				height: 90rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.Nickname{
				margin-left: 20rpx;
				.NicknameTime{
					display: flex;
				}
			}
		}
	}
	
	.specibox{
		display: flex;
		margin: 20rpx 0 20rpx 0;
		.SpecificaImg{
			flex-shrink: 0;
			width: 200rpx;
			height: 200rpx;
			// padding-left: 20rpx;
			margin-left: 20rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.Trademark{
			padding: 20rpx;
			align-items: flex-start;
			display: flex;
			flex-direction: column;	
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
					margin: 5rpx 0 0 18rpx;
				}
				.brandPrice{
					font-size: 32rpx;
					color: #F63737;
					margin-top: 8rpx;
				}
			}
		}
	}
	
	.modalItem{
		background-color: #FFFFFF;
		.SelectRegister{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 20rpx 0 20rpx 0;
			flex-wrap: wrap;
			.RegisterWold{
				width: 350rpx;
				height: 60rpx;
				background-color: #F1F1F1;
				border-radius: 10rpx;
				font-size: 12px;
				text-align: center;
				color: #999999;
				line-height: 60rpx;
				border: 1px solid #ccc;
				margin-bottom: 20rpx;
				text-overflow:ellipsis;
				whitewhite-space: nowrap;
				margin-left: 10rpx;
				margin-right: 10rpx;
			}
			.active{
				width: 350rpx;
				height: 60rpx;
				background-color: #0A90FE;
				border-radius: 10rpx;
				font-size: 12px;
				text-align: center;
				color: #fff;
				line-height: 60rpx;
				border: 1px solid #ccc;
				margin-bottom: 20rpx;
			}
		}
		.productNumber{
			display: flex;
			width: 100%;
			margin-bottom: 20rpx;
			.productchange{
				margin-left: 120rpx;
				width: 70%;
				display: flex;
				justify-content: flex-end;
				.productJian{
					width: 50rpx;
					height: 50rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.productJia{
					width: 50rpx;
					height: 50rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.determine{
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
		.buttonColor{
			width: 94%;
			height: 80rpx;
			background-image: linear-gradient(to right, #F63737, #F3741C);
			color: white;
			line-height: 80rpx;
			border-radius: 50rpx;
			margin-bottom: 20rpx;
		}
	}
	.guan{
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		font-size: 40rpx;
	}
	
	.share{
		position: absolute;
		width: 120rpx;
		height: 60rpx;
		background-color: #F64431;
		color: #fff;
		bottom: 20rpx;
		right: 0;
		text-align: center;
		border-top-left-radius: 30rpx;
		border-bottom-left-radius: 30rpx;
		line-height: 60rpx;
		button{
			position: absolute;
			opacity: 0;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			
		}
	}

    .narrate{
		padding: 40rpx 0 20rpx 40rpx;
		background-color: #fff;
		position: relative;
		.share{
			position: absolute;
			width: 120rpx;
			height: 70rpx;
			background-color: #eee;
			color: #aaa;
			bottom: 50rpx;
			right: 0;
			text-align: center;
			border-top-left-radius: 30rpx;
			border-bottom-left-radius: 30rpx;
			line-height: 70rpx;
			button{
				position: absolute;
				opacity: 0;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				
			}
		}
	}

    .send{
		padding: 40rpx;
		background-color: #fff;
		margin: 10rpx 0;
		font-size: 32rpx;
		color: #aaa;
	}
	
	.describle{
		padding: 40rpx 20rpx;
		background-color: #fff;
		.photo{
			width: 100%;
			image{
				margin-top: 20rpx;
				width: 100%;
			}
		}
	}
	
	
	
	.detailbottom {
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		padding: 20rpx 10rpx;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #ddd;
		.detailState {
			width: 34%;
			display: flex;
			align-items: center;
			.orderBlock {
				text-align: center;
				font-size: 50rpx;
				line-height: 40rpx;
				position: relative;
				margin-left: 20rpx;
				top: 10rpx;
				.botttomLeft{
					margin: 0;
					padding: 0;
					line-height: 0.8;
					background-color: #fff;
				}
				.botttomLeft::after{ border: none; }
				.customerImg{
					width: 50rpx;
					height: 50rpx;
				}
				.badge{
					position: absolute;
					background-color: red;
					color: #fff;
					width: 30rpx;
					height: 30rpx;
					border-radius: 50%;
					top:0;
					right: 0;
					transform: translate(45%,-50%);
					text-align: center;
					line-height: 30rpx; 
					font-size: 20rpx;
				}
			}
		}
	
		.orderbutton {
			display: flex;
			
			view{
				width: 200rpx;
				padding: 16rpx 20rpx;
				text-align: center;
				align-self: center;
				color: #fff;
			}
			
			.orderleft{
				border-top-left-radius:40rpx;
				border-bottom-left-radius:40rpx;
				// background-image: linear-gradient(to right, #EBB528, #FE9702);
				background-color: #CCCCCC;
			}
			.orderright{
				border-top-right-radius:40rpx;
				border-bottom-right-radius:40rpx;
				background-image: linear-gradient(to right, #F63936, #F46E1D);
			}
		}
	}
</style>

