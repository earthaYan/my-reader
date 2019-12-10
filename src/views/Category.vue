<template>
    <div class="category-wrapper">
        <van-nav-bar  :left-text="categoryName" left-arrow @click-left="$router.back(-1)"/>
        <singleList :bookData="books"/>
    </div>
</template>
<script>
import singleList from '../components/singleList'
export default {
    data(){
        return{
            books:[
                {
                    id:1,
                    bookTitle:'吾家妻宝3',
                    introduce:'2简洁简洁简洁简洁简洁简洁'
                },
                {
                    id:2,
                    bookTitle:'吾家妻宝2',
                    introduce:'start描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息end'
                },
            ]
        }
    },
    computed:{
        categoryName:function () {
            var type=this.$route.query.type
            var name=''
            if(type==1){
                name= '玄幻'
            }else if(type==2){
                name= '都市'
            }else if(type==3){
                name=  '修真'
            }else if(type==4){
                name=  '历史'
            }else if(type==5){
                name= '游戏'
            }
            return name
        }
    },
    components:{
        singleList
    }
}
</script>
<style lang="scss" scoped>

.category-wrapper{
    /deep/.van-nav-bar__left{
        .van-nav-bar__arrow,.van-nav-bar__text{
            color: #ed424b;
            font-size: 16px;
        }
        .van-nav-bar__text{
            font-weight: bold;
        }
        
    }
}

</style>