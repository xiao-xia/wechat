<template>
	<view class="container">
		<view class="establishback">
			<view class="estable">
				<view class="establishName">
					企业名称
				</view>
				<view class="inputClass">
					<input class="inputFrame" v-model="formList.companyName" type="text" placeholder="请输入企业名称" @input="onKeyYHKNameInput"/>
				</view>
			</view>
			
			<view class="estable">
				<view class="establishName">
					营业执照
				</view>
				<view class="inputClass">
					<input maxlength="15" class="inputFrame" v-model="formList.certificateNo" type="number" placeholder="请输入营业执照号码" />
				</view>
			</view>
			<view class="estable">
				<view class="establishName">
					法人姓名
				</view>
				<view class="inputClass">
					<input class="inputFrame" v-model="formList.companyOwner" type="text" placeholder="请输入法人姓名" @input="onKeyOwnerInput"/>
				</view>
			</view>
			<view class="estable">
				<view class="establishName">
					联系人
				</view>
				<view class="inputClass">
					<input class="inputFrame" v-model="formList.companyContactName" type="text" placeholder="请输入联系人姓名" @input="onKeyNameInput"/>
				</view>
			</view>
			<view class="estable">
				<view class="establishName">
					联系号码
				</view>
				<view class="inputClass">
					<input maxlength="11" class="inputFrame" v-model="formList.companyMobile" type="number" placeholder="请输入联系号码" />
				</view>
			</view>
			<view class="estable">
				<view class="establishName">
					企业现居地
				</view>
				<view class="inputClass">
					<input class="inputFrame" v-model="formList.nowAddress" type="text" placeholder="请输入企业现居地" @input="onKeyAddressInput"/>
				</view>
			</view>
			<view class="estable">
				<view class="establishName">
					意见服务（可多选）
				</view>
				<view class="estableTab">
					<!-- <view class="services" :class="select==index?'active':''"  v-for="(item,index) in TypeData" :key='index'  @tap="tagChange(index,item)"> -->
					<view class="services" :class="{'active': isChange.indexOf(index)!=-1}"  v-for="(item,index) in TypeData" :key='index'  @tap="tagChange(index,item)"> 
						{{item.classifyName}}
					</view>
				</view>
			</view>
			<button class="buttonadd" @tap="addEvent()" v-show="gopay">保存</button>
			<button class="buttonadd" v-show="!gopay">保存中 请稍后。。。</button>
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
	import { createCompany,serviceType } from '../../../API/eatablishment/index.js'
	export default{
		data(){
			return{
				isChange:[], 
				serviceId:[],
				classifyData:[], 
				select:0,
				TypeData:[{
					categoryName:'工商服务'
				},{
					categoryName:'代理记账'
				},{
					categoryName:'财务审计'
				},{
					categoryName:'工商服务'
				},{
					categoryName:'工商服务'
				},{
					categoryName:'工商服务'
				},],
				formList: {
					companyName:'',
					certificateNo:'',
					companyOwner:'',
					companyContactName:'',
					companyMobile:'',
					nowAddress:'',
					classifyName:'',
					serviceId:'',
				},
				gopay:true,//支付按钮显示开关，避免重复点击
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad(){
			
		},
		onShow() {
			this.getserviceType()
		},
		computed: {
			...mapState(['unfoin','token']),
		},
		methods:{
			//限制输入表情
			onKeyYHKNameInput: function(event){
				var _timer = setTimeout(()=>{
					clearTimeout(_timer)
					var value = event.target.value;
					//匹配数字的正则表达式
					// var patt = /.*[0-9,a-z,A-Z]{1,}.*/i;
					//匹配特殊字符的正则表达式
					var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
					var reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g
					let _str=""
					for(let i=0,len=value.length;i<len;i++){
					 _str+=value[i].replace(reg,'')
					}
					this.formList.companyName = _str;
				 },3)
			 },
			//法人
			onKeyOwnerInput:function(event){
				var _timer = setTimeout(()=>{
					clearTimeout(_timer)
					var value = event.target.value;
					var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
					var reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g
					let _Ownerstr=""
					for(let i=0,len=value.length;i<len;i++){
					 _Ownerstr+=value[i].replace(reg,'')
					}
					this.formList.companyOwner = _Ownerstr;
				 },3)
			},
			//联系人
			onKeyNameInput:function(event){
				var _timer = setTimeout(()=>{
					clearTimeout(_timer)
					var value = event.target.value;
					var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
					var reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g
					let _Namestr=""
					for(let i=0,len=value.length;i<len;i++){
					 _Namestr+=value[i].replace(reg,'')
					}
					this.formList.companyContactName = _Namestr;
				 },3)
			},
			//企业现居地
			onKeyAddressInput:function(event){
				var _timer = setTimeout(()=>{
					clearTimeout(_timer)
					var value = event.target.value;
					var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
					var reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g
					let _Addressstr=""
					for(let i=0,len=value.length;i<len;i++){
					 _Addressstr+=value[i].replace(reg,'')
					}
					this.formList.nowAddress = _Addressstr;
				 },3)
			},
			tagChange(index,res){
				// this.select=index;
				console.log(res)
				// 多选
				if (this.isChange.indexOf(index) == -1) {
					if(this.isChange.length == 8){
						uni.showToast({
							title:'最多选择八项',
							icon:'none'
						})
					}else{
						this.isChange.push(index);//选中添加到数组里
						console.log(this.isChange)
						this.classifyData.push(res.classifyName);
						console.log(res.classifyName)
						console.log(this.classifyData)
						this.serviceId.push(res.classifyTag);
						console.log(this.serviceId)
					}
				} else {
					this.isChange.splice(this.isChange.indexOf(index), 1); //取消选中
					this.classifyData.splice(this.classifyData.indexOf(index), 1); //取消选中
					this.serviceId.splice(this.serviceId.indexOf(index), 1); //取消选中
					console.log(this.isChange)
					console.log(this.classifyData)
					console.log(this.serviceId)
				}
				var str = this.classifyData.join("/")//数组转为字符串
				console.log(str)
				this.formList.classifyName = str
				this.formList.serviceId = this.serviceId
			},
				
			
			async getserviceType() {
				const res = await serviceType(this.token);
				console.log(res)
				this.TypeData = res.data
			},
			async addEvent(){
				if(!this.formList.companyName){
					uni.showToast({
						title:'请输入企业名称',
						icon:'none'
					})
					return
				} else if(!this.formList.certificateNo){
						uni.showToast({
							title:'请输入营业执照',
							icon:'none'
						})
					return
				}else if(this.formList.certificateNo.length<15){
					uni.showToast({
						title:'请输入15位营业执照',
						icon:'none'
					})
					return
				}
				else if(!this.formList.companyOwner){
					uni.showToast({
						title:'请输入法人姓名',
						icon:'none'
					})
					return
				}else if(!this.formList.companyContactName){
					uni.showToast({
						title:'请输入联系人',
						icon:'none'
					})
					return
				}else if(!this.formList.companyMobile){
					uni.showToast({
						title:'请输入联系号码',
						icon:'none'
					})
					return
				}else if(this.formList.companyMobile.length<11){
					uni.showToast({
						title:'请输入11位联系号码',
						icon:'none'
					})
					return
				}
				else if(!this.formList.nowAddress){
					uni.showToast({
						title:'请输入企业现居地',
						icon:'none'
					})
					return
				}else if(this.formList.serviceId.length==0){
					uni.showToast({
						title:'请选择意见服务',
						icon:'none'
					})
					return
				}
				this.gopay=false;//隐藏支付按钮
				const res = await createCompany(
					this.token,
					this.formList.companyName,
					this.formList.certificateNo,
					this.formList.companyOwner,
					this.formList.companyContactName,
					this.formList.companyMobile,
					this.formList.nowAddress,
					this.formList.classifyName,
					this.formList.serviceId,
				);
				console.log(res)
				if(res) {
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
</script>

<style lang="scss">
	.container{
		.establishback{
			width: 100%;
			height: 1200rpx;
			background-color: #fff;
			margin-top: 10rpx;
			.estable{
				padding: 10rpx 0 10rpx 30rpx;
				.establishName{
					font-size: 14px;
					color: #333333;
				}
				.inputClass{
					background-color: #F1F1F1;
					width: 94%;
					height: 72rpx;
					padding: 5rpx 8rpx 0 2rpx;
					.inputFrame{
						width: 100%;
						height: 60rpx;
						font-size: 14px;
						padding: 0 20rpx;
					}
				}
			}
			.estableTab{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				.services{
					width: 130rpx;
					height: 50rpx;
					background-color: #F1F1F1;
					border-radius: 10rpx;
					font-size: 28rpx;
					text-align: center;
					color: #CCCCCC;
					line-height: -40rpx;
					margin: 20rpx 40rpx 0 0;
				}
				.active{
					width: 130rpx;
					height: 50rpx;
					background-color: #008CFF;
					border-radius: 10rpx;
					font-size: 28rpx;
					text-align: center;
					color: #fff;
					line-height: -40rpx;
					margin: 20rpx 40rpx 0 0;
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
				margin-top: 20rpx
			}
		}
	}
	
</style>
