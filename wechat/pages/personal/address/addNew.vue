<template>
	<view class="pageWidth" >
		<view style="padding: 20rpx 14rpx 0;">
			<view class="topItem">
				<view class="nameItem">
					<view class="inputTitle">
						收货姓名
					</view>
					<view class="inputBlock">
						<input class="inputFrame" v-model="formList.receiverName" type="text" placeholder="收货人姓名" @input="onKeyYHKNameInput"/>
					</view>
				</view>
				<view class="sexItem">
					<view class="sexBlock">
						<view class="sexFrame" v-for="(item,index) in sexList" :key="index" :class="sexcur==index?'sexFrame2':''" @tap="sexChange(index,item)">
							{{item}}
						</view>
					</view>
				</view>
				<view class="nameItem">
					<view class="inputTitle">
						手机号码
					</view>
					<view class="inputBlock" style="border: none;">
						<input maxlength="11" class="inputFrame" v-model="formList.receiverTel" type="number" placeholder="输入收件人的手机号码" />
					</view>
				</view>
			</view>
			<view class="bottomItem">
				<view class="bottomBlock" @tap="chooseAddress()">
					<view class="bottomTitle">
						收货地址
					</view>
					<view  class="bottomAddress" style="border: none;">
						{{formList.receiverCell}}
					</view>
					<view  class="cuIcon-right iconRight">
						
					</view>
				</view>
				<view class="bottomBlock">
					<view class="bottomTitle">
						楼牌门号
					</view>
					<view class="inputBlock2" style="border: none;">
						<input class="inputFrame2" v-model="formList.receiverDetail" type="text" placeholder="楼号/单元/门牌号" @input="onKeyYHKDetailInput"/>
					</view>
				</view>
				<view>
					<!-- <view class="cu-form-group">
						<view class="bottomTitle">设为默认地址</view>
						<switch @change="SwitchA" :class="switchA?'checked':''" :checked="switchA?true:false"></switch>
					</view> -->
				</view>
				
				<!-- <view class="bottomBlock">
					<view class="bottomTitle">
						标签
					</view>
					<view class="tagBlock">
						<view class="tagFrame" :class="tagcur==index?'tagFrame2':''" v-for="(tag,index) in tagList" :key='index' @tap="tagChange(index,tag)">
							{{tag}}
						</view>
					</view>
				</view> -->
			</view>
		</view>
		<button class="buttonadd" @tap="addEvent()" v-show="gopay">保存收货地址</button>
		<view class="buttonadd" v-show="!gopay">
				保存中 请稍后。。。
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
		getTags,add
	} from '../../../API/addressArr';
	import {
		showToast,
		getreverseGeocode
	} from '../../../common/util.js';
	export default {
		data() {
			return {
				sexList: ['先生','女士'],
				sexcur:-1,
				tagList: ['家','父母家','朋友家','公司','学校'],
				tagcur:-1,
				formList: {
					receiverName:'',
					receiverTel:'',
					receiverSex:'',
					receiverProvince:'',
					receiverCity:'',
					receiverRegion:'',
					receiverCell:'',
					receiverDetail:'',
					longitude:'',
					latitude:'',
					// addressTag:'',
				},
				switchA: false,
				gopay:true,//支付按钮显示开关，避免重复点击
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad() {
	
		},
		onShow() {
		},
		onHide() {
		},
		methods: {
			//收货姓名限制输入表情
			onKeyYHKNameInput: function(event){
				var _timer = setTimeout(()=>{
					clearTimeout(_timer)
					var value = event.target.value;
					//匹配数字的正则表达式
					// var patt = /.*[0-9,a-z,A-Z]{1,}.*/i;
					//匹配特殊字符的正则表达式
					var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
					var reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g
					let _Namestr=""
					for(let i=0,len=value.length;i<len;i++){
					 _Namestr+=value[i].replace(reg,'')
					}
					this.formList.receiverName = _Namestr;
				 },3)
			 },
			 //门牌号
			 onKeyYHKDetailInput:function(event){
				 var _timer = setTimeout(()=>{
				 	clearTimeout(_timer)
				 	var value = event.target.value;
				 	//匹配数字的正则表达式
				 	// var patt = /.*[0-9,a-z,A-Z]{1,}.*/i;
				 	//匹配特殊字符的正则表达式
				 	var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
				 	var reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g
				 	let _Detailstr=""
				 	for(let i=0,len=value.length;i<len;i++){
				 	 _Detailstr+=value[i].replace(reg,'')
				 	}
				 	this.formList.receiverDetail = _Detailstr;
				  },3)
			 },
			sexChange(index,item) {
				this.sexcur=index
				if(item == '先生'){
					item = '0'
					this.formList.receiverSex = item;
				}else if(item == '女士'){
					item = '1'
					this.formList.receiverSex = item;
				}
				
			},
			// tagChange(index,tag) {
			// 	this.tagcur=index
			// 	this.formList.addressTag = tag;
			// },
			chooseAddress() {
				var that=this
				uni.chooseLocation({
				    success: function (res) {
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);
						that.formList.longitude= res.longitude
						that.formList.latitude=res.latitude
						that.formList.receiverCell=res.name
						console.log(res.latitude)
						console.log(res.latitude)
						that.formList.receiverDetail=res.address
				    }
				});
			},
			/*getLocationDetail(latitude,longitude) {
				var that = this;
				let p = getreverseGeocode(latitude,longitude);
				p.then((data)=>{
					console.log(data);
					this.formList.longitude = data.longitude;
					this.formList.latitude = data.latitude;
					this.formList.receiverProvince = data.detail.province;
					this.formList.receiverCity = data.detail.city;
					this.formList.receiverRegion = data.detail.district;
				},(err)=>{
					showToast('获取当前位置失败')
				})
			},*/
		/*	submitCheck() {
				var type = true;
				console.log(this.formList)
				for(var key in this.formList) {
					console.log(this.formList[key])
					if(this.formList[key]) {
						console.log(111);
					}else {
						switch (key) {
							case 'receiverName':
								showToast('姓名不能为空')
								break;
							case 'receiverTel':
								showToast('手机号码不能为空')
								break;
							case 'locationAddress':
								showToast('请选择收货地址')
								break;
							case 'detailAddress':
								showToast('楼号门牌不能为空')
								break;
							default:
								break;
						}
						type = false;
						break;
					}
				}
				return type;
			},*/
			async addEvent() {
				//console.log(this.formList)
			//	if(this.submitCheck()) {
					//console.log(111);
					if(!this.formList.receiverName){
						uni.showToast({
							title:'请输入姓名',
							icon:'none'
						})
						return
					} else if(!this.formList.receiverSex){
						    uni.showToast({
						    	title:'请选择性别',
						    	icon:'none'
						    })
							return
					}else if(!this.formList.receiverTel){
						uni.showToast({
							title:'请输入号码',
							icon:'none'
						})
						return
					}else if(this.formList.receiverTel.length<11){
						uni.showToast({
							title:'请输入11位联系号码',
							icon:'none'
						})
						return
					}
					else if(!this.formList.receiverCell){
						uni.showToast({
							title:'请选择收货地址',
							icon:'none'
						})
						return
					}else if(!this.formList.receiverDetail){
						uni.showToast({
							title:'请输入详细地址',
							icon:'none'
						})
						return
					}/* else if(!this.formList.addressTag){
						uni.showToast({
							title:'请选择地址标签',
							icon:'none'
						})
						return
					} */
					else{
					this.gopay=false;//隐藏支付按钮
					const res = await add(
						this.token,
						this.formList.receiverName,
						this.formList.receiverTel,
						this.formList.receiverSex,
						// this.formList.receiverProvince,
						// this.formList.receiverCity,
						// this.formList.receiverRegion,
						this.formList.receiverCell,
						this.formList.receiverDetail,
						this.formList.longitude,
						this.formList.latitude,
						// this.formList.addressTag
					);
					
					console.log(res)
					if(res) {
							complete: () => {
									this.gopay=true;//支付完成后打开支付开关
							}
							uni.navigateBack({
								
							})
						}else {
							uni.showToast({
								title:'新增失败'
							})
						}
					} 
				}
				
			}
		
	}
</script>

<style lang="scss">
	.topItem {
		width: 100%;
		height: 300rpx;
		background-color: #FFF;
		
		.nameItem {
			height: 100rpx;
			display: flex;
			padding: 0 8rpx 0 26rpx;
			
			.inputTitle {
				width: 20%;
				height: 100rpx;
				font-size: 28rpx;
				color: #000;
				line-height: 100rpx;
			}
			
			.inputBlock {
				width: 80%;
				height: 100rpx;
				border-bottom: 1rpx solid #F4F2F2;
				display: flex;
				align-items: center;
				
				.inputFrame {
					width: 100%;
					height: 60rpx;
					font-size: 28rpx;
					padding: 0 20rpx;
				}
			}
		}
		.sexItem {
			height: 100rpx;
			padding: 0 8rpx 0 26rpx;
			border-bottom: 1rpx solid #F4F2F2;
			
			.sexBlock {
				width: 80%;
				height: 100rpx;
				margin-left: 20%;
				display: flex;
				align-items: center;
				.sexFrame {
					width: 120rpx;
					height: 50rpx;
					border-radius: 10rpx;
					border: 1px solid #CCCCCC;
					font-size: 28rpx;
					line-height: 50rpx;
					text-align: center;
					color: #A4A5A5;
					margin-right: 16rpx;
				}
				.sexFrame2 {
					width: 120rpx;
					height: 50rpx;
					border-radius: 10rpx;
					background-image: linear-gradient(to right, #1093FE, #55AFF9);
					font-size: 28rpx;
					line-height: 50rpx;
					text-align: center;
					color: #fff;
					margin-right: 16rpx;
				}
			}
		}
	}
	
	.bottomItem {
		margin-top: 30rpx;
		width: 100%;
		height: auto;
		background-color: #FFF;
		padding: 0 8rpx;
		
		.bottomBlock {
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 26rpx;
			border-bottom: 1rpx solid #F4F2F2;
			
			
			.bottomTitle {
				width: 20%;
				height: 100rpx;
				font-size: 28rpx;
				color: #000;
				line-height: 100rpx;
			}
			
			.bottomAddress {
				width: 60%;
				font-size: 28rpx;
				line-height: 100rpx;
				color: #000;
				padding: 0 20rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			
			.iconRight {
				width: 20%;
				height: 100rpx;
				font-size: 28rpx;
				color: #A4A5A5;
				line-height: 100rpx;
				text-align: right;
			}
			
			.picker {
				line-height: 100rpx;
			}
			
			.inputBlock2 {
				width: 80%;
				height: 100rpx;
				border-bottom: 1rpx solid #F4F2F2;
				display: flex;
				align-items: center;
				
				.inputFrame2 {
					width: 100%;
					height: 60rpx;
					font-size: 28rpx;
					padding: 0 20rpx;
				}
			}
			
			/* .tagBlock {
				width: 80%;
				height: 100rpx;
				display: flex;
				align-items: center;
				.tagFrame {
					width: 120rpx;
					height: 50rpx;
					border-radius: 28rpx;
					background-color: #f3f3f3;
					font-size: 28rpx;
					line-height: 50rpx;
					text-align: center;
					color: #101010;
					margin-right: 16rpx;
				}
				.tagFrame2 {
					width: 120rpx;
					height: 50rpx;
					border-radius: 28rpx;
					background-color: var(--button);
					font-size: 28rpx;
					line-height: 50rpx;
					text-align: center;
					color: #fff;
					margin-right: 16rpx;
				}
			} */
		}
	}
	
	.buttonadd{
		background-image: linear-gradient(to right, #1093FE, #55AFF9);
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		width:500rpx;
		margin:0  auto;
		color: #fff;
		border-radius: 50rpx;
		font-size: 32rpx;
		margin-top: 150rpx;
	}
	
</style>