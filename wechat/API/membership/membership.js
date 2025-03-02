import req from "../../common/req.js"

export const getAllRule = () => {
	return req.get(
		"/rule/getAllRule", {
			
		}
	)
}

export const getRuleById = (membershipCardRuleId) => {
	return req.get(
		"/rule/getRuleById", {
			membershipCardRuleId
		}
	)
}

export const createCardRecord = (token,membershipCardRuleId,membershipCardRuleName,membershipCardRuleActivityPrice,membershipCardRuleOriginalPrice,membershipCardRuleEffectiveTime,paymentMethod,paymentAmount,paidAmount) => {
	return req.get(
		"/vip/createCardRecord", {
			token,membershipCardRuleId,membershipCardRuleName,membershipCardRuleActivityPrice,membershipCardRuleOriginalPrice,membershipCardRuleEffectiveTime,paymentMethod,paymentAmount,paidAmount
		}
	)
}

export const updateCardRecord = (token,membershipCardRuleEffectiveTime,paymentMethod) =>{
	return req.get(
		"/vip/updateCardRecord", {
			token,membershipCardRuleEffectiveTime,paymentMethod
		}
	)
}

export const privileges = (token,userId) => {
	return req.get(
		"/privileges/"+userId, {
			token
		}
	)
}