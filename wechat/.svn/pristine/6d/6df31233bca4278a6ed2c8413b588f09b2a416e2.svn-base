import req from "../../common/req.js"

// export const getFeedback = (/* name, phone, */token,content) => {
// 	return req.post(
// 		"/opinion/submit", {
// 			/* name, phone, */token,content
// 		}
// 	)
// }

export const getFeedback = (token,content) => {
	return req.get(
		"/opinion/createOpinion", {
			token,content
		}
	)
}
