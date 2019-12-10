<template>
    <div class="list-wrapper">
        <div class="yy-wrapper"  v-for="(item,index) in listData" :key="index">
            <h4>{{item.listTitle}}</h4>
            <single-list :bookData="item.data"/>
        </div>
    </div>
</template>
<script>
import singleList from './singleList'
export default {
    name:'bookList',
    props:['listData'],
    components:{
        singleList
    }
}
</script>
<style lang="scss" scoped>
.list-wrapper{
    padding: 0 15px;
    h4{
        padding-left: 15px;
        border-left: 2px solid #ed424b;
    }
}
</style>