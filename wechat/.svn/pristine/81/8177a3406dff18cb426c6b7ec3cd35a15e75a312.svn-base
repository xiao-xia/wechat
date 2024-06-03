<template>
	<view class="pageWidth pagebg-white">
		<view class="functionBlcok" v-for="(fun,index) in functionList" :key="index" @tap="navWhere(fun)" >
			<view class="functionLeft">
				<view class="functionText">
					{{fun.name}}
				</view>
			</view>
			<view class="cuIcon-right" style="color: #B9B9B9;">
			</view>
		</view>
		<view class="functionBlcok">
			<view class="functionText" style="color: #666666; font-size: 28rpx;">
				版本信息:  {{versionNum}}
			</view>
		</view>
		<view class="singout" v-if="token" @tap="toExit">
			退出登录
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
		newestVersion
	}from '../../../API/personArr';
	import {
		getSignout
	}from '../../../API/signout/index.js';
	export default {
		data() {
			return {
				versionNum:'',
				functionList:[
					{name:'用户协议',nav:'userAgreement'},
					{name:'关于我们',nav:'aboutUs'},],
			}
		},
		computed: {
			...mapState(['unfoin','token']),
		},
		onLoad() {
		},
		onShow() {
			this.getProInfo(); 
		},
		onHide() {
		},
		methods: {
			...mapMutations(['unfoins']),
			
			// 跳转到哪里
			navWhere(e) {
				var that = this;
				switch (e.nav) {
					case 'aboutUs':
						uni.navigateTo({
							url:'/pages/personal/setting/aboutUs'
						})
						break;
					case 'userAgreement':
						uni.navigateTo({
							url: '/pages/personal/setting/userAgreement'
						})
						break;
					default:
						break;
				}
			},
			async getProInfo() {
				const res = await newestVersion(this.token);
				console.log(res);
				if(res) {
					this.versionNum = res.data.versionNumber;
				}
			},
			toExit() {
				var that = this;
				uni.showModal({
				    title: '提示',
				    content: '您真的要退出登录吗?',
					cancelText: '不了!亲',
					confirmText: '退出登录',
				    success: function (res) {
				        if (res.confirm) {
				            that.toExitEvent()
				        } else if (res.cancel) {
				            
				        }
				    }
				});
			},
			async toExitEvent(){
				this.$store.commit('deleteToken')
				uni.switchTab({
					url:'../personal'
				})
				const res = await getSignout(this.token);
				// this.orderState.forEach(item => {
				// 	item.count = 0;
				// })
				//this.deleteToken()
				/*if(res) {
					showToast('退出成功')
				}*/
			},
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
		position: relative;
		
		.singout{
			width: 100%;
			// padding: 30rpx 0;
			height: 100rpx;
			text-align: center;
			// font-size: 32rpx;
			// font-weight: bold;
			line-height: 100rpx;
			font-size: 36rpx;
			color:red;
			background-color: #fff;
		}
	}
	.functionBlcok {
		width: 100%;
		height: 100rpx;
		padding: 0 50rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #F0F0F0;
		.functionLeft {
			display: flex;
			align-items: center;
			.functionText {
				font-size: 28rpx;
				color: #666666;

			}
			.functionIcon {
				font-size: 40rpx;
			}
		}
	}
</style>
