<template>
    <van-list class="content">
        <van-card @click="toDetail(item.id)" v-for="(item,index) in bookData" :key="index"
            :title="item.bookTitle"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
            <div slot="desc" class="yy-desc">
                {{item.introduce}}
            </div>
            <template slot="price" >
                <svg aria-hidden="true" class="icon">
                    <use xlink:href="#icon-yonghu"/>
                </svg>
                <span class="yy-author">毛呢</span>
            </template>
            <div slot="num">
                <van-tag size="medium" plain>都市</van-tag>
                <van-tag size="medium" plain type="danger">完本</van-tag>
                <van-tag size="medium" plain type="primary">233.3万字</van-tag>
            </div>

        </van-card>
    </van-list>
</template>
<script>
export default {
    name:'singleList',
    props:['bookData'],
    methods:{
        toDetail(index){
            this.$router.push({
                name:'Detail',
                params:{
                    id:index
                }
            })
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
                padding: 0 2px;
                margin-right: 2px;
            }
        }
    }
}
</style>