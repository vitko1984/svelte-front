import BaseService from './BaseService'

export class PriceService1 extends BaseService {
  find ({ filter , url }) {
    let result = super.request({
      method: 'GET', 
      url,
      query: { ...filter },
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

export default new PriceService1()