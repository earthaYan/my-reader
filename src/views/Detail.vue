<template>
    <div class="detail">
        <van-nav-bar :left-text="detailData.bookName" left-arrow @click-left="$router.go(-1)"  @click-right="$router.push('/')">
            <svg class="icon" slot="right">
                <use xlink:href="#icon-tubiao15"/>
            </svg>
        </van-nav-bar>
        <div class="book-info">
            <div class="bref">
                <div class="left-detail-img">
                    <img :src="detailData.imagePath" alt="">
                </div>
                <div class="right">
                    <div class="title">{{detailData.bookName}}</div>
                    <div class="author">作者:<span>{{detailData.author}}</span></div>
                    <div class="category">分类:<span>{{detailData.category}}</span></div>
                    <div class="words">字数:<span>{{Math.round(detailData.wordCount/10000)}}万字</span></div>
                    <div class="rate">
                        <van-rate v-model="detailData.rate"  readonly allow-half/>
                        <span>{{detailData.rate|parseNum}}</span>
                    </div>
                </div>              
            </div>
            <div class="btns">
                <van-button type="danger" @click="openReader()">开始阅读</van-button>
                <van-button type="default">查看目录</van-button>
            </div>
            <div class="intro">
                {{detailData.briefIntroduction}}
            </div>
            <div class="tags">
                <h3>类别标签</h3>
                <div>
                    <van-tag v-for="tag in detailData.labels" :key="tag.tagId" size="large" :type="tag.tagId==1?'danger':'primary'" plain
                    >{{tag.tagNameWithCulture}}</van-tag>
                </div>
            </div>
            <div class="like">
                <h3>喜欢本书的人也喜欢</h3>
                <div class="book-list">
                    <div class="books" v-for="(recommend,index) in recommendData" :key="index">
                        <div class="book-img" @click="toDetail(recommend.bookId)">
                            <img :src="recommend.defaultImage" alt="">
                        </div>
                        <div class="book-name">{{recommend.bookName}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            detailData:{},
            recommendData:[]
        }
    },
    created(){
        this.getDetailInfo()
        this.getRecommend()
    },
    filters:{
        parseNum(val){
            return new Number(val).toFixed(1)
        }
    },
    methods:{
        openReader(){
            this.$router.push('/reader/1')
        },
        getDetailInfo(){
            this.axios.get(this.pub.getApi().GetNovelById+`?id=${this.$route.params.id}`).then(res=>{
                if(res.data.code==0&&res.data.result){
                    this.detailData=res.data.result
                }
            }).catch(e=>{console.log(e)})
        },
        getRecommend(){
            this.axios.get(this.pub.getApi().GetNovelRecommendEstateById+`?id=${this.$route.params.id}`).then(res=>{
                if(res.data.code==0&&res.data.result){
                    this.recommendData=res.data.result
                }
            }).catch(e=>{console.log(e)})
        },
        toDetail(index){
            const token=this.pub.getCookie('token')
            if(token){
                this.$router.push({
                    name:'Detail',
                    params:{
                        id:index
                    }
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.detail{
    /deep/.van-nav-bar__left{
        .van-nav-bar__arrow,.van-nav-bar__text{
            color: #ed424b;
            font-size: 16px;
        }
        .van-nav-bar__text{
            font-weight: bold;
        }
        
    }
    .book-info{
        padding: 15px;
        padding-bottom: 0;
        .bref{
            .left-detail-img{
                float: left;
                width: 100px;
                height: 129px;
                margin-right: 30px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: fill;
                }
            }
        }
        .bref::after{
            display: block;
            content: '';
            clear: both;
        }
        .right{
            div{
                margin-bottom: 5px;
            }
        }
        .btns{
            text-align: center;
            padding: 20px 0;
            display: flex;
            button{
                height: 33px;
                line-height: 33px;
                flex: 1;
                margin-right: 15px;
                .van-button__text{
                    font-size: 15px;
                }
            }
        }
        .intro{
            text-indent: 25px;
            font-size: 16px;
            padding: 20px 0;
            border-bottom: 1px solid #ddd;
        }
        .tags{
            border-bottom: 1px solid #ddd;
            padding: 20px 0;
            h3{
                margin-bottom: 10px;
            }
            .van-tag{
                margin-right: 10px;
            }
        }
        .like{
            padding: 20px 0;
            .book-list{
                display: flex;
                justify-content: space-between;
                .books{
                    .book-img{
                        width: 100px;
                        height: 129px;
                        img{
                            height: 100%;
                            width: 100%;
                        }
                    }
                    .book-name{
                        text-align: center;
                        padding-top: 10px;
                    }
                }
            }
        }
    }
}
</style>