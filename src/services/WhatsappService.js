import BaseService from './BaseService'
import config from '@/config'

const { whatsapp } = config

export class WhatsappService extends BaseService {
  post_whatsapp({ headers, params, whatsapps }) {
    let result = super.request({
      method: 'POST',  
      url: `${whatsapp.apiUrl}/${this.method}?token=${whatsapp.token}`,          
      headers: { ...headers },
      body: { ...whatsapps, ...params },
      type: 'form'       
    })
    console.log(result)    
    return result      
  }

  delete_whatsapp({ headers, params }) {
    let result = super.request({
      url: '/whatsapp',
      method: 'DELETE',
      type: 'form',
      headers: { ...headers },
      query: { ...params } 
    })
    console.log(result)    
    return result
  }

  put_whatsapp({ headers, params, edit_whatsapps }) {
    let result = super.request({
      url: '/telegram',    
      method: 'PUT',
      headers: { ...headers },
      body: { ...edit_whatsapps, ...params },
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

export default new WhatsappService()