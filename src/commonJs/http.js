//axios
import axios from 'axios'
import Vue from 'vue'
import { cookie } from 'vux'
//let token =

//封装拦截器
axios.interceptors.request.use(config => {//请求
  if (config.params && config.params.hideLoading) {
    Vue.$vux.loading.hide();
  }else{
    Vue.$vux.loading.show({
      text: 'Loading'
    })
  }

  if(cookie.get('key')){
    config.headers.token = cookie.get('key');
  };

  return config
}, error => {
  Vue.$vux.loading.show({
    text: 'Loading'
  })
  return Promise.reject(error)
})

axios.interceptors.response.use(data => {//响应
  Vue.$vux.loading.hide();
  //console.log(data.data)
  //debugger
  if(data.data.respCode === '00'){//状态码判断
    //document.location.href = 'errorMsg:' + data.data.respMsg;
    //Vue.$vux.toast.text(data.data.respMsg, 'bottom')
    return data.data
  }
  if(data.data.respCode === '000000'){

    return data.data
  } else{
    Vue.$vux.toast.text(data.data.respMsg, 'middle')

  };
   return data.data
}, error => {
  Vue.$vux.loading.hide();
  Vue.$vux.toast.text('网络开小差了~', 'middle')
  return Promise.reject(error)
})

export default axios;
