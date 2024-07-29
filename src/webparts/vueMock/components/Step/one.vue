<template>
  <div class="vehicle-details">
    <h1 style="text-align: center;">New Truck</h1>
    <div class="details">
      <div class="row">
        <div class="detail">
          <label>Model:</label>
          <span>{{ truck.model }}</span>
        </div>
        <div class="detail">
          <label>Chassis ID:</label>
          <span>{{ truck.chassisId }}</span>
        </div>
      </div>
      <div class="row">
        <div class="detail">
          <label>Reg. number:</label>
          <span>{{ truck.regNumber }}</span>
        </div>
        <div class="detail">
          <label>Reg. Date:</label>
          <span>{{ truck.regDate }}</span>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="row">
        <div class="detail">
          <label>Customer Name:</label>
          <span>{{ truck.chassisId }}</span>
        </div>
      </div>
      <div class="row">
        <div class="detail">
          <label>Customer Address:</label>
          <span>{{ truck.regDate }}</span>
        </div>
      </div>
    </div>
    <!-- 图片上传部分 -->
    <div class="vehicle-pictures">
      <h2>Vehicle pictures</h2>
      <div class="upload-section">
        <div class="upload-slot" v-for="(side, index) in sides" :key="side.id">
          <div class="plus-icon" @click="uploadFile(index, side.id)">+</div>
          <input type="file" :ref="`fileInput${index}`" @change="handleFileChange" style="display: none;" />
          <label>{{ side.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      sides: [
        { id: 'head', label: 'Head' },
        { id: 'rightSide', label: 'Right side' },
        { id: 'leftSide', label: 'Left side' },
        { id: 'rear', label: 'Rear' }
      ],
      truck: {
      model: 'NHGH978978907',
      chassisId: '123456',
      regNumber: '123456',
      regDate: '123456'
    }
    };
  },
  methods: {
    uploadFile(index, refId) {
      const ref = `fileInput${index}`;
      if (this.$refs[ref] && this.$refs[ref][0]) {
        this.$refs[ref][0].click();
      } else {
        console.error('File input not found for', refId);
      }
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      console.log('File uploaded:', file.name); // 可以在这里添加更多处理逻辑
    }
  }
}
</script>

<style scoped>
.vehicle-details {
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}

.upload-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.upload-slot {
  position: relative;
  width: 48%; /* 接近一半宽度，允许两个上传框在一行 */
  padding: 20px;
  margin-bottom: 10px;
  border: 1px dashed #ccc;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.plus-icon {
  font-size: 24px;
  cursor: pointer;
}

.upload-slot label {
  font-weight: bold;
  margin-top: 10px; /* 调整标签到上传按钮的下方 */
}


.details {
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.details .row {
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 10px;
}

.vehicle-pictures h2 {
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  background-color: #ccc;
}

.detail {
  flex: 1;
  margin-right: 20px; /* 控制两个信息项之间的间距 */
}

.detail:last-child {
  margin-right: 0; /* 最后一个信息项不需要右边距 */
}

.detail label {
  font-weight: bold;
}
</style>
