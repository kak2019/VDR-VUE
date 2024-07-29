<template>
  <div>
    <a-card v-if="!showVehiclePictures">
      <div class="flex-container">
        <div class="left">
          <p><strong>Truck type :</strong> New Truck</p>
        </div>
        <div class="right">
          <p><strong>1st level approval on vehicle delivery</strong></p>
          <button class="transparent-button" @click="toggleVehiclePictures">></button>
        </div>
      </div>
      <a-row>
        <a-col :span="24">
          <p><strong>VIN number :</strong> JOIN7987897</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <p><strong>Chassis ID :</strong> JPCT-97867</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <p><strong>CPDD :</strong> 2024/06/29</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <p><strong>Customer :</strong> ABC Company</p>
        </a-col>
      </a-row>
    </a-card>
    
    <!-- 条件渲染子组件 -->
    <VehiclePictures v-if="showVehiclePictures" @goBack="toggleVehiclePictures" />
  </div>
</template>

<script>
import VehiclePictures from './detailandpic.vue';

export default {
  name: 'TruckInfoCard',
  components: {
    VehiclePictures
  },
  data() {
    return {
      showVehiclePictures: false
    };
  },
  methods: {
    toggleVehiclePictures() {
      this.$router.push('/step')
    }
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  flex: 1;
  text-align: left;
}
.right {
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.transparent-button {
  background-color: transparent;
  border: none;
  color: inherit; /* 保持文字颜色与父元素一致 */
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
}
p {
  margin-bottom: 8px;
}
</style>
