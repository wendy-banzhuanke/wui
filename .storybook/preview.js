/*
 * @Author: zhangjian
 * @Date: 2022-03-29 11:49:58
 * @LastEditTime: 2022-05-25 15:00:05
 * @LastEditors: zhangjian
 * @Description: 描述
 */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}