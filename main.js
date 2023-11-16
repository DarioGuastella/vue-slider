const { createApp } = Vue


createApp({
    data() {
      return {
        slides: [
            {
                immagine: 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg',
                titolo: 'Tramonto sulla spiaggia',
                descrizione: 'Un meraviglioso tramonto con colori caldi che si riflettono sull\'acqua.'
            },
            {
                immagine: 'https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg',
                titolo: 'Montagne innevate',
                descrizione: 'Un panorama mozzafiato delle montagne coperte di neve.'
            },
            {
                immagine: 'https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg',
                titolo: 'Campi verdi',
                descrizione: 'Vaste distese di campi verdi che si estendono all\'orizzonte.'
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

  