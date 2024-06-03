import amap from './amap-wx.js';

export const dateChange = (date) => { //将标准时间格式转为2020.05.09
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	if(month<10) {
		if(day<10) {
			date = year + '.0' + month + '.0' + day
		}else {
			date = year + '.0' + month + '.' + day
		}
	}else {
		if(day<10) {
			date = year + '.' + month + '.0' + day
		}else {
			date = year + '.' + month + '.' + day
		}
	}
	// date = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
	return date;
};

export const dateChange2 = (date) => { //将标准时间格式转为2020-05-09
	var y = date.getFullYear();  
	var m = date.getMonth() + 1;  
	m = m < 10 ? '0' + m : m;  
	var d = date.getDate();  
	d = d < 10 ? ('0' + d) : d;  
	return y + '-' + m + '-' + d;
};

export const getRegeo = () => {
	//地理位置用高德地图
	//高德地图key：fbdc21f76f5f7c6f56ae3f0fc847cd34
	//新高德地图key：252df60a490b0cf0cfd9e01fbbc7e31e
	const amapPlugin = new amap.AMapWX({
		key: '252df60a490b0cf0cfd9e01fbbc7e31e'
	});
	return new Promise((resolve, reject) => {
		amapPlugin.getRegeo({
			success: data => {
				console.log(data)
				const formattedAddress = data[0].regeocodeData.formatted_address;
				const neerby = data[0].regeocodeData.pois;
				const detail = data[0].regeocodeData.addressComponent;
				const latitude = data[0].latitude;
				const longitude = data[0].longitude;
				resolve({
					formattedAddress,
					neerby,
					detail,
					latitude,
					longitude
				});
			},
			fail: (info) => {
				//失败回调
				reject(info);
			}
		});
	});
}
export const showToast = (title, mask = false, icon = 'none') =>
	uni.showToast({
		title,
		mask,
		icon
	});
export const pay = async (token, total, orderNum) => {
	let err = null;
	let res = null;
	res = await weixinPay(token, total + '', orderNum);
	if (res.state === 'fail') {
		throw new Error('fail');
	}
	[err, res] = await uni.requestPayment({
		provider: 'wxpay',
		timeStamp: res.data.timeStamp,
		nonceStr: res.data.nonceStr,
		package: res.data.package,
		signType: 'MD5',
		paySign: res.data.paySign
	});
	if (err) {
		throw new Error('noPay');
	}
	// await orderPay(token, orderNum);
};

export const orderUsedIntegral = (fruitList) => {
	let usedIntegral = 0;
	fruitList.forEach(value => {
		usedIntegral += (value.integral * value.quantity);
	});
	return usedIntegral;
}

export const callbackOne = async (token, orderNum, addFruit) => {
	uni.showLoading({
		title: '请稍等',
		mask: true
	});
	const res = await orderAgain(token, orderNum).catch(err => {
		console.log(err);
		uni.hideLoading();
		uni.showToast({
			title: '未能再来一单，请重试',
			icon: 'none'
		});
	});
	uni.hideLoading();
	const fruitList = res.data.map((value) => ({
		...formatFruit(value),
		quantity: value.goods_number
	}));
	fruitList.forEach(value => {
		addFruit(value);
	});
	uni.showToast({
		title: '已将可购买的水果加入购物车',
		icon: 'none'
	});
};

export const getreverseGeocode = (latitude, longitude) => {  //经纬度逆地理编码
 //地理位置用高德地图
 //高德地图key：fbdc21f76f5f7c6f56ae3f0fc847cd34
 //新高德地图key：252df60a490b0cf0cfd9e01fbbc7e31e
 const amapPlugin = new amap.AMapWX({
  key: '252df60a490b0cf0cfd9e01fbbc7e31e'
 });
 return new Promise((resolve, reject) => {
  amapPlugin.getRegeo({
   location: '' + longitude + ',' + latitude + '', //location的格式为'经度,纬度'
   success: data => {
    console.log(data)
    const formattedAddress = data[0].regeocodeData.formatted_address;
    const neerby = data[0].regeocodeData.pois;
    const detail = data[0].regeocodeData.addressComponent;
    const latitude = data[0].latitude;
    const longitude = data[0].longitude;
    resolve({
     formattedAddress,
     neerby,
     detail,
     latitude,
     longitude
    });
   },
   fail: (info) => {
    //失败回调
    reject(info);
   }
  });
 });
 
};
