import req from "../../common/req.js"

export const detail = (token) => {
	return req.post(
		"/wx/user/getMemberMsg", {
			token
		}
	)
}

export const update = (token,realName,birthday,sex,nickName,id) => {
	return req.post(
		"/wx/user/updateMemberMsg", {
			token,realName,birthday,sex,nickName,id
		}
	)
}


