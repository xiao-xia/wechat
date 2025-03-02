import req from "../../common/req.js"

export const getAllEvaluate = (token) =>{
	return req.get(
		"/evaluate/getAllEvaluate", {
			token
		}
	)
}

/* export const createEvaluate = (token,orderCode,orderId,evaluateStarLevel,evaluateContent) =>{
	return req.get(
		"/evaluate/createEvaluate", {
			token,orderCode,orderId,evaluateStarLevel,evaluateContent
		}
	)
} */

export const createEvaluate = (token,orderCode,orderId,evaluateStarLevel,evaluateContent,orderGoodsId,lastOne) =>req.post(
	'/evaluate', {
		token,orderCode,orderId,evaluateStarLevel,evaluateContent,orderGoodsId,lastOne
	}
)

export const goodsEvaluate = (token,goodsId,evaluateTags) =>req.put(
	'/evaluate', {
		token,goodsId,evaluateTags
	}
)