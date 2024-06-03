import req from "../../common/req.js"

export const add = (token,orderType,orderPrice,paymentMode,paymentTime,remark,addressId,distributorId,orderDistributeVo) =>req.post(
	'/order/add', {
		token,orderType,orderPrice,paymentMode,paymentTime,remark,addressId,distributorId,orderDistributeVo
	}
)