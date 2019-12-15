import Api from '@/services/api'
/* eslint-disable */
export default {
  ShowUser(userToken) {
    return Api().get('/api/user/user_info', {headers: {'Authorization': userToken}})
  }
}
