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
      };
    },
  });