export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function queryHref(key) {
  if (!location.href.split('?')[1]) return ''

  const params = location.href
    .split('?')[1]
    .split('#')[0]
    .split('&')
  const res = params.find(v => v.split('=')[0] === key)

  return res ? res.split('=')[1] : ''
}

var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'
function padding(s, len) {
  var len = len - (s + '').length
  for (var i = 0; i < len; i++) {
    s = '0' + s
  }
  return s
}

export const formatDate = {
  format: function(date, pattern) {
    pattern = pattern || DEFAULT_PATTERN
    return pattern.replace(SIGN_REGEXP, function($0) {
      switch ($0.charAt(0)) {
        case 'y':
          return padding(date.getFullYear(), $0.length)
        case 'M':
          return padding(date.getMonth() + 1, $0.length)
        case 'd':
          return padding(date.getDate(), $0.length)
        case 'w':
          return date.getDay() + 1
        case 'h':
          return padding(date.getHours(), $0.length)
        case 'm':
          return padding(date.getMinutes(), $0.length)
        case 's':
          return padding(date.getSeconds(), $0.length)
      }
    })
  },
  parse: function(dateString, pattern) {
    var matchs1 = pattern.match(SIGN_REGEXP)
    var matchs2 = dateString.match(/(\d)+/g)
    if (matchs1.length == matchs2.length) {
      var _date = new Date(1970, 0, 1)
      for (var i = 0; i < matchs1.length; i++) {
        var _int = parseInt(matchs2[i])
        var sign = matchs1[i]
        switch (sign.charAt(0)) {
          case 'y':
            _date.setFullYear(_int)
            break
          case 'M':
            _date.setMonth(_int - 1)
            break
          case 'd':
            _date.setDate(_int)
            break
          case 'h':
            _date.setHours(_int)
            break
          case 'm':
            _date.setMinutes(_int)
            break
          case 's':
            _date.setSeconds(_int)
            break
        }
      }
      return _date
    }
    return null
  }
}
export function fix8(num) {
  return num.toFixed(8);
}
export function money(val) {
  val = ('' + val).replace(/\$|\,/g,'');
  if(isNaN(val)) {
    val = "0";
  }
  let sign = (val == (val = Math.abs(val)));
  val = Math.floor(val*100+0.50000000001);
  let cents = val%100;
  val = Math.floor(val/100).toString();
  if(cents<10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
    val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
  }

  return (((sign)?'':'-') + val + '.' + cents);
}
