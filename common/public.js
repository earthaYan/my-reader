export default{
    config,
    getApi,
    getCookie,
    setCookie,
    delCookie
}
const config={
    baseUrl: 'http://47.254.90.136:7300/mock/5e0ae65c608a296206c9df81/reader/'
}
function getApi(){
    const baseUrl=config.baseUrl
    return{
       Login:`${baseUrl}Login`,//登录接口
    }
}
// 写入cookie,不提供失效时间时，cookie默认有效期为2个月
function setCookie(key,value,expires){
    const date=expires?new Date(expires*1000):new Date()
    date.setTime(date.getTime()+60*60*1000*24*60)
    document.cookie=`${key}=${value};expires=${date.toGMTString()};path=/;`
}
// 获取cookie
function getCookie(key){
    let arr,
    reg=new RegExp('(^| )'+key+'=([^;]*)(;|$)')
    arr=document.cookie.match(reg)
    if(arr){
        return decodeURI(arr[2])
    }else{
        return null
    }
}
// 删除cookie
function delCookie(key){
    var date=new Date()
    date.setTime(date.getTime()-1)
    var delValue = getCookie(key)
    if(delValue){
        document.cookie = `${key}=${delValue};expires=${date.toGMTString()};path=/`;
    }
}