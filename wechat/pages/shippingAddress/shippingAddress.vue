<template>
	<view class="container">
		<uni-swipe-action>
		<view class="addressWrap" v-for="(item,index) in addressList" :key="index">
			<!-- <uni-swipe-action-item :right-options="options"  @click="bindClick(item.id,$event,item.receiverCell)" > -->
			<uni-swipe-action-item :right-options="options"  @click="bindClick(item.shoppingAddressId,$event,item.receiverCell,item)" >
			<view class="address" @click="chooseAddress(index)">
			<view class="">
				<view class="" style="display: flex;font-size: 32rpx;">
					<!-- <view class="tag">
						{{item.addressTag}}
					</view> -->
				<view class="" style="margin-left: 20rpx;width: 100%;">
					<view style="display: flex;">
						<view class="" v-if="item.defaultStatus=='默认'">
							<!-- <text class='cuIcon-titles' style="color: #B1D9FB;margin-right: 10rpx;"></text> -->
							<text class="" style="background-color: #B1D9FB; color: #008CFF;margin-right: 20rpx;">
								{{item.defaultStatus}}
							</text>
						</view>
						<view class="" style="font-size: 28rpx;font-weight: 500;">
							{{item.receiverCell}} <!-- {{item.receiverDetail}} -->
						</view>
					</view>
					<view class="" style="color: #aaa;">
						<text>收货人：{{item.receiverName}}</text>
					</view>
					<view class="" style="color: #aaa;">
						<text>手机号码：{{item.receiverTel}}</text>
					</view>
				  </view>
				</view>
			</view>
			<!-- <view class="word" @tap.stop="updateAddress(item)">
				<text class="cuIcon-edit"></text>
			</view> -->
			</view>
		    </uni-swipe-action-item>
		</view>
	    </uni-swipe-action>
	    <view class="noAddress" v-if="addressList.length==0">
			<view class="box">
	    		<view>
	    			<image src="../../static/personal/noAddress.png" mode="widthFix"></image>
	    		</view>
	    		<view class="noAddress-text">
	    			暂无收货地址
	    		</view>
			</view>
	    </view>
			<view  style="width: 100%;height: 140rpx;"></view>
			<view class="buttonBack">
				<view class="newly" @click="addAddress">
				 新增收货地址
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
		getAddress,getdelete
	}from '../../API/addressArr/index.js';
	import {setAddress} from '../../API/defaultAddresss/index.js';
	// import {getdelete} from '../../API/addressArr/index.js'
	export default{
		data(){
			return{
				// addressList: [],
				addressList:[],
				type: '',
				options:[
				        {
				            text: '编辑',
				            style: {
				                backgroundColor: '#aaa'
				            }
				        }, 
						{
				            text: '删除',
				            style: {
				                backgroundColor: '#dd524d'
				            }
				        }
				      ]
			}
		},
		computed: {
			...mapState(['unfoin','token']),

		},
		onLoad(option) {
		this.type=option.type
		console.log(option)
		},
		onShow() {
			this.getList();
		},
		methods:{
			chooseAddress(index) {
				console.log(this.type)
				if(this.type) return
				uni.$emit('select', {
			   addressTag:this.addressList[index].addressTag,
				receiverCell:this.addressList[index].receiverCell,
				receiverName:this.addressList[index].receiverName,
				receiverTel:this.addressList[index].receiverTel,
				receiverSex:this.addressList[index].receiverSex,
				shoppingAddressId:this.addressList[index].shoppingAddressId,
					});
				uni.navigateBack({ });
				},
			goAdd() {  //新增地址
				uni.navigateTo({
					url: 'addNew'
				})
			},
			async bindClick(shoppingAddressId,e,address,data) {//修改地址
				console.log(e)
				var that = this
				if(e.content.text=='编辑'){
					 uni.navigateTo({
					 	url:'../personal/address/update?data='+ JSON.stringify(data)
					 })
				}else{
					// const res=await getdelete(this.token,shoppingAddressId)
					// if(res.code == 200){
					//  this.getList()
					// }
					console.log(shoppingAddressId)
					uni.showModal({
						title: '提示',
						content: '您确定要删除该地址吗',
						success: function (res) {
							if (res.confirm) {
								that.getEvent(that.token,shoppingAddressId);
								console.log(that.token,shoppingAddressId)
							} else if (res.cancel) {
							}
						}
					});	 
				} 
			},
			async getEvent(item,shoppingAddressId) {
				console.log(shoppingAddressId)
				const res = await getdelete(item,shoppingAddressId);
				if(res.code=='200'){
					this.getList()
					uni.showToast({
						title:'删除成功'
					})
				}
				
			},
			// async bindClick(id,e,address){
			// 	console.log(e)
			// if(e.content.text=='设为默认'){
			// 	 console.log(id)
			// 	 const res=await setAddress(this.token,id)
			// 	 console.log(res)
			// 	 this.getList()
			// 	 }else{
			// 	 const res=await getdelete(this.token,id)
			// 	 if(address===uni.getStorageSync('address')){
			// 		 uni.removeStorageSync('address')
			// 	 }
			// 	  this.getList()
			// 	  } 
			// 	},
			async getList() {
				uni.showLoading({
					title:'加载中'
				})
				const res = await getAddress(this.token);
				console.log(res)
				if(res){
					uni.hideLoading()
					this.addressList = res.data.records;
					this.addressList.forEach((item) =>{
						if(item.defaultStatus == '0'){
							item.defaultStatus = '默认'
							console.log(item.defaultStatus)
						}
					})
					console.log(123)
				}
			},
			addAddress(){
				uni.navigateTo({
					url:'../personal/address/addNew'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		
	}
	.container{
		padding: 20rpx;
		width: 100%;
		height: 100%;
	}
	.addressWrap{
		height: 200rpx;
		margin-bottom: 20rpx;
		width: 100%;
	}
	.address{
		padding: 20rpx 40rpx;
		background-color: #fff;
		border-radius: 20rpx;
		width: 100%;
		height: 200rpx;
		display: flex;
		align-items: center;
			.tag{
				background-color: #B1D9FB;
				color: #008CFF;
				height: 50rpx;
				line-height: 50rpx;
				width: 100rpx;
				text-align: center;
			}
			.word{
				
				font-size: 50rpx;
			}
	}


    .noAddress {
    	width: 100%;
    	height: 800rpx;
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	.box{
			image{
				width: 400rpx;
			}
		}
    	.noAddress-text {
    		// color: var(--globalColor);
    		color: #CCCCCC;
    		font-size: 32rpx;
    		text-align: center;
    	}
    }
	.buttonBack{
		width: 100%;
		background-color: #FFFFFF;
		height: 140rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.newly{
			// background-color: var(--button);
			background-image: linear-gradient(to right, #1093FE, #55AFF9);
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
			width:500rpx;
			margin:0  auto;
			color: #fff;
			border-radius: 50rpx;
			font-size: 32rpx;
		}
	}	
	
</style>
