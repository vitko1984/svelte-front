import BaseService from './BaseService'
//import request from 'superagent';

export class PriceService extends BaseService {
  find({ headers,params }) {
    let result = super.request({
      url: '/prices',
      method: 'GET',
      type: 'form',
      headers: { ...headers },
      query: { ...params },
    })
    console.log(result)   
    return result   
  }

  post_price({ headers, params, prices }) {
    let result = super.request({
      url: '/prices',    
      method: 'POST',
      headers: { ...headers },
      body: { ...prices, ...params },
      type: 'form'       
    })
    console.log(result)    
    return result      
  }

  delete_price({ headers, params }) {
    let result = super.request({
      url: '/prices',
      method: 'DELETE',
      type: 'form',
      headers: { ...headers },
      query: { ...params } 
    })
    console.log(result)    
    return result
  }

  put_price({ headers, params, edit_prices }) {
    let result = super.request({
      url: '/prices',    
      method: 'PUT',
      headers: { ...headers },
      body: { ...edit_prices, ...params },
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

export default new PriceService()