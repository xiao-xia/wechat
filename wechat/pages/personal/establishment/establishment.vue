<template>
	<view class="container">
		<view class="Notyet" v-if="ListData.length ==0">
			<view class="estmentimg">
				<image src="../../../static/personal/establishment.png"></image>
			</view>
			<view class="notext">暂无相关企业信息</view>
		</view>
		<view v-else>
			<view class="improvement">
				<text style="color:#fff;margin: 0 20rpx;" class="cuIcon-info"></text>
				<text style="color:#fff; font-size: 12px;">添加的企业信息将不能修改和删除。请谨慎添加!</text>
			</view>
			<uni-swipe-action>
				<view class="companyBack" v-for="(item,index) in ListData" :key="(item.companyId)" @click="chooseAddress(index)">
					<uni-swipe-action-item :right-options="options"  @click="bindClick(item.companyId,$event,item)" >
					<view class="companyBox">
						
						<view class="companyMove">
							<view style="width:90%">
								<view class="companySize">{{item.companyName}}</view>
								<view style="color:#999999;">联系人：{{item.companyContactName}}</view>
								<view style="color:#999999;">联系号码：{{item.companyMobile}}</view>
							</view>
							<!-- <text class="cuIcon-right lg text-gray" @click="Modify(item)"></text> -->
						</view>
					</view>
					 </uni-swipe-action-item>
			</view>	
			</uni-swipe-action>
		</view>
		<view style="width: 100%;height: 140rpx;"></view>
		<view class="noestabItem" style="display: none;" >
			<image class="noestabImg" src="../../../static/personal/establishment.png" mode="widthFix"></image>
			<view class="noestabText">新增相关企业信息</view>
		</view>
		
		
		<view class="buttonBack">
			<view class="buttonSpan">
				<button @click="newEnterprise" class="buttonColor">新增企业信息</button>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	import {companyList,serviceType,deleteCompany,updateTopStatus} from '../../../API/eatablishment/index.js'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	export default {
		data() {
			return {
				ListData:[],
				ToppingData:[],
				options:[
					{
						text: '编辑',
						style: {
							backgroundColor: '#aaa'
							}
					 },
					{
						text: '置顶',
						style: {
							backgroundColor: '#B1D9FB'
						}
					}
				  
				]
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getcompanyList()
		},
		onLoad(option) {
		this.type=option.type
		console.log(option)
		},
		computed: {
			...mapState(['unfoin','token','userInfo']),
		},
		methods: {
			chooseAddress(index) {
				console.log(this.type)
				if(this.type) return
				uni.$emit('selectment', {
			    companyName:this.ListData[index].companyName,
				  companyContactName:this.ListData[index].companyContactName,
					companyMobile:this.ListData[index].companyMobile,
					companyId:this.ListData[index].companyId,
				});
				uni.navigateBack({ });
			},
			async bindClick(companyId,e,data){
				var that=this
				console.log(data)
				this.companyId = companyId
				console.log(e)
			if(e.content.text=='置顶'){
				 console.log(companyId)
				 this.ToppingData.push(companyId);//先push
				 console.log(this.ToppingData)
				 var obj={}
				  this.ListData.forEach((item)=>{//再判断数组中存在置顶的
						 if(item.topStatus == '1'){
								 this.ToppingData.push(item.companyId);
								 console.log(this.ToppingData)
						 }
					 })
				companyId =  this.ToppingData
				console.log(companyId)
				 const res=await updateTopStatus(this.token,companyId)
				 this.getcompanyList()
					// setTimeout(() => {
					// 	this.getcompanyList()
					// },500)
					uni.showToast({
						title:'操作成功',
						icon:'none'
					})
					console.log(this.ListData)		
				 this.ToppingData.length=0
				 }else{ 
						uni.navigateTo({
								url:'./modify?data=' + JSON.stringify(data) 
						})
						// this.getdelete(data.companyId)
				  }
				},	
			//暂时不用	
			/* async getdelete(item) {
				const res = await deleteCompany(item);
				if(res.code=='200'){
					this.getcompanyList()
					uni.showToast({
						title:'删除成功'
					})
				}
			}, */
			async getcompanyList() {
				uni.showLoading({
					title:'加载中'
				})
				const res = await companyList(this.token);
				console.log(res)
				this.ListData = res.data 
				uni.hideLoading()
			},
			newEnterprise(){
				uni.navigateTo({
					url:'./newEnterprise'
				})
			},
			/* Modify(item){
				uni.navigateTo({
					url:'./modify?data=' + JSON.stringify(item) 
				})
			} */
		}
	}
</script>

<style lang="scss">
.container{
	// width: 100%;
	height: auto;

	.improvement{
		width: 100%;
		background-color:#B1D9FB ;
		display: flex;
		align-items: center;
	}
	.companyBack{
		background-color: #fff;
		margin: 20rpx;
		// width: 100%;
		.companyBox{
			margin: 20rpx;
			width: 100%;
			.companyMove{
				display: flex;
				align-items: center;
				.companySize{
					font-size: 30rpx;
				}
			}
		}
	}
	.Notyet{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 800rpx;
		justify-content: center;
		.estmentimg{
			width: 400rpx;
			height: 400rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.notext{
			color: #999999;
			font-size: 32rpx;
		}
	}
	.noestabItem{
		position: absolute;
		top: 40%;
		width: 100%;
		transform: translateY(-50%);
		text-align: center;
		.noestabImg{
			width: 300rpx;
		}
		.noestabText{
			font-size: 28rpx;
			color: #aaa;
		}
	}
	.buttonBack{
		width: 100%;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		height: 140rpx;
		display: flex;
		justify-content: center;
		.buttonSpan{
			width: 80%;
			margin-top: 20rpx;
			.buttonColor{
				width: 92%;
				height: 100rpx;
				background-image: linear-gradient(to right, #1093FE, #55AFF9);
				color: white;
				line-height: 100rpx;
				border-radius: 50rpx;
			}
		}
	}
}	
</style>
