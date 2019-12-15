import Api from '@/services/api'
/* eslint-disable */
export default {
  search (author) {
    return Api().post('/search', author,
      { headers: {'Content-type': 'application/json'} })
  },
}
