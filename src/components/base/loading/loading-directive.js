import Vue from 'vue'
import loading from './loading'

const name = loading.name

console.log(name)

const loadingDirective = {
  bind(el, binding) {
    if (!el[name]) {
      el[name] = {}
    }
    el[name].instance = new Vue({
      render: (h) => h(loading)
    }).$mount(document.createElement('div'))
  },
  inserted(el, binding, vnode) {
    if (binding.value) {
      const arg = binding.arg
      if (arg) {
        el[name].instance.$el.querySelector('.desc').innerText = arg
      }
      appendChild(el)
    }
  },
  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? appendChild(el) : removeChild(el)
    }
  }
}

const appendChild = (ele) => {
  ele.appendChild(ele[name].instance.$el)
}

const removeChild = (ele) => {
  ele.removeChild(ele[name].instance.$el)
}

export default loadingDirective
