<template>
  <a-card>
    <div class="flex-container">
      <div class="left">
        <p><strong>Truck type :</strong> New Truck</p>
      </div>
      <div class="right">
        <p><strong>1st level approval on vehicle delivery</strong></p>
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
</template>

<script>
export default {
  name: 'TruckInfoCard',
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
}
p {
  margin-bottom: 8px;
}
</style>
