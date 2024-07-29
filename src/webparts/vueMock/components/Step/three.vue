<template>
  <Form class="vehicle-details">
    <FormItem label="Vehicle Delievry date" name="date">
      <DatePicker v-model:value="form.date"></DatePicker>
    </FormItem>
    <h2 class="section">Vehicle reconfirmed</h2>
    <FormItem name="checkbox">
      <CheckboxGroup v-model:value="form.checkbox"  style="width: 100%;">
        <Row>
          <Col :span="8">
            <Checkbox value="Vehicle" style="line-height: 32px">Vehicle</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="Framework" style="line-height: 32px">Framework</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="Equipment" style="line-height: 32px">Equipment</Checkbox>
          </Col>
        </Row>
      </CheckboxGroup>
    </FormItem>
    <h2 class="section">Attachment confirmed</h2>
    <FormItem name="checkbox2">
      <CheckboxGroup v-model:value="form.checkbox2"  style="width: 100%;">
        <Row>
          <Col :span="8">
            <Checkbox value="Transaction certificate" style="line-height: 32px">Transaction certificate</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="Automobile inspection certificate" style="line-height: 32px">Automobile inspection certificate</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="Maintenance Note" style="line-height: 32px">Maintenance Note</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="Quick guide" style="line-height: 32px">Quick guide</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="Automobile liability" style="line-height: 32px">Automobile liability</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="Warranty" style="line-height: 32px">Warranty</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="Recycling ticket" style="line-height: 32px">Recycling ticket</Checkbox>
          </Col>
          <Col :span="8">
            <Checkbox value="UD trucks service network guide" style="line-height: 32px">UD trucks service network guide</Checkbox>
          </Col>
        </Row>
      </CheckboxGroup>
    </FormItem>
    <h2 class="section">Special note</h2>
      <div style="color: #ccc">You can input some special things here</div>
      <FormItem name="remark">
        <Textarea :rows="3" v-model:value="form.remark" />
      </FormItem>
    <h2 class="section">Photo of vehicle with customer</h2>
    <Upload
      v-model:file-list="fileList"
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <loading-outlined v-if="loading"></loading-outlined>
        <plus-outlined v-else></plus-outlined>
        <div class="ant-upload-text">Upload</div>
      </div>
    </Upload>
  </Form>
</template>

<script>
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { Form, Input, FormItem, Radio, RadioGroup, DatePicker, CheckboxGroup, Checkbox, Row, Col, Textarea, Upload, Image, } from 'ant-design-vue'
export default {
  components: {
    Form,
    FormItem,
    Input,
    RadioGroup,
    Radio,
    DatePicker,
    CheckboxGroup,
    Checkbox,
    Row,
    Col,
    Textarea,
    Upload,
    Image,
    LoadingOutlined,
    PlusOutlined
  },
  data() {
    return {
      form: {
        is: false,
      },
      loading: false,
      imageUrl: "",
      fileList: []
    };
  },
  methods: {
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
  background-color: white;
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

.section {
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  background-color: #ccc;
}
</style>
