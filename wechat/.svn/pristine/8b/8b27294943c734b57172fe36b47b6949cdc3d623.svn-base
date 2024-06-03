<template>
	<view class="cu-modal show" >
		<view class="cu-dialog modalItem">
			<view class="cu-bar justify-end modalTop">
				<view class="content modalTitle">支付</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-white"></text>
				</view>
			</view>
			<view class="modalBlock">
				<view class="balance">
					钱包余额(￥237.55)
				</view>
				<view class="amount">
					￥{{price}}
				</view>
				<view :class="['code', show ? '' : 'visible']">
					<view class="code-box">
						<block v-for="(item, index) in 6" :key="index">
							<view class="code-box-item">{{ (password[index] && '●') || '' }}</view>
						</block>
					</view>
					<input type="number" v-model="password" />
				</view>	
			</view>
		</view>
		
		<!-- 键盘 -->
		<view :class="['keyboard', show ? '' : 'active', isIphoneX ? 'isIphone' : '']">
			<block v-for="(item, index) in 9" :key="index">
				<view class="keyboard-item" @tap="key(index + 1)">{{index + 1}}</view>
			</block>
			<view class="keyboard-item hide"></view>
			<view class="keyboard-item" @tap="key(0)"><text>0</text></view>
			<view class="keyboard-item delte cuIcon-roundclosefill" @tap="del()"></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: 'payModal',
		props: {
			show: {
				type: Boolean,
				default: false 
			},
			price: {
				type: Number,
				default: 0.00
			}
		},
		data() {
			return {
				password: []
			};
		},
		methods: {
			key(key) {
				if (this.password.length < 6) {
					this.password += key;
					if (this.password.length == 6) {
						this.$emit('inputPassword',this.password)
					}
				}
			},
			del() {
				if (this.password.length > 0) {
					this.password = this.password.substring(0, this.password.length - 1);
				}
			},
			clearPassword() {
				this.password = [];
			},
			hideModal() {
				this.$emit('closePay')
			}
		}
	}
</script>

<style lang="scss">
	.modalItem {
		width: 500rpx;
		vertical-align: baseline;
	}
	
	.modalTop {
		background-color: var(--globalColor);
	}
	
	.modalTitle {
		background-color: var(--globalColor);
		color: white;
	}
	
	.modalBlock {
		padding: 20rpx;
		
		.balance {
			font-size: 28rpx;
			line-height: 50rpx;
			color: var(--globalColor);
		}
		
		.amount {
			font-size: 50rpx;
			text-align: center;
			line-height: 100rpx;
			color: #FF9601;
		}
	}
	
	
	input {
		display: none;
	}
	
	.code {
		width: 100%;
		height: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
	}
	.code-box {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border: 1px solid #d0d0d0;
	}
	.code-box-item {
		width: 16.7%;
		height: 86rpx;
		font-size: 40rpx;
		line-height: 75rpx;
		text-align: center;
	}
	.code-box-item:not(:last-child) {
		border-right: 1px solid #d0d0d0;
	}
	.keyboard {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #EBEBEB;
		display: flex;
		justify-content: center;
		z-index: 2;
		flex-wrap: wrap;
		transition:all 0.2s ease-in 0.2s;
	}
	.active {
		bottom: -400rpx;
	}
	.keyboard-item {
		box-sizing: border-box;
		width: 250rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff;
		font-size: 40rpx;
		color: #333;
		height: 99rpx;
		border: 1rpx solid #EBEBEB;
		border-top:none;
		border-left:none;
	}
	.hide {
		opacity: 0;
	}
	.delte {
		background: none;
		box-shadow: none;
	}
	.delte image {
		width: 60rpx;
		height: 60rpx;
	}
	.isIphone {
		padding-bottom: 68rpx !important;
	}
</style>
