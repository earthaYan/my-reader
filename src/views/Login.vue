<template>
    <div class="login-wrapper">
        <van-nav-bar title="登录" left-text="返回" @click-left="$router.back()"  left-arrow />
        <div class="info-wrapper">
            <div class="logo">
                <img src="./../assets/logo.png" alt="logo">
            </div>
 
            <div class="login-group">
               <div class="error">{{errorLogin}}</div>
               <van-field required label="用户名" type="text" v-model="account" 
               placeholder="请输入用户名" label-width="75" label-align="center"
               @input="errorLogin=''"/>
               <van-field required label="密    码" label-width="75" label-align="center" :type='isShowPwd?"text":"password"' v-model="password"
                placeholder="请输入密码" @input="errorLogin=''">
                   <template  slot="right-icon">
                       <svg class="icon" @click="isShowPwd=!isShowPwd">
                           <use :xlink:href='isShowPwd?"#icon-mimakejian":"#icon-mima-bukejian"'/>
                       </svg>
                   </template>
               </van-field>
            </div>
            <van-button type="primary" class="login-btn"  @click="goLogin">登录</van-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            account:'',
            password:'',
            isShowPwd:false,
            errorLogin:''
        }
    },
    methods:{
        // 表单验证
        checkForm(){
            // 账号去掉前后空格
            this.account=this.account.trim()
            // 验证邮箱
            if(!this.account){
                this.errorLogin="邮箱不能为空"
                return false
            }else if(!(/^[a-zA-Z0-9]+([\.a-zA-Z0-9_-]*)+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.account))){
                this.errorLogin="请输入合法格式的邮箱地址"
                return false
            }
            // 验证密码不能为空
            if(!this.password){
                this.errorLogin="密码不能为空"
                return false
            }
            return true
        },
        goLogin(){
            if(!this.checkForm())   return ;
            this.axios.post(this.pub.getApi().Login,{
                account:this.account,
                password:this.password
            }).then(res=>{
                if(res.data.code==0&&res.data.result){
                    const userInfo=JSON.stringify({
                        userId:res.data.result.userID,
                        nickName: res.data.result.nickName
                    })
                    this.pub.setCookie('user',decodeURI(userInfo),res.data.result.expirationTime)
                    this.pub.setCookie('token',res.data.result.token,res.data.result.expirationTime)
                    let referrer=this.$route.query.referer || this.$route.query.referrer || ""
                    if(!referrer){
                        // 内部路由跳转
                        history.back(-1)
                    }else{
                        if(document.referrer && referrer && document.referrer.indexOf('/login') == -1){
                            history.back(-1)
                        }else{
                            // 正常跳转到来源页面(外部)
                            location.href = referrer 
                        }
                    }
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.login-wrapper{
    height: 100%;
    background: #f2f2f2;
    .info-wrapper{
        font-size: 16px;
        padding: 35px 15px;
        .logo{
            text-align: center;
            img{
                transform: rotate(180deg);
                width: 40%;
            }
        }
        .login-group{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .error{
                color: red;
                text-align: center;
                padding: 10px 0;
            }
            /deep/.van-field{
                &.van-cell--required::before,.van-cell__title{
                    line-height: 34px;
                }
                &.van-cell{
                    font-size: inherit;
                    .van-cell__value{
                        input{
                            padding: 5px;
                        }
                        .van-field__right-icon{
                            padding:0 5px;
                            margin-right: 0;
                        }
                    }
                }

            }
        }
        .login-btn{
            width: 100%;
            margin-top: 20px;
        }
    }
}
</style>