<template>
	<view class="pageWidth">
		<view class="tip">
			完善个人信息，有助于我们为您提供更好的会员服务
		</view>
		<view class="">
			<view class="infoItem" v-for="(item,index) in infoList" :key="index">
				<view class="inputName">
					{{item.name}}
				</view>
				<view class="inputValue">
					{{item.value}}
				</view>
			</view>
		</view>
		
		<button  class="button" @tap="myeditwhere">修改</button>
		
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
		detail
	} from '../../../API/mymessArr';
	export default {
		data(){
			return {
				infoList:[{name:'手机',value:'暂无'},
				    {name:'昵称',value:'暂无'},
					  {name:'姓名',value:'暂无'},
						{name:'性别',value:'暂无'},
					  // {name:'身份证',value:'暂无'},
						{name:'生日',value:'暂无'}
				]
			}
		},
		computed: {
			...mapState(['userInfo','token','phoneNumber']),
		},
		onLoad() {
			console.log(this.userInfo)
			console.log(this.userInfo.nickName)
			console.log(this.phoneNumber)
			if(this.userInfo){
				this.infoList[1].value=this.userInfo.nickName
				console.log(this.infoList[1].value)
			}
			if(this.phoneNumber){
				this.infoList[0].value=this.phoneNumber
			}
			if(this.userInfo.gender==0){
				this.infoList[3].value='男'
			}else{
				this.infoList[3].value='女'
			}
			
		},
		onShow() {
			//var that=this
			//setTimeout(this.getMessasy,5000)
			this.getMessasy()
		},
		onHide() {
		},
		methods: {
			myeditwhere(){
				uni.navigateTo({
					url:'./editmymessage?id=' +this.id + '&nickName=' + this.infoList[1].value + '&realName=' + this.infoList[2].value + '&sex=' + this.infoList[3].value + '&birthday=' + this.infoList[4].value+ '&phone=' + this.infoList[0].value
				})
			},
		async getMessasy(){
				const res=await detail(this.token)
				console.log(res)
				this.id = res.data.id
				if(res.data.phone){
					this.infoList[0].value=res.data.phone
				}else{
					this.infoList[0].value='暂无'
				}
				
				this.infoList[1].value=res.data.nickName
				
				this.infoList[2].value=res.data.realName
				if(res.data.sex==4){
				this.infoList[3].value='男'
				}else{
					this.infoList[3].value='女'
				}
				if(res.data.birthday){
					this.infoList[4].value=res.data.birthday
				}else{
					this.infoList[4].value='暂无'
				}
			}
		}
	}
	
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.tip {
		color: #A4A5A5;
		font-size: 28rpx;
		text-align: center;
		padding: 30rpx 0;
	}
	.infoItem {
		background-color: #fff;
		height: 100rpx;
		border-bottom: 1rpx solid #F0F0F0;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.inputName {
			font-size: 28rpx;
			/* line-height: 100rpx; */
			color: #666666;
		}
		.inputValue {
			font-size: 28rpx;
			color: #a4a5a5;
			line-height: 100rpx;
		}
		
		.inputFrame {
			width: 70%;
			text-align: right;
			color: #A4A5A5;
		}
		
		.radioGroup {
			width: auto;
			display: flex;
			margin-top: 5rpx;
			
			.radioBlock {
				width: auto;
				margin: 0 0 0 36rpx;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				padding: 10rpx;
				.radio-style{
					transform: scale(0.7);
				}
				.radioName {
					font-size: 28rpx;
					line-height: 56rpx;
					margin-left: 30rpx;
				}
			}
		}	
	}
	.infoItem:last-child {
		border: none;
	}
	
	.button {
		width: 100%;
		height: 100rpx;
		background-color:#008CFF;
		color: white;
		border-radius: 0;
		line-height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
	}
</style>

