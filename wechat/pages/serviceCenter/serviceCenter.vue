<template>
	<view class="container">
		<view class="helpItem">
			<view class="helpCenter">
				帮助中心
			</view>
			<view v-for="(item,index) in typeData" :key="index">
				<view class="problemItem" @click="help(item)">
				 	<view class="Distribute">
				 		<text style="color: #0A90FE;" class="cuIcon-title"></text>
				 		{{item.classifyName}}
				 	</view>
					<text :class="item.dictionaryStatus==false?'cuIcon-unfold':'cuIcon-fold'"></text>
				 </view>
				 <view class="problemItem" v-for="(problem,index) in commonData" :key="problem.id" v-show="item.dictionaryStatus"  @click="goAnswer(problem.resultContent)">
						<view style="color: #666666;">{{problem.problemContent}}</view>
						<text style="color: #666666;" class="cuIcon-right"></text>
				 </view>
			</view>
		</view>
		
		<view class="footer">
			<view class="online">
				<!-- <text class="cuIcon-weixin" style="font-size: 40rpx;"></text> -->
				<image style="width: 40rpx;height: 40rpx;" src="../../static/personal/service.png"></image>
				<text style="margin-left: 20rpx;">在线客服 07:00~22:00</text>
				<button open-type="contact" class="btn"></button>
			</view>
			<view class="telPhone" @click="call">
				<!-- <text class="cuIcon-dianhua" style="font-size: 40rpx;"></text> -->
				<image style="width: 40rpx;height: 40rpx;" src="../../static/personal/phone.png"></image>
				<text style="margin-left: 20rpx;">电话客服 08:00~22:00</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex';
	import {
		problemByType
	}from '../../API/personArr';
	export default{
		data() {
			return {
				// questionList:[],
				questionList:[{
					classifyName:'配送问题',
					state:false
				}],
		        //display:false,
				detailList:[],
				typeData:[],
				state:false,
				classifyTag:'',
				commonData:[],
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad() {
			// this.getproblemTypeList();
			this.getproblemByType();
		},
		onShow() {
	
		},
		methods:{
			help(item){
				this.typeData.forEach(item=>{
					if(item.dictionaryStatus==true){
						item.dictionaryStatus = false
					}
				})
				console.log(item)
				this.classifyTag = item.classifyTag
				this.getcommon()
				
				item.dictionaryStatus=!item.dictionaryStatus
				console.log(item.dictionaryStatus)
				
			},
			
			async getcommon() {
				const res = await problemByType(this.classifyTag);
				console.log(res)
				this.commonData = res.data.problem
				console.log(this.commonData)
				
			},
			
			
			/* async getproblemTypeList() {
				uni.showLoading({
					title:'加载中'
				})
				const res = await problemTypeList();
				console.log(res);
				if(res)
				uni.hideLoading()
				res.data.map(item=>{
					item.state=false
				});
				this.questionList = res.data;
				}, */
				async getproblemByType() {
					// uni.showLoading({
					// 	title:'加载中'
					// })
					const res = await problemByType(this.classifyTag);
					// console.log(res);
					this.typeData = res.data.type;
					this.typeData.forEach(item=>{
						item.dictionaryStatus=false
					})
					console.log(this.typeData);
				},
					
		async displayList(item){
			item.state=!item.state
		},
		call(){
			uni.makePhoneCall({
				phoneNumber:'0258'
			})
		},
		
		goAnswer(result){
			console.log(result)
			uni.navigateTo({
				url:'../answer/answer?result='+result
			})
		}
			
		}
	}
</script>

<style lang="scss">
	.container{
		padding: 20rpx;
		.helpItem{
			padding: 20rpx;
			border-bottom: 1px solid #eee;
			background-color: #fff;
			.helpCenter{
				font-size: 30rpx;
				padding: 20rpx;
				border-bottom: 1px solid #eee;
				background-color: #fff;
			}
		}
	}
	
	.problemItem{
		padding: 20rpx;
		border-bottom: 1px solid #eee;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
	}
	.title{
		color: var(--button);
	}
	.footer{
		position: fixed;
		bottom: 0;
	    left: 0;
		width: 100%;
		height: 250rpx;
		background-color: #fff;
		.online{
			width: 500rpx;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			border-radius: 40rpx;
			color: #fff;
			// background-color: var(--button);
			background-color: #0A90FE;
			margin: 40rpx auto;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			.btn{
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				opacity: 0;
			}
		}
		.telPhone{
			text-align: center;
			align-items: center;
			display: flex;
			justify-content: center;
		}
	}
</style>
