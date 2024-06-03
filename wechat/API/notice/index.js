import req from "../../common/req.js"

export const list = (token) =>req.post(
	'/advertising/list', {
		token
	}
)