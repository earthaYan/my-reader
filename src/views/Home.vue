<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar class="yy-nav">
      <template slot="left">
        <div class="brand"></div>
      </template>
      <template slot="right">
        <svg aria-hidden="true" class="icon" @click="toLogin">
          <use xlink:href="#icon-user"/>
        </svg>
      </template>
    </van-nav-bar>
    <!-- 轮播banner -->
    <van-swipe class="yy-swipe"
      :stop-propagation=false
      :height="170">
      <van-swipe-item v-for="(banner,index) in banners" :key="index">
        <img :src="banner">
      </van-swipe-item>
    </van-swipe>
    <!-- 分类tab -->
    <ul class="yy-tab">
      <li v-for="item in category" :key="item.id">
        <router-link :to="item.url" class="link">
          <svg aria-hidden="true" class="icon">
            <use :xlink:href="item.icon"/>
          </svg>
          <div class="cate-name">{{item.title}}</div>
        </router-link>
      </li>
    </ul>
    <!-- 热门小说 -->
    <novel-swipe :content="hot" title="热门小说"/>
    <novel-swipe :content="hot" title="排行榜"/>
    <novel-swipe :content="hot" title="限时免费"/>
    <!-- 列表 -->
    <bookList :listData="rank"/>
  </div>
</template>

<script>
// @ is an alias to /src
import novelSwipe from '../components/novelSwipe'
import bookList from '../components/bookList'
export default {
  // 首页
  name: 'home',
  components: {
    novelSwipe,
    bookList
  },
  data(){
    return{
      banners:[
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      category:[
        {
          id:'1',
          title:'玄幻',
          icon:'#icon-xuanhuan',
          url:'/category?type=1'
        },
        {
          id:'2',
          title:'都市',
          icon:'#icon-dushi',
          url:'/category?type=2'
        },
        {
          id:'3',
          title:'修真',
          icon:'#icon-xiuzhen',
          url:'/category?type=3'
        },
        {
          id:'4',
          title:'历史',
          icon:'#icon-lishi',
          url:'/category?type=4'
        },
        {
          id:'5',
          title:'游戏',
          icon:'#icon-youxi',
          url:'/category?type=5'
        }
      ],
      hot:[
        {
          src:'https://img.yzcdn.cn/vant/apple-1.jpg',
          title:'择天记1',
          author:'嘉佳1'
        },{
          src:'https://img.yzcdn.cn/vant/apple-2.jpg',
          title:'择天记2',
          author:'嘉佳2'
        },{
          src:'https://img.yzcdn.cn/vant/apple-1.jpg',
          title:'择天记3',
          author:'嘉佳3'
        },{
          src:'https://img.yzcdn.cn/vant/apple-2.jpg',
          title:'择天记4',
          author:'嘉佳4'
        },{
          src:'https://img.yzcdn.cn/vant/apple-1.jpg',
          title:'择天记5',
          author:'嘉佳5'
        },{
          src:'https://img.yzcdn.cn/vant/apple-2.jpg',
          title:'择天记6',
          author:'嘉佳6'
        },{
          src:'https://img.yzcdn.cn/vant/apple-1.jpg',
          title:'择天记',
          author:'嘉佳'
        },
      ],
      rank:[
        {
          listTitle:'新书尝鲜',
          data:[
            {
              id:1,
              bookTitle:'吾家妻宝',
              introduce:'1简洁简洁简洁简洁简洁简洁'
            },
            {
              id:2,
              bookTitle:'吾家妻宝2',
              introduce:'1简洁简洁简洁简洁简洁简洁'
            },
          ]
        },{
          listTitle:'畅销完本',
          data:[
            {
              id:1,
              bookTitle:'吾家妻宝',
              introduce:'1简洁简洁简洁简洁简洁简洁'
            },
            {
              id:2,
              bookTitle:'吾家妻宝2',
              introduce:'1简洁简洁简洁简洁简洁简洁'
            },
          ]
        },{
          listTitle:'猜你喜欢',
          data:[
            {
              id:1,
              bookTitle:'吾家妻宝',
              introduce:'1简洁简洁简洁简洁简洁简洁'
            },
            {
              id:2,
              bookTitle:'吾家妻宝3',
              introduce:'1简洁简洁简洁简洁简洁简洁'
            },            
          ]
        }
      ]
    }
  },
  methods:{
    toLogin(){
      const token=this.pub.getCookie('token')
      if(!token){
        // 跳转到登录页面
        this.$router.push({
          path:'/login/',
        })
      }else{
        this.$notify({message:'已登录',type:'success',duration: 1000})
      }

    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  .yy-nav{
    min-height: 45px;
    line-height: 45px;
    padding: 15px inherit;
    .van-nav-bar__left{
      width: 80%;
      height: 100%;
      .brand{
        height: 100%;
        background: url('http://qidian.gtimg.com/qdm/img/logo-qdm.0.50.svg') no-repeat left;
      }
    }
  }
  .yy-swipe{
    width: 100%;
    img{
      width: 100%;
      max-height: 100%;
    }
  }
  .yy-tab{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    li{
      text-align: center;
      .link{
        color: #333;
      }
      .cate-name{
        margin-top: 10px;
      }
    }
  }

}
</style>