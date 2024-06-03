import req from "../../common/req.js"

/* export const getlist = (token,useStatus,pageNumber,pageSize) =>req.post(
	'/coupon/list', {
		token,useStatus,pageNumber,pageSize
	}
)
export const exchangeCoupon = (token) =>req.post(
	'/coupon/exchangeCoupon', {
		token
	}
) */
export const enableList = (token) =>req.get(
	'/couponRule/getCouponRuleList', {
		token
	}
)

export const couponRecord = (token,couponRuleId) =>req.post(
	'/couponRecord', {
		token,couponRuleId
	}
)

export const CouponRecordList = (token,couponStatus,goodsTypeId,price2,goodsId) =>req.get(
	'/couponRecord/getCouponRecordList', {
		token,couponStatus,goodsTypeId,price2,goodsId
	}
)

export const getCoupon = (token,id) =>req.post(
	'/coupon/getCoupon', {
		token,id
	}
)

export const showCoupon = (token,goodsJson,orderPrice) =>req.post(
	'/coupon/couponList', {
		token,goodsJson,orderPrice
	}
)

