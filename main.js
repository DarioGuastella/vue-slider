const { createApp } = Vue
createApp({
    data() {
      return {
        slides: [
            {
                immagine: 'https://img.freepik.com/free-vector/welcome-pattern-different-languages_23-2147870141.jpg',
                titolo: 'Benvenuti nel nostro sito',
                testo: 'Esplora la nostra vasta gamma di prodotti e scopri offerte speciali.'
            },
            {
                immagine: 'https://img.freepik.com/free-vector/spring-sale-instagram-post_23-2148849921.jpg',
                titolo: 'Nuova collezione primavera',
                testo: 'Scopri le ultime tendenze della moda con la nostra collezione primavera.'
            },
            {
                immagine: 'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg',
                titolo: 'Offerte speciali',
                testo: 'Approfitta delle nostre offerte speciali. Sconti incredibili solo per te!'
            }
        ],
        counter: 0
      }      
    },
    methods: {
        previousImg() {
            let ultimaImg = this.slides.length-1;

            if(this.counter > 0) {
                this.counter--;
            } else {
                this.counter = ultimaImg;
            }
        },
        nextImg() {
            let ultimaImg = this.slides.length-1;

            if(this.counter < ultimaImg) {
                this.counter++;
            } else {
                this.counter = 0;
            }
        },
    mounted() {
        console.log(this.slides);
        
    }
    
  }}).mount('#app')

  //Immagine, titolo e testo sono racchiusi in una card, uno sotto l’altro, e avranno un numero che parte da 1 e si incrementa man mano in un angolo della slide
