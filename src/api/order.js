//axios
import fetch from '@/commonJs/http'
//[订单]  我的订单列表
export  function getOrderList(coinType,orderType){
  return fetch({
    url:'/otc/trade/getSubOrder',
    method:'post',
    params:{
      coinType,
      orderType
    }
  })
}
//[订单]  订单详情
export function getOrderDetail(subOrderNo) {
  return fetch({
    url: '/otc/trade/getSubOrderDetailByNo',
    method: 'get',
    params:{
      subOrderNo
    }
  })
}
//[订单]  标记已付款
export function payTagOrder(subOrderNo) {
  return fetch({
    url: '/otc/trade/paidBySubOrderNo',
    method: 'get',
    params:{
      subOrderNo
    }
  })
}
//[订单]  关闭订单
export function closeOrder(subOrderNo) {
  return fetch({
    url: '/otc/trade/closeSubOrderByNo',
    method: 'get',
    params:{
      subOrderNo
    }
  })
}

