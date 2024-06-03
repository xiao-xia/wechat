<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex';
	import {getData,getAdvice} from 'API/healthy/index.js'
	import {
		totalNum
	} from 'API/classificationArr/index';
	export default {
		  globalData: {  
		            index: 0
		        },
		onLaunch: function() {
			const token = uni.getStorageSync('token');
			const userInfo = uni.getStorageSync('userInfo');
			const phoneNumber = uni.getStorageSync('phoneNumber');
			if(token) {
				console.log(token)
				console.log(userInfo)
				this.setToken(token);
				this.setuserInfo(userInfo);
				this.setPhoneNumber(phoneNumber)
			}
			// this.getNum()
		  // setInterval(this.goHealthy,10000)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		computed: {
			...mapState(['token']),
		},
		methods: {
			...mapMutations(['setToken','setuserInfo','setPhoneNumber']),
		async	goHealthy(){
				const res=await getData(this.token)
				console.log(res)
			/*	var music = uni.createInnerAudioContext(); //创建播放器对象
			    music.src= "http://music.163.com/song/media/outer/url?id=447925558.mp3"; //选择播放的音频	
				music.play(); //执行播放 
			    setTimeout(function(){
					music.stop()
				},10000)*/
				for(let  key  in res){
				      if(res[key]){
				      	uni.switchTab({
				      		url:'/pages/distribution/distribution'
				      	})	
				      }  
				  }
			},
			/* async  getNum(){
				  const curAll=await totalNum(this.token);
				  let cartNum = curAll.data.goodsNums;  //通过后台接口获取
				  console.log(cartNum)
				   if (cartNum != 0&&cartNum!=null) {
				     //设置角标
				     uni.setTabBarBadge({
				       index: 2,  //tabBar序号，从0开始计数
				       text: cartNum.toString()
				     })
				   } else {
				     //移除角标
				     uni.removeTabBarBadge({
				       index: 2,
				     })
				   }
			  }, */
	},
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/flex.css';
	@import './common/uni.css';
	@import "colorui/main.css";
	@import "colorui/icon.css";
	.sameButton {
		width: 100%;
		height: 100rpx;
		background-color: var(--globalColor);
		color: white;
		border-radius: 0;
		line-height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
	}
	.uni-tabbar__label{
		font-size: 14px !important;
	}
</style>
