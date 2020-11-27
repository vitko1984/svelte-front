<svelte:head>
	<script type="text/javascript">
		ymaps.ready(init); 
		var myMap;
		
		function init() {
		
			myMap = new ymaps.Map("map", {
				center: [47.256616290029115,39.87908988462681], // Координаты центра карты
				zoom: 15 // Маштаб карты
			}); 
		
			myMap.controls.add(
				new ymaps.control.ZoomControl()  // Добавление элемента управления картой
			); 
		
			myPlacemark = new ymaps.Placemark([47.256616290029115,39.87908988462681], { // Координаты метки объекта
				balloonContent: "<div style='font-family: arial;font-size: 12px;color: #454545'>ул.Калинина,18<br />тел. +7 960 443-72-95</div>" // Подсказка метки
			}, {
				preset:"twirl#brownStretchyIcon" // Тип метки
			});
			
			myMap.geoObjects.add(myPlacemark); // Добавление метки
			myPlacemark.balloon.open(); // Открытие подсказки метки
			
		};	
	</script>
</svelte:head>

<div style="text-align:left">
  <h3 class="white-text">Вит-Ко</h3>
  <Container>
    <Row noGutters class="white-text">
      <Col cols={12} md={5}>
        <p>
          <Icon path="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
          <i>г.Аксай, ул.Калинина д.18</i>
        </p>
        <p>
          <Icon path="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
          <i>+7 960 443-72-95</i>
        </p>
        <p>
          <Icon path="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
          <i>knnaksay@gmail.com</i>
        </p>
        <p>
          <Icon path="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
          <i>пн.-сб. 09:00-18:00</i>
        </p>
        <div id="map" style="display:block"></div>
      </Col>
      <Col cols={12} md={5} offset_md={2}>
        <div class="contact-info-social">
          <ul>
            <li>
              <Icon path="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </li>
            <li>
              <Icon path="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
            </li>
            <li>
              <Icon path="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
            </li>
            <li>
              <Icon path="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" />
            </li>
          </ul>
        </div>
        <div class="zad-vop">
          <div class="form">
            <p>
              <Icon path="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z" />
              <span class="h3">Задайте свой вопрос</span>
            </p>
            <TextField clearable rules={rules} bind:value={contacts.name} type="text" color="grey">Ваше имя</TextField>
            <TextField clearable rules={rules} bind:value={contacts.phone} type="text" color="grey">Номер телефона</TextField>
            <Textarea clearable rules={rules} noResize bind:value={contacts.question}  color="grey">Ваш вопрос</Textarea><br />
            <Button on:click={_telegram}>Отправить</Button>            
          </div>
        </div>
      </Col>
    </Row>
  </Container>

  <Snackbar 
      timeout={timeout}
      bottom
      class={snackColor}
      bind:active={snackbar}>
      { message }
  </Snackbar>
  
</div>
<script>
import { hdr } from '@/src/stores.js';
  
import Button from '@/src/components/Button.svelte';

import mailer from '@/src/services/MailerService';
import telegram from '@/src/services/TelegramService';
import whatsapp from '@/src/services/WhatsappService';

import { TextField, Textarea, Row, Col, Container, Icon, Snackbar } from 'svelte-materialify/src';
      
$hdr = { ...$hdr, title: 'Контакты', iconName: 'ContactIcon' };

let contacts = {};
contacts.subject = 'Вопрос клиента сайта "Вит-Ко"';
let timeout = 6000;
let snackbar = false;
let snackColor = 'light-blue lighten-1';
let message = '';
let rules = [
        value => !!value || 'Ввести...',
        value => (value && value.length >= 3) || 'Мин 3 символа...',
      ];

const _mailer = async() => {
    const mailers = contacts;
    mailer
    .post_mailer({mailers})
    .then(res => {
      console.log(res)
      snackbar = true;
      message = res.data.message;
      snackColor = 'light-blue lighten-1';
    })
    .catch (error => {
      errorHandler(error);
    })
  };
  const _telegram = async() => {
    const telegrams = contacts;
    telegram
    .post_telegram({telegrams})
    .then(res => {
      console.log(res)
      snackbar = true;
      message = res.data.message;
      snackColor = 'light-blue lighten-1';
    })
    .catch (error => {
      errorHandler(error);
    })
  };
  const _whatsapp = async() => {
    const whatsapps = contacts;
    const headers = { 'Content-Type': 'application/json' };
    whatsapp
    .post_whatsapp({headers, whatsapps})
    .then(res => {
      console.log(res)
      snackbar = true;
      message = res.data.message;
      snackColor = 'light-blue lighten-1';
    })
    .catch (error => {
      errorHandler(error);
    })
  };
  let errorHandler = (error) => {
    console.log(error);
    if(error.response.status) {
    status = error.response.status;
    snackbar = true;
    snackColor = 'red lighten-1';
      if (status === 404) {
        message = 'Неверный запрос...';
      } else if (status === 401 || status === 403) {
        message = 'Неавторизовван...';
      } else if (status === 400) {
        message = 'Неверно... А может идет передача данных...';
      } else {
        message = error.message;
      }
    } else {message = error.message;};    
  };

$: console.log('Объект контактов: ', contacts);
</script>

<style lang="scss">
@import "./../custom/styles"; 
#map {
	width: 100%;
	height: 300px;
}
.contact-info-social {
  ul {
    display: flex;
    font-size: 25px;
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
    margin: 0 auto;
    }
  }
}
.zad-vop {
  padding: 10px 45px 0px 45px;
  position: relative;
  box-shadow: 0.4em 0.4em 20px rgba(241, 237, 237, 0.5);
  top: 30px;
  .h3 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    vertical-align: middle;
  }
}
</style>