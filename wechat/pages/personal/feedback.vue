<template>
	<view class="pageWidth">
		<view class="textItem">
			<textarea class="textarea" v-model="formList.content" placeholder="请输入您的建议" />
			<view class="proposal">
				感谢您的反馈与建议，我们将竭尽改进，为您提供更好的服务！
			</view>
			<view>
				<button class="pickButton" @tap="pickUp">提交</button>
			</view>
		</view>
		
		<!-- <view class="Itembottom">
			<view class="tipItem">
				感谢您的反馈与建议，我们将竭尽改进，为您提供更好的服务！
			</view>
			<button class="pickButton" @tap="pickUp">提交</button>
		</view> -->
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
		getFeedback
	} from '../../API/feedbackArr';
	import {
		showToast,
	} from '../../common/util.js';
	export default {
		data() {
			return {
				/* name: 'tom',
				phone: '13811112222', */
				content: '',
				formList:{},
			}
		},
		computed: {
			...mapState(['unfoin','token']),
		},
		onLoad() {
			
		},
		onShow() {
		},
		onHide() {
		},
		methods: {
			...mapMutations(['unfoins']),
			// subguanwhere(){
			// 	this.subkaiqi = false;
			// 	this.subguabbi = false;
			// },
			
			
			async pickUp() {
				if(!!!this.formList.content){
					uni.showToast({
						title:'请输入建议',
						icon:'none'
					})
					return
				}
					const res = await getFeedback(
						this.token,
						this.formList.content,
					);
					if(res) {
						console.log(res)
						if(res.msg=="ok") {
							uni.showToast({
								title: "提交成功!",
								icon: 'success'
							})
							// uni.reLaunch({
							// 	url: 'address'
							// })
							setTimeout(() => {
								uni.navigateBack({
									delta: 1
								})
							},1500)
						}else {
							showToast('提交失败')
						}
					}else {
						showToast('服务器错误')
					}
				
			},
			
			/* async pickUp() {
				if(this.content) {
					this.content = this.stripscript(this.content);
					console.log(this.content)
					const res = await getFeedback(this.token,this.content);
					console.log(res)
					if(res) {
						uni.showToast({
							title: "提交成功!",
							icon: 'success'
						})
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							})
						},2000)
					}else {
						showToast('服务器错误')
					}
				}else {
					showToast('请输入您的建议内容')
				}
			}, */
			
			stripscript(s) { 
				var pattern = new RegExp("[`~@#$^&*()=|{}''\\[\\]<>/@#￥……&*（）——|{}【】‘；']") 
				var rs = ""; 
				for (var i = 0; i < s.length; i++) { 
				rs = rs+s.substr(i, 1).replace(pattern, ''); 
				} 
				return rs; 
			}
		}
	}
</script>

<style lang="scss">
	.textItem {
		width: 100%;
		height: 84%;
		background-color: #fff;
		padding: 20rpx;
		.textarea {
			height: 930rpx;
			width: 100%;
			border:1px solid #CCCCCC;
			font-size: 28rpx;
			// color: #CCCCCC;
			line-height: 40rpx;
			padding: 20rpx;
		}
		.proposal{
			// color: #999999;
			font-size: 12px;
			text-align: center;
			margin-top: 30rpx;
		}
		.pickButton {
			width: 94%;
			height: 8%;
			background-color: #1695FD;
			color: white;
			border-radius: 50rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 15px;
		}
	}
	.submit{
		width: 100%;
		
		.submitcont{
			padding: 50rpx 0;
			background-color: rgb(242,242,242);
			text{
				text-align: center;
				display: block;
			}
		}
		.submitwhite{
			width: 100%;
			height: 340rpx;
			background-color: #fff;
		}
	}
	.tipItem {
		width: 100%;
		height: 8%;
		font-size: 24rpx;
		color: #6f7070;
		text-align: center;
		padding: 30rpx 0;
		background-color: #ccc;
	}
	
	.Itembottom{
		width: 100%;
		position: fixed;
		bottom: 0;
		left:0;
	}
</style>
