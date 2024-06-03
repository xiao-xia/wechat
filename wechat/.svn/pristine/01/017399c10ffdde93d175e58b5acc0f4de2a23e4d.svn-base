<template>
	<view class="userwhite">
		<view class="content">
			{{articleContent}}
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
		article
	}from '../../../API/personArr';
	import {
		showToast,
	} from '../../../common/util.js';
	import {
		getPlatform
	} from '../../../API/about/about.js'
	export default {
		data() {
			return {
				articleTitle: '',
				articleContent:'',
			}
		},
		computed: {
			...mapState(['unfoin','token']),
		},
		onLoad() {
			this.getarticle(); 
		},
		onShow() {
			
		},
		onHide() {
		},
		methods: {
			
			async getarticle() {
				this.articleName = '会员协议'
				const res = await getPlatform(this.articleName);
				console.log(res);
				if(res) {
					this.articleContent = res.data[0].content;
					console.log(this.articleContent)
				}
			},
			

		}
	}
</script>

<style lang="scss">
	.userwhite{
		background-color: #fff;
		width: 100vw;
		height: 100vh;
		.content {
			padding: 46rpx 36rpx 0;
			font-size: 26rpx;
			text-indent: 55rpx;
			line-height: 60rpx;
		}
	}
	
</style>