import ComponentName from './component-name'

const components = [
  ComponentName
]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ComponentName
}
