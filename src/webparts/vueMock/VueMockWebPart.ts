import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { createApp } from 'vue';
import AppComponent from './app.vue'
import 'ant-design-vue/dist/reset.css';
export interface IVueMockWebPartProps {
  description: string;
  webpartcolor?: string;
}

export default class VueMockWebPart extends BaseClientSideWebPart<IVueMockWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<div  id="app-${this.context.instanceId}"></div>`

    createApp(AppComponent).mount(`#app-${this.context.instanceId}`);
  }
  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
