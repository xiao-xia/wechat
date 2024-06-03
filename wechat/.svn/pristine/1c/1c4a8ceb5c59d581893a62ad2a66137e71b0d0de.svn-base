import req from "../../common/req.js"

export const defaultAddress = (token) => {
	return req.post(
		"/shoppingAddress/getDefaultAddress", {
			token
		}
	)
}

export const setAddress = (token,id) => {
	return req.post(
		"/shoppingAddress/setDefaultAddress", {
			token,id
		}
	)
}