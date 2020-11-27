import BaseService from './BaseService';

export class BasketService extends BaseService {
   find_all({headers,params}) {
      let result = super.request({
        url: '/basket',
        method: 'GET',
        type: 'form',
        headers: {...headers},
        query: {...params}
      });
    console.log(result);    
    return result;   
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

export default new BasketService()