import req from "../../common/req.js"

export const getDetail = (token,orderCode,orderId) => {
	return req.post(
		"/order/orderDetail", {
			token,orderCode,orderId
		}
	)
}

// export const getDetail = (token,id) => {
// 	return req.post(
// 		"/order/detail", {
// 			token,id
// 		}
// 	)
// }

export const getshopcart = (token,goodsId,orderCount) => {
	return req.post(
		"/shoppingCart/add", {
			token,goodsId,orderCount
		}
	)
}


export const goodDetail = (token,id) => {
	return req.post(
		"/goods/detail", {
			token,id
		}
	)
}

