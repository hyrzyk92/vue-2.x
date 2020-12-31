import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)  //给vue的prototype上面添加_init方法
stateMixin(Vue)  //给vue的prototype上面添加$data，$props, $set, $delete, $watch
eventsMixin(Vue) //给vue的prototype上面添加$on, $once, $emit, $off
lifecycleMixin(Vue)  //给vue的prototype上面添加_update, $forceUpdate, $destroy
renderMixin(Vue)   //给vue的prototype上面添加了一些工具函数，$nextTick, _render

export default Vue
