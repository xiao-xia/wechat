import req from "../../common/req.js"

export const getSignout = (token) => {
	return req.post(
		"/wxa/user/exit", {
			token
		}
	)
}