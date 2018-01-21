import fetch from '@/commonJs/http'
//[钱包] 充值明细查询
export function inCoin(coinType){
  return fetch({
    url:'/otc/acctOrder/queryRechargeOrder',
    method:'post',
    data:{
      beginDate:'',
      coinType,
      endDate:'',
      reqNo:'',
      transOrderNo:'',
      transStat:""
    }
  })
}
//[钱包] 提现明细查询
export function inCash(coinType){
  return fetch({
    url:'/otc/acctOrder/queryWithdrawOrder',
    method:'post',
    data:{
      beginDate:'',
      coinType,
      endDate:'',
      reqNo:'',
      transOrderNo:'',
      transStat:""
    }
  })
}
