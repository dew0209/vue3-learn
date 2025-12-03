<template>
  <h1 class="title">
    Vue3 组件通信
  </h1>
  <hr>
		<div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
      <router-link active-class="active" class="list-group-item" to="/props">1. props</router-link>
      <router-link active-class="active" class="list-group-item" to="/customEvent">2. 自定义事件</router-link>
      <router-link active-class="active" class="list-group-item" to="/mitt">3. mitt</router-link>
      <router-link active-class="active" class="list-group-item" to="/VModel">4. v-model</router-link>
      <router-link active-class="active" class="list-group-item" to="/Attrs">5. $attrs</router-link>
      <router-link active-class="active" class="list-group-item" to="/RefsParents">6. $refs和$parents</router-link>
      <router-link active-class="active" class="list-group-item" to="/ProvideInhect">7. provide和inject</router-link>
      <router-link active-class="active" class="list-group-item" to="/xxx">8. pinia：参考之前的pinia</router-link>
      <router-link active-class="active" class="list-group-item" to="/Slot">9. slot插槽</router-link>

  </div>

  <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
			<div class="panel-body">
				<!-- 占位一个展示区 --> 
				<router-view></router-view>
			</div>
	</div>

</template>

<script lang="ts" setup name="App">
    

</script>

<style scoped>
    .wraper .title {
      padding: 20px;
      text-align: center;
      min-width: 610px;
    }
    .wraper .small{
      font-size: 15px;
    }
    .wraper .list-group-item {
      min-width: 230px;
    }
</style>
