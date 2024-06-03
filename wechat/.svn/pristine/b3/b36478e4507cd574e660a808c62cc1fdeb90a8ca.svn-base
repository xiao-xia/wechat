<template>
	<view class="container">
		<view class="card" v-for="(item,index) in adviceList" :key="index" @click="ArticleDetail(item.id)">
			<view class="left">
				<view class="" style="width: 100%;">
					{{item.articleTitle}}
				</view>
				<view class="" style="display: flex; justify-content: space-between;width: 100%;">
					<text>云居家</text>
					<text style="margin-right: 20rpx;">{{item.period}}</text>
				</view>
			</view>
			<view class="right">
				<image :src="item.img" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex';
	import {getAdvice} from '../../API/healthy/index.js'
	export default{
		data(){
			return{
				idArr:[],
				adviceList:[]
			}
		},
		computed: {
			...mapState(['token']),
		},
		onShow() {
		     this.getAdviceList()
		},
		methods:{
			async getAdviceList(){
				uni.showLoading({
					title:'加载中'
				})
				const res=await getAdvice(this.token)
				console.log(res)
				if(res){
					uni.hideLoading()
					this.adviceList=res.adviceList
					console.log(this.adviceList)
					this.idArr=res.adviceIds
				}
			},
			ArticleDetail(id){
				uni.navigateTo({
					url:'../goodwriiting/articledetail?id='+id+ '&ids=' + JSON.stringify(this.idArr)
				})
			},
		}
	}
</script>

<style lang="scss">
	.container{
		padding: 20rpx;
	}
	.card{
		background-color: #fff;
		display: flex;
		padding: 20rpx;
		height: 200rpx;
		margin-bottom: 20rpx;
		.left{
			width: 70%;	
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;
		}
		.right{
			width: 30%;
			image{
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
	}
</style>
