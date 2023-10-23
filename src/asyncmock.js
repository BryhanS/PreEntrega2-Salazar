const myProducts = [
  {
    id: "1",
    nombre: "Pan Especial",
    precio: 3.5,
    category: "especiales",
    imagen: "product-1.png",
    altinf: "la imagen contiene Pan Especial",
    cantidad: 1,
  },
  {
    id: "2",
    nombre: "Bagette",
    precio: 1.5,
    category: "diario",
    imagen: "product-2.png",
    altinf: "la imagen contiene Bagette",
    cantidad: 1,
  },
  {
    id: "3",
    nombre: "Pan Yema",
    precio: 0.5,
    category: "especiales",
    imagen: "product-3.png",
    altinf: "la imagen contiene Pan Yema",
    cantidad: 1,
  },
  {
    id: "4",
    nombre: "Molde Artesanal",
    precio: 12,
    category: "diario",
    imagen: "product-4.png",
    altinf: "la imagen contiene Molde Artesanal",
    cantidad: 1,
  },
  {
    id: "5",
    nombre: "Pan al Ajo",
    precio: 7.5,
    category: "especiales",
    imagen: "product-5.png",
    altinf: "la imagen contiene Pan al Ajo",
    cantidad: 1,
  },
  {
    id: "6",
    nombre: "Molde Integral",
    precio: 15.5,
    category: "diario",
    imagen: "product-6.png",
    altinf: "la imagen contiene Molde Integral",
    cantidad: 1,
  },
  {
    id: "7",
    nombre: "Pan Arabe",
    precio: 0.5,
    category: "diario",
    imagen: "product-7.png",
    altinf: "la imagen contiene Pan Arabe",
    cantidad: 1,
  },
  {
    id: "8",
    nombre: "Pan Ciabatta",
    precio: 0.3,
    category: "diario",
    imagen: "product-8.png",
    altinf: "la imagen contiene Pan Ciabatta",
    cantidad: 1,
  },
  {
    id: "9",
    nombre: "Pan con Pasas",
    precio: 1.9,
    category: "especiales",
    imagen: "product-9.png",
    altinf: "la imagen contiene Pan con Pasas",
    cantidad: 1,
  },
  {
    id: "10",
    nombre: "Chancay",
    precio: 1.5,
    category: "especiales",
    imagen: "product-10.png",
    altinf: "la imagen contiene Chancay",
    cantidad: 1,
  },
  {
    id: "11",
    nombre: "Chocoduca",
    precio: 0.25,
    category: "especiales",
    imagen: "product-11.png",
    altinf: "la imagen contiene Chocoduca",
    cantidad: 1,
  },
  {
    id: "12",
    nombre: "Caramanduca",
    precio: 0.3,
    category: "especiales",
    imagen: "product-12.png",
    altinf: "la imagen contiene Caramanduca",
    cantidad: 1,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(myProducts);
    }, 500);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = myProducts.find((item) => item.id === id);
      resolve(product);
    }, 500);
  });
};

export const getProductsByCategory = (categoryName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const category = myProducts.find(
        (cateries) => cateries.category === categoryName
      );
      resolve(category);
    });
  });
};
