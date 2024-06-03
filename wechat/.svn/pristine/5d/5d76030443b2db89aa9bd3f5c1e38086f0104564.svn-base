<template>
	<view class="container">
		<view class="seller" v-if="pageShow">
			<view class="people">
				<image :src="goodsObj.avatarUrl" mode=""></image>
				<view class="">
					<view class="">
						{{goodsObj.linkmanName}}
					</view>
					<view class="">
						{{goodsObj.createTime}} 发布
					</view>
				</view>
			</view>
			<view class="contact" @tap="showModalEvent">
				管理
			</view>
		</view>
	    
	    <view class="detail" v-if="pageShow">
	    	<view class="item" style="font-size: 40rpx;color: #F86500;">
	    		¥{{goodsObj.productPrice}}
	    	</view>
			<view class="item">
				发货地址:{{goodsObj.linkmanAddress}}
			</view>
			<view class="item" style="border-bottom: 1px solid #ccc;">
				{{goodsObj.productDescribe}}
			</view>
			<image v-for="(item,index) in goodsObj.DetailPicArr" :key="index" :src="item" mode="widthFix"></image>
	    </view>
		
		<view class="cu-modal show" v-if="modalShow">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content ">
						管理商品
					</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="item" @click="goPublish(goodsObj)">
					修改商品信息
				</view>
				<view class="item" @click="deleteProject">
					删除商品
				</view>
				<view class="item" @click="goDown">
					下架商品
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
	import {detail,goDelete,goOffShelf} from '../../API/welfareArr/index.js'
	export default{
		data(){
			return{
			   modalShow: false,
			   id:'',
			   goodsObj:{},
			   productDetailPic:[],
			   pageShow:false
			}
		},
		onLoad(options) {
			this.id=options.id
		},
		computed: {
			...mapState(['userInfo','token','phoneNumber']),
		},
		onShow(){
		   this.getDetail()
		},
		methods:{
			showModalEvent(){
				this.modalShow=true
			},
			hideModal(){
				this.modalShow=false
			},
		async getDetail(){
			uni.showLoading({
				title:'加载中'
			})
				const res=await detail(this.id)
				console.log(res)
				if(res){
					this.pageShow=true
					uni.hideLoading()
					this.goodsObj=res
					this.goodsObj.DetailPicArr=this.goodsObj.productDetailPic.split(",")
				}
			},
			async goPublish(goodsObj){
				this.modalShow=false
				uni.navigateTo({
					url:'../welfare/releases?project='+JSON.stringify(goodsObj)+'&id='+this.id
				})
			},
			async deleteProject(){
				const res=await goDelete(this.token,this.id)
				console.log(res)
				if(res.data){
					uni.navigateBack({
					})
				}
			},
			async goDown(){
				const res=await goOffShelf(this.token,this.id)
				console.log(res)
				if(res){
					uni.navigateBack({
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		background-color: #fff;
	}
	.seller{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		align-items: center;
		border-bottom: 1px solid #ccc;
		.people{
			display: flex;
			image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			} 
		}
		.contact{
			width: 130rpx;
			height: 55rpx;
			background-color: #06c35f;
			text-align: center;
			line-height: 55rpx;
			color: #fff;
			border-radius: 10rpx;
		}
	}

    .detail{
		padding: 20rpx;
		.item{
			margin-bottom: 20rpx;
		}
		image{
			width: 100%;
		}
	}
	
	.cu-dialog {
		width: 400rpx;
		.content{
			width: 200rpx;
			 color:#06c35f;
		}
		.item{
			height: 60rpx;
			line-height: 60rpx;
		}
    }
</style>
