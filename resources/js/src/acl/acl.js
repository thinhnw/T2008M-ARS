import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'

Vue.use(AclInstaller)

let initialRole = 'public'

const userInfo = JSON.parse(localStorage.getItem('userInfo'))
if (userInfo && userInfo.user_type) initialRole = userInfo.user_type
console.log('hello', initialRole)

export default new AclCreate({
  initial  : initialRole,
  notfound : '/pages/not-authorized',
  router,
  acceptLocalRules : true,
  globalRules: {
    isAdmin  : new AclRule('admin').generate(),
    isEditor : new AclRule('editor').or('admin').generate(), //theme rule, don't touch

    isPublic : new AclRule('public').or('admin').or('customer').generate(),
    isCustomer: new AclRule('customer').generate(),
  },
  middleware: async acl => {
    console.log('hello')
    let user = JSON.parse(localStorage.getItem('userInfo') || '{}')
    console.log('user', user) 
    if (user && user.user_type == 'customer') {
      acl.change([ 'public', 'customer', 'editor' ])
    } else if (user && user.user_type == 'admin') {
      acl.change([ 'public', 'admin' ])
    }

  }
})
