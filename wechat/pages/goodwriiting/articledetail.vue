<template>
	<view class="articledetail" v-if="pageShow">
		<view class="detailcont"> 
		<!--	<view class="detailimg">
				<view class="detailwhite">
					<view class="articleimg">
						<image class="imgs" :src="articleObj.img" mode=""></image>
					</view>
				</view>
			</view> -->
			<view class="detailname">
				{{articleObj.articleTitle}}
			</view>
			<view class="author">
				<!-- <text>作者:{{publishName}}</text> -->
				<text class="authorer">云居家</text>
				<text class="updater">更新于:{{articleObj.updateTime}}</text>
			</view>
			<view class="interpretation">
				 <rich-text :nodes="strings"></rich-text>
			</view>
			<view class="" >
				<view class="nextproduct" v-if="lastShow">
					<view class="nextbutton" @tap="getLast">
					    上一篇
					</view>
					<text class="nextitle">{{lastarticleTitle}}</text>
				</view>
				<view class="nextproduct" v-if="nextShow">
					<view class="nextbutton" @tap="getNext">
						下一篇
					</view>
					<text class="nextitle">{{nextarticleTitle}}</text>
				</view>
			</view>
		</view>
		<view class="heights">
			
		</view>
		<view class="buttonkey">
			<view class="contentBlock">
				<view @tap="dianzanEvent">		         
					<view class="cuIcon-appreciatefill text-gray" style="font-size: 40rpx;" :class="articleObj.isOnclick==true?'active':''"></view>
					<view style="font-size: 24rpx;text-align: center;color:#AAAAAA" >
						有帮助{{clickTimes}}
					</view>
				</view>
			</view>
			
			<view class="contentBlock" style="margin-top: 20rpx;">
					<view class="dataoncls" style="display: flex;justify-content: center;margin-bottom: 20rpx;">
						<image class="onre" style="width: 35rpx;height: 35rpx;" src="../../static/mine/tushu.png" mode=""></image>
					</view>
					<view style="font-size: 24rpx;text-align: center;color:#AAAAAA">
						阅读量{{articleObj.pageviews}}
					</view>
			</view>
			<view class="contentBlock" style="margin-top: 20rpx;">
					<view class="dataoncls" style="display: flex;justify-content: center;margin-bottom: 20rpx;">
						<image class="onre" style="width: 35rpx;height: 35rpx;" src="../../static/mine/pengyou.png" mode=""></image>
					</view>
					<view style="font-size: 24rpx;color:#AAAAAA" class="share-btn">分享</view>
					<button open-type="share"></button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex';
	import {
		showToast,
	} from '../../common/util.js';
	import{
		getArticleDetail,
		getArticleOnclick
	} from '../../API/gooswritiArr/index.js'
export default {
		data() {
			return {
				type:'',
				pageShow:false,
				lastShow:true,
				nextShow:true,
				id:'',
				idList:[],
				articleObj:{},
				nextarticleTitle:'',
				clickTimes:'',
				//nextId:'',
				index:-1,
				strings:'',
				lastarticleTitle:''
			}
		},
		computed: {
			...mapState(['token']),
		},
		onLoad(options) {
           console.log(options)
		   this.id=options.id
		   this.idList=JSON.parse(options.ids)
		   console.log(this.id)
		   console.log(typeof this.id)
		   console.log(this.idList)
		   this.index=this.idList.indexOf(Number(this.id))
		   console.log(this.index)
			this.type=options.type
			if(options.type=='好文'){
				this.getArticle(0) 
			}else if(options.type=='治疗方案'){
				this.getArticle(1)
			}else if(options.type=='保健建议'){
				this.getArticle(2)
			}
			if(this.index==0){
			   this.lastShow=false
			}else if(this.index==this.idList.length-1){
				  this.nextShow=false
			  }
		},
		onShow() {
			// this.getArticle()
		},
		onHide() {
		},
		methods: {
			async getArticle(type) {
				uni.showLoading({
					title:'加载中'
				})
				const res = await getArticleDetail(this.token,this.idList,this.id,type);
				console.log(res)
				if(res){
				uni.hideLoading()
				this.articleObj=res.detail
				this.strings=res.detail.articleContent
				this.clickTimes=res.detail.onclick
				/*if(res.previousPostsList.length==0) {
					this.lastShow=false
					this.nextShow=false
					this.pageShow=true
					return
				}*/
				if(res.articleList.length==0){
					this.lastShow=true
					this.lastarticleTitle=res.previousPostsList[0].articleTitle
					this.nextShow=false
					this.pageShow=true
					return
				}
				if(this.index!=0){
				this.lastarticleTitle=res.previousPostsList[0].articleTitle
				 if(this.index!=this.idList.length-1){
					 this.nextarticleTitle=res.articleList[0].articleTitle
				 }
				}else{
					this.nextarticleTitle=res.articleList[0].articleTitle
				}
				this.pageShow=true
				}
			},
			async dianzanEvent(){
			    const res=await getArticleOnclick(this.token,this.id)
				console.log(res)
				this.clickTimes=res.onclick
				this.getArticle()
			},
		async getLast(){
			this.nextShow=true
			this.index--
			console.log(this.index)//0
			console.log(this.idList.length-1)//4
		   let lastId=this.idList[this.index]
		   console.log(typeof lastId)
		   if(this.type=='好文'){
		   var res = await getArticleDetail(this.token,this.idList,lastId,0)
		   }else if(this.type=='治疗方案'){
			var res = await getArticleDetail(this.token,this.idList,lastId,1)   
		   }else if(this.type=='保健建议'){
			 var res = await getArticleDetail(this.token,this.idList,lastId,2)   
		   }
		   this.articleObj=res.detail
		   this.strings=res.detail.articleContent
		   this.clickTimes=res.detail.onclick
		   if(this.index!=0){
			  this.lastarticleTitle=res.previousPostsList[0].articleTitle 
		   }else{
			  this.lastShow=false 
		   }
		   this.nextarticleTitle=res.articleList[0].articleTitle
		},
		async getNext(){
			this.lastShow=true
			this.index++
			console.log(this.index)//0
			console.log(this.idList.length-1)//4
		   let nextId=this.idList[this.index]
		   console.log(typeof nextId)
		   if(this.type=='好文'){
		   var res = await getArticleDetail(this.token,this.idList,nextId,0)
		   }else if(this.type=='治疗方案'){
		    var res = await getArticleDetail(this.token,this.idList,nextId,1)   
		   }else if(this.type=='保健建议'){
		   	var res = await getArticleDetail(this.token,this.idList,nextId,2)   
		   }
		   this.articleObj=res.detail
		   this.strings=res.detail.articleContent
		   this.clickTimes=res.detail.onclick
		  //console.log(res.noPreviousPosts)
		   this.lastarticleTitle=res.previousPostsList[0].articleTitle
		  if(this.index==this.idList.length-1){
		   	this.nextShow=false
		   }else{
			   this.nextarticleTitle=res.articleList[0].articleTitle
		   }
		}
			    
	    }
		
}
</script>

<style lang="scss">
	page{
		background-color: #fff;
		position: relative;
		
		.heights{
			width: 100%;
			height: 180rpx;
		}
		.nextitle{
			width: 500rpx;
			font-size: 30rpx !important;
			font-weight: bold;
			margin-left: 14rpx;
			overflow: hidden;
		}
		
		.buttonkey{
			width: 100%;
			position: fixed;
			bottom: 0;
			left:0;
			background-color: #fff;
			display: flex;
			padding:20rpx 0;
			border-top: 1px solid #EEEEEE;
			.contentBlock {
				flex: 1;
				text-align: center;
				position: relative;
				button{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					opacity: 0;
				}
			}
			
		}
	}
	.articledetail{
		width: 100%;
		
		
		.detailcont{
			width: 100%;
			padding: 20rpx 30rpx;
			
			.detailimg{
				width: 100%;
				height: 350rpx;
				position: relative;
				
				.detailwhite{
					width: 100%;
					height: 100%;
					background-color: #fff;
				}
				.detailwhite,.articleimg{
					position: absolute;
					top:0;
					left:0;
					right:0;
					bottom:0;
					margin:auto;
					
					.articleimg{
						width:100%;
						height:100%;
						
						.imgs{
							width: 100%;
							height: 100%;
							display: block;
						}
					}
				}
			}
			.detailname{
				padding: 30rpx 0;
				font-size: 40rpx;
				font-weight: bold;
			}
			.author{
				text{
					display: block;
					/* color: #ccc; */
					margin-bottom: 20rpx;
				}
			}
			.authorer{
				color: #666666;
				margin-bottom:4rpx;
			}
			.updater{
				color: #BABFC2;
			}
			.interpretation{
				color: #666666;
			}
			
			.nextproduct{
				width: 100%;
				padding: 30rpx 0;
				display: flex;
				
				.nextbutton{
					border-radius: 30rpx;
					background-color: var(--button);
					width: 160rpx;
					text-align: center;
					color: #fff;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 24rpx;
				}
				text{
					font-size: 36rpx;
					font-weight: bold;
					/* margin-left:30rpx; */
				}
			}
		}
	}

    .active{
		color: #06c35f;
	}
</style>
