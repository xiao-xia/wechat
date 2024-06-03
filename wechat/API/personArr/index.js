import req from "../../common/req.js"



export const problemByType = (problemType) =>req.get(
	'/problem/problemByType', {
		problemType
	}
)

export const getReport= (token) =>req.post(
	'/ThirdPartyCall/productMainPic', {
		token
	}
)

export const getRecent= (token) =>req.post(
	'/ThirdPartyCall/recentProductMainPic', {
		token
	}
)

export const article = (articleName) =>req.post(
	'/marketArticle/article', {
		articleName
	}
)

export const problemTypeList = () =>req.post(
	'/problemCommon/problemTypeList', {
		
	}
)

export const problemList = (problemType) =>req.post(
	'/problemCommon/problemList', {
		problemType
	}
)

export const getMemberMsg = (token) =>req.post(
	'/wx/user/getMemberMsg', {
		token
	}
)