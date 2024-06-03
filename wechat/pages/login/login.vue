<template>
  <view class="container">
    <view class="welcome">
      欢迎来到企瑞宝
    </view>
    <view class="containerBack">
      <image src="http://47.93.61.34:8081/homeBack.jpg"></image>
    </view>
    <!-- <view class="logo">
				<image class="logoImg" src="../../static/login.png" mode="widthFix"></image>
			</view> -->
    <view
      class="contentItem"
      v-if="loginType==0"
    >
      <view class="title">该程序将获取以下授权：</view>
      <view class="text">获得您的公开信息（昵称、头像等）</view>
    </view>
    <view
      class="buttonItem"
      v-if="loginType==0"
    >
      <button
        class="button button-green"
        open-type="getUserInfo"
        @getuserinfo="getuserinfo"
      >允许</button>
      <view
        @tap="gethome()"
        style="text-align: center;color: #aaa;font-size: 32rpx;"
      >拒绝</view>
      <!-- <button class="button button-green" open-type="getPhoneNumber" @getphonenumber="getphonenumber">获取手机号</button> -->
    </view>

    <view v-if="this.messageobj.phone"></view>
    <view
      class="buttonPhoneItem"
      v-else
      v-if="loginType==1&&!this.messageobj.phone"
    >
      <button
        class="getPhoneButton"
        open-type="getPhoneNumber"
        @getphonenumber="getphonenumber"
      >
        微信用户一键登录
      </button>

    </view>

  </view>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { showToast } from "../../common/util.js";
import { login, getPhone, savePhone } from "../../API/login";
import { getMemberMsg } from "../../API/personArr";
import { detail } from "../../API/mymessArr";
export default {
  data() {
    return {
      userInfoData: {},
      loginType: 0, // 0获取用户信息，1获取手机号
      createtoken: "",
      messageobj: {}
    };
  },
  computed: {
    ...mapState(["token", "phoneNumber", "userInfo"])
  },
  onLoad(options) {
    this.deleteToken();
  },
  methods: {
    ...mapMutations([
      "setToken",
      "setPhoneNumber",
      "setuserInfo",
      "deleteToken"
    ]),
    //拒绝
    gethome() {
      uni.switchTab({
        url: "../personal/personal"
      });
    },
    //信息
    async getMessasy() {
      const res = await detail(this.createtoken);
      this.messageobj = res.data;
      console.log(this.messageobj);
      if (this.messageobj.phone) {
        uni.switchTab({
          url: "../home/home"
        });
      } else {
        this.loginType = 1;
      }
    },
    //获取手机
    async getphonenumber(e) {
      console.log(e);
      console.log(this.createtoken);
      console.log(this.token);
      // if(this.token)
      let encryptedData = e.detail.encryptedData;
      let iv = e.detail.iv;
      if (!!!this.createtoken) {
        uni.showToast({
          title: "登陆失败，重新登录",
          icon: "none"
        });
      } else if (!!!encryptedData) {
        uni.showToast({
          title: "登陆失败，重新登录",
          icon: "none"
        });
      } else if (!!!iv) {
        uni.showToast({
          title: "登陆失败，重新登录",
          icon: "none"
        });
      }
      console.log(this.createtoken);
      console.log(encryptedData);
      console.log(iv);
      uni.showLoading({
        title: "加载中"
      });
      const res = await savePhone(this.createtoken, encryptedData, iv);
      console.log(res);
      uni.hideLoading();
      if (res) {
        this.setPhoneNumber(res.data); //存储到vuex
        uni.setStorageSync("phoneNumber", res.data); //存储到缓存
        // this.getPhoneHandler(this.token)
        console.log(res);
        uni.switchTab({
          url: "../home/home"
        });
      } else {
        uni.hideLoading();
        showToast("服务器错误");
      }
      if (res) {
        this.setPhoneNumber(res.data); //存储到vuex
        uni.setStorageSync("phoneNumber", res.data); //存储到缓存
        // uni.showModal({
        // 	title: '提示',
        // 	content: '请您完善个人信息',
        // 	cancelText: '取消',
        // 	confirmText: '确定',
        // 	success: function (res) {
        // 	    if (res.confirm) {
        // 	       uni.navigateTo({
        // 	       	 url:'../personal/mymessage/mymessage'
        // 	       })
        // 	    } else if (res.cancel) {
        // 	        uni.switchTab({
        // 	        	url:'../home/home'
        // 	        })
        // 	    }
        // 	}
        // })
      }
      // this.getPhoneHandler(this.createtoken)
    },
    //允许
    getuserinfo(e) {
      console.log(e);
      this.userInfoData = e.detail.userInfo;
      // this.loginType=1
      if (!!!this.userInfoData) {
        uni.showToast({
          title: "登陆失败，重新登录",
          icon: "none"
        });
      }
      this.loginEvent();
    },
    loginEvent() {
      var that = this;
      uni.showLoading({
        title: "加载中"
      });
      uni.login({
        //获取code
        provider: "weixin", //使用微信登录
        success: function(loginRes) {
          //客户端成功获取授权临时票据（code）,向业务服务器发起登录请求
          that.loginPost(loginRes.code);
          uni.hideLoading();
        }
      });
    },
    async loginPost(code) {
      //获取token
      uni.showLoading({
        title: "加载中"
      });
      let res = await login(code, JSON.stringify(this.userInfoData));
      console.log(res);
      this.createtoken = res.data.token;
      this.setToken(this.createtoken);
      this.setuserInfo(this.userInfoData);
      //获得token完成登录
      uni.setStorageSync("userInfo", this.userInfoData);
      uni.setStorageSync("token", this.createtoken);
      uni.hideLoading();
      console.log(this.createtoken);
      //this.getPhoneHandler(token)
      this.getMessasy(); //信息
    },

    async getPhoneHandler(token) {
      uni.showLoading({
        title: "加载中"
      });
      const res = await getPhone(token); //获取到手机号
      console.log(res);
      if (res) {
        uni.hideLoading();
      }
    }
  }
};
</script>
 
<style lang="scss">
.welcome {
  background-color: #fff;
  text-align: center;
  font-size: 40rpx;
  height: 100rpx;
  line-height: 100rpx;
}
.containerBack {
  width: 100%;
  height: 1100rpx;
  z-index: -1;
  flex-shrink: 0;
  image {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  border: 1px solid var(--button);
  margin: 50rpx auto;
  .logoImg {
    width: 150rpx;
  }
}
.contentItem {
  width: 100%;
  padding: 0 100rpx;
  text-align: center;
  margin-top: -420rpx;
  .title {
    color: #101010;
  }

  .text {
    color: #888888;
  }
}
.buttonItem {
  margin-top: 60rpx;
  width: 100%;
  padding: 0 70rpx;
  .button {
    width: 250rpx;
    height: 70rpx;
    border-radius: 60rpx;
    color: #fff;
    line-height: 70rpx;
    margin: 20rpx auto;
    font-size: 32rpx;
  }
  .button-green {
    // background-color: var(--button);
    background-color: #1093fe;
  }
}

.buttonPhoneItem {
  margin-top: 80rpx;
  display: flex;
  justify-content: center;
  margin-top: -420rpx;
  .getPhoneButton {
    width: 60%;
    height: 90rpx;
    border-radius: 10rpx;
    color: #fff;
    // background-color: var(--button);
    background-color: #1093fe;
    line-height: 90rpx;
    text-align: center;
  }
}
</style>

