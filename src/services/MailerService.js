import BaseService from './BaseService'

export class MailerService extends BaseService {
  find({ headers,params }) {
    let result = super.request({
      url: '/mailer',
      method: 'GET',
      type: 'form',
      headers: { ...headers },
      query: { ...params },
    })
    console.log(result)   
    return result   
  }

  post_mailer({ headers, params, mailers }) {
    let result = super.request({
      url: '/mailer',    
      method: 'POST',
      headers: { ...headers },
      body: { ...mailers, ...params },
      type: 'form'       
    })
    console.log(result)    
    return result      
  }

  delete_mailer({ headers, params }) {
    let result = super.request({
      url: '/mailer',
      method: 'DELETE',
      type: 'form',
      headers: { ...headers },
      query: { ...params } 
    })
    console.log(result)    
    return result
  }

  put_mailer({ headers, params, edit_mailers }) {
    let result = super.request({
      url: '/prices',    
      method: 'PUT',
      headers: { ...headers },
      body: { ...edit_mailers, ...params },
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

export default new MailerService()