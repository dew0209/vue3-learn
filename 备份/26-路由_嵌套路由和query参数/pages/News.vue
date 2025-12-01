<template>
    <div class="new">
        <ul>
            <li v-for="(newItem,index) in newsList" :key="newItem.id">

                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${newItem.id}&title=${newItem.title}&content=${newItem.content}`">{{ newItem.title }}</RouterLink> -->

                <!-- 第二种写法 -->
                <RouterLink :to="{
                    path:'/news/detail',
                    query:newItem
                }">{{ newItem.title }}</RouterLink>
            </li>
        </ul>
    </div>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
    import {RouterLink,RouterView} from 'vue-router'
    let newsList = [
        {
            id:'xxxxxxx0001',
            title:'测试1',
            content:'测试1内容'
        },
        {
            id:'xxxxxxx0002',
            title:'测试2',
            content:'测试2内容'
        },
        {
            id:'xxxxxxx0003',
            title:'测试3',
            content:'测试3内容'
        }
    ]
</script>

<style scoped>
    /* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li::marker {
  color: #64967E;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>