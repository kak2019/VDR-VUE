<template>
  <div class="page">
    <header class="header">
      <LeftCircleOutlined />
      <span>Vehicle pictures</span>
      <SaveOutlined />
    </header>
    <main class="main">
      <step-one v-if="step === 1"></step-one>
      <step-two v-if="step === 2"></step-two>
      <step-three v-if="step === 3"></step-three>
    </main>
    <footer class="footer">
        <Button class="button" type="primary" @click="next">Next</Button>      
    </footer>
  </div>
</template>

<script>
import stepOne from './one.vue'
import stepTwo from './two.vue'
import stepThree from './three.vue'
import { LeftCircleOutlined, SaveOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
export default {
  components: {
    stepOne,
    stepTwo,
    stepThree,
    LeftCircleOutlined,
    SaveOutlined,
    Button
  },
  data() {
    return {
      step: 1,
    }
  },
  methods: {
    next() {
      if(this.step < 3) {
        this.step += 1
      }
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 30px;
  flex-shrink: 0;
  flex-grow: 0;
  background: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
}
.main {
  flex: 1
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.button {
  width: 50%;
  background-color: rgb(92, 92, 92);
  color: white;
}
.button:hover {
  background-color:rgb(58, 57, 57);
}
</style>