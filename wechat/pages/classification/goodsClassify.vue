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
	<view class="main">
		<view class="left">
			<view :class="select==index?'active':''"  v-for="(item,index) in content" :key='item.goodsTypeId' @click="leftClick(index,item.categoryName)">
				{{item.categoryName}}
				<view class="shu" v-if="select==index">
				</view>
			</view>
		</view>
		
		<view class="registItem">
			<view class="registBox" v-for="(item,index) in goodsList" :key='item.goodsTypeId' @click="goDetail(item)">
				<view class="registration" >
					<image class="registrationImg" src="../../static/product/product.png"></image>
				</view>
				<text class="registraWold">{{item.categoryName}}</text>
				
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
		// listByType,
	} from '../../API/classificationArr/index';
	import { addCart } from '../../API/addCart/index.js'
	import { deleteShop } from '../../API/shopCart/index.js'
	export default{
		data(){
			return{
				//isRefresh:true,
				//contentIndex:0,
				select:0,
				// content:[],
				content:[{
					categoryName:'工商服务',
					},
					{
						categoryName:'代理记账',
					},
					{
						categoryName:'财务审计',
					},
					{
						categoryName:'金融咨询',
					},
					{
						categoryName:'知识产权',
					},
					{
						categoryName:'科技服务',
					},
					{
						categoryName:'资质办理',
					},
					{
						categoryName:'法律服务',
					},
				],
				goodsList:[
					/* {
						categoryName:'代理记账'
					},
					{
						categoryName:'代理整账'
					}, */
				],
				value:'',
				pageIndex:1,
				pageSize:5,
				categoryName:'',
				nomore:false,
				scrollTop:0
			}
		},
		computed: {
			// ...mapState(['token','classificationCur']),
			...mapState(['token']),
		},

		onLoad(options) {
			console.log(options)
			this.getLeftList()
			// this.getClassifi()
			
		},
		onShow(){
			// console.log(123)
			// console.log(this.classificationCur)
		},
		methods:{
			/* async getLeftList(){
					uni.showLoading({
						title: '加载中',
					})
					const res = await getClassifi();
					console.log(res);
					if(res){
					uni.hideLoading()
					this.content=res.data;
					// this.classificationCur = '工商服务'
					console.log(this.classificationCur)
					// console.log(this.classificationCur)
					 if(this.classificationCur==''){
						this.leftClick(0,this.content[0].goodsTypeVos)
					}else if(this.classificationCur=='工商服务'){
						this.content.forEach((item,i)=>{
							if(item.categoryName=='工商服务'){
								 this.leftClick(i,'工商服务');
							}
						})
					}else if(this.classificationCur=='代理记账'){
						this.content.forEach((item,i)=>{
							if(item.categoryName=='代理记账'){
								 this.leftClick(i,'代理记账');
							}
						})
					}else if(this.classificationCur=='金融咨询'){
						this.content.forEach((item,i)=>{
							if(item.categoryName=='金融咨询'){
								 this.leftClick(i,'金融咨询');
							}
						})
					}else if(this.classificationCur=='资质办理'){
						this.content.forEach((item,i)=>{
							if(item.categoryName=='资质办理'){
								this.leftClick(i,'资质办理');
							}
						})
					}else if(this.classificationCur=='法律服务'){
						this.content.forEach((item,i)=>{
							console.log(item.categoryName)
							if(item.categoryName=='法律服务'){
								this.leftClick(i,'法律服务');
							}
						})
					}else if(this.classificationCur=='财务审计'){
						this.content.forEach((item,i)=>{
							if(item.categoryName=='财务审计'){
								this.leftClick(i,'财务审计');
							}
						})
					}else if(this.classificationCur=='外贸进出')
						this.content.forEach((item,i)=>{
							if(item.categoryName=='外贸进出'){
								this.leftClick(i,'外贸进出')
							}
						})
					}
				}, */
				
			async getLeftList(){
				const res=await getClassifi();
				console.log(res);
				this.content=res.data
				// this.goodsList=res.data.goodsTypeVos;
				console.log(this.content)
				// console.log(this.select)
					this.leftClick(0)
			},
			async leftClick(index,type){
				console.log(666)
					this.select=index
					console.log(index)
					console.log(type)
					// this.setClassCur(type)//缓存类型名字
					this.goodsList=this.content[index].goodsTypeVos;
					console.log(this.goodsList)
				
					console.log(this.categoryName)
				},
				// ...mapMutations(['setClassCur']),//缓存类型名字
			goDetail(item){
				// getApp().globalData.index = 2
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
			goSearch(){
				uni.navigateTo({
					url:'../searchs/searchs'
				})
			},
			async  getNum(){
				  const curAll=await totalNum(this.token);
				  let cartNum = curAll.sum;  //通过后台接口获取
				   if (cartNum != 0&&cartNum!=null) {
					 //设置角标
					 uni.setTabBarBadge({
					   index: 3,  //tabBar序号，从0开始计数
					   text: cartNum.toString()
					 })
				   } else {
					 //移除角标
					 uni.removeTabBarBadge({
					   index: 3,
					 })
				   }
			},
			async  more() { //触底分页
				if(this.goodsList.length==this.totalRow){
					this.nomore=true
					console.log('到底了')
					return
				}
				console.log('触底了')
				this.pageIndex++
				if(this.select==0){
					this.categoryName='保健品'
				}else if(this.select==1){
					this.categoryName='药品'
				}else if(this.select==2){
					this.categoryName='设备'
				}
				const res=await listByType(this.token,this.categoryName,this.pageIndex,this.pageSize);
				console.log(res)
				this.totalRow=res.data.totalRow
				this.goodsList=[...this.goodsList,...res.data.list];
			  }
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
		height: 100%;
		.main{
			display: flex;
			.left{
				width:30%;
				height: calc(100vh - 100rpx);
				background-color: #eee;
				view{
					height: 100rpx;
					line-height: 100rpx;
					font-size: 32rpx;
					text-align: center;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.active{
					// color: var(--button);
					color: #008CFF;
					background-color: #FFFFFF;
					position: relative;
				}
				.shu{
					position: absolute;
					width: 8rpx;
					height: 50rpx;
					top:50%;
					left: 0;
					border-radius: 50rpx;
					transform: translateY(-50%);
					// background-color: var(--button);
					background-color: #008CFF;
				}
			}
			.registItem{
				width: 75%;
				// height: calc(100vh - 100rpx);
				display: flex;
				align-content: flex-start;
				flex-wrap: wrap;
				.registBox{
					width: 33.3%;
					height: 190rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.registration{
						width: 100rpx;
						height: 100rpx;
						background-color: #EAF7FF;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						.registrationImg{
							width: 60rpx;
							height: 60rpx;
						}
					}
					.registraWold{
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
				
			}
			
			.rightList{
				width: 75%;
				height: calc(100vh - 100rpx);
			}
		    .list{
				.right{
					padding: 20rpx;
					display: flex;
					border-bottom: 1px solid #f0f0f0;
					.photo{
						width: 200rpx;
						height: 200rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.detail{
						width: 60%;
						padding-left: 20rpx;
					}
					.button{
								   display: flex;
								   justify-content: flex-end;
								 
					.change{
								    display: flex;
									width:100rpx;
									height: 50rpx;
									justify-content: center;
									line-height: 50rpx;
									background-color: #E7FFE6;
									position: relative;
									margin-right: 20rpx;
									image{
										width: 100%;
										height: 100%;
									}
								   .add{
									   top:0;
									   left: -20rpx;
									   position: absolute;
									   width: 50rpx;
									   height: 50rpx;
								   }
								   .sub{
									   top:0;
									   right: -20rpx;
									   width: 50rpx;
									   height: 50rpx;
									   position: absolute;
								   }
					}
					}
				}
			}
			
		}
		
	}
    
	
}
</style>
