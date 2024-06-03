<template>
	<view class="pagebg-white content">
		{{content}}
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
		showToast
	} from '../../../common/util.js';
	export default {
		data() {
			return {
				content: ''
			}
		},
		computed: {
			...mapState(['unfoin','token']),
		},
		onLoad() {
			this.getContent();
		},
		onShow() {
		},
		onHide() {
		},
		methods: {
			...mapMutations(['unfoins']),
			async getContent() {
				const res = await answerAwardRule();
				if(res) {
					console.log(res)
					this.content = res.data.article_content;
				}else {
					showToast('服务器错误')
				}
			},
		}
	}
</script>

<style>
	.content {
		padding: 46rpx 36rpx 0;
		font-size: 26rpx;
		color: #101010;
		text-indent: 55rpx;
		line-height: 60rpx;
	}
</style>