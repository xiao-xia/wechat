import req from "../../common/req.js"

export const getListTile = (token,id) => {
	return req.post(
		"/scekill/listTile", {
			token,id
		}
	)
}

export const getListGoods = (token,id,seckillTimeId) => {
	return req.post(
		"/scekill/listSeckillGoods", {
			token,id,seckillTimeId
		}
	)
}

export const getId = (id) => {
	return req.post(
		"/scekill/detail", {
			  id
		}
	)
}