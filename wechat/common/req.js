import {
	postServer
} from './static-data.js'

//后面可以考虑直接在fail里面把错误处理了，界面上只考虑then的情况
const sendRequset = (options = {}) => {
	console.log('options:', options)
	return new Promise((resolve, reject) => {
		uni.request({
			...options,
			url: postServer + options.url,
			// header: {
			// 	// 'content-type':'application/x-www-form-urlencoded',
			// 	'custom-header': 'application/json' //自定义请求头信息
			// },
			// dataType: 'json',
			header:{
				'content-type':'application/x-www-form-urlencoded',//自定义请求头信息
			},
			dataType:'json',
			// method:'POST',
			success: (res) => {
				const status = res.statusCode
				console.log('response:', res);
				if (status >= 200 && status < 300 || status === 304) {
					//这里可用进行各种错误码的处理，如果有错误码的话
					resolve(res.data);
				} else {
					reject(res);
				}
			},
			fail: (err) => {
				reject(err);
			}
		});
	});
}

export default {
	get: function(url, data) {
		return sendRequset({
			url: url,
			data: data,
			method: 'GET'
		});
	},
	post: function(url, data) {
		return sendRequset({
			url: url,
			data: data,
			method: 'POST'
		});
	},
	put: function(url, data) {
		return sendRequset({
			url: url,
			data: data,
			method: 'put'
		});
	},
	request: sendRequset
};



