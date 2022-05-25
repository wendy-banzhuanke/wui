import MyButton from './Button.vue'

export default {
  ...MyButton,
  install: Vue => Vue.component(MyButton.name, MyButton),
}