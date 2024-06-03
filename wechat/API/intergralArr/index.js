import req from "../../common/req.js"

export const list = (token) =>req.post(
	'/integralRecord/list', {
		token
	}
)

export const rules= (token,articleType) =>req.post(
	'/marketArticle/list', {
		token,articleType
	}
)