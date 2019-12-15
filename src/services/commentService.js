import Api from '@/services/api'
/* eslint-disable */
export default {
  postComment (comment) {
    return Api().post('/comment', comment,
      { headers: {'Content-type': 'application/json'} })
  },
}



