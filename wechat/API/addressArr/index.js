import req from "../../common/req.js"

export const getAddress = (token) => {
	return req.post(
		"/shoppingAddress/shoppingAddressList", {
			token
		}
	)
}

export const add = (token,receiverName,receiverTel,receiverSex,receiverCell,receiverDetail,longitude,latitude,) => {
	return req.post(
		"/shoppingAddress/addShoppingAddress", {
			token,receiverName,receiverTel,receiverSex,receiverCell,receiverDetail,longitude,latitude,
		}
	)
}
// export const add = (token,receiverName,receiverTel,receiverSex,receiverProvince,receiverCity,receiverRegion,receiverCell,receiverDetail,longitude,latitude,addressTag) => {
// 	return req.post(
// 		"/shoppingAddress/add", {
// 			token,receiverName,receiverTel,receiverSex,receiverProvince,receiverCity,receiverRegion,receiverCell,receiverDetail,longitude,latitude,addressTag
// 		}
// 	)
// }
export const update = (token,receiverName,receiverTel,receiverSex,receiverCell,receiverDetail,longitude,latitude,shoppingAddressId) => {
	return req.post(
		"/shoppingAddress/updateShoppingAddress", {
			token,receiverName,receiverTel,receiverSex,receiverCell,receiverDetail,longitude,latitude,shoppingAddressId
		}
	)
}
// export const update = (token,id,receiverName,receiverTel,receiverSex,receiverCell,receiverDetail,longitude,latitude,addressTag) => {
// 	return req.post(
// 		"/shoppingAddress/update", {
// 			token,id,receiverName,receiverTel,receiverSex,receiverCell,receiverDetail,longitude,latitude,addressTag
// 		}
// 	)
// }
export const updateDefaultStatus = (token,shoppingAddressId) => {
	return req.post(
		"/shoppingAddress/updateDefaultStatus", {
			token,shoppingAddressId
		}
	)
}
export const getTags = (token) => {
	return req.post(
		"/shoppingAddress/getTags", {
			token
		}
	)
}

export const getDefaultAddress = (token) => {
	return req.post(
		"/shoppingAddress/getDefaultAddress", {
			token
		}
	)
}


export const getdelete = (token,shoppingAddressIds) => {
	return req.post(
		"/shoppingAddress/deleteShoppingAddress", {
			token,shoppingAddressIds
		}
	)
}

