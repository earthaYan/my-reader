<template>
    <van-list class="content" v-model="loading" :finished="finished" finished-text="没有更多书籍了">
        <van-card @click="toDetail(item.bookId)" v-for="(item,index) in books" :key="index"
            :title="item.bookName"
            :thumb="item.defaultImage">
            <div slot="desc" class="yy-desc">
                {{item.brefIntroduceWithCulture}}
            </div>
            <template slot="price" >
                <svg aria-hidden="true" class="icon">
                    <use xlink:href="#icon-yonghu"/>
                </svg>
                <span class="yy-author">{{item.author}}</span>
            </template>
            <div slot="num">
                <van-tag size="medium" plain :type="tag.tagId==1?'default':tag.tagId==2?'danger':'primary'"
                v-for="tag in item.labels" :key="tag.tagId">
                    {{tag.tagId!==3?tag.tagNameWithCulture:(Math.round(tag.tagNameWithCulture/10000)+'万字')}}
                </van-tag>
            </div>
        </van-card>
    </van-list>
</template>
<script>
import { Dialog } from 'vant';
export default {
    name:'singleList',
    data(){
        return {
            loading:true,
            finished:false,
            books:[],
            booksCount:0
        }
    },
    filter:{
    },
    created(){
        this.getBooks()
    },
    methods:{
        toDetail(index){
            const token=this.pub.getCookie('token')
            if(token){
                this.$router.push({
                    name:'Detail',
                    params:{
                        id:index
                    }
                })
            }else{
                Dialog.confirm({
                    message:'您尚未登录，请先去登录'
                }).then(()=>{
                    this.$router.push('Login')
                }).catch(()=>{})
            }
        },
        getBooks(){
            this.axios.post(this.pub.getApi().SearchNovel,{
                typeIds:[this.$route.query.type],
                pageIndex:1,
                pageCount:10
            }).then(res=>{
                if(res.data.code==0&&res.data.result){
                    this.booksCount=res.data.result.count
                    this.books=res.data.result.data
                    this.loading=false
                    this.finished=true
                }
            }).catch(e=>{console.log(e)})
            
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    .yy-desc{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp:2;
        // 必须加上，否则不生效
        -webkit-box-orient:vertical;
    }
    .icon{
        vertical-align: middle;
    }
    .van-card__title {
        font-size: 18px;
        line-height: 20px;
    }
    .van-card__bottom{
        margin-top: 30px;
        .van-card__price{
            color: #969ba3;
            .yy-author{
                padding-left: 10px;
            }
        }
        .van-card__num{
            .van-tag{
                padding: 2px 4px;
                margin-right: 2px;
            }
        }
    }
}
</style>