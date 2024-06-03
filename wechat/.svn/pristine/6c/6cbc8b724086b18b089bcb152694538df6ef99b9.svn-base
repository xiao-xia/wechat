import req from "../../common/req.js"

export const list = (token) => {
	return req.post(
		"/shoppingCart/list", {
			token
		}
	)
}

export const setSelectStatus = (token) => {
	return req.post(
		"/shoppingCart/setSelectStatus", {
			token
		}
	)
}

export const shoppingDelete = (token,ids) => {
	return req.post(
		"/shoppingCart/delete", {
			token,ids
		}
	)
}

export const shopDelete = (token) => {
	return req.post(
		"/shoppingCart/clear", {
			token
		}
	)
}


export const setOrderCount = (token,orderCount,id) => {
	return req.post(
		"/shoppingCart/setOrderCount", {
			token,orderCount,id
		}
	)
}

