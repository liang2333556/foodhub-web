import Api from '@/services/api'

export default {
  fetchFoods () {
    return Api().get('/foods')
  },
  postFood (food) {
    return Api().post('/foods', food,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteFood (id) {
    return Api().put(`/foods/${id}/likes`)
  },
  deleteFood (id) {
    return Api().delete(`/foods/${id}`)
  },
  fetchFood (id) {
    return Api().get(`/foods/${id}`)
  },
  putFood (id, food) {
    console.log('REQUESTING ' + food._id + ' ' +
      JSON.stringify(food, null, 5))
    return Api().put(`/foods/${id}`, food,
      { headers: {'Content-type': 'application/json'} })
  }
}
