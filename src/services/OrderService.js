import Api from '@/services/api'
/* eslint-disable */
export default {
  fetchOrders () {
    return Api().get('/order')
  },
postOrder (order) {
  return Api().post('/order', order,
    { headers: {'Content-type': 'application/json'} })
},
  deleteOrder (id) {
    return Api().delete(`/order/${id}`)
  },

}
