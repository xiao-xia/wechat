<template>
  <view class="container">
    <view class="Completed">
      <view
        style="color: #333333; font-size: 38rpx;"
        v-if="orderStatus==0"
      >已完成</view>
      <view
        style="color: #333333; font-size: 38rpx;"
        v-if="orderStatus==1"
      >待支付</view>
      <view
        style="color: #333333; font-size: 38rpx;"
        v-if="orderStatus==2"
      >待处理</view>
      <view
        style="color: #333333; font-size: 38rpx;"
        v-if="orderStatus==3"
      >处理中</view>
      <view
        style="color: #333333; font-size: 38rpx;"
        v-if="orderStatus==4"
      >待评价</view>
      <view class="contact">
        <button
          open-type="contact"
          class="customer"
        >
          <view style="line-height: 50rpx;">联系客服</view>
        </button>
        <view
          class="another"
          @click="getOrder()"
        >再来一单</view>
      </view>
    </view>
    <view class="urbanItem">
      <view class="urbanMove">
        <image
          style="width: 50rpx;height: 50rpx;flex-shrink: 0;"
          src="../../static/shopCart/Geography.png"
        ></image>
        <view class="cityArea">
          <view style="color: #333333;font-weight: 550;">{{messageObj.receiverCell}}</view>
          <view style="color: ##666666; font-size: 26rpx;">
            {{messageObj.receiverName}}({{messageObj.receiverSex}})<text>{{messageObj.receiverTel}}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="urbanItem">
      <view class="urbanMove">
        <image
          style="width: 50rpx;height: 50rpx;flex-shrink: 0;"
          src="../../static/shopCart/city.png"
        ></image>
        <view class="cityArea">
          <view style="color: #333333;font-weight: 550;">{{addressObj.companyName}}</view>
          <view style="color: ##666666; font-size: 26rpx;">
            {{addressObj.companyContactName}}<text>{{addressObj.companyMobile}}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="informationItem">
      <view class="orderNews">
        <view style="color: #333333;font-size: 24rpx;">订单信息</view>
        <view style="color: #333333;font-size: 24rpx;padding-right: 20rpx;">{{totalNum}}件</view>
      </view>
      <view
        class="registOrder"
        v-for="(item,index) in goodsArr"
      >
        <view class="Ordervive">
          <image
            style="width: 120rpx;height: 100rpx;"
            :src="item.goodsSmallImage"
          ></image>
          <view class="trademarking">
            <view>{{item.goodsSpecificationName}}</view>
            <view>￥{{item.goodsReceiptsPrice}}</view>
          </view>
          <view>X{{item.goodsNum}}</view>
        </view>
      </view>
      <view class="totalPrice">
        <view style="color: #333333;font-size: 24rpx;">总价</view>
        <view style="color: #333333;padding-right: 10px;font-size: 24rpx;">￥{{orderData.orderPrice}}</view>
      </view>
      <view class="totalPrice">
        <view style="color: #333333;font-size: 24rpx;">抵用券</view>
        <view
          style="color: #333333;padding-right: 10px;font-size: 24rpx;"
          v-if="orderData.couponPrice"
        >￥{{orderData.couponPrice}}</view>
        <view
          style="color: #333333;padding-right: 10px;font-size: 24rpx;"
          v-else
        >￥0</view>
      </view>
      <!-- <view class="totalPrice">
				<view @click="delivery"  style="display: flex;align-items: center;" @tap="showModal()"  data-target="bottomModal">
					<view style="color: #333333;font-size: 24rpx;">快递费</view>
					<image style="width: 22rpx;height: 22rpx;margin-left: 10rpx;" src="../../static/orderImg/question.png"></image>
				</view>
				<view style="color: #333333;padding-right: 10px;font-size: 24rpx;">￥0.00</view>
			</view> -->
      <view class="totalPrice">
        <view style="color: #333333;font-size: 24rpx;">合计</view>
        <view style="color: #F63737;padding-right: 10px;font-size: 24rpx;">￥{{orderData.officialReceiptsPrice}}</view>
      </view>

    </view>
    <view class="remarkItem">
      <view style="color: #333333;font-size: 28rpx;">备注</view>
      <view style="color: #333333;padding-right: 10px;font-size: 24rpx;">{{orderData.remark}}</view>
    </view>
    <view class="messageItem">
      <view style="color: #333333;font-size: 28rpx;">订单信息</view>
      <view style="color: #333333;font-size: 24rpx;">
        订单编号：{{orderData.orderCode}} <text
          class="copy"
          @click="copyText()"
        >复制</text>
      </view>
      <view style="color: #333333;font-size: 24rpx;">下单时间：2020-07-01 19:00:20</view>
      <view style="color: #333333;font-size: 24rpx;">支付时间：2020-07-01 20:00:20</view>
    </view>
  </view>
  </view>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { getDetail } from "../../API/skedetail/index.js";
import { SpecificationById } from "../../API/classificationArr/index.js";
import { getMemberMsg } from "../../API/personArr";
export default {
  data() {
    return {
      messageObj: {},
      addressObj: {},
      goodsArr: [],
      state: "",
      pageShow: false,
      bottomshow: false,
      orderData: {},
      totalNum: 0,
      idsData: [],
      goodVo: [],
      orderStatus: ""
    };
  },
  components: {},
  computed: {
    ...mapState(["token", "openId", "userInfo"])
  },
  onLoad(options) {
    console.log(options);
    this.orderCode = options.orderCode;
    this.orderId = options.orderId;
    this.orderStatus = options.orderStatus;
    // this.state=options.state
  },
  onShow() {
    this.getDetails();
    this.getMember();
  },
  methods: {
    async getMember() {
      const res = await getMemberMsg(this.token);
      this.memberData = res.data;
      // console.log(this.memberData)
    },
    showModal(e) {
      this.bottomshow = true;
    },
    hideModal(e) {
      this.bottomshow = false;
    },
    delivery() {
      uni.navigateTo({
        url: "../buyGoods/expressFee"
      });
    },
    //再来一单
    getOrder() {
      var VoArr = [];
      this.goodsArr.forEach((item, index) => {
        item.goodsSmallImage = encodeURIComponent(
          JSON.stringify(item.goodsSmallImage)
        );
        this.idsData.forEach(idsitem => {
          if (
            idsitem.goodsSpecificationId ==
            this.goodsArr[index].goodsSpecificationId
          ) {
            VoArr.push(idsitem.goodsVo.goodsTypeId);
            if (this.memberData.membershipStatus == "0") {
              this.goodsArr[index].goodsPrice = idsitem.goodsPresentPrice;
            } else if (this.memberData.membershipStatus == "1") {
              this.goodsArr[index].goodsPrice = idsitem.goodsVipPrice;
            }
          }
        });
        this.goodVo = VoArr;
      });
      console.log(this.goodsArr);
      this.totalgoods = 0;
      this.goodsArr.forEach((item, index) => {
        if (item.goodsPrice) {
          var a = item.goodsNum;
          this.totalgoods = this.totalgoods + a;
        } else {
          item.status = false;
          item.goodsPrice = 0;
          item.goodsPresentPrice = 0;
        }
      });
      console.log(this.goodsArr);
      uni.navigateTo({
        url:
          "../buyGoods/buyGoods?orderItem=" +
          JSON.stringify(this.goodsArr) +
          "&goodsNums=" +
          this.totalgoods +
          "&goodVo=" +
          JSON.stringify(this.goodVo)
      });
    },
    async getDetails() {
      uni.showLoading({
        title: "加载中"
      });
      const res = await getDetail(this.token, this.orderCode, this.orderId);
      // console.log(res)
      this.orderData = res.data;
      this.goodsArr = res.data.orderGoodsList; //规格商品
      var getarr = [];
      this.totalNum = 0;
      this.goodsArr.forEach(item => {
        var a = item.goodsNum;
        this.totalNum = this.totalNum + a;
        getarr.push(item.goodsSpecificationId);
      });
      console.log(this.totalNum);
      console.log(this.orderData);
      console.log(getarr);
      this.ids = getarr.join(",");
      console.log(this.ids);
      this.ById();

      //地址数据
      this.messageObj = res.data.shoppingAddressVo;
      console.log(this.messageObj);
      //企业数据
      this.addressObj = res.data.companyVo;
      if (this.messageObj.receiverSex == 1) {
        this.messageObj.receiverSex = "女士";
      } else if (this.messageObj.receiverSex == 0) {
        this.messageObj.receiverSex = "先生";
      }
      uni.hideLoading();
    },

    async ById() {
      console.log(this.ids);
      const res = await SpecificationById(this.token, this.ids);
      console.log(res);
      this.idsData = res.data;
      console.log(this.idsData);
    },

    copyText() {
      uni.setClipboardData({
        //准备复制的数据
        data: this.orderData.orderCode,
        success: function(res) {
          uni.showToast({
            title: "复制成功",
            icon: "none"
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  .Completed {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20rpx;
    margin: 20rpx;
    .contact {
      display: flex;
      margin-top: 20rpx;
      // justify-content:space-around;
      // width: 60%;
      .customer {
        width: 172rpx;
        height: 54rpx;
        color: #999999;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        text-align: center;
        line-height: 52rpx;
        border-radius: 30rpx;
      }
      .another {
        width: 172rpx;
        height: 54rpx;
        color: #ffffff;
        background-color: #fe771e;
        text-align: center;
        line-height: 52rpx;
        border-radius: 30rpx;
        margin-left: 50rpx;
      }
    }
  }
  .urbanItem {
    // width: 100%;
    background-color: #ffffff;
    padding: 20rpx;
    margin: 20rpx;
    .urbanMove {
      display: flex;
      align-items: center;
      .cityArea {
        margin-left: 30rpx;
      }
    }
  }
  .informationItem {
    // width: 100%;
    background-color: #ffffff;
    padding: 20rpx;
    margin: 20rpx;
    .orderNews {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .registOrder {
      margin-bottom: 30rpx;
      border-bottom: 1px solid #e6e6e6;
      padding-bottom: 20rpx;
      .Ordervive {
        display: flex;
        align-items: center;
        .trademarking {
          width: 70%;
          margin-left: 20rpx;
        }
      }
    }
    .totalPrice {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30rpx;
      border-bottom: 1px solid #e6e6e6;
      padding-bottom: 20rpx;
    }
  }
  .remarkItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    background-color: #ffffff;
    padding: 20rpx;
    margin: 20rpx;
  }
  .messageItem {
    background-color: #ffffff;
    padding: 20rpx;
    margin: 20rpx;
    .copy {
      color: #0a90fe;
      border: 1px solid #0a90fe;
      width: 50rpx;
      height: 20rpx;
      padding: 1rpx 10rpx;
      border-radius: 6rpx;
      margin-left: 20rpx;
    }
  }
}
</style>


