import req from "../../common/req.js"

export const getSetting = () =>req.post(
	'/homePageSetting/getSetting', {
		
	}
)

export const getMessage= () =>req.post(
	'/scekill/pageSeckill', {	
	}
)

export const getTime= () =>req.post(
	'/scekill/firstStartTime', {	
	}
)