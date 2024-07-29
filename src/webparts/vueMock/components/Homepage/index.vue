<template>
  <div>
<!--    <h1>{{ greeting }}</h1>-->
<!--    <App/>-->
    <a-layout>
      <a-layout-header class="header">
        <div class="header-content">
        <div class="logo">
          <img src="../../assets/logo.png" alt="UD Trucks Logo" class="logo-image"/>
        </div>
        <a-input-search
            placeholder="Vin,ChassisID,Customer"
            style="width: 300px; margin: 0 20px;"
        />
          <filter-outlined style="font-size: 24px; margin-right: 20px; color: white " />
<!--          <FilterFilled />-->
          <reload-outlined style="font-size: 24px; color: white" />
        </div>
      </a-layout-header>
    </a-layout>
    <a-layout-content>
    <img src="../../assets/truck-image.png" alt="Truck Image" class="card-image"/>
    <div v-for="(homePage, index) in homePages" :key="index">
      <a-divider></a-divider>
      <HomePage/>

    </div>
    </a-layout-content>
<!--    <Button/>-->
  </div>
</template>

<script>
import HomePage from "./homepage.vue";
import { Button ,Divider,Card,Layout , Input, } from 'ant-design-vue'
import { FilterOutlined, ReloadOutlined ,DesktopOutlined } from '@ant-design/icons-vue';
// import antdIcon from "@ant-design/icons-vue/lib/components/AntdIcon";
export default {
 components: {
   HomePage,
   Button,
   'a-divider': Divider,
   'a-card':Card,
   'a-layout-header': Layout.Header,
   'a-layout-content': Layout.Content,
   'a-input-search': Input.Search,
   'filter-outlined': FilterOutlined,
   'reload-outlined': ReloadOutlined,
  },
  // data() {
  //   return {
  //     greeting: 'Hello, Vue 3 in SPFx!'
  //   };
  // }
  data() {
    return {
      homePages: Array(3).fill(null) // 这里可以根据需要改变生成HomePage的次数
    };
  }

};

</script>

<style scoped>
h1 {
  color: blue;
}
.card-image {
  width: 100%;
  height: auto;
}
.header {
  background: #000;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 40px;
}
</style>
