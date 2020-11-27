export default {
  responseTimeout: 10000,
  remote: {
    isEnabled: true, // флаг переключения между фиктивным и реальным сервером
    //url: 'https://health-empire.com/app' // URL реального сервера
    url: 'http://localhost:8081'
  },
  telegram: {
    token: '1479357668:AAFtfLRCDmRmDNyHAk16XXuqq18WsPu4OOc',
    uid: '1232247854',
    chat_id: '1232247854',
    url: 't.me/nick59_bot'
  },
  whatsapp: {
    token: '',
    apiUrl: ''
  }
}