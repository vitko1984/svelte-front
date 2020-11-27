import { writable } from 'svelte/store'
import moment from 'moment'

let header ={ userName: 'kovalenkonikola@yandex.ru' }
let data = []
let inputs = []
let classification = {
  serviceNames: [
    { name: 'Кровельные работы', label: 'Кровельные работы', value: 'Кровельные работы' }, 
    { name: 'Каркасное домостроение', label: 'Каркасное домостроение', value: 'Каркасное домостроение' }, 
    { name: 'Общестроительные работы', label: 'Общестроительные работы', value: 'Общестроительные работы' }, 
    { name: 'Сварочные работы', label: 'Сварочные работы', value: 'Сварочные работы' }, 
    { name: 'Заборы, беседки', label: 'Заборы, беседки', value: 'Заборы, беседки' }   
  ],
  serviceNames1: [ 'Кровельные работы', 'Каркасное домостроение', 'Общестроительные работы', 'Сварочные работы', 'Заборы, беседки' ]
}
let columns = {
  comentHeaders: [
    {
      id: '_id',
      label: 'Идентификатор БД',
      show: false, // показать в таблице 'Excel'
    },    
    {
      id: 'client',
      label: 'Клиент',
      type: '',
      show: true, // показать в таблице 'Excel'
      sample: 'Николай',
      align: 'left', // выравнивание в 'Excel'
    },
    {
      id: 'service',
      label: 'Вид работ',
      type: 'suggest',
      options: classification.serviceNames1,
      show: true,
      sample: 'Кровельные работы',
      align: 'left'
    },
    {
      id: 'date',
      label: 'Дата',
      type: 'year',
      show: true,
      sample: '15.10.2020'
    },
    {
      id: 'rating',
      label: 'Рейтинг',
      type: 'rating',
      show: true,
      sample: 4,
    },
    {
      id: 'comments',
      label: 'Отзыв',
      type: 'text',
      show: true,
      sample: 'Отличная работа, быстро и качественно. Молодцы!'
    }
  ],
  priceHeaders: [
    {
      key: 'service_id',
      label: '№ п/п',
      sortable: true,
      class: 'white--text',
      thClass: 'Table-Header',
      user: '',
      iconName: ''
    },
    {
      key: 'service',
      label: 'Наименование',
      class: 'white--text',
      thClass: 'Table-Header',
      user: '',
      iconName: ''      
    },
    {
      key: 'unit',
      label: 'Ед.изм.',
      class: 'white--text',
      thClass: 'Table-Header',
      user: '',
      iconName: ''       
    },
    {
      key: 'price',    
      label: 'Цена',   
      sortable: true,
      class: 'white--text',
      thClass: 'Table-Header',
      user: '',
      iconName: ''
    },
    {
      key: 'rating',
      label: 'Рейтинг',        
      sortable: true,
      class: 'white--text',         
      user: '',
      iconName: ''
    },
    {
      key: 'foto',
      label: 'Фото',
      class: 'white--text',
      thClass: 'Table-Header',
      user: '',
      iconName: ''
    }
  ],
  headers: [
    {
      key: 'good_id',
      label: '№ п/п',
      sortable: true,
      thClass: 'Table-Header',
      thStyle: {
        width: '150px'
      },
    },
    {
      key: 'date',
      label: 'Дата',
      sortable: true,
      thClass: 'Table-Header',
      formatter: (value, key, item) => {
        moment.locale('ru')
        return moment(item.date * 1).format('lll')
      }
    },
    {
      key: 'good',
      label: 'Наименование',
      thClass: 'Table-Header',
      sortable: false,                 
    },
    {
      key: 'category_id',
      label: 'Категория',
      thClass: 'Table-Header',
      sortable: true
    },
    {
      key: 'brand',
      label: 'Марка',
      thClass: 'Table-Header',
      sortable: false
    },
    {
      key: 'price',
      label: 'Цена',
      thClass: 'Table-Header',
      sortable: true          
    },
    {
      key: 'rating',
      label: 'Рейтинг',
      thClass: 'Table-Header',
      sortable: true
    }, 
    {
      key: 'photo', 
      label: 'Фото',
      thClass: 'Table-Header',
      sortable: false,
      thStyle: {
        width: '150px'
      }        
    }
  ]
} 
let stat = {
  sort: 1,
  keyName: 'service_id', 
  filter: {
    startDate: null,
    endDate: null,
    brandName: '',
    highRating: false, 
    serviceName: ''
  }
}
let auth = {
  token: localStorage.getItem('user-token') || '',
  status: '',
  user: {
    user_id: localStorage.getItem('user-id') || '',
    authenticated: false,
  },
  clients: []  
}

export const hdr = writable(header)
export const Data = writable(data)
export const Columns = writable(columns)
export const Stat = writable(stat)
export const Auth = writable(auth)
export const Classification = writable(classification)
export const initData = writable(inputs)