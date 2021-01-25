// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.

var vue = new Vue ({
  el: '#root',
  data: {
    message: 'Hello Vue!',
    image: 'https://ryo.app/wp-content/uploads/2019/09/vuejs.png',
    alt: 'Vue',
    myClass: 'img-css'
  }
});
