import req from "../../common/req.js"

//类型
export const getAdvice = () =>req.get(
	'/platform/getInformationType', {
		
	}
)
//全部
export const getAllInformation = () =>req.get(
	'/platform/getAllInformation', {
		
	}
)
//分类列表
export const getInformationByType = (platformType) =>req.get(
	'/platform/getInformationByType', {
		platformType
	}
)

//详情
export const getInformationById = (id) =>req.get(
	'/platform/getInformationById', {
		id
	}
)

export const getAllInformationIds = () =>req.get(
	'/platform/getAllInformationIds', {
		
	}
)

//查询
export const getTypeids = (platformType) =>req.get(
	'/platform/getInformationIdsByType', {
		platformType
	}
)

//输入标题
export const getInformationByName = (token,platformName) =>req.get(
	'/platform/getInformationByName', {
		token,platformName
	}
)
