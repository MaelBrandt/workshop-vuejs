const app = Vue.createApp({
    data: function () {
      return {
        action:  'Achat de café',
        brand:  'Nespresso',
        desc: "L'histoire de NESPRESSO est celle d'une passion inaltérable pour la perfection et d'une quête inlassable d'innovation en faveur de la plus haute qualité.",
        selectedImage: 0,
        url: "https://www.nespresso.com/ch/fr/",
        cart: 0,
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
        updateSelectedImage: function(index) {
           this.selectedImage = index;
        },
    },
    computed: {
      title() {
        return this.action + ' ' + this.brand
      },
      image() {
        return this.carouselImages[this.selectedImage].image;
      },
    },
  });

  app.component('product-display', {
    template:
    /*html*/
    `
    <strong>Type d'objet en vente</strong><br>
      <img height="200" v-bind:src="image" :class="[stock <= 0 ? 'noStockImg' : '']"/>
      <div>
        <span
          v-for="(carouselImage, index) in carouselImages"
          :key="carouselImage.id"
          @mouseover="updateSelectedImage(index)" 
        >
          <img height="50" alt="carouselImage.text" :src="carouselImage.image" />
        </span>
      </div>

      <div v-show="onSale">
        <br/>En Vente !

        <p v-if="inStock">Disponible</p>
        <p v-else>Plus de stock</p>
  
        <p v-if="stock > 10">Disponible</p>
        <p v-else-if="stock <= 10 && stock > 0">Peu de stock</p>
        <p v-else>Plus de stock</p>
      </div>

      <strong>flaveur de nos caffés</strong><ul>
        <li
          v-for="detail in details"
          :key="detail.id"
          :style="{ color: detail.color }"
        >
          {{ detail.text }}
        </li>
      </ul>

      <strong><br/>Paquets</strong>
      <div v-for="packet in packets" :key="packets.id">
        quantité : {{ packet.quantity }}
        prix : {{ packet.price}} €
      </div>
    </div>

    <!-- v-on:click fail la même chose que @click -->
    <button
      @click="addToCart"
      :style="styles.roundButton"
      :disabled="stock <= 0"
      :class="{ disabledButton: stock <= 0 }"
    >Ajouter au panier</button>
    <button
      v-on:click="removeFromCart"
      :style="styles.roundButton"
      :disabled="stock <= 0"
      :class="{ disabledButton: stock <= 0 }"
    >Retirer du panier</button>
    <div :class="[cart > 0 ? 'cartFilled' : '']">Panier({{ cart }})</div>
  
    `,
    data() {
      return {
        desc: "L'histoire de NESPRESSO est celle d'une passion inaltérable pour la perfection et d'une quête inlassable d'innovation en faveur de la plus haute qualité.",
        selectedImage: 0,
        onSale: true,
        inStock: true,
        stock: 1,
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
      }
    },
    methods: {
      updateSelectedImage: function(index) {
        this.selectedImage = index;
     },
    },
    computed: {
      image() {
        return this.carouselImages[this.selectedImage].image;
      },
    }
  });