import { filter } from 'underscore';

export const prices = [
  {"date": "1560422694514", "good_id": "12", "good":  "\u0412\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430 ASUS", "category_id": "3", "brand": "Asus", "price": "2000", "rating": "8", "photo": "asus_video.jpg"},
  {"date": "1556863200000", "good_id": "13", "good": "\u0412\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430 GIGABYTE GT-740", "category_id": "3", "brand": "Gigabyte", "price": "6000", "rating": "9", "photo": "gigabyte_video_gt740.jpg"},
  {"date": "1560778200000", "good_id": "10", "good": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Lenovo A5000", "category_id": "2", "brand": "Lenovo", "price": "11000", "rating": "3", "photo": "lenovo_a5000.jpg"},
  {"date": "1560256200000", "good_id": "9", "good": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Asus Zenfone Laser", "category_id": "2", "brand": "Asus", "price": "12000", "rating": "6", "photo": "asus_zenfone_laser.jpg"},
  {"date": "1561017600000", "good_id": "14", "good": "\u0412\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430 GIGABYTE GTX-960", "category_id": "3", "brand": "Gigabyte", "price": "14000", "rating": "10", "photo": "gigabyte_video_gtx960.jpg"},
  {"date": "1560422694514", "good_id": "4", "good": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Lenovo G5030", "category_id": "1", "brand": "Lenovo", "price": "16000", "rating": "7", "photo": "lenovo_g5030.jpg"},
  {"date": "1560422694514", "good_id": "11", "good": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Lenovo P90", "category_id": "2", "brand": "Lenovo", "price": "16000", "rating": "5", "photo": "lenovo_p90.jpg"},
  {"date": "1560422694514", "good_id": "3", "good": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Lenovo IdeaPad", "category_id": "1", "brand": "Lenovo", "price": "17000", "rating": "5", "photo": "lenovo_idea_pad.jpg"},
  {"date": "1560422694514", "good_id": "7", "good": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Samsung Galaxy A5", "category_id": "2", "brand": "Samsung", "price": "17000", "rating": "8", "photo": "samsung_galaxy_a5.jpg"},
  {"date": "1560422694514", "good_id": "5", "good": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Acer Aspire", "category_id":"1", "brand": "Acer", "price": "21000", "rating": "8", "photo": "acer_aspire.jpg"},
  {"date": "1560422694514", "good_id": "6", "good": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Samsung Galaxy A7", "category_id": "2", "brand": "Samsung", "price": "30000", "rating": "9", "photo": "samsung_galaxy_a7.jpg"},
  {"date": "1560422694514", "good_id": "8", "good": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Apple iPhone SE", "category_id": "2", "brand": "Apple", "price": "38000", "rating": "10", "photo": "apple_iphone_se.jpg"},
  {"date": "1560422694514", "good_id": "1", "good": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Apple MacBook Air", "category_id": "1", "brand": "Apple", "price": "60000", "rating": "8", "photo": "apple_macbook_air.jpg"},
  {"date": "1560422694514", "good_id": "2", "good": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Apple MacBook Pro", "category_id": "1", "brand": "Apple", "price": "70000", "rating": "9", "photo": "apple_macbook_pro.jpg"}]

  export function getPrices (params) {
    const {
        startDate,
        endDate,
        brandName,
        highRating,
      } = params
  
    return filter(prices, o => {
        return (startDate ? o.date >= startDate : true) && 
        (endDate ? o.date <= endDate : true) &&
        (brandName ? (brandName.length > 2 ? o.brand.includes(brandName) : true) : true) && 
        (highRating ? o.rating === "10" : true)
    })
  }