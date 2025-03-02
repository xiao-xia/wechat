import req from "../../common/req.js"
//分类页面
export const listByType = (goodsTypeId) => {//  右侧数据
	return req.get(
		"/goods/goodsList", {
			goodsTypeId
		}
	)
}

export const getClassifi = () => {
	return req.get(  //  左侧数据
		"/goodsType/goodsTypeList", {
			
		}
	)
}

export const goodsList = (goodsType,seq) => {
	return req.get(  
		"/goodsType/goodsList", {
			goodsType,seq
		}
	)
}

export const  addNum= (token,goodsSpecificationId,goodsNums,goodsCode,goodsId) => {
	return req.post(// 添加到购物车
		"/shoppingCart/addShoppingCart", {
			token,goodsSpecificationId,goodsNums,goodsCode,goodsId
		}
	)
}

export const  deleteNum= (token,shoppingCartIds) => {
	return req.post(// 添加到购物车
		"/shoppingCart/deleteShoppingCart", {
			token,shoppingCartIds
		}
	)
}

export const  updateNum= (token,shoppingCartId,goodsNums) => {
	return req.post(// 添加到购物车
		"/shoppingCart/updateShoppingCart", {
			token,shoppingCartId,goodsNums
		}
	)
}

export const  totalNum= (token) => {
	return req.post(// 数量
		"/shoppingCart/shoppingCartList", {
			token
		}
	)
}


export const queryGoodsByName = (goodsName) => {//搜索框
	return req.get(
		"/goods/queryGoodsByName", {
			goodsName
		}
	)
}

// export const totalNum = (token) => {//搜索框
// 	return req.post(
// 		"/shoppingCart/sum", {
// 			token
// 		}
// 	)
// }

export const getKeywords = (token) => {
	return req.post(
		"/goods/keywords", {
			token
		}
	)
}

export const delKeywords = (token) => {
	return req.post(
		"/goods/delKeywords", {
			token
		}
	)
}

export const gooddetail = (token,id) => {
	return req.post(
		"/goods/detail", {
			token,id
		}
	)
}
//规格
export const SpecificaId = (token,goodsId) => {
	return req.get(
		"/specification/querySpecificationByGoodsId", {
			token,goodsId
		}
	)
}

//规格
export const SpecificationById = (token,ids) => {
	return req.get(
		"/specification/querySpecificationById", {
			token,ids
		}
	)
}