import req from "../../common/req.js"

export const getDetail= (token,id) =>req.post(
	'/order/detail', {
		token,id
	}
)

export const refund= (token,refundReason,orderCode,refundPrice) =>req.post(
	'/wx/refund', {
		token,refundReason,orderCode,refundPrice
	}
)