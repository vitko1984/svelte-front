import BaseService from './BaseService'
//import request from 'superagent';

export class CommentService extends BaseService {
  find({ headers,params }) {
    let result = super.request({
      url: '/comments',
      method: 'GET',
      type: 'form',
      headers: { ...headers },
      query: { ...params },
    })
    console.log(result)   
    return result   
  }

  post_comment({ headers, params, comments }) {
    let result = super.request({
      url: '/comments',    
      method: 'POST',
      headers: { ...headers },
      body: { ...comments, ...params },
      type: 'form'       
    })
    console.log(result)    
    return result      
  }

  delete_comment({ headers, params }) {
    let result = super.request({
      url: '/comments',
      method: 'DELETE',
      type: 'form',
      headers: { ...headers },
      query: { ...params } 
    })
    console.log(result)    
    return result
  }

  put_comment({ headers, params, edit_comments }) {
    let result = super.request({
      url: '/comments',    
      method: 'PUT',
      headers: { ...headers },
      body: { ...edit_comments, ...params },
      type: 'form'       
    })
    console.log(result)    
    return result      
  }  

/*
   findById (appointmentId) {
       return super.request({
           url: `/appointments/${appointmentId}`
       })
   }

   count () {
       return super.request({
           url: '/appointments/count'
       })
   }
*/
}

export default new CommentService()