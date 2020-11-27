import BaseService from './BaseService';

export class UserService extends BaseService {
    get_token ( credentials ) {
    let result = super.request({
           //url: '/users',
           url: credentials.url,
           //body: { ...credentials },
           body: credentials.body,
           method: 'POST',
           type: 'form'
           //type: 'json'
        });
    console.log(result);    
    return result;    
   }

   find_all({headers}) {
      let result = super.request({
        url: '/users',
        method: 'GET',
        type: 'form',
        ...headers      
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

export default new UserService()