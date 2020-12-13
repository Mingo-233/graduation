import { validateMoneyNumber,mobile,regexn,integer, validateURL, validateLowerCase, validateUpperCase, IDCard} from '@/utils/validate'
import _ from 'lodash'
const Validate = {}
Validate.install = Vue => {
  const isvalidateMoney = (rule, value, callback) => {
    if(value && value !== "") {
      if(!validateMoneyNumber(value)) {
        callback(new Error('请输入正确的数字，最多保留两位小数!'))
      } else {
        callback()
      }
    } else{
      callback();
    }
  }

  /*验证身份证*/
  const isvalidateIDCard = (rule, value, callback) => {
    if(value && value !== "") {
      if(!IDCard(value)) {
        callback(new Error('身份证输入不合法！'))
      } else {
        callback()
      }
    } else {
      callback(new Error('请输入身份证！'));
    }
  }
  /*验证手机号*/
  const isvalidateMobile= (rule, value, callback) => {
    if(value && value !== "") {
      if(!mobile(value)) {
        callback(new Error('您输入的手机号不正确!'))
      } else {
        callback()
      }
    }
    else{
      callback(new Error('请输入手机号！'));
    }
  }
  /*含有非法字符(只能输入汉字、英文、数字、下划线、中划线、空格)*/
  const isvalidateRegexn = (rule, value, callback) => {
    if(value && value !== "") {
      if(!regexn(value)) {
        callback(new Error('含有非法字符(只能输入汉字、英文、数字、下划线、中划线、空格)!'))
      } else {
        callback()
      }
    }
    else{
      callback();
    }
  }
  // 请输入有效的网址
  const isvalidateUrl = (rule, value, callback) => {
    if(value && value !== "") {
      if(!validateURL(value)) {
        callback(new Error('请输入有效的网址!'))
      } else {
        callback()
      }
    }
    else{
      callback();
    }
  }
  /*请输入正整数*/
  const isvalidateInteger= (rule, value, callback) => {
    if(value && value !== "") {
      if(!integer(value)) {
        callback(new Error('请输入正整数!'))
      } else {
        callback()
      }
    }
    else{
      callback();
    }
  }
  //只能输入小写字母
  const isvalidateLowerCase = (rule, value, callback) => {
    if(value && value !== "") {
      if(!validateLowerCase(value)) {
        callback(new Error('只能输入小写字母!'))
      } else {
        callback()
      }
    }
    else{
      callback();
    }
  }
  //只能输入大写字母
  const isvalidateUpperCase = (rule, value, callback) => {
    if(value && value !== "") {
      if(!validateUpperCase(value)) {
        callback(new Error('只能输入大写字母!'))
      } else {
        callback()
      }
    }
    else{
      callback();
    }
  }
  /**
   * 参数 item
   * required true  必填项
   * maxLength  字符串的最大长度
   * min 和 max 必须同时给 min < max  type=number
   * type 手机号 mobile
   *      邮箱   email
   *      网址   url
   *      小写字符
   * */
  Vue.prototype.filterRules = function (val){
    let rules = [];
    const item = typeof val === 'string' ? {text: val} : val
    const required =  item.required === undefined ? true : item.required
    const trigger = item.trigger || 'blur'
    const text = item.text || "该输入项为必填项!"
    const rulesObj = {
      message: text,
      trigger: trigger,
      required: required
    }
    if(item.validator) {
      rules.push({required: rulesObj.required, validator: item.validator, trigger: rulesObj.trigger});
      return rules
    } else {
      if(item.type){
        rulesObj.trigger = ['blur']
        let validatorType = []
        switch(item.type) {
          case 'email': {
            validatorType.push({ type: 'email', message: '请输入正确的邮箱地址', trigger: trigger,required: rulesObj.required });
            break;
          }
          case 'mobile': {
            validatorType.push( { validator: isvalidateMobile, trigger: rulesObj.trigger,required: rulesObj.required });
            break;
          }
          case 'regexn': {
            validatorType.push( { validator: isvalidateRegexn, trigger: rulesObj.trigger,required: rulesObj.required });
            break;
          }
          case 'integer': {
            validatorType.push( { validator: isvalidateInteger, trigger: rulesObj.trigger,required: rulesObj.required });
            break;
          }
          case 'url': {
            validatorType.push( { validator: isvalidateUrl, trigger: rulesObj.trigger,required: rulesObj.required });
            break;
          }
          case 'lowerCase': {
            validatorType.push( { validator: isvalidateLowerCase, trigger: rulesObj.trigger,required: rulesObj.required });
            break;
          }
          case 'upperCase': {
            validatorType.push( { validator: isvalidateUpperCase, trigger: rulesObj.trigger,required: rulesObj.required });
            break;
          }
          case 'IDCard': {
            validatorType.push( { validator: isvalidateIDCard, trigger: rulesObj.trigger,required: rulesObj.required });
            break;
          }
        }
        return validatorType
      } else {
        if(item.maxLength){
          rulesObj.min = 1
          rulesObj.max = item.maxLength
          rulesObj.message = `最多输入${item.maxLength}个字符!`
          rulesObj.trigger = 'blur'
        }
        if(item.min&&item.max){
          rulesObj.min = item.min
          rulesObj.max = item.max
          rulesObj.message = `字符长度在${item.min}至${item.max}之间!`
          rulesObj.trigger = 'blur'
        }
      }
      let list = {}
      _.forIn(rulesObj, (val, key) => {
        _.assign(list, {[key]: val})
      })
      rules.push(list)
      return rules;
    }
  };
}
export default Validate
