<template>
	<view class="container">
		<view class="card" @click="goodsDetail(item.id)" v-for="(item,index) in productList" :key="index">
			<image :src="item.goodsSmallImage" mode=""></image>
			<view class="describle">
				<view class="" style="margin-bottom: 20rpx;">
					{{item.goodsTypeName}}
				</view>
				<view class="">
					<text style="font-size: 32rpx;color:#F86500;margin-right: 20rpx;">¥{{item.goodsSuggestedRetailPrice}}</text> 
				<!--	<text style="text-decoration: line-through;">¥{{item.goodsPrice}}</text> -->
				</view>
			</view>
			<view class="pay">
				立即购买
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
				productList:[]
			}
		},
		computed: {
			...mapState(['token']),
		},
		onShow() {
		     this.getProductList()
		},
		methods:{
			async getProductList(){
				const res=await getAdvice(this.token)
				console.log(res)
				this.productList=res.productRecommenList
			},
			goodsDetail(id){
				uni.navigateTo({
					url:'../seckill/seckdeil?id='+id
				})
			},
		}
	}
</script>

<style lang="scss">
	.container{
		padding: 20rpx;
		.card{
			display: flex;
			background-color: #fff;
			padding: 20rpx;
			align-items: center;
			image{
				width: 150rpx;
				height: 150rpx;
			}
			.describle{
				width: 280rpx;
				margin:0 50rpx 0 20rpx;
			}
			.pay{
				width: 150rpx;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				background-color: var(--button);
				color: #fff;
				border-radius: 10rpx;
			}
		}
	}
</style>
