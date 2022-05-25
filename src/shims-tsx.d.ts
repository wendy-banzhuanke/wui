/*
 * @Author: zhangjian
 * @Date: 2022-05-23 15:57:40
 * @LastEditTime: 2022-05-23 16:10:58
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}