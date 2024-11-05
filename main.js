const app = Vue.createApp({
    data: function () {
      return {
        title: 'Achat de café Nespresso',
        desc: "L'histoire de NESPRESSO est celle d'une passion inaltérable pour la perfection et d'une quête inlassable d'innovation en faveur de la plus haute qualité.",
        image: 'assets\\images\\colombia.png',
        url: "https://www.nespresso.com/ch/fr/",
        cart: 0,
        onSale: true,
        inStock: true,
        stock: 5,
        details: [
          {
            id: 1,
            text: 'Doux',
            color: '#6C99C6'
          },
          {
            id: 2,
            text: 'Harmonieux',
            color: '#BF9E74'
          }
        ],
        carouselImages: [
            {
              id: 1,
              text: 'Capsule 1',
              image: './assets/images/colombia.png',
            },
            {
              id:  2,
              text: 'Capsule 2',
              image: './assets/images/colombia_de_cote.png',
            },
            {
              id: 3,
              text: 'Tasse',
              image: './assets/images/colombia_tasse.png',
            },
            {
              id: 4,
              text: 'Paquet',
              image: './assets/images/colombia_paquet.png',
            }
          ],
        packets: [
            {
              id: 1,
              quantity: 10,
              price: 9.95,
            },
            {
              id: 2,
              quantity: 30,
              price: 24.95,
            },
            {
              id: 3,
              quantity: 50,
              price: 39.95,
            }
        ],
        styles: {
          roundButton: {
            borderRadius: '20px',
            padding: '10px',
            backgroundColor: 'rgb(0, 114, 180)',
            color: 'white',
            cursor: 'pointer'
          }
        },
      };
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
        },
        removeFromCart: function() {
          if (this.cart > 0) {
            this.cart -= 1;
          }
        },
        updateImage: function(newImage) {
            this.image = newImage;
        },
    }
  });