import req from "../../common/req.js"

export const getwriiting = (token,rankType,articleType) => {
	return req.post(
		"/marketArticle/list", {
			token,rankType,articleType
		}
	)
}

export const search = (articleTitle) => {
	return req.post(
		"/marketArticle/list", {
			articleTitle
		}
	)
}