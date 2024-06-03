import req from "../../common/req.js"

/* export const login = (code, userInfo) => {
	return req.post(
		"/wxa/user/login", {
			code, userInfo
		}
	)
} */

/* export const getPhone = (token) => {
	return req.post(
		"/wxa/user/getPhone", {
			token
		}
	)
} */
/* export const savePhone = (token,encryptedData,iv) => {
	return req.post(
		"/wxa/user/savePhone", {
			token,encryptedData,iv
		}
	)
} */

export const login = (code, userInfo) => {
	return req.get(
		"/wx/user/wxlogin", {
			code, userInfo
		}
	)
}
export const savePhone = (token,encryptedData,iv) => {
	return req.get(
		"/wx/user/savePhone", {
			token,encryptedData,iv
		}
	)
}