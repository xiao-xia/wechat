<template>
	<view class="container">
		<view class="inputBox" :class="change==true?'active':''">
		  <view class="topBg">
		  	  <view class="please">
		  	  	请输入支付密码
		  	  </view>
		  	  <view class="wrap" @click="display">
		  	  	<view class="kuang" v-for="(index,i) in items">
		  	  		<text class="cuIcon-title yuan" v-show="dot>index-1"></text>
		  	  	</view>
		  	  </view>
		  </view>
		</view>
		<view class="numbox" v-if="isShow">
			<view class="hide" @click="hiding">
				<text class="cuIcon-unfold"></text>
			</view>
			<view class="allNum">
				<view class="num" v-for="(item,index) in list" @click="keyUpHandle(item,index)">
					<button v-if="index!=9">{{item}}</button>
				</view>
				<view class="delete" @click="delHandle">
					<button type="default"><text class="cuIcon-back_android"></text></button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				items:[0, 1, 2, 3, 4, 5],
				list:[1,2,3,4,5,6,7,8,9,'',0],
				dot:-1,
				password: [],
				change:false,
				isShow:true
			}
		},
		methods:{
			keyUpHandle(item,index){
				if(index==9) return
				let text=item;
				let len = this.password.length;
				if (len==6) return
				this.password.push(text)
				this.dot=len
				console.log(this.password)
				this.ajaxData ()
			},
		  delHandle () {
				if (this.password.length == 0) return 
				this.password.pop()
				this.dot--;
				//console.log(this.password)
			  },
		   ajaxData () {
		           if (this.password.length == 6) {
		             console.log(this.password.join());
		           }
		         },
			  hiding(){
				  this.change=true,
				  this.isShow=false
			  },
			  display(){
				   this.isShow=true
			  }
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.container{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		position: absolute;
		left: 0;
		top:0;
		z-index: 999;
	}
	
	.numbox{
		width: 100%;
		background-color: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		.hide{
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			font-size: 40rpx;
			border-bottom: 1px solid #ccc;
		}
		.allNum{
			display: flex;
			flex-wrap: wrap;
			.num{
				width: 33.3%;
				text-align: center;
				height: 100rpx;
				line-height: 100rpx;
				border-left: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
				button{
					width: 100%;
					height: 100%;
				}
				button::after{
				    border: none;  
				}
			}
			.delete{
				width: 33.3%;
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 50rpx;
				border-left: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
			}
		}
	}

    .inputBox{
		width: 100%;
		padding: 20rpx;
		.topBg{
			background-color: #fff;
			padding: 20rpx 10rpx;
		}
		.please{
			text-align: center;
		}
		.wrap{
			width: 600rpx;
			margin: 0 auto;
			display: flex;
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			border-left:1px solid #ccc ;
			.kuang{
				width: 100rpx;
				height: 100rpx;
				border-right: 1px solid #ccc;
				text-align: center;
				line-height: 100rpx;
			}
		}
	}

    .yuan{
		font-size: 80rpx;
	}
	
	.active{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
</style>
