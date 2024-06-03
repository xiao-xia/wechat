<template>
	<view class="location">
		<view class="place">
			<text class="cuIcon-locationfill lg" style="margin-right: 20rpx;color: #00ad87;"></text>
			<text v-if="addressObj">默认送至:{{addressObj.receiverCell||''}}</text>
			<text v-else>请添加收货地址</text>
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
				<view class="" style="margin-left: 20rpx;width: 460rpx;">
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
	
	    
	   <view class="add" @click="goAddress">
		  新增收货地址
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
		getAddress
	}from '../../API/addressArr/index.js'
	import {defaultAddress} from '../../API/defaultAddresss/index.js'
	import {setAddress} from '../../API/defaultAddresss/index.js';
	export default{
		data(){
			return{
				msg:'',
				la:'',
				lo:'',
				markers:[
				],
				addressList:[],
				//destination:'',
				selectedPlace:'',
				addressObj:{}
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
			iconPath:'../../static/homeimg/adress.png',
			width:20,
			height:20
		})
	},
	onShow() {
		this.getList();
		this.getDefault();
	},
	methods:{
		async getDefault(){
			const res= await defaultAddress(this.token);
			console.log(res) 
			this.addressObj=res.data
			console.log(this.addressObj)
		},
		async getList(){
			const res=await getAddress(this.token)
			console.log(res)
			this.addressList=res.data.list
		},
	async	replace(item){//选择地址
		/*	console.log(item)
			this.selectedPlace=item.receiverCell
			var newAddress={}
			newAddress.id=item.id
			newAddress.receiverCell=item.receiverCell
			console.log(newAddress)
			uni.setStorageSync('address',newAddress) */
			const res=await setAddress(this.token,item.id)
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
		},
		goAddress(){
			uni.navigateTo({
				url:'../personal/address/addNew'
			})
		}
	}
}
</script>

<style lang="scss">
	.place{
		padding:0 40rpx;
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
				width: 120rpx;
				text-align: center;
			}
		}
		.word{
			display: flex;
			align-items: center;
			font-size: 50rpx;
			
		}
	}
	.add{
		background-color: var(--button);
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
