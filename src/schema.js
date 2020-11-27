import classification from './classification'
export default [
  {
    id: 'client',
    label: 'Клиент',
    type: 'text',
    show: true, // показать в таблице 'Excel'
    sample: 'Николай',
    align: 'left', // выравнивание в 'Excel'
  },
  {
    id: 'services',
    label: 'Вид работ',
    type: 'suggest',
    options: classification.services,
    show: true,
    sample: 'Кровельные работы',
    align: 'left'
  },
  {
    id: 'date',
    label: 'Дата',
    type: 'year',
    show: true,
    sample: 2020
  },
  {
    id: 'rating',
    label: 'Рейтинг',
    type: 'rating',
    show: true,
    sample: 3,
  },
  {
    id: 'comments',
    label: 'Отзывы',
    type: 'text',
    sample: 'Отличная работа. быстро и качественно. Молодцы!'
  },
]