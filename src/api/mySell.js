//axios
import fetch from '@/commonJs/http'
//[我的挂单]  获取我的挂单
export function getMySell(coinType) {
  return fetch({
    url: '/otc/trade/getRestingOrder',
    method: 'get',
    params:{
      coinType,
      hideLoading:true,
    }
  })
}
//[我的挂单]  下架我的挂单
export function offMySell(restNo) {
  return fetch({
    url: '/otc/trade/offRestOrder',
    method: 'get',
    params:{
      restNo
    }
  })
}
//[挂单详情]  获取挂单详情
export function getMySellDetail(restOrderNo) {
  return fetch({
    url: '/otc/trade/getSubOrderByRestNo',
    method: 'get',
    params:{
      restOrderNo
    }
  })
}
//[挂单详情]  确认收款
export function confirmPay(subOrderNo) {
  return fetch({
    url: '/otc/trade/confimSubOrderNo',
    method: 'get',
    params:{
      subOrderNo
    }
  })
}
//[挂单详情]  关闭订单
export function closeOrder(subOrderNo) {
  return fetch({
    url: '/otc/trade/closeSubOrderByNo',
    method: 'get',
    params:{
      subOrderNo
    }
  })
}
