import req from "../../common/req.js"

export const companyList = (token) =>req.get(
	'/company/companyList', {
		token
	}
)

export const createCompany = (token,companyName,certificateNo,companyOwner,companyContactName,companyMobile,nowAddress,classifyName,serviceId) =>req.get(
	'/company/createCompany', {
		token,companyName,certificateNo,companyOwner,companyContactName,companyMobile,nowAddress,classifyName,serviceId
	}
)

export const serviceType = (token) =>req.get(
	'/company/serviceType', {
		token
	}
)

export const updateCompany = (token,companyName,certificateNo,companyOwner,companyContactName,companyMobile,nowAddress,classifyName,serviceId,companyId) =>req.get(
	'/company/updateCompany', {
		token,companyName,certificateNo,companyOwner,companyContactName,companyMobile,nowAddress,classifyName,serviceId,companyId
	}
)

export const deleteCompany = (companyId) =>req.get(
	'/company/deleteCompany', {
		companyId
	}
)

export const updateTopStatus = (token,companyId) =>req.post(
	'/company/updateTopStatus', {
		token,companyId
	}
)