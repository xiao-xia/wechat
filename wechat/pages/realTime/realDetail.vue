<template>
	<view class="container">
		<view class="ReadItem" v-for="(item,index) in ByidData" :key="item.id">
			<view class="science">
				{{item.platformName}}
			</view>
			<view class="typeItem">
				<view class="right">
					{{item.platformType}}
				</view>
				<view class="left">
					<!-- <view class="source">来源：{{item.createId}}</view> -->
					<view class="detime">更新于{{item.createTime}}</view>
				</view>
			</view>
			<view class="words">
				{{item.content}}
			</view>
			<view class="buttonItem">
				<view class="pieceItem" v-if="pageshow">
					<view class="piece" @tap="getLast">上一篇</view>
					<view class="pieceMore">{{lastformName}}</view>
				</view>
				<view class="pieceItem" v-if="nextshow">
					<view class="piece" @tap="getNext">下一篇</view>
					<view class="pieceMore">{{platformName}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getInformationById,getAllInformationIds } from '../../API/healthy/index.js'
	export default {
		data() {
			return {
				ByidData:[],
				id:'',
				IdsData:[],
				idIndex:'',
				pageshow:true,
				nextshow:true,
				platformName:'',
				lastformName:'',
			}
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			if(options.platformType == undefined){
				this.platformType = '全部资讯'
				console.log(this.platformType)
			} else{
				this.platformType = options.platformType
				console.log(this.platformType)
			}
			if(options.realids){
				this.realids=JSON.parse(options.realids)
			} else{
				this.realids=[]
			}
			console.log(typeof this.realids)
			this.getrealids()
		},
		onShow() {
			this.getrealByid()//该文章的详情
			this.getgetAllIds()//全部文章数组
		},
		methods: {
			async getrealByid() {
				const res = await getInformationById(this.id);
				console.log(res)
				this.ByidData = res.data
			},
			//全部资讯
			async getgetAllIds() {
				if(this.platformType == '全部资讯'){
					this.platformType = '全部资讯'
					const res = await getAllInformationIds();//全部文章数组
					console.log(res)
					this.IdsData = res.data
					console.log(this.IdsData)
					this.IdsData.forEach((item,index) => { //数组才可以foreach
						if(item == this.id) {    //选中的商品和item中一样时就选中
							console.log(this.id)
							console.log(item)
							this.idIndex = index;
							console.log(this.idIndex)
							this.indexTitle(this.idIndex)
							this.LastTitle(this.idIndex)
						}
					});
					if(this.idIndex ==0){
						this.pageshow = false
						console.log(this.pageshow)
					} else if(this.idIndex ==this.IdsData.length-1){
						this.nextshow = false
					}
				}
			},
			//下一篇标题
			async indexTitle(idIndex){
				var titleIndex=idIndex
				titleIndex++
				if(titleIndex==this.IdsData.length){
					titleIndex=idIndex
					console.log(titleIndex)
				}
				console.log(titleIndex)
				const res = await getInformationById(this.IdsData[titleIndex]);
				console.log(res)
				this.platformName = res.data[0].platformName
			},
			//上一篇标题
			async LastTitle(idIndex){
				var titleIndex=idIndex
				titleIndex--
				if(titleIndex == -1){
					titleIndex=idIndex
					console.log(titleIndex)
				}
				console.log(titleIndex)
				const res = await getInformationById(this.IdsData[titleIndex]);
				console.log(res)
				this.lastformName = res.data[0].platformName
			},
			
			//类型资讯
			async getrealids() {
				console.log(this.platformType)
				if(this.platformType !== '全部资讯'){
					this.IdsData =this.realids
					console.log(this.IdsData)
					console.log(typeof this.IdsData)
					this.IdsData.forEach((item,index) => {  //数组才可以foreach
						if(item == this.id) {    //选中的商品和item中一样时就选中
							console.log(this.id)
							console.log(item)
							this.idIndex = index;
							console.log(this.idIndex)
							this.indexTitle(this.idIndex)
							this.LastTitle(this.idIndex)
						}
					});
					if(this.idIndex ==0){
						this.pageshow = false
						console.log(this.pageshow)
						console.log(this.idIndex)
						console.log(this.IdsData.length-1)
					} 
					if(this.idIndex ==this.IdsData.length-1){
						console.log(312)
						this.nextshow = false
						console.log(this.nextshow)
					}
				}
			},
			
			
			//上一篇	
			async getLast(){
				if(this.idIndex ==0){
					this.pageshow = false
				} 
				this.idIndex--
				this.nextshow = true
				console.log(this.idIndex)
				this.lastIndex = this.idIndex
				this.platIndex = this.idIndex
					if(this.idIndex ==0){
						this.pageshow = false
					}
					const res = await getInformationById(this.IdsData[this.idIndex]);
					// console.log(res)
					this.ByidData = res.data
					// console.log(this.ByidData)
					this.lastIndex-- //上一篇标题
					this.platIndex++ //下一篇标题
					console.log(this.lastIndex)
					console.log(this.lastIndex)
					const response = await getInformationById(this.IdsData[this.lastIndex]);//点击时上一篇标题
					this.lastformName = response.data[0].platformName
					const platponse = await getInformationById(this.IdsData[this.platIndex]);//自动下一篇标题			
					this.platformName = platponse.data[0].platformName
			},
			//下一篇
			async getNext(){
				this.pageshow = true
				this.idIndex++
				console.log(this.idIndex)
				console.log(this.IdsData.length)
				this.platIndex = this.idIndex
				this.lastIndex = this.idIndex
				if(this.idIndex == this.IdsData.length-1){
					this.nextshow = false
				}
				const res = await getInformationById(this.IdsData[this.idIndex]);
				// console.log(res)
				this.ByidData = res.data
				// console.log(this.ByidData)
				this.platIndex++ //下一篇标题
				this.lastIndex-- //上一篇标题
				console.log(this.platIndex)
				console.log(this.lastIndex)
				const platponse = await getInformationById(this.IdsData[this.platIndex]);
				this.platformName = platponse.data[0].platformName
				const response = await getInformationById(this.IdsData[this.lastIndex]);//自动上一篇标题
				this.lastformName = response.data[0].platformName
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
		position: relative;
	}
	.container{
		width: 100%;
		height: 100vh;
		background-color: #FFFFFF;
		.ReadItem{
			width: 100%;
			padding: 0 20rpx;
			.science{
				font-size: 36rpx;
				font-weight: 600;
			}
			.typeItem{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.right{
					width: 160rpx;
					height: 50rpx;
					line-height: 50rpx;
					background-color: #C4E3FD;
					color: #088EFE;
					text-align: center;
					border-radius: 10rpx;
					margin-top: 10rpx;
				}
				.left{
					width: 50%;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					.source{
						font-size: 28rpx;
					}
					.detime{
						font-size: 26rpx;
						color: #CCCCCC;
					}
				}
			}
			.words{
				// width: 90%;
				font-size: 28rpx;
			}
			.buttonItem{
				width: 100%;
				.pieceItem{
					width: 100%;
					display: flex;
					align-items: center;
					margin-top: 20rpx;
					.piece{
						width: 140rpx;
						height: 50rpx;
						line-height: 40rpx;
						border: 1px solid #088EFE;
						color: #088EFE;
						font-size: 26rpx;
						border-radius: 20rpx;
						text-align: center;
					}
					.pieceMore{
						font-size: 28rpx;
						color: #CCCCCC;
						margin-left: 20rpx;
						width: 70%;
						overflow: hidden;    
						text-overflow:ellipsis;    
						whitewhite-space: nowrap;
					}
				}
			}
		}
	}
</style>
