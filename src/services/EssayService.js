import Api from '@/services/api'

export default {
  fetchEssays () {
    return Api().get('/userEssay')
  },
  postEssay (essay) {
    return Api().post('/userEssay', essay,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteEssay (id) {
    return Api().put(`/userEssay/${id}/likes`)
  },
  fetchEssay (id) {
    return Api().get(`/userEssay/${id}`)
  },
  putEssay (id, essay) {
    console.log('REQUESTING ' + essay._id + ' ' +
      JSON.stringify(essay, null, 5))
    return Api().put(`/userEssay/${id}`, essay,
      { headers: {'Content-type': 'application/json'} })
  }
}
