<template>
	<view class="pageWidth">
		<view class="contentBack">
			<view class="contentTop">
				<view class="search">
					<image class="searchimg" src="../../static/homeimg/server.png"></image>			
					<input v-model="keywords" @confirm="searchEvent()"  @focus="inputFocus()" :focus="inputFocusType" class="searchinp" type="text" placeholder="请输入标题" />
				</view>
			</view>
			<view class="bar">
				<view :class="curIndex==index?'barBlockStyle':'barBlock'" v-for="(item,index) in adviceType" :key="index" @tap="selectState(index,item)">
					{{item.classifyName}}
					<view class="shu" v-if="curIndex==index"></view>
				</view>
			</view>
		</view>
		<view class="realItem">
			<view class="TimeNew" v-for="(item,index) in AdviceList" :key="item.id"  @click="ArticleDetail(item.id)">
				<view class="NewBox">
					<view class="about">{{item.platformName}}</view>
					<view class="newType">
						<view class="right">{{item.platformType}}</view>
						<view class="left">
							<!-- <view class="source">{{item.createId}}</view> -->
							<view class="source">{{item.createTime}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex';
	import { getAdvice,getAllInformation,getInformationByType,getTypeids,getInformationByName } from '../../API/healthy/index.js'
 	export default {
		data() {
			return {
				adviceType: ['全部资讯','资讯类型1','资讯类型2','资讯类型3'],
				AdviceList:[],
				current: '',
				curIndex:0,
				realids:[],
				inputFocusType: false,
				keywords: '',
			}
		},
		onLoad() {
			this.getAdviceType()
			this.getAdviceList()//全部数据
		},
		onShow() {
			
		},
		computed: {
			...mapState(['token']),
		},
		methods: {
			ArticleDetail(id){
				if(this.platformType == undefined){
					this.platformType ='全部资讯'
				}
				uni.navigateTo({
					// url:'../goodwriiting/articledetail?id='+id+ '&ids=' + JSON.stringify(this.idArr)
					// url:'./realDetail?id='+id + '&realids=' + JSON.stringify(this.realids)
					url:'./realDetail?id='+id + '&platformType=' + this.platformType + '&realids=' + JSON.stringify(this.realids)
				})
			},
			inputFocus() {
				this.goodShow = false;
			},
			selectState(index,item){
				this.curIndex=index
				console.log(this.curIndex)
				console.log(item)
				this.platformType=item.classifyName
				this.getAdviceinfo()//分类数据
				this.getdetailType()//分类文章数组
			},
			
			async getAdviceType(){
				uni.showLoading({
					title:'加载中'
				})
				const res=await getAdvice()
				console.log(res)
				if(res){
					uni.hideLoading()
					this.adviceType=res.data
					console.log(this.adviceType)
				}
			},
			async getAdviceList(){
				uni.showLoading({
					title:'加载中'
				})
				const res=await getAllInformation()
				console.log(res)
				if(res){
					uni.hideLoading()
					this.AdviceList=res.data
					console.log(this.AdviceList)
				}
			},
			//类型内容，全部是没有的，就有求一次数据
			async getAdviceinfo(){
				uni.showLoading({
					title:'加载中'
				})
				if(this.platformType !== '全部资讯' ){
					const res=await getInformationByType(this.platformType)
					console.log(res)
					if(res){
						uni.hideLoading()
						this.AdviceList=res.data
						console.log(this.AdviceList)
					}
				} else{
					this.getAdviceList()
				}
			},
			
			async getdetailType(){
				const res=await getTypeids(this.platformType)
				this.realids = res.data
				console.log(this.realids)
			},
			async searchEvent() {
				uni.showLoading({
					title:'加载中'
				})
				this.platformName = this.keywords
				const res = await getInformationByName(this.token,this.platformName)
				console.log(res)
				if(res){
					uni.hideLoading()
					this.AdviceList = res.data;
					this.curIndex = 0
				}
			},
		}
	}
</script>

<style lang="scss">
	.contentBack{
		width: 100%;
		height: 210rpx;
		padding: 0 30rpx;
		background-color: #FFFFFF;
		.contentTop{
			width: 100%;
			height: 80rpx;
			display: flex;
			// margin-top: 172rpx;
			justify-content: space-between;
			.posit{
					display: flex;
					height: 60rpx;
					line-height: 60rpx;
					width: 300rpx;
					position:relative;
					.out{
						position: absolute;
						background-color: rgba(0,0,0,0.5);
						color: #fff;
						font-size: 20rpx;
						top: 60rpx;
						left: 10rpx;
						width: 300rpx;
						padding: 5rpx;
						z-index: 999;
						border-radius: 20rpx;
					}
					.positimg{
						width: 40rpx;
						height: 40rpx;
						margin-top: 12rpx;
					}
					.city-text{
						height: 60rpx;
						font-size: 28rpx;
						width: 250rpx;
					}
				}
				.search{
					// width: calc(100% - 10rpx);
					width: 100%;
				  height: 60rpx;
					line-height: 60rpx;
				  display: flex;
				  flex-direction: row;
					background:#EDEDF0;
					border-radius: 50rpx;
					position: relative;

					.searchimg{
						width: 40rpx;
						height: 40rpx;
						position: absolute;
						left:20rpx;
						top:10rpx;
					}
					
					.searchinp{
						width: 100%;
						height: 60rpx;
						line-height: 60rpx;
						font-size: 28rpx;
						color: #aaa; 
						padding-left: 30rpx;
						margin-left:40rpx;
					} 
			}
		}
		.bar {
			width: 100%;
			height: 100rpx;
			// margin: 0 0 20rpx ;
			// padding: 0 66rpx;
			display: flex;
			justify-content: space-between;
			// background-color: #FFFFFF;
			position: sticky;
			top: 0;
			z-index: 9999;
			.barBlockStyle {
				font-size: 28rpx;
				color:  #008CFF;
				line-height: 100rpx;
				text-align: center;
				position: relative;
			}
			
			.barBlock {
				font-size: 28rpx;
				// font-weight: 600;
				color: #101010;
				line-height: 100rpx;
				text-align: center;
			}
			.shu{
				width: 60rpx;
				height: 10rpx;
				border-radius: 50rpx;
				background-color: #008CFF;
				transform: translateY(-50%);
				position: absolute;
				left: 20rpx;
			}
		}
	}
	.realItem{
		width: 100%;
		padding: 20rpx;
		.TimeNew{
			width: 100%;
			background-color: #FFFFFF;
			.NewBox{
				padding: 20rpx;
				margin-bottom: 20rpx;
				.about{
					font-size: 28rpx;
					font-weight: 600;
					width:100%;
					overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
					text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
					display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
					-webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
					-webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
				}
				.newType{
					display: flex;
					margin-top: 20rpx;
					align-items: center;
					.right{
						width: 160rpx;
						height: 50rpx;
						line-height: 50rpx;
						background-color: #C4E3FD;
						color: #088EFE;
						text-align: center;
						border-radius: 10rpx;
					}
					.left{
						width: 75%;
						justify-content: flex-end;
						display: flex;
						.source{
							font-size: 26rpx;
							color: #CCCCCC;
							margin-left: 20rpx;
						}
					}
				}
			}
			
		}
	}
	
</style>
