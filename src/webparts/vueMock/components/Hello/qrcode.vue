<template>
    <a-card title="支付宝小荷包二维码">
      <div v-if="qrCodeDataUrl">
        <img :src="qrCodeDataUrl" alt="支付宝小荷包二维码" />
      </div>
      <Button type="submit" @click="generateQrCode">生成二维码</Button>
    </a-card>
  </template>
  
  <script>
  import QRCode from 'qrcode'
  import { defineComponent } from 'vue'
  import { Button } from 'ant-design-vue'
  export default defineComponent({
    data() {
      return {
        qrCodeDataUrl: ''
      }
    },
    methods: {
      generateQrCode() {
        const alipayUrl = 'https://qr.alipay.com/1hr18979rto1irmdlx2yw14'; // 替换为你的支付宝小荷包链接
        QRCode.toDataURL(alipayUrl, { errorCorrectionLevel: 'H' })
          .then(url => {
            this.qrCodeDataUrl = url;
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  });
  </script>
  
  <style scoped>
  .card {
    text-align: center;
  }
  
  button {
    margin-top: 16px;
  }
  </style>
  