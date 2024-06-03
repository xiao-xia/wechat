<template>
	<view class="main">
		<view class="left">
			<scroll-view scroll-y="true" style="height: 1000rpx;">
				<view>保健类</view>
				<view>保健类</view>
				<view>保健类</view>
				<view>保健类</view>
				<view>保健类</view>
			</scroll-view>
		</view>
		<view class="right">
			<view class="card">
				<view class="photo">
					<image src="../../static/article.png" mode=""></image>
					<view class="bg">
						<view style="color: #fff;">
							中国养生方法100条
						</view>
						<view class="publish">
							<text>发布作者:佚名</text>
							<text>发布时间:2020-05-28</text>
						</view>
					</view>
				</view>
			</view>
			
		</view>
	
	    <view class="foot">
	    	<view class="tag">
	    		审核
	    	</view>
	    	<view class="tag">
	    		删除
	    	</view>
	    	<view class="tag">
	    		发布
	    	</view>
	    	<view class="tag">
	    		取消发布
	    	</view>
	    </view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	page{
		background-color: #fff;
		}
		.main{
			padding-top: 30rpx;
			display: flex;
			.left{
				width: 20%;
				background-color: #ccc;
				view{
					height: 100rpx;
					text-align: center;
					line-height: 100rpx;
				}
			}
			.right{
				width: 80%;
				padding: 0 40rpx;
				.photo{
					width: 100%;
					height: 220rpx;
					position: relative;
					image{
						width: 100%;
						height: 100%;
					}
					.bg{
						padding: 10rpx;
						position: absolute;
						width: 100%;
						height: 100rpx;
						background-color: rgba(0, 0, 0, 0.5);
						left: 0;
						bottom:0;
						.publish{
							display: flex;
							justify-content: space-between;
							color: #fff;
							font-size: 24rpx;
						}
					}
				}
			}
	}


        .foot{
        	padding: 20rpx;
        	border-top: 1px solid #ccc;
        	display: flex;
        	justify-content: space-between;
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
        	.tag{
        		width: 140rpx;
        		height: 60rpx;
        		text-align: center;
        		line-height: 60rpx;
        		color: #fff;
        		border-radius: 10rpx;
        		background-color: #02BE8C;
        	}
			}
</style>

