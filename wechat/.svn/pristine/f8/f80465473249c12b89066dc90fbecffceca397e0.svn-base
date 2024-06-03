<template>
	 <view class="container">
		 <view class="help">
		 	 帮助中心
		 </view>
		 <view class="problems" v-for="(item,index) in questionList" @click="display(item)">
		 	 <view class="title" >
		 	 	 <text>{{item.classifyName}}</text>
				 <text style="margin-left: 40rpx;">{{item.problemDescription}}</text>
		 	 </view>
			 <text class="jiantou" :class="item.state==false?'cuIcon-right':'cuIcon-unfold'"></text>
		 </view>
		 
		 
		 <view class="phone" v-if="service">
		 	<view class="onlineservice">
		 		在线客服: 08:00~22:00
		 	</view>
		 	<view class="hotlineservice">
		 		客服热线：0591-8888 8888
		 	</view>
		 </view>
		 
		 <view class="question" v-if="problemContent">
		 	<view class="titleItem">
		 		<text>{{problemName}}</text>
		 		<text class="cuIcon-roundclose" style="font-size: 40rpx;" @click="away"></text>
		 	</view>
		 	<view class="neirong" v-for="(item,index) in problemDetail" @click="goAnswer(item.resultContent)">
		 		<text>{{item.problemContent}}</text>
		 		<text class="cuIcon-right lg"> </text>
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
		problemTypeList,problemList
	}from '../../API/personArr';
	export default {
		data() {
			return {
				questionList:[],
				problemContent:false,
				service:true,
				problemName:'',
				problemDetail:[]
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad() {
			
		},
		onShow() {
			this.getproblemTypeList();
		},
		onHide() {
		},
		methods: {
		async getproblemTypeList() {
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
			}, 
		 async	display(item){
			 if(this.questionList.some(v=>v.state==true)) 
			    return
				item.state=true
				this.service=false
				this.problemContent=true
				//this.questionList.forEach(v=>v.state=false)
				//this.service=!this.service
				//this.problemContent=!this.problemContent
				this.problemName = item.classifyName;
				const res = await problemList(item.problemType);
				console.log(res);
				console.log(res.data)
				this.problemDetail=res.data
			}, 
			away(){
				this.problemContent=false
				this.service=true
				this.questionList.forEach(v=>v.state=false)
			},
			goAnswer(resultContent){
				uni.navigateTo({
					url:'../answer/answer?resultContent='+resultContent
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.help{
		padding: 20rpx;
		border-bottom: 1px solid #eee;
	}
	.problems{
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		border-bottom: 1px solid #eee;
		.title{
			padding: 20rpx 0;
		}
		.jiantou{
			display: flex;
			align-items: center;
		}
	}
	
	.onlineservice,.hotlineservice{
		width: 100%;
		padding: 30rpx 0;
		text-align: center;
		position: absolute;
		background-color: #06c35f;
		color: #fff;
	}
	.onlineservice{
		bottom:140rpx;
	}
	.hotlineservice{
		bottom:0;
	}
	.question{
			 position: absolute;
			 left:0;
			 bottom:0rpx;
			 background-color: #fff;
			 width: 100%;
			 border-top-left-radius:20rpx;
			 border-top-right-radius:20rpx;
			 border: 1px solid #aaa;
	}
	.titleItem{
			 padding: 0 20rpx 0 60rpx;
			 border-bottom: 1px solid #aaa;
			 font-size: 28rpx;
			 height: 80rpx;
			 line-height: 80rpx;
			 display: flex;
			 justify-content: space-between;
	}
	.neirong{
			 padding: 0 40rpx;
			 height: 80rpx;
			 line-height: 80rpx;
			 display: flex;
			 justify-content: space-between;
			 align-items: center;
	}
</style>
