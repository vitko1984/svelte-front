import BaseService from './BaseService'

export class TelegramService extends BaseService {
  find({ headers,params }) {
    let result = super.request({
      url: '/telegram',
      method: 'GET',
      type: 'form',
      headers: { ...headers },
      query: { ...params },
    })
    console.log(result)   
    return result   
  }

  post_telegram({ headers, params, telegrams }) {
    let result = super.request({
      url: '/telegram',    
      method: 'POST',
      headers: { ...headers },
      body: { ...telegrams, ...params },
      type: 'form'       
    })
    console.log(result)    
    return result      
  }

  delete_telegram({ headers, params }) {
    let result = super.request({
      url: '/telegram',
      method: 'DELETE',
      type: 'form',
      headers: { ...headers },
      query: { ...params } 
    })
    console.log(result)    
    return result
  }

  put_telegram({ headers, params, edit_telegrams }) {
    let result = super.request({
      url: '/telegram',    
      method: 'PUT',
      headers: { ...headers },
      body: { ...edit_telegrams, ...params },
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

export default new TelegramService()