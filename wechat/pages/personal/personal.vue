<template>
  <view class="container">
    <!-- 自定义组件 -->
    <view class="userInfoItem">
      <image
        src="http://47.93.61.34:8081/person.png"
        mode=""
        class="img"
      ></image>
      <view
        class="users"
        :style="{'paddingTop': (menuButtonInfo.bottom - 25) + 'px'}"
      >
        <view class="user">个人中心</view>
      </view>
      <view class="main">
        <view
          class="userInfo"
          v-if="token"
        >
          <view
            class="userAvatar"
            @tap="navWheremy()"
          >
            <image
              class="userAvatarimg"
              :src="userInfo.avatarUrl"
              mode=""
            ></image>
          </view>
          <view class="userInfoTexts">
            <view class="userInfoVipbar">
              <!-- <view style="font-size:40rpx;color: #fff;"> -->
              <text style="font-size:40rpx;color: #fff;">{{nickName}}</text>
              <!-- </view> -->
              <view style="color: #fff;margin-left: 20rpx;">
                <!-- {{phoneNumber||phone}} -->
                {{phone}}
              </view>
            </view>
            <view class="identity">
              <text class="text">{{memberData.membershipStatus}}</text>
            </view>
          </view>
        </view>

        <view
          class="userInfo"
          v-else
        >
          <view
            class="userAvatar"
            v-for="(list,index) in myList"
            :key="index"
            @tap="navWheremy()"
          >
            <image
              class="noUserAvatarimg"
              :src="list.url"
              mode=""
            ></image>
          </view>
          <view class="userInfoText">
            <view class="vipBarItem">
              <view class="vipbar">
                <view
                  class="logins"
                  @tap="loginWheremy()"
                >
                  <text style="font-size: 36rpx;color: #fff;">点击登录</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="orderItem">
      <view class="orderbox">
        <image
          style="width: 750rpx; height: 330rpx;flex-shrink: 0; z-index: -1;"
          src="http://47.93.61.34:8081/back.png"
        ></image>

        <view class="menberItem">
          <view class="menberege">
            <view class="memberImg">
              <image src="../../static/personal/VIPmember.png"></image>
            </view>
            <view class="privilege">
              开通立享多项特权
            </view>
          </view>
          <view
            class="shipCard"
            @tap="opening"
            v-if="memberData.membershipStatus=='普通用户'"
          >
            开通会员卡
            <text
              style="#ddaa2b"
              class="cuIcon-right lg text-gray "
            ></text>
          </view>
          <view
            class="shipCard"
            @tap="opening"
            v-if="memberData.membershipStatus=='会员用户'"
          >
            {{memberData.memberExpirationTime}}
            <!-- 2021-12-27 -->
          </view>
        </view>

        <view class="orderPersonal">
          <view class="orderState">
            <view
              class="orderBlock"
              v-for="(order,index) in orderState"
              :key="index"
              @tap="navWhereolder(order.state,index)"
            >
              <view>
                <view style="display: flex;justify-content: center;">
                  <image
                    style="width: 50rpx;height: 50rpx;"
                    :src="order.url"
                    mode=""
                  ></image>
                </view>
                <view style="font-size: 24rpx;text-align: center;margin-top: 20rpx;">
                  {{order.state}}
                </view>
              </view>
              <view
                class="orderNumber"
                v-if="order.number > 0"
              >
                {{order.number}}
              </view>
            </view>
          </view>
        </view>

      </view>
    </view>

    <view class="MyFunction">
      <text class="mytion">
        我的功能
      </text>
      <view class="aboutFunction">
        <view
          class="mytionBox"
          v-for="(item,index) in functionList"
          :key="index"
          @tap="navWhere(item)"
        >
          <view style="display: flex;justify-content: center;">
            <image
              style="width: 60rpx;height: 60rpx;"
              :src="item.url"
              mode=""
            ></image>
          </view>
          <text style="font-size: 24rpx;text-align: center;margin-top: 20rpx;">{{item.name}}</text>
        </view>

      </view>

    </view>
    <view v-if="token">
      <button
        class="button"
        @click="toExit"
      >退出登录</button>
    </view>
    <view v-else>
      <button></button>
    </view>

    <!-- <view class="pageCenter">
			<view class="functionBlcok" v-for="(fun,index) in functionList" :key="index" @tap="navWhere(fun)" >
				<view class="functionLeft">
					<image class="functionImg" :src="fun.url" mode=""></image>
					<view class="functionText">
						{{fun.name}}
					</view>
				</view>
				<view class="cuIcon-right" style="color: #B9B9B9;">
				</view>
			</view>
		</view> -->

    <!-- 退出登录 -->
    <view
      class="cu-modal show"
      v-if="modalShow"
    >
      <view class="cu-dialog">
        <view class="cu-bar bg-white justify-end">
          <view class="content ">
          </view>
          <view
            class="action"
            @tap="hideModal"
          >
            <text class="cuIcon-close text-red"></text>
          </view>
        </view>
        <view
          class="camera"
          @click="chooseImg"
        >
          <image
            src="../../static/addImg.png"
            mode=""
            class="upImg"
          ></image>
        </view>
        <view
          class="padding-xl"
          @click="chooseImg"
          style="background-color: #fff;"
        >
          <view class="conform">点击上传</view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { showToast } from "../../common/util.js";
import { getSignout } from "../../API/signout/index.js";
import { statusCount } from "../../API/olderArr";
import { newestVersion, getReport, getMemberMsg } from "../../API/personArr";
import { detail } from "../../API/mymessArr/index.js";
import { postServer } from "../../common/static-data.js";
import { orderList } from "../../API//olderArr/index.js";
export default {
  components: {},
  data() {
    return {
      imgShow: "",
      opens: false,
      closele: true,
      percentage: 50,
      myList: [{ nav: "mymessage", url: "../../static/logo.png" }],
      menuButtonInfo: {}, //页面右上角胶囊位置
      orderState: [
        { state: "全部", url: "../../static/mine/all.png", number: 0 },
        { state: "待支付", url: "../../static/mine/dai.png", number: 0 },
        { state: "待处理", url: "../../static/mine/time.png", number: 0 },
        { state: "处理中", url: "../../static/mine/ing.png", number: 0 },
        { state: "待评价", url: "../../static/mine/pingjia.png", number: 0 }
      ],
      functionList: [
        {
          name: "企业完善",
          nav: "Enterprise",
          url: "../../static/mine/fun1.png"
        },
        { name: "收货地址", nav: "address", url: "../../static/mine/fun2.png" },
        { name: "抵用券", nav: "coupon", url: "../../static/mine/fun3.png" },
        {
          name: "我的评价",
          nav: "evaluate",
          url: "../../static/mine/fun4.png"
        },
        { name: "关于我们", nav: "about", url: "../../static/mine/fun5.png" },
        {
          name: "用户协议",
          nav: "agreement",
          url: "../../static/mine/fun6.png"
        },
        {
          name: "意见反馈",
          nav: "feedback",
          url: "../../static/mine/fun7.png"
        },
        {
          name: "客服中心",
          nav: "serviceCenter",
          url: "../../static/mine/fun8.png"
        }
      ],
      versionNum: "",
      modalShow: false,
      watchShow: false,
      imgArr: [],
      memberData: {},
      nickName: "",
      orderStatus: "",
      phone: ""
    };
  },
  computed: {
    ...mapState(["unfoin", "token", "userInfo", "phoneNumber"])
  },
  onLoad() {
    this.menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    this.getStatusCount();
  },
  onShow() {
    getApp().globalData.index = 5;
    this.getStatusCount();
    this.getMember();
    this.getMessasy();
  },
  onHide() {},
  methods: {
    //...mapMutations(['unfoins']),
    //...mapMutations(['deleteToken']),
    async getMessasy() {
      const res = await detail(this.token);
      console.log(res);
      this.id = res.data.id;
      this.nickName = res.data.nickName;
      this.phone = res.data.phone;
    },
    chooseImg() {
      uni.chooseImage({
        count: 5,
        success: res => {
          var that = this;
          console.log(res.tempFilePaths);
          this.imgArr = res.tempFilePaths;
          uni.showLoading({
            title: "上传中"
          });
          for (let i = 0; i < this.imgArr.length; i++) {
            uni.uploadFile({
              url:
                "https://www.fjzhihui.cn" + "/flie/upload?token=" + this.token,
              filePath: this.imgArr[i],
              name: "file",
              success: uploadFileRes => {
                if (uploadFileRes) {
                  uni.hideLoading();
                }
                console.log(uploadFileRes.data);
                uni.showToast({
                  title: "上传成功",
                  //image:'../../static/error.png'
                  icon: "success"
                });
                that.hideModal();
              },
              fail: error => {
                if (error) {
                  uni.hideLoading();
                }
                uni.showToast({
                  title: "上传失败",
                  image: "../../static/error.png"
                });
              }
            });
          }
        }
      });
    },
    opening() {
      if (!this.token) {
        this.unLoadEvent();
      } else {
        uni.navigateTo({
          url: "../membership/membership"
        });
      }
    },
    previewImage: function(index) {
      //预览图片
      console.log(index);
      uni.previewImage({
        current: this.imgShow[index],
        urls: this.imgShow
      });
    },
    async getStatusCount() {
      const res = await orderList(this.token, this.orderStatus);
      console.log(res);
      res.data.count.forEach(data => {
        var countData = res.data.count;
        console.log(countData);
        this.orderState.forEach((item, index) => {
          item.number = countData[index];
          // console.log(item.number)
        });
      });
      this.orderState[0].number = 0;
    },

    toExit() {
      var that = this;
      uni.showModal({
        title: "提示",
        content: "您真的要退出登录吗",
        cancelText: "不了!亲",
        confirmText: "退出登录",
        success: function(res) {
          if (res.confirm) {
            that.toExitEvent();
          } else if (res.cancel) {
          }
        }
      });
    },
    toExitEvent() {
      this.$store.commit("deleteToken");
      if (res) {
        showToast("退出成功");
      }
    },
    async getMember() {
      const res = await getMemberMsg(this.token);
      this.memberData = res.data;
      if (this.memberData.membershipStatus == "0") {
        this.memberData.membershipStatus = "普通用户";
      } else {
        this.memberData.membershipStatus = "会员用户";
      }
      console.log(this.memberData);
      console.log(this.memberData.membershipStatus);
    },
    kaiqiwhere() {
      this.kaiqi = true;
      this.guanbi = true;
    },
    guanbiwhere() {
      this.guanbi = false;
      this.kaiqi = false;
    },
    openwhere() {
      this.opens = true;
      this.closele = true;
    },
    closelewhere() {
      this.closele = false;
      this.opens = false;
    },
    myOrder(item) {
      if (item == "全部订单") {
        item = "全部";
      }
      uni.navigateTo({
        url: "../order/myOrder?name=" + item
      });
    },

    //我的订单跳转
    navWhereolder(state, index) {
      console.log(state);
      console.log(index);
      if (!this.token) {
        this.unLoadEvent();
      } else {
        uni.navigateTo({
          url:
            "/pages/personal/myolder/whole?state=" + state + "&index=" + index
        });
      }
    },

    // 跳转到哪里
    navWhere(theme) {
      if (!this.token) {
        this.unLoadEvent();
      } else {
        switch (theme.nav) {
          case "address":
            uni.navigateTo({
              url: "/pages/shippingAddress/shippingAddress?type=1"
            });
            break;
          case "feedback":
            uni.navigateTo({
              url: "/pages/personal/feedback"
            });
            break;
          case "serviceCenter":
            uni.navigateTo({
              url: "/pages/serviceCenter/serviceCenter"
            });
            break;
          case "about":
            uni.navigateTo({
              url: "/pages/personal/abouts/bookKeep"
            });
            break;
          case "evaluate":
            uni.navigateTo({
              url: "/pages/personal/evaluate/evaluate"
            });
            break;
          case "coupon":
            uni.navigateTo({
              url: "/pages/personal/coupon/coupon"
            });
            break;
          case "agreement":
            uni.navigateTo({
              url: "/pages/personal/agreement/agreement"
            });
            break;
          case "Enterprise":
            uni.navigateTo({
              url: "/pages/personal/establishment/establishment?type=1"
            });
            break;
          default:
            break;
        }
      }
    },
    navWheremy() {
      if (!this.token) {
        this.unLoadEvent();
      } else {
        uni.navigateTo({
          url: "/pages/personal/mymessage/mymessage"
        });
      }
    },
    unLoadEvent() {
      uni.showModal({
        title: "提示",
        content: "您还未登录哦，请先登录~",
        // cancelText: '随便看看',
        showCancel: false,
        confirmText: "立即登录",
        success: function(res) {
          if (res.confirm) {
            uni.reLaunch({
              url: "../login/login"
            });
          } else if (res.cancel) {
          }
        }
      });
    },
    loginWheremy() {
      uni.navigateTo({
        url: "../login/login"
      });
    },
    showModalEvent() {
      this.modalShow = true;
    },
    hideModal() {
      this.modalShow = false;
    },
    async showReport() {
      uni.navigateTo({
        url: "../checkReport/checkReport"
      });
    },
    hideReport() {
      this.watchShow = false;
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.users {
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  .back {
    color: #fff;
    padding-left: 10rpx;
  }
  .user {
    color: #fff;
    padding-left: 10rpx;
    width: 100%;
    text-align: center;
  }
}
.userInfoItem {
  width: 100%;
  height: 470rpx;
  // position: relative;
  .main {
    position: absolute;
    top: 180rpx;
    left: 0;
    width: 100%;
    padding: 0 20rpx;
  }
  image {
    width: 100%;
    height: 100%;
  }
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .userAvatar {
      width: 120rpx;
      height: 120rpx;
      background: url(../../static/mine/preyuan.png);
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .userAvatarimg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .userInfoTexts {
      // display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 150rpx);
      .userInfoVipbar {
        display: flex;
        // align-items: flex-end;
        align-items: center;
      }
      .identity {
        width: 150rpx;
        height: 50rpx;
        background-color: #0048c3;
        border-radius: 30rpx;
        color: #fff;
        text-align: center;
      }
    }
    .userInfoText {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 150rpx);
    }
  }
}

.orderItem {
  width: 100%;
  transform: translateY(-50rpx);
  .orderbox {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    text-align: center;
    font-size: 28rpx;
    background-size: 100% 100%;
    margin-top: -70rpx;
    .menberItem {
      z-index: 2;
      display: flex;
      margin-top: -300rpx;
      margin-left: 130rpx;
      .menberege {
        margin-top: -20rpx;
        .memberImg {
          width: 130rpx;
          height: 40rpx;
          image {
            width: 100%;
            height: 100%;
          }
        }
        .privilege {
          color: #c69b31;
          margin-top: 20rpx;
        }
      }
      .shipCard {
        border-radius: 10rpx;
        color: #ddaa2b;
        background-color: #ffff;
        text-align: center;
        height: 50rpx;
        width: 170rpx;
        line-height: 50rpx;
        font-size: 13px;
        margin-left: 140rpx;
      }
    }

    .orderPersonal {
      margin: 20rpx 0 0rpx 0;
      .orderTitle {
        margin-left: 20rpx;
        margin-top: 10rpx;
        .orderTitleimg {
          .shu {
            color: var(--button);
          }
        }
      }
      .orderState {
        display: flex;
        padding: 30rpx 20rpx;
        align-items: center;
        .orderBlock {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;

          .orderNumber {
            position: absolute;
            width: 30rpx;
            height: 30rpx;
            border-radius: 50%;
            background-color: orange;
            font-size: 20rpx;
            color: #fff;
            line-height: 30rpx;
            text-align: center;
            top: -15rpx;
            right: 50rpx;
          }
        }
      }
    }
  }
}

.MyFunction {
  width: 100%;
  background-color: #ffffff;
  margin-top: -30rpx;
  padding: 20rpx;
  .mytion {
    padding: 20rpx 0;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
    margin: 10rpx 10rpx 10rpx 36rpx;
  }
  .aboutFunction {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20rpx;
    .mytionBox {
      width: 25%;
      text-align: center;
      margin-bottom: 20rpx;
    }
  }
}
.button {
  width: 100%;
  height: 80rpx;
  background-color: #008cff;
  color: white;
  border-radius: 0;
  line-height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  font-size: 30rpx;
}

.functionBlcok {
  width: 100%;
  height: 100rpx;
  padding: 0 50rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1rpx solid #f0f0f0;

  .functionLeft {
    display: flex;
    align-items: center;

    .functionText {
      font-size: 28rpx;
      margin-left: 20rpx;
      color: #666666;
    }
    .functionIcon {
      font-size: 40rpx;
    }
    .functionImg {
      width: 50rpx;
      height: 50rpx;
    }
  }
}
.functionBlcok:last-child {
  border: none;
}
.editionItem {
  font-size: 28rpx;
  color: #a4a5a5;
  text-align: center;
  line-height: 70rpx;
}

.camera {
  width: 180rpx;
  height: 180rpx;
  background-color: #fff;
  margin: 0 auto;
}
.padding-xl {
  display: flex;
  justify-content: center;
}
.conform {
  width: 180rpx;
  height: 60rpx;
  background-color: var(--button);
  font-size: 30rpx;
  color: #fff;
  line-height: 60rpx;
  border-radius: 10rpx;
}
.swiper-item {
  width: 100%;
  height: 700rpx !important;
  display: flex;
  align-items: center;
  justify-content: center;
  .checkImg {
    width: 100%;
  }
}
.noUserAvatarimg {
  width: 70rpx !important;
  height: 70rpx !important;
}
.upImg {
  width: 100%;
  height: 100%;
}
.cu-dialog {
  width: 500rpx;
  background-color: #fff;
}
.cu-bar {
  height: 50rpx !important;
  min-height: 0;
  border: 1px solid #eee;
}
</style>
