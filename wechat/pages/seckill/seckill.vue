<template>
	<view class="seckilltime" v-if="showPage">
		<view class="seckillcont">
			<view class="seckilldate" >
				<view class="seckilltent" :class="{'barstyleone':secktime.isActive}"  v-for="(secktime,index) in barList" :key="index" @tap="skeillbar(secktime)">
					<view class="seckilldateitem">
						{{getHour(secktime.startTime)}}:{{getMinute(secktime.startTime)}}
					</view>
					<view class="seckillbuy">
						{{secktime.seckillStatus}}
					</view>
				</view>
			</view>
			<view class="seckillend">
				<view class="count">
					<view class="distance">
						<view class="end">{{seckillMsg}}</view>
						<view class="num">{{timeHour}}</view>
						<view class="symbol">:</view>
						<view class="num">{{timeMinute}}</view>
						<view class="symbol">:</view>
						<view class="num">{{timeSecond}}</view>
					</view>
				</view>
				<view class="seckillvolume">
					秒价商品不可用劵
				</view>
			</view>
			<view class="" v-if="productlist.length==0">
				当前无抢购商品
			</view>
			<view v-else class="seckillproduct" :class="skebur!==0?'greyGood':''">
				<view class="producttent">
					<view class="productlists" v-for="(product,index) in productlist" :key="index">
						<view class="producttype">
							<view class="producttycont">
								<view class="producttys">
									<image class="producttyimg" :src="product.goodsImage" mode=""></image>
								</view>
							</view>
						</view>
						<view class="producttyname">
							<view class="productname">
								{{product.goodsName}}
							</view>
							<view class="spike">
								秒杀价
							</view>
							<view class="production">
								<view class="moneys">
									<text class="money">￥</text>
									<text class="sugges">{{product.seckillPgetSeckillTimeListrice}}</text>
									<view class="productremark">
										￥{{product.goodsSuggestedRetailPrice}}
									</view>
								</view>
								<view class="mybuy" @tap="estabwhere(product.goodsId,product.seckillPgetSeckillTimeListrice,product.goodsSuggestedRetailPrice)" :class="isFade==true?'active':''">
									立即抢购
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
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	import {
		getListTile,
		getListGoods
	} from '../../API/skeillArr/index.js';
	export default {
		data() {
			return {
				//isActive:false,
				seckillStatus:'',
				isFade:false,
				showPage:false,
				seckillMsg:'',
				timeHour: '00',
				timeMinute: '00',
				timeSecond: '00',
				timeId:'',
				skebur:0,
				timerEndTime: '',
				loadingModal: false,
				percentage: 50,
				seckillTimeIds:'',
				seckillId: '',
				endTime:'',
				barList:[
					{seckillTime:'11:00',rushbuy:'抢购中'},
					{seckillTime:'15:00',rushbuy:'即将开始'},
					{seckillTime:'19:00',rushbuy:'即将开始'},
				],
				productlist:[
				],
				finalTime:''
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad(options) {
			this.seckillMsg=options.state
			console.log(this.seckillMsg)
		},
		onShow() {
			this.getSkeill();
		},
		onHide() {
		},
		methods: {
			skeillbar(secktime) {
				console.log(secktime)
				this.barList.map(item=>{
					item.isActive=false
				})
				secktime.isActive=true
				if(secktime.seckillStatus=='未开始'){
					this.isFade=false
					this.seckillMsg='距开始'
					this.finalTime=secktime.startTime
					this.setTimer()
				}else if(secktime.seckillStatus=='抢购中'){
					this.isFade=false
					this.seckillMsg='距结束'
					this.finalTime=secktime.endTime
					this.setTimer()
				}else{
					this.seckillMsg='秒杀已结束'
					this.isFade=true
					clearInterval(this.timeId)
					this.timeHour = '00';
					this.timeMinute = '00';
					this.timeSecond = '00';
				}
				/*this.timerEndTime = secktime.endTime;
				this.setTimer()*/
				this.skebur = secktime.id;
				console.log(this.skebur)
				this.getSkeillgoods(this.seckillId,secktime.id);
			},
			/*detailshere(goodsId){
				uni.navigateTo({
					url:'/pages/seckill/seckdeil?id='+goodsId
				})
			},*/
			async getSkeill() {
				uni.showLoading({
					title:'加载中'
				})
				const res = await getListTile(this.token,1);
				if(res){
				this.barList = res.data.seckillTime;//秒杀时间段
				this.barList.map(item=>{
					item.isActive=false
				})
				console.log(this.barList);
				this.seckillId = res.data.seckillTitle.id;//进入秒杀页面的秒杀时间id
				//this.getSkeillgoods(this.seckillId,'');//请求商品数据
				uni.hideLoading()
				this.showPage=true
				}
				var current=new Date()
				console.log(current.getHours())
				this.barList.forEach((item,i)=>{
					//let start=new Date()
					// console.log(current.getHours()>this.handleHour(item.endTime))
					// console.log(this.handleHour(item.startTime))
					// console.log(this.handleHour(item.endTime))
					let now=current.getHours();
					let start=this.handleHour(item.startTime);
					let end=this.handleHour(item.endTime);
					//console.log('now:',now,' start:',start,' end:',end)
					if(now<start){//当前时间小于开始时间
					    console.log(111111)
						item.seckillStatus='未开始'
					}else if(now>=end){
						item.seckillStatus='已结束'
					}else if(start<=now<end){
						console.log(1111)
						item.seckillStatus='抢购中'
					}
				}) 
		let bool=this.barList.some(item=>{
				 return item.seckillStatus=='抢购中'
			 })
			 if(bool){
				 let index = this.barList.findIndex(item => item.seckillStatus=='抢购中');
				 this.barList.map(item=>{
				 	item.isActive=false
				 })
				 this.barList[index].isActive=true
				  this.finalTime=this.barList[index].endTime
				 this.setTimer()
				 this.getSkeillgoods(this.seckillId,this.barList[index].id);
			 }else if(this.barList.some((item)=>{
				 return item.seckillStatus=='未开始'
			 })){
				 this.barList.map(item=>{
				 	item.isActive=false
				 })
				let index = this.barList.findIndex(item => item.seckillStatus=='未开始');
				this.barList[index].isActive=true
				this.finalTime=this.barList[index].startTime
				 this.setTimer()
				this.getSkeillgoods(this.seckillId,this.barList[index].id);
			 }else if(this.barList.every(item=>{
				 return item.seckillStatus=='已结束'
			 })){
				 this.barList.map(item=>{
				 	item.seckillStatus=='未开始'
				 })
				 let index = this.barList.findIndex(item => item.seckillStatus=='未开始');
				 this.barList[index].isActive=true
				 this.finalTime=this.barList[index].startTime
				 this.setTimer()
				 this.getSkeillgoods(this.seckillId,this.barList[index].id);
				 }
			},
			async getSkeillgoods(seckillId,id) {
				const res = await getListGoods(this.token,seckillId,id);
				if(res){
				this.productlist = res.data;
				this.skebur = res.seckillTimeId;
			/*	this.barList.forEach(item=>{
					if(item.id == this.skebur) {
						let nowtime = new Date(); 
						let startTime = new Date(item.startTime)
						if(nowtime.getTime()<startTime.getTime()){
							console.log(110)
							this.timerEndTime = item.startTime;
							this.setTimer()
						}else if(nowtime.getTime()>=startTime.getTime()){
							this.timerEndTime = item.endTime;
							this.setTimer()
						}
					}
				})*/
				}
			},
			setTimer() {
				clearInterval(this.timeId)
				this.timeId= setInterval(this.countDown,1000)
			},
			countDown(){
				//let afterFinal=this.formate(this.finalTime)
				//console.log(this.finalTime)
				var newFinalTime =this.finalTime.replace(/-/g,"/")
				//console.log(newFinalTime)
				var resultTime=new Date(newFinalTime); 
				//console.log(resultTime)
				//let newResultTime=this.formate(resultTime)
				//console.log(newResultTime)
				var resultHms=resultTime.getTime();
				var curTime=new Date();
				//console.log(curTime)
				var curHms=curTime.getTime();
				if(resultHms-curHms<0){
					var cz=curHms-resultHms
				}else{
					var cz=resultHms-curHms
				}
				var h=Math.floor(cz/1000/60/60%24);
				h=h<10?"0"+h:h;
				this.timeHour=h;
				var m=Math.floor(cz/1000/60%60);
				m=m<10?"0"+m:m;
				this.timeMinute=m;
				var s=Math.floor(cz/1000%60);
				s=s<10?"0"+s:s;
				this.timeSecond=s;
				},
		/*	timerAction(endtime) {
				var nowtime = new Date();  //获取当前时间
				var lefttime = endtime.getTime() - nowtime.getTime();  //距离结束时间的毫秒数
				var leftd,lefth,leftm,lefts;
				if(lefttime > 0) {
					this.isFade=false
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
					leftd = lefth = leftm = lefts = '00';
					this.isFade=true
					this.seckillMsg='秒杀已结束'
				}
				this.timeHour = lefth;
				this.timeMinute = leftm;
				this.timeSecond = lefts;
			},*/
			handleHour(time){
				if(time) {
					var timeArr = time.replace(" ", ":").replace(/\:/g, "-").split("-");
					if(timeArr[3]=='00'){
						timeArr[3]='24'
					}
					return parseFloat(timeArr[3])
				}
			},
			getHour(time) {
				if(time) {
					var timeArr = time.replace(" ", ":").replace(/\:/g, "-").split("-");
					return timeArr[3]
				}
			},
			getMinute(time) {
				if(time) {
					var timeArr = time.replace(" ", ":").replace(/\:/g, "-").split("-");
					return timeArr[4]
				}
			},
			timeFormat(param) {
				return param < 10 ? '0' + param : param;
			},
			// rushbuywhere(){
			// 	uni.switchTab({
			// 		url:'../shopcart/shopcart'
			// 	})
			// },
			estabwhere(id,presentPrice,originalPrice){
				if(this.seckillMsg=='秒杀已结束'){
					return
				}else if(this.seckillMsg=='距开始'){
					uni.showToast({
						title:'抢购还未开始',
						icon:'none'
					})
					return 
				}
				uni.navigateTo({
					url:'../rushPurchase/rushPurchase?id='+id+'&goodsFinalTime='+this.finalTime+'&originalPrice='+originalPrice+'&presentPrice='+presentPrice
				})
			}
		}
	}
</script>

<style lang="scss">
	.seckilltime{
		// width: 100%;
		
		.seckillcont{
			
			.seckilldate{
				width: 100%;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				
				.seckilltent,.barstyleone{
					text-align: center;
					// padding:20rpx 60rpx;
					padding:20rpx 60rpx;
					margin-bottom: -14rpx;
					.seckilldateitem{
						font-size: 36rpx;
						font-weight: 700;
						// color: rgb(13,169,140);
					}
					
					.seckillbuy{
						padding: 3rpx 16rpx;
						// background-color:rgb(13,169,140);
						border-radius: 30rpx;
						color: #999999;
						font-size: 24rpx;
					}
				}
				.barstyleone{
					.seckilldateitem{
						color: rgb(13,169,140);
					}
					.seckillbuy{
						// background-color:rgb(13,169,130);
						background-color:#09BE8F;
						color: #FFFFFF;
					}
				}
			}
			
			.seckillend{
				width: 100%;
				display: flex;
				justify-content: space-between;
				background-color: #F5F5F6;
				padding: 20rpx 30rpx;
				
				.count{
					align-self: center;
					.distance{
						margin-left: 4rpx;
						display: flex;
						text-align: center;
						.end{
							font-weight: 400;
							margin-right: 20rpx;
							// padding-top:6rpx
						}
						.num{
							width: 44rpx;
							height: 44rpx;
							border-radius: 10%;
							background-color: #FE5E56;
							color: #fff;
						}
						.symbol{
							margin-left: 10rpx;
							margin-right:10rpx;
							// font-size: 30rpx;
							font-weight: 600;
						}
					}
				}
				.seckillvolume{
					line-height: 72rpx;
					color: #999;
					font-size: 24rpx;
				}
			}
			.greyGood {
				// background-color: #E3E3E3 !important;
				// filter: grayscale(100%);
			}
			.seckillproduct{
				width: 100%;
				background-color: #fff;
				
				.producttent{
					width: 100%;
					padding: 20rpx;
					
					.productlists{
						width: 100%;
						padding: 20rpx 10rpx;
						display: flex;
						justify-content: space-between;
						border-bottom:1px solid #EDEDED;
						
						.producttype{
							width:200rpx;
							height: 200rpx;
							background-color: #ccc;
							position: relative;
							
							.producttycont,.producttys{
								width:200rpx;
								height:200rpx;
								background-color: #fff;
								position: absolute;
								left: 0;
								top: 0;
								bottom: 0;
								right: 0;
								margin: auto;
								.producttys{
									width:200rpx;
									height: 200rpx;
									
									.producttyimg{
										/* width:100%;
										height:100%; */
										width:75%;
										height:80%;
										display: block;
									}
								}
							}
						}
						.producttyname{
							width: calc(100% - 200rpx);
							display: flex;
							flex-direction:column;
							justify-content: space-around;
							
							.productname{
								// font-weight: bold;
								color: #333333;
								font-size: 26rpx;
							}
							.spike{
								color: #F86500;
								font-size: 22rpx;
								margin-bottom: -20px;
							}
							
							.production{
								display: flex;
								justify-content: space-between;
								margin-bottom: 6px;
								.productremark{
									font-size: 26rpx;
									text-decoration: line-through;
									color: #ccc;
									margin-left: 20rpx;
								}
								.moneys{
									display: flex;
									align-items: center;
									font-size: 22rpx;
									color: #F86500;
								}
								.sugges{
									color: #F86500;
									font-size: 38rpx;
									font-weight: bold;
								}
								
								.mybuy{
									// background-color: rgb(13,169,140);
									padding: 0rpx 12rpx;
									border-radius: 30rpx;
									background-color: #09BF90;
									color: #fff;
									font-size: 24rpx;
									line-height: 60rpx;
									height: 60rpx;
									width: 150rpx;
									text-align: center;
								}
								.active{
									background-color: #aaa;
								}
							}
							
						}
					}
				}
			}
		}
	}
</style>
