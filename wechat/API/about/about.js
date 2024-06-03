import req from "../../common/req.js"

export const getAbout = () => {
	return req.get(
		"/platform/getAbout", {
			
		}
	)
}

export const getIntroduction = () => {
	return req.get(
		"/platform/getIntroduction", {
			
		}
	)
}

export const getBookkeeping = () => {
	return req.get(
		"/platform/getBookkeeping", {
			
		}
	)
}
//关于我们
export const getPlatform = (platformType) => {
	return req.get(
		"/platform/getInformationByType", {
			platformType
		}
	)
}