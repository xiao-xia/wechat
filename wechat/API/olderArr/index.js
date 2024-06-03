import req from "../../common/req.js"

export const orderList = (token,orderStatus) =>req.post(
	'/order/orderList', {
		token,orderStatus
	}
)

export const list = (token,orderStatus) =>req.post(
	'/order/list', {
		token,orderStatus
	}
)

export const add = (token,orderPrice,goodsJson,addressId,remark,orderType,cartIds,memberCouponId) =>req.post(
	'/order/add', {
		token,orderPrice,goodsJson,addressId,remark,orderType,cartIds,memberCouponId
	}
)

export const  deleteOrder= (token,id) =>req.post(
	'/order/delete', {
		token,id
	}
)

export const cancelOrder= (token,id) =>req.post(
	'/order/cancelOrder', {
		token,id
	}
)