<template>
	<view class="collectWrapper">
		<view class="agentItem">
			<image src="http://47.93.61.34:8081/city.png"></image>
			<view class="users" :style="{'paddingTop': (menuButtonInfo.bottom - 25) + 'px'}">
				<view class="cuIcon-back back" @click="backs"></view>
				<view class="user">关于我们</view>
			</view>
		</view>
	        <view class="uni-padding-wrap">
	            <view class="page-section swiper">
	                <view class="page-section-spacing">
	                    <swiper class="swiper" :duration="duration" @change="swiperChange" :current="currentVal" :previous-margin="previous" :next-margin="next">
	                        <swiper-item>
								<view class="swiper-item">
									<view class="logoBox" v-for="(item,index) in agentData" :key="item.id">
										<view class="logoColor">
											<image src="../../../static/logo.png"></image>
										</view>
										<view class="writeBack">
											<view class="writeMove">
												<view class="agentName">福建企瑞宝科技服务有限公司</view>
												<view class="Subtitle">{{item.platformName}}</view>
												<!-- <view class="keynote">{{item.remark}}</view> -->
												<view style="color: #666666;font-size: 26rpx;">
													<text>{{item.content}}。</text>
													</view>
													<button open-type="contact" class="consulting">
														<view style="line-height: 80rpx;">立即咨询</view>
													</button>
											</view>
										</view>			
									</view>	
								</view>
							</swiper-item>
	            <swiper-item>
								<view class="swiper-item">
									<view class="logoBox" v-for="(item,index) in IntroductData" :key="item.id">
										<view class="logoColor">
											<image src="../../../static/logo.png"></image>
										</view>
										<view class="writeBack">
											<view class="writeMove">
												<view class="agentName">{{item.platformName}}</view>
												<view class="Subtitle">{{item.platformType}}</view>
												<!-- <view class="Basic">{{item.remark}}</view> -->
												<view style="color: #666666;font-size: 26rpx;">
													<text>{{item.content}}</text>
												</view>
												<view style="display: flex;align-items: center;">
													<image style="width: 35rpx;height: 35rpx;flex-shrink: 0;" src="../../../static/personal/mailbox.png"></image>
													<view class="mailbox">邮箱：{{item.email}}</view>
												</view>
												<view style="display: flex;align-items: center;">
													<image style="width: 35rpx;height: 35rpx;flex-shrink: 0;" src="../../../static/personal/phone.png"></image>
													<view class="mailbox">电话：{{item.phone}}</view>
												</view>
												<view style="display: flex;">
													<image style="width: 35rpx;height: 35rpx; flex-shrink: 0;margin-top: 10rpx;" src="../../../static/personal/Geography.png"></image>
													<view class="address">地址：{{item.address}}</view>
												</view>
												<view>
													<view class="page-body">
															<view class="page-section page-section-gap">
																	<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
																	</map>
															</view>
													</view>
												</view>
											</view>
										</view>			
									</view>	
								</view>
							</swiper-item>
	            <swiper-item>
								<view class="swiper-item">
									<view class="logoBox"  v-for="(item,index) in aboutData" :key="item.id">
										<view class="logoColor">
											<image src="../../../static/logo.png"></image>
										</view>
										<view class="writeBack">
											<view class="writeMove">
												<view class="agentName">{{item.platformName}}</view>
												<view class="Subtitle">{{item.platformType}}</view>
												<!-- <view class="keynote" style="text-align: center;">{{item.remark}}</view> -->
												<view style="color: #666666;">
													<text>{{item.content}}</text>
												</view>
											</view>
											
										</view>			
									</view>	
								</view>
							</swiper-item>
	                    </swiper>
	                </view>
	            </view>
	        </view>
	    </view>



</template>
<script>
	import { getPlatform,getAbout,getIntroduction,getBookkeeping } from '../../../API/about/about.js'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';	
	export default{
		data() {
			return {
				aboutData:[],
				IntroductData:[],
				agentData:[],
				menuButtonInfo: {}, //页面右上角胶囊位置
				background: ['color1', 'color2', 'color3'],
				account:'代理记账',
				about:'联系我们',
				introduction:'企业介绍',
				duration: 500,
				// 控制swiper的显示
				currentVal: 0,
				// 顶部tabs显示状态
				selectStatus: 0,
				previous:30,
				next:30,
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: '',
				longitude: '',
				lates:'',
				longes:'',
				reData:[],
				aboutAdress:'',
				covers: [{
						latitude: '',
						longitude: '',
						// iconPath: '../../../static/location.png'
				}],
			}
		},
		computed: {
			...mapState(['unfoin','token','userInfo','phoneNumber']),
		},
		onLoad() {
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			this.getaBout()
		},
		onShow() {
			this.getaBout()
			this.getIntroduct()
			this.getBookkeep()
		},
		methods: {	
				async getaBout() {
					const res = await getPlatform(this.account);
					this.aboutData=res.data.list
					console.log(this.aboutData)
					this.aboutAdress = this.aboutData[0].address
					var str = res.data.address
					console.log(str)
					this.longitude=(str.split(',')[0])
					this.latitude=(str.split(',')[1])
					console.log(this.latitude)
					console.log(this.longitude)
					this.covers.forEach(item=>{
						item.latitude = this.latitude
						item.longitude = this.longitude
					})
					// this.adresslate()
				},
				
				// async adresslate(){
				// 	uni.request({
				// 		url:'http://api.map.baidu.com/geocoding/v3/',
				// 		data:{
				// 			address:this.aboutAdress,
				// 			output: 'json',
				// 			ak:"sWx0QN8YGvO5qzu3181D7k7vjLRaeBKZ"
				// 		}
				// 	}).then(json => {
				// 	   // 得到我们想要的内容
				// 		 console.log(json)
				// 		 // this.reData = json
				// 		 // console.log(this.reData)
				// 		 this.lates = json[1].data.result.location.lat
				// 		 this.longes = json[1].data.result.location.lng
				// 		 this.covers.forEach(item=>{
				// 			 item.latitude = this.lates
				// 			 item.longitude = this.longes
				// 		 })
				// 		 console.log(this.lates)
				// 		 console.log(this.longes)
				// 		 this.latitude=this.lates
				// 		 this.longitude=this.longes
				// 		 console.log(this.latitude)
				// 		 console.log(this.longitude)
				// 	}).catch(err => {
				// 	   console.log(err)
				// 	})
				// },
				
				async getIntroduct(){
					const res = await getPlatform(this.about);
					this.IntroductData = res.data;
					console.log(this.IntroductData)
				},
				async getBookkeep(){
					const res = await getPlatform(this.introduction);
					console.log(res)
					this.agentData = res.data;
				},
			backs(){
				console.log(1111)
				uni.navigateBack({		
					
				})
			},
			// 点击顶部tabs触发该函数
			changeTabs(i) {
				this.currentVal = i;
				this.selectStatus = i;
			},
			// swiper切换此函数被监听
			swiperChange(e) {
				this.selectStatus = e.detail.current;
			},
			
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
	}
	.selectStatus {
		color: rgba(19, 149, 244, 1);
		border-bottom: 4rpx solid rgba(19, 149, 244, 1);
	}
	.collectWrapper {
	    // 确保swiper 内容填满设备，若需自适应只需取消掉100%即可
		width: 100%;
		height: 100%;
		z-index: -10;
		.agentItem{
			width: 100%;
			height: 660rpx;
			width: 100%;
			height: 658rpx;
			position: absolute;
			image{
				width: 100%;
				height: 100%;
				z-index: -5;
			}
			.users{
				display: flex;
				width: 100%;
				position: absolute;
				top: 0;
				z-index: 999;
				.back{
					color: #fff;
					padding-left: 10rpx;
				}
				.user{
					color: #fff;
					// padding-left: 10rpx;
					width: 100%;
					text-align: center;
				}
			}
		}
		.uni-padding-wrap {
	        height: 100%;
	        .page-section-spacing {
	            height: 100%;
	        }
	        .swiper {
	            height: 100%;
				.logoBox{
					width: 100%;
					height: auto;
					display: flex;
					justify-content: center;
					.logoColor{
						position: absolute;
						font-size: 20px;
						top: 190rpx;
						width: 150rpx;
						height: 150rpx;
						line-height: 150rpx;
						background-color: #fff;
						color: #333333;
						border-radius: 50%;
						text-align: center;
						font-weight: bold;
						box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);//阴影
					}
					.writeBack{
						width: 94%;
						background-color: #FFFFFF;
						margin-top: 130px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						padding: 10rpx;
						.writeMove{
							padding: 20rpx;
							height: 100vh;
							.agentName{
								text-align: center;
								margin-top: 80rpx;
								color: #333333;
								font-size: 32rpx;
								font-weight: 550;
							}
							.Subtitle{
								text-align: center;
								color: #666666;
								margin-top: 20rpx;
								font-size: 30rpx;
							}
							.keynote{
								color: #F77B44;
								margin: 20rpx 0 20rpx 0;
								font-size: 28rpx;
							}
							.Basic{
								color: #666666;
								font-size: 28rpx;
							}
							.consulting{
								width: 200rpx;
								height: 80rpx;
								background-color: #50ADF9;
								color: #FFFFFF;
								text-align: center;
								line-height: 80rpx;
								font-size: 28rpx;
								border-radius: 40rpx;
								margin: 50rpx 180rpx;		
							}
							.mailbox{
								color: #9B9B9B; 
								font-size: 26rpx;
								margin-left: 20rpx;
							}
							.address{
								color: #9B9B9B;
								font-size: 26rpx;
								margin-left: 20rpx;
							}
						}
					}
				}
	        }
		}
	}
</style>
