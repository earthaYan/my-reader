<template>
    <div class="wrapper">
      <h4>{{title}}</h4>
      <van-tabs class="yy-swipe-hot">
         <van-tab v-for="(item,index) in content" :key="index+Math.random()">
           <div slot="title" class="yy-slot">
             <img height="100" :src="item.src" >
             <div class="title">{{item.title}}</div>
             <div class="author">{{item.author}}</div>
           </div>
         </van-tab>
      </van-tabs>
    </div>
</template>
<script>
export default {
    name:'novelSwipe',
    props:['title','content']
}
</script>
<style lang="scss" scoped>
  .wrapper{
      padding: 0 15px;
      h4{
          border-left: 2px solid #ed424b;
          padding-left: 15px;
      }
    .yy-swipe-hot{
      height: 100%;
      /deep/.van-tabs__wrap{
        height: 100%;
        .van-tab{
            line-height: inherit;
        }
        img{
            width: 100%;
            border: 1px solid red;
        }
      }
    }
  }
</style>