import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { createApp } from 'vue';
import AppComponent from './app.vue'

import 'ant-design-vue/dist/reset.css';
// router.ts
import router from '../../router';



export let mytoken = ""
export interface IVueMockWebPartProps {
  description: string;
  webpartcolor?: string;
}

export default class VueMockWebPart extends BaseClientSideWebPart<IVueMockWebPartProps> {

  protected token: string = null;
  public render(): void {
    this.domElement.innerHTML = `<div  id="app-${this.context.instanceId}"></div>`
    const app = createApp(AppComponent);
    app.use(router); 
    // createApp(AppComponent).mount(`#app-${this.context.instanceId}`);
    app.mount(`#app-${this.context.instanceId}`);
  }
  protected onInit(): Promise<void> {
    this.context.aadTokenProviderFactory.getTokenProvider().then((provider): void => {
      provider.getToken('b407b2b3-b500-4ea9-92f1-ca4c28558347').then((token): void => {
        this.token = token;
        mytoken = token
        console.log("tokenAAD:" + token);
      }, err => console.log("errorTokenAAD:" + err));
    }, err => console.log("errorGetProvider:" + err));
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
