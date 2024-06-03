<template>
	<view class="container">
		<view class="head">
				<view class="up">
					订单待支付 剩余{{timeMinute}}:{{timeSecond}}
				</view>
			<!--	<view class="up" v-else >
					订单已取消
				</view> -->
			
				<view class="down">
					<view class="btn" @click="goCancel">
						取消订单
					</view>
					<view class="btn">
						客服
						<button  open-type="contact" class="service">
						</button>
					</view>
					<view class="btn bg" @click="wxPay">
						去支付
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
	import {advancePay} from '../../API/orderpay/index.js'
	import {cancelOrder} from '../../API/olderArr/index.js'
	export default{
		data(){
			return{
				timeMinute:'00',
				timeSecond:'00',
				interval:'',
				//isShow:true
			}
		},
		props:['createTime','orderNumber','detailId'],
		created() {
			this.interval=setInterval(this.countDown,1000);
		},
		mounted() {
		},
		computed: {
			...mapState(['token','openId','userInfo']),
		},
		methods:{
			countDown(){
				//console.log(this.id)
				var newCreateTime =this.createTime.replace(/-/g,"/")
				var orderTime=new Date(newCreateTime); 
				var leftTime =  new Date().getTime() - orderTime.getTime()
				var cz=15*60*1000  - leftTime;
				//console.log(cz)
				var m=Math.floor(cz/1000/60%60);
				m=m<10?"0"+m:m;
				this.timeMinute=m;
				var s=Math.floor(cz/1000%60);
				s=s<10?"0"+s:s;
				this.timeSecond=s;
				if(cz<1000){
					clearInterval(this.interval);
					//this.isShow=false
				}
             },
			
			/*	uni.navigateTo({
					url:'../../pages/settle/settle?goodsArr='+JSON.stringify(this.goodsArr)
				})*/
				async  wxPay(){
					const result=await advancePay(this.token,this.orderNumber)
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
						}
					});
				},
			async goCancel(){
					const res=await cancelOrder(this.token,this.detailId)
					console.log(res)
					if(res){
						clearInterval(this.interval);
					}
				}
		}
	}
</script>

<style lang="scss" scoped>
	.head{
		padding: 40rpx 140rpx 20rpx;
		background-color: #fff;
		margin-bottom: 20rpx;
		.up{
			font-size: 32rpx;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.down{
			display: flex;
			justify-content: space-around;
			.btn{
				width: 140rpx;
				height: 50rpx;
				border: 1px solid #ccc;
				text-align: center;
				line-height: 50rpx;
				border-radius: 10rpx;
				position: relative;
				.service{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					opacity: 0;
				}
			}
			.bg{
				background-color: #ff6600;
				color: #fff;
			}
		}
	}
	[v-cloak]{
			display: none
		}
</style>
