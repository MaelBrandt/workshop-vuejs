const app = Vue.createApp({
    data: function () {
      return {
        title: 'Achat de café Nespresso',
        desc: "L'histoire de NESPRESSO est celle d'une passion inaltérable pour la perfection et d'une quête inlassable d'innovation en faveur de la plus haute qualité.",
        image: 'assets\\images\\colombia.png',
        url: "https://www.nespresso.com/ch/fr/",
        onSale: true,
        inStock: true,
        stock: 5,
        details: ['Doux', 'Harmonieux'],
        carouselImages: [
            {
              id: 1,
              text: 'Capsule 1',
            },
            {
              id: 2,
              text: 'Capsule 2',
            },
            {
              id: 3,
              text: 'Tasse',
            },
            {
              id: 4,
              text: 'Paquet',
            }
          ],
      };
    },
  });