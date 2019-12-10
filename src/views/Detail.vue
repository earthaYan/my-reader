<template>
    <div class="detail">
        <van-nav-bar left-text="帝霸" left-arrow @click-left="$router.go(-1)"  @click-right="$router.push('/')">
            <svg class="icon" slot="right">
                <use xlink:href="#icon-tubiao15"/>
            </svg>
        </van-nav-bar>
        <div class="book-info">
            <div class="bref">
                <div class="left-detail-img">
                    <img src="../assets/img/cover.jpg" alt="">
                </div>
                <div class="right">
                    <div class="title">帝霸</div>
                    <div class="author">作者:<span>作者名称</span></div>
                    <div class="category">分类:<span>书籍分类</span></div>
                    <div class="words">字数:<span>23.4万字</span></div>
                    <div class="rate">
                        <van-rate v-model="stars"  readonly allow-half/>
                        <span>{{stars}}</span>
                    </div>
                </div>              
            </div>
            <div class="btns">
                <van-button type="danger" @click="openReader()">开始阅读</van-button>
                <van-button type="default">查看目录</van-button>
            </div>
            <div class="intro">
                千万年前，李七夜栽下一株翠竹。八百万年前，李七夜养了一条鲤鱼。五百万年前，李七夜收养一个小女孩。今天，李七夜一觉醒来，翠竹修练成神灵，鲤鱼化作金龙，小女孩成为九界女帝。这是一个养成
            </div>
            <div class="tags">
                <h3>类别标签</h3>
                <div>
                    <van-tag size="large" type="danger" plain>标签1</van-tag>
                    <van-tag size="large" type="primary" plain>标签2</van-tag>
                </div>
            </div>
            <div class="like">
                <h3>喜欢本书的人也喜欢</h3>
                <div class="book-list">
                    <div class="books" v-for="(book,index) in 3" :key="index">
                        <div class="book-img">
                            <img src="../assets/img/cover.jpg" alt="">
                        </div>
                        <div class="book-name">图书名称</div>
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
            stars:2.5
        }
    },
    methods:{
        openReader(){
            this.$router.push('/reader/1')
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
        padding: 0 15px;
        .bref{
            .left-detail-img{
                float: left;
                width: 100px;
                margin-right: 30px;
                img{
                    width: 100%;
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
                        img{
                            max-height: 100%;
                            max-width: 100%;
                        }
                    }
                    .book-name{
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>