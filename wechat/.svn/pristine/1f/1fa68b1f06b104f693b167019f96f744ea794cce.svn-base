import req from "../../common/req.js"

export const cartList = (token) => {
	return req.post(
		"/shoppingCart/list", {
			token
		}
	)
}

export const empty = (token) => {
	return req.post(
		"/shoppingCart/clear", {
			token
		}
	)
}

export const deleteShop = (token,id) => {
	return req.post(
		"/shoppingCart/delete", {
			token,id
		}
	)
}