<template>
	<view class="pageWidth ">
		<view class="bar">
			<view v-if="index<5" :class="index==curIndex?'barBlockStyle':'barBlock'" v-for="(item,index) in titleList" :key="index" @tap="selectState(index,item)">
				{{item.classifyName}}
			</view>
		</view>
		
		<view class="noOrderItem" v-if="olderData.length==0">
			<image class="noOrderImg" src="../../../static/orderImg/whole.png" mode="widthFix"></image>
			<view class="noOrderText">暂无相关订单</view>
			<!-- <view @click="lookHome">
				<button class="buttonColor">去首页逛逛</button>
			</view> -->
		</view>
		
		<view class="orderback" v-for="(item,index) in olderData" :key="index" >
			<view class="orderBox" @click="Completed(item)">
				<view class="orderfinsh">
					<!-- <view class="finshWord" v-if="item.orderStatus=='待评价'">已完成</view> -->
					<view class="finshWord" v-if="item.orderStatus==0">已完成</view>
					<view class="finshWord" v-if="item.orderStatus==1">待支付</view>
					<view class="finshWord" v-if="item.orderStatus==2">待处理</view>
					<view class="finshWord" v-if="item.orderStatus==3">处理中</view>
					<view class="finshWord" v-if="item.orderStatus==4">待评价</view>
					<view class="finshTime">{{item.createTime}}</view>
				</view>
				<view v-if="item.seckillOrder==1" style="font-size: 26rpx; color: #CCCCCC;">秒杀订单</view>
				<view  class="cuIcon-right right" style="color: #666666;"></view>
			</view>
			<view class="Completed" v-for="(good,index) in item.orderGoodsList" :key="index">
				<view class="completeLeft">
					<view class="CompletedImg">
						<image :src="good.goodsSmallImage"></image>
					</view>
					<view class="completedMove">
						<view class="completePrice">
							<view style="display: flex;align-items: center;">
								<view v-if="item.seckillOrder==1" style="font-size: 18rpx;color: red;background-color: #FFFFFF;width: 50rpx;height: 24rpx;border: red 1px solid;text-align: center;line-height: 26rpx;">秒杀</view>
							{{good.goodsSpecificationName}}
							</view>
							<view >￥{{good.goodsReceiptsPrice}}</view>
						</view>		
					</view>
					<view class="compleEvaluated">
						<view class="completeNum">X{{good.goodsNum}}</view>
						<view class="Evaluated" v-if="item.orderStatus==4&&good.evaluateStatus==0" @click="toEvaluated(item,good)">去评价</view>
					</view>	
				</view>
			</view>
			<view class="totalItem">
				<view class="totalContact">
					<view class="totalPay">
						<view class="piece">共{{item.totalNum}}件，实付</view>
						<view class="pieces"><text style="font-size: 22rpx;color: red;">￥</text>{{item.officialReceiptsPrice}}</view>
					</view>
				</view>
				<view class="contactItem">
					<button open-type="contact" class="contact">
						<view style="line-height: 60rpx;">联系客服</view>
					</button>
					<view class="anothe" @click="getOrder(item)" v-if="item.orderStatus==0||item.orderStatus==2||item.orderStatus==3||item.orderStatus==4&&item.orderStatus==0">再来一单</view>
					<view  class="anothe" v-if="item.orderStatus==1">立即支付</view>
					<!-- <view class="seckanothe"  v-if="item.seckillOrder==1">秒杀订单</view> -->
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
		list,deleteOrder,orderList
	} from '../../../API/olderArr/index.js';
	import {
		totalNum,addNum,SpecificationById
	} from '../../../API/classificationArr/index.js'
	import {
		getMemberMsg
	}from '../../../API/personArr';
	export default {
		data() {
			return {
				titleList: [{
					classifyName: "全部",
				},{
					classifyName: "待支付"
				},{
					classifyName: "待处理"
				},{
					classifyName: "处理中"
				},{
					classifyName: "待评价"
				}],
				current: '',
				orderList:[{
					createTime:'2019.1.1'
				},],
				olderData:[],
				orderGoodsList:[],
				orderData:[],
				idsData:[],
				// GoodData:[],
				totalNum:0,
				curIndex:0,
				orderStatus:'',
				wholeStatus:'',
				totalgoods:0,
				goodsListes:[],
				ids:[],
				orderCode:'',
				goodsPrice:'',
				orderPrice:'',
				statusNum:'0',
				lastOne:'',
				goodVo:[],
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad(options) {
			console.log(options)
			this.current = options.state
			this.wholeStatus = options.state
			console.log(this.wholeStatus)
			this.curIndex = options.index
			if(options.wholeStatus){
				this.wholeStatus = options.wholeStatus
				console.log(this.wholeStatus)
			}
			
			// this.showOrderList()
		},
		onShow() {
			this.showOrderList()
			this.getMember()
		},
		methods: {
			async getMember(){
				const res=await getMemberMsg(this.token);
				this.memberData = res.data
				// console.log(this.memberData)
			},
			//再来一单
			getOrder(item){
				console.log(item)
				// this.orderPrice=item.orderPrice
				this.orderData = item.orderGoodsList //订单规格
				console.log(this.orderData)
				var getarr=[]
				this.orderData.forEach(item=>{
					getarr.push(item.goodsSpecificationId)
				})
				console.log(getarr)
				this.ids = getarr.join(",")
				console.log(this.ids)
				this.ById()
				
				this.orderGoodsList=item.orderGoodsList
				console.log(this.orderGoodsList)
				setTimeout(() => {  //定时
					this.timeList()
				},900)
			},	
			
			async ById(){
				console.log(this.ids)
				const res=await SpecificationById(this.token,this.ids);
				console.log(res)
				this.idsData= res.data
				console.log(this.idsData)
			},
			
			async timeList(){
				// this.totalgoods=0
				var VoArr=[]
				this.orderGoodsList.forEach((item,index)=>{
					item.goodsSmallImage = encodeURIComponent(JSON.stringify(item.goodsSmallImage))
					// var a=item.goodsNum
					// this.totalgoods = this.totalgoods+a
					
					this.idsData.forEach(idsitem=>{
						console.log(this.idsData)
						console.log(idsitem.goodsSpecificationId)
						console.log(this.orderGoodsList[index].goodsSpecificationId)
						if(idsitem.goodsSpecificationId == this.orderGoodsList[index].goodsSpecificationId){		
							console.log(idsitem.goodsVo.goodsTypeId)
							VoArr.push(idsitem.goodsVo.goodsTypeId)
							console.log(VoArr)
							console.log(66666666666)
							if(this.memberData.membershipStatus == '0'){
							this.orderGoodsList[index].goodsPrice = idsitem.goodsPresentPrice
							} else if(this.memberData.membershipStatus == '1'){
							this.orderGoodsList[index].goodsPrice = idsitem.goodsVipPrice
							}
						}
					})
					this.goodVo = VoArr
				})
				
				console.log(this.goodVo)
				console.log(this.totalgoods)
				console.log(this.orderGoodsList)
				// var goArr=[]
				this.totalgoods=0
				this.orderGoodsList.forEach((item,index)=>{
					if(item.goodsPrice){
						var a=item.goodsNum
						this.totalgoods = this.totalgoods+a
					}else{
						item.status=false
						item.goodsPrice = 0
						item.goodsPresentPrice = 0
					}
				})
				console.log(this.orderGoodsList)
				uni.navigateTo({
					url:'../../buyGoods/buyGoods?orderItem=' +JSON.stringify(this.orderGoodsList) + '&goodsNums=' +this.totalgoods+ '&goodVo=' +JSON.stringify(this.goodVo) /* +'&totalPrices=' +this.orderPrice */
				})
			},
			
			
			Completed(item){
				console.log(item)
				uni.navigateTo({
					url:'../../orderDetail/orderDetail?orderCode='+item.orderCode +'&orderId=' +item.orderId+ '&orderStatus=' +item.orderStatus
				})
			},
			// lookHome(){
			// 	uni.switchTab({
			// 		url:'../../home/home'
			// 	})
			// },
			ToTop(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			toEvaluated(item,good){
				console.log(item)
				console.log(good)
				item.orderGoodsList.forEach(item=>{
					this.statusNum = 0
					console.log(item.evaluateStatus)
					if(item.evaluateStatus==0){
						this.statusNum ++
						console.log(this.statusNum)
					}
				})
				console.log(this.statusNum)
				if(this.statusNum>1){
					this.lastOne = false
				}else if(this.statusNum==1){
					this.lastOne = true
				}
				uni.navigateTo({
					url:'../evaluate/publish?orderCode=' +item.orderCode+ '&orderId='  +item.orderId+ '&orderGoodsId=' + good.orderGoodsId+ '&lastOne=' +this.lastOne
				})
			},
			selectState(index,item){
				this.curIndex=index
				console.log(item)
				console.log(this.curIndex)
				this.current=item
				this.wholeStatus = item.classifyName
				console.log(this.wholeStatus)
				this.showOrderList()
			},
			goDetail(item){
			   if(item.orderStatus=='退款'){
				   uni.navigateTo({
				   	url:'../../refund/detail?id='+item.id
				   })
			   }else{
				  uni.navigateTo({
				  	url:'../../orderDetail/orderDetail?id='+item.id+'&state='+item.orderStatus
				  }) 
			   }
		    },
				
			async showOrderList(){
				console.log(this.wholeStatus)
				if(this.wholeStatus=='全部'){
					uni.showLoading({
						title:'加载中'
					})
					this.orderStatus=''
					console.log(this.orderStatus)
					const res = await orderList(this.token,this.orderStatus);
					console.log(res)
					if(res){
						uni.hideLoading()
						this.titleList = res.data.dictionaryVos
						this.olderData = res.data.orderVoIPage.records
						console.log(this.olderData)
						
						this.olderData.forEach((item,index)=>{
							this.totalNum = 0
							for(var i=0;item.orderGoodsList[i];i++){
								// console.log(item.orderGoodsList[i])
								// console.log(1234546)
								this.totalNum = this.totalNum + item.orderGoodsList[i].goodsNum
							}
								// console.log(this.totalNum)
								item.totalNum = this.totalNum
						})
					}	
					console.log(this.olderData)
				}
				else{
					this.orderStatus=this.curIndex
					console.log(this.orderStatus)
					uni.showLoading({
						title:'加载中'
					})
					const res = await orderList(this.token,this.orderStatus);
					if(res){
						uni.hideLoading()
						this.olderData = res.data.orderVoIPage.records
						console.log(this.olderData)
						this.olderData.forEach((item,index)=>{
							this.totalNum = 0
							for(var i=0;item.orderGoodsList[i];i++){
								console.log(item.orderGoodsList[i])
								console.log(1234546)
								this.totalNum = this.totalNum + item.orderGoodsList[i].goodsNum
							}
								console.log(this.totalNum)
								item.totalNum = this.totalNum
						})
						console.log(this.olderData)
					}	
				}
				/* else if(this.wholeStatus){
					this.orderStatus=this.curIndex
					console.log(this.orderStatus)
					uni.showLoading({
						title:'加载中'
					})
					const res = await orderList(this.token,this.orderStatus);
					if(res){
						uni.hideLoading()
						this.olderData = res.data.orderVoIPage.records
						console.log(this.olderData)
					}	
				}*/
			},
		}
	}
</script>

<style lang="scss">
	.noOrderItem {
		position: absolute;
		top:50%;
		width: 100%;
		transform: translateY(-50%);
		text-align: center;
		.noOrderImg {
			width: 300rpx;
		}
		.noOrderText {
			font-size: 25rpx;
			color: #aaa;
			//letter-spacing: 10rpx;
		}
		.buttonColor{
			height: 60rpx;
			width: 190rpx;
			line-height: 60rpx;
			font-size: 13px;
			text-align: center;
			background-color: #008CFF;
			border-radius: 30rpx;
			color: #fff;
			margin-top: 20rpx;
		}
	}
	
	.orderback{
		width: 100%;
		background-color: #fff;
		padding: 0 0 0 20rpx;
		margin-top: 20rpx;
		.orderBox{
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			height: 90rpx;
			padding: 0 20rpx 0 10rpx;
			border-bottom: 1px  solid #f2f2f2;
			.orderfinsh{
				display: flex;
				align-items: center;
				justify-content: center;
				.finshWord{
					font-size: 30rpx;
					color: #FE771E;
				}
				.finshTime{
					margin-left: 20rpx;
					font-size: 24rpx;
					color: #ccc;
				}
			}
			.right{
				color: #ccc;
			}
		}
		.Completed{
			width: 100%;
			// height: 150rpx;
			border-bottom: 1px solid #f2f2f2;
			display: flex;
			justify-content: space-between;
			padding: 30rpx 20rpx 30rpx 10rpx;
			.completeLeft{
				display: flex;
				align-items: center;
				.CompletedImg{
					width: 120rpx;
					height: 120rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.completedMove{
					display: flex;
					.completePrice{
						margin-left: 30rpx;
						width: 420rpx;
					}
					
				}
				.compleEvaluated{
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					.completeNum{
						color: #333333;
						font-size: 24rpx;
					}
					.Evaluated{
						color: #FE771E;
						border: 1px solid #FE771E;
						width: 120rpx;
						height: 50rpx;
						text-align: center;
						font-size: 24rpx;
						border-radius: 30rpx;
						line-height: 45rpx;
						margin-top: 10rpx;
					}
				}
			}
			
		}
		.totalItem{
			width: 100%;
			padding: 30rpx 20rpx 30rpx 10rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.totalContact{
				display: flex;
				.totalPay{
					display: flex;
					align-items: center;
					.piece{
						color: #333333;
						font-size: 24rpx;
					}
					.pieces{
						font-size: 32rpx;
						color: red;
					}
				}
			}
			.contactItem{
				display: flex;
				.contact{
					// width: 150rpx;
					height: 60rpx;
					color: #CCCCCC;
					background-color: #FFFFFF;
					// line-height: 60rpx;
					border-radius: 30rpx;
					border: 1px solid #ccc;
					text-align: center;
					font-size: 26rpx;
					margin-right: 20rpx;
				}
				.anothe{
					width: 150rpx;
					height: 60rpx;
					color: #FFFFFF;
					background-color: #FE771E;
					line-height: 60rpx;
					border-radius: 30rpx;
					text-align: center;
					font-size: 26rpx;
				}
				.seckanothe{
					width: 150rpx;
					height: 60rpx;
					color: #FFFFFF;
					background-color: #ccc;
					line-height: 60rpx;
					border-radius: 30rpx;
					text-align: center;
					font-size: 26rpx;
				}
			}
		}
	}
	
	.bar {
		width: 100%;
		height: 100rpx;
		margin: 0 0 20rpx ;
		display: flex;
		justify-content: space-between;
		padding: 0 66rpx;
		background-color: #FFFFFF;
		position: sticky;
		top: 0;
		z-index: 9999;
		.barBlockStyle {
			font-size: 28rpx;
			color:  #008CFF;
			line-height: 100rpx;
			text-align: center;
		}
		
		.barBlock {
			font-size: 28rpx;
			// font-weight: 600;
			color: #101010;
			line-height: 100rpx;
			text-align: center;
		}
	}
	
	.card{
		width: 100%;
		margin-bottom: 20rpx;
		padding: 20rpx 40rpx;
		background-color: #fff;
		.top{
			display: flex;
			justify-content: space-between;
		}
		.num{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20rpx;
			.photo{
				display: flex;
				align-items: center;
				.wrap{
					width: 200rpx;
					height: 200rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.choose{
			display: flex;
			justify-content: flex-end;
			margin-top: 20rpx;
			.lbtn{
				width: 200rpx;
				line-height: 60rpx;
				height: 60rpx;
				text-align: center;
				border: 1px solid #eee;
				color: #aaa;
				margin-right: 20rpx;
			}
			.rbtn{
				width: 200rpx;
				line-height: 60rpx;
				height: 60rpx;
				text-align: center;
				color:var(--button);
				border: 1px solid var(--button);
			}
		}
	}
	
</style>
