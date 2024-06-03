import req from "../../common/req.js"

export const list = (programType,lowPrice,highPrice,productName,pageNumber,pageSize,productStatus) => {
	return req.post(
		"/welfareProgram/list", {
			programType,lowPrice,highPrice,productName,pageNumber,pageSize,productStatus
		}
	)
}

export const searchList = (productName) => {
	return req.post(
		"/welfareProgram/list", {
			productName
		}
	)
}

export const more = (programType,pageNumber,pageSize) => {
	return req.post(
		"/welfareProgram/list", {
			programType,pageNumber,pageSize
		}
	)
}

export const save = (token,productName,programType,productDescribe,productMainPic,productDetailPic,productVideo,productPrice,linkmanName,linkmanTel,linkmanAddress) => {
	return req.post(
		"/welfareProgram/save", {
			token,productName,programType,productDescribe,productMainPic,productDetailPic,productVideo,productPrice,linkmanName,linkmanTel,linkmanAddress
		}
	)
}


export const detail = (id) => {
	return req.post(
		"/welfareProgram/detail", {
			id
		}
	)
}


export const myList = (programType,token,pageNumber,pageSize,productStatus) => {
	return req.post(
		"/welfareProgram/myList", {
			programType,token,pageNumber,pageSize,productStatus
		}
	)
}

export const newSave = (token,productName,programType,productDescribe,productMainPic,productDetailPic,productVideo,productPrice,linkmanName,linkmanTel,linkmanAddress,id) => {
	return req.post(
		"/welfareProgram/update", {
			token,productName,programType,productDescribe,productMainPic,productDetailPic,productVideo,productPrice,linkmanName,linkmanTel,linkmanAddress,id
		}
	)
}

export const goDelete = (token,id) => {
	return req.post(
		"/welfareProgram/deleteWelfareProgram", {
			token,id
		}
	)
}

export const goOffShelf = (token,id) => {
	return req.post(
		"/welfareProgram/itemDownShelf", {
			token,id
		}
	)
}

export const rePublish = (token,id) => {
	return req.post(
		"/welfareProgram/anewSave", {
			token,id
		}
	)
}
