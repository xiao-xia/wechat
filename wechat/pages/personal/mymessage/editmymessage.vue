<template>
	<view class="mymessage">
		<view class="feedback">
			完善个人信息，有助于我们为您提供更好的会员服务
		</view>
	    <view class="item">
	    	<text>手机</text>
			<!-- <text>{{phoneNumber}}</text> -->
			{{phone}}
	    </view>
		<view class="item">
			<text>昵称</text>
			<input type="text" v-model="nickName"  placeholder="请输入您的姓名" placeholder-style="color:#aaa" style="text-align: right;" @input="onKeyYHKNameInput"/>
			<!-- <text>{{userInfo.nickName}}</text> -->
		</view>
		<view class="item">
			<text>姓名</text>
			<input type="text" v-model="value"  placeholder="请输入您的姓名" placeholder-style="color:#aaa" style="text-align: right;" @input="onKeyYHKvalueInput"/>
		</view>
		<view class="item">
			<text>性别</text>
			<radio-group @change="radioChange">
				<label><radio value="male" :checked="nan"/>男</label>
				<label><radio value="female" :checked="nv" />女</label>
			</radio-group>
		</view>
		<view class="item">
			<text>生日</text>
			<picker mode="date" :value="date" @change="bindDateChange">
				<view class="dateInput" style="color:#aaa">{{date}}</view>
			</picker>       
		</view>
		<button  class="button" @tap="modify">完成</button>
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
		update
	} from '../../../API/mymessArr';
	export default {
		data() {
			return {
				date:'请选择日期',
				value:'',
				// ID:'',
				sex:'',
				nan:false,
				nv:false,
				nickName:'',
				phone:'',
			}
		},
		computed: {
			...mapState(['userInfo','token','phoneNumber']),
		},
		onLoad(options) {
			console.log(options)
			console.log(options.realName)
			this.id = options.id
			if(options.nickName=='暂无'){
				this.nickName=''
			}else{
			this.nickName=options.nickName
			}
			if(options.realName=='暂无'){
				this.value=''
			}else{
			this.value=options.realName
			}
			if(options.phone=='暂无'){
				this.value=''
			}else{
				this.phone=options.phone
			}
			this.sex=options.sex
			console.log(this.sex)
			if(this.sex=='男'){
				this.nan=true
			}else{
				this.nv=true
			}
			this.date=options.birthday
			
		},
		onShow() {
			 
		},
		onHide() {
		},
		methods: {
			//昵称限制输入表情
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
					this.nickName = _str;
				 },3)
			 },
			 onKeyYHKvalueInput: function(event){
				var _timer = setTimeout(()=>{
					clearTimeout(_timer)
					var value = event.target.value;
					//匹配数字的正则表达式
					// var patt = /.*[0-9,a-z,A-Z]{1,}.*/i;
					//匹配特殊字符的正则表达式
					var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
					var reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g
					let _valuestr=""
					for(let i=0,len=value.length;i<len;i++){
					 _valuestr+=value[i].replace(reg,'')
					}
					this.value = _valuestr;
				 },3)
			 },
			 
			 
			//性别
			radioChange(e){
				console.log(e)
				if(e.detail.value=='male'){
					this.sex='4'//男
					console.log(this.sex)
				}else{
					this.sex='5' //女
					console.log(this.sex)
				}
			},
			//生日
		   bindDateChange: function(e) {
						console.log(e)
		        this.date = e.target.value
		     },
		async  modify(){
			console.log(this.sex)
			 if(this.value==''){
				 uni.showToast({
				 	title:'请填写您的姓名',
					icon:'none'
				 })
				 return 
			 }else if(this.nickName==''){
				 uni.showToast({
				 	title:'请填写您的昵称',
				 	icon:'none'
				 })
				 return 
			 }else if(this.date=='请选择日期'){
				 uni.showToast({
				 	title:'请选择您的生日',
					icon:'none'
         })
				 return 
			 }
			 if(this.sex=='男'){
			 	 this.sex = 4
			 }else if(this.sex=='女'){
				 this.sex = 5
			 }
		/*	var data={ 
				 name:this.value,
				 date:this.date,
				 sex:this.sex,
				 } */
			const res=await update(this.token,this.value,this.date,this.sex,this.nickName,this.id)	
			console.log(res)
			if(res.code==200){
				uni.showToast({
					title:'修改成功',
					success() {
						uni.switchTab({
							url:'../personal'
						})
					}
				})
			}
	     },
		 }
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		background-color: #fff;
	}
	.feedback{
		color: #A4A5A5;
		font-size: 28rpx;
		text-align: center;
		padding: 30rpx 0;
	}	
	
	.item{
		padding: 20rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
		input{
			text-align: right;
		}
	}
	.button{
		width: 100%;
		height: 100rpx;
		background-color: #008CFF;
		color: white;
		border-radius: 0;
		line-height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
	}
	
	radio-group{
		width: 220rpx;
		height: 50rpx;
		}
	radio{
		transform:scale(0.7)
	}
</style>

