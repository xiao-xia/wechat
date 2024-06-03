<template>
	<view class="classification">
		<view class="search" @click="goSearch">
			<view class="searchcrux">
				<text class="cuIcon-search lg find"></text>
				<view class="searchinp"> 
				  请输入商品/服务等关键词
				</view>
			</view>
		</view>
		<view class="menu">
			<view class="" :class="current==0?'titleActive':''" @click="change(0)"> 
				综合
			</view>
			<view class="" :class="current==1?'titleActive':''" @click="change(1)">
				销量
			</view>
			<view class="" style="display: flex;align-items: center;" @click="range(2)">
				<text :class="current==2?'titleActive':''">价格</text>
				<view class="">
					<view class="cuIcon-triangleupfill" style="line-height: 20rpx;font-size: 30rpx;" :class="clickTimes%2!=0?'titleActive':''">
					</view>
					<view class="cuIcon-triangledownfill" style="line-height: 8rpx;font-size: 30rpx;margin-bottom: 6rpx;" :class="clickTimes!=0&&clickTimes%2==0?'titleActive':''">
					</view>
				</view>
			</view>
		</view>
		<view class="typeBack" v-for="(item,index) in goodsTypedata" :key='item.goodsTypeId' @click="goDetail(item)">
			<view>
				<image class="imgcolor" :src="item.goodsVo.goodsMainImage"></image>
			</view>
			<view class="categoryPrice">
				<view style="font-size: 26rpx;">{{item.goodsVo.goodsName}}</view>
				<view style="color: #f5595a;font-size: 38rpx;font-weight: 600;">
					<text style="font-size: 12px;color: red;">￥</text>
					<text>{{item.goodsVo.goodsSuggestedRetailPrice}}</text>
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
		getClassifi,
	} from '../../API/classificationArr/index';
	export default {
		data() {
			return {
				current:0,
				typeName:'',
				goodsTypedata:[]
			}
		},
		computed:{
			...mapState(['unfoin','token','userInfo']),
		},
		onLoad(options) {
			console.log(options)
			this.typeName=options.typeName
			console.log(this.typeName)
		},
		onShow() {
			this.getClassifi()
		},
		methods: {
			goSearch(){
				uni.navigateTo({
					url:'../searchs/searchs'
				})
			},
			goDetail(item){
				console.log(item)
					uni.navigateTo({
						url:'/pages/seckill/seckdeil?goodsTypeId='+item.goodsTypeId+ '&superiorId=' +item.superiorId
					})
			},
			unLoadEvent() {
				uni.showModal({
				    title: '提示',
				    content: '您还未登录哦，请先登录~',
					showCancel: false,
					confirmText: '立即登录',
				    success: function (res) {
				        if (res.confirm) {
							uni.reLaunch({
								url: '../login/login'
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			async getClassifi(){
				const res=await getClassifi();
				var Arr = res.data
				console.log(Arr)
				Arr.forEach((item,index)=>{
					if(item.categoryName ==this.typeName){
						this.goodsTypedata=res.data[index].goodsTypeVos;
						console.log(this.goodsTypedata);
					} 
				})
			},
			change(index){
				this.current=index
				if(index!=2){
					this.clickTimes=0
				}
				//this.searchEvent()
			},
			range(index){
				this.clickTimes++
				console.log(this.clickTimes%2!=0)
				console.log(this.clickTimes!=0&&this.clickTimes%2==0)
				this.current=index
				if(this.clickTimes!=0&&this.clickTimes%2==0){
					this.goodList=this.goodList.sort((a,b)=>a.goodsSuggestedRetailPrice-b.goodsSuggestedRetailPrice).reverse()
				}else if(this.clickTimes%2!=0){
					this.goodList=this.goodList.sort((a,b)=>a.goodsSuggestedRetailPrice-b.goodsSuggestedRetailPrice)
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		background-color: #FFFFFF;
		.classification{
			.search{
				width: 100%;
				background-color: #fff;
				padding:20rpx 30rpx;
				
				.searchcrux{
					width: 100%;
					height: 60rpx;
					line-height: 60rpx;
					display: flex;
					flex-direction: row;
					background:#EDEDF0;
					border-radius: 50rpx;
					position: relative;
					
					.find{
						margin-left: 20rpx;
					}
					
					.searchinp{
						width: 100%;
						height: 60rpx;
						line-height: 60rpx;
						font-size: 28rpx;
						color: #AAAAAA; 
						padding-left: 20rpx;
						
					} 
				}
			}
			.menu{
				display: flex;
				background-color: #fff;
				justify-content: space-around;
			}	
			.titleActive{
				// color:var(--button);
				color:#008CFF;
			}
			.typeBack{
				padding: 20rpx 20rpx 10rpx 20rpx;
				display: flex;
				border-bottom: 1rpx solid #f2f2f2;
				.imgcolor{
					width: 230rpx;
					height: 220rpx;
				}
				.categoryPrice{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					margin-left: 20rpx;
				}
			}
		}
	    
		
	}	
</style>
