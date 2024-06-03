import req from "../../common/req.js"

export const payadd=(token,id,officialReceiptsPrice,orderPrice,goodsPayablePrice,goodsNum,shoppingAddressId,receiverTel,receiverName,companyId,seckillOrder,remark,seckillGoodsId,goodsReceiptsPrice,usableGoods,usableType,willBuyGoods,willBuyType,couponId,couponPrice)=>req.post(
	'/order/addOrder', {
		token,id,officialReceiptsPrice,orderPrice,goodsPayablePrice,goodsNum,shoppingAddressId,receiverTel,receiverName,companyId,seckillOrder,remark,seckillGoodsId,goodsReceiptsPrice,usableGoods,usableType,willBuyGoods,willBuyType,couponId,couponPrice
	}
)

export const pay = (token,password,orderCode) =>req.post(
	'/order/pay', {
		token,password,orderCode
	}
)

export const advancePay=(token,orderNum)=>req.post(
	'/wx/pay', {
		token,orderNum
	}
)