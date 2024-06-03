<template>
	<view class="location">
		<view class="top">
			<view class="search" @click="open">
				<text class="cuIcon-search lg left" ></text>
				<view class="input">
					请输入收货地址
				</view>
			</view>
		</view>
		<view class="place">
			<text class="cuIcon-locationfill lg" style="margin-right: 20rpx;color: #00ad87;"></text>
			<text>送至:{{selectedPlace||destination}}</text>
		</view>
		<view class="current">
			<view class="" style="color: #aaa;">
				当前定位
			</view>
			<view class="">
				{{msg}}
			</view>
		</view>
		<map :latitude="la" :longitude="lo" scale="14" :markers="markers"></map>
		<view class="address" >
			<view class="" style="color: #aaa;">
				选择收货地址 
			</view>
			<view class="detail" v-for="(item,index) in addressList" :key='index' @click='replace(item)'>
				<view class="tag">
					{{item.addressTag}}
				</view>
				<view class="" style="margin-left: 20rpx;width: 390rpx;">
					<view class="">
						{{item.receiverCell}}
					</view>
					<view class="" style="color: #aaa;">
						<text>{{item.receiverName}}{{item.receiverSex}}</text>
						<text>{{item.receiverTel}}</text>
					</view>
				</view>
				<view class="word" @click.stop="editAddress(item)">
					<text class="cuIcon-edit"></text>
				</view>
			</view>
		</view>
	
	    <navigator url="../personal/address/addNew">
		   <view class="add">
	    	  新增收货地址
	       </view>
		</navigator>
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
		getAddress
	}from '../../API/addressArr/index.js'
	export default{
		data(){
			return{
				msg:'',
				la:'',
				lo:'',
				markers:[],
				addressList:[],
				destination:'',
				selectedPlace:''
			}
		},
		computed: {
			...mapState(['unfoin','token']),
		},
		onLoad(options){
			console.log(options)
		this.msg=options.address;
		this.destination=options.address;
		this.lo=options.lo;
		this.la=options.la;
		this.markers.push({
			latitude:this.la,
			longitude:this.lo,
			id:+new Date,
			iconPath:'../../static/homeimg/adress.png'
		})
	},
	onShow() {
		this.getList();
		this.selectedPlace=uni.getStorageSync('address').receiverCell
	},
	methods:{
		async getList(){
			const res=await getAddress(this.token)
			console.log(res)
			this.addressList=res.data.list
		},
		open(){
			uni.chooseLocation({
				success: (res)=> {
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
						this.destination=res.address+res.name
				    }
			})
		},
		replace(item){
			console.log(item)
			this.selectedPlace=item.receiverCell 
			var newAddress={}
			newAddress.id=item.id
			newAddress.receiverCell=item.receiverCell
			console.log(newAddress)
			uni.setStorageSync('address',newAddress)
			uni.$emit('notice', {
			    state:true
			});
			uni.navigateBack({ 
			});
		},
		editAddress(item){
			uni.navigateTo({
				url:'../personal/address/update?data='+JSON.stringify(item)
			})
		}
	}
}
</script>

<style lang="scss">
	
.top{
	padding: 20rpx;
	.search{
		background-color: #fff;
		border-radius: 40rpx;
		padding-left: 70rpx;
		height: 60rpx;
		position: relative;
		.input{
			width: 100%;
			height: 100%;
			line-height: 60rpx;
		}
		.left{
			position: absolute;
			left: 20rpx;
			top:8rpx
		}
	}
}
	.place{
		padding:20rpx 40rpx;
		background-color: #c6e8e1;
		
	}
	
	.current{
		padding: 20rpx;
		background-color: #fff;
	}
	map{
		width: 100%;
		height: 400rpx;
	}
	.address{
		padding: 20rpx;
		background-color: #fff;
		.detail{
			display: flex;
			padding: 20rpx;
			.tag{
				background-color: #c6e8e1;
				color: #00ad87;
				height: 50rpx;
				line-height: 50rpx;
				width: 80rpx;
				text-align: center;
			}
		}
		.word{
			display: flex;
			align-items: flex-end;
			font-size: 50rpx;
			margin-left: 180rpx;
		}
	}
	.add{
		background-color: #00ad87;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		width:500rpx;
		margin: 50rpx auto 0;
		color: #fff;
		border-radius: 50rpx;
		font-size: 32rpx;
		margin-bottom: 40rpx;
	}
</style>
