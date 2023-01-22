'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          title: 'Pointed-Toe Mule Slides',
          image:
            'https://www.lulus.com/images/product/xlarge/9918881_2010016.jpg?w=400&hdpi=1',
          price: 795.0,
          category: 'Shoes',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Stunning Details Gold Pearl Cuff Bracelet',
          image:
            'https://www.lulus.com/images/product/xlarge/8179881_1705696.jpg?w=400&hdpi=1',
          price: 779.0,
          category: 'Jewelery',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'The Last of Us',
          image:
            'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
          price: 57.0,
          category: 'Games',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Harry Potter',
          image:
            'https://cf.shopee.com.br/file/d204e5480a7d0b0df3f72bec160ae569',
          price: 438.0,
          category: 'Books',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Normal People',
          image:
            'https://i.insider.com/61dc6e4e1025b20018bb04ce?width=750&format=jpeg&auto=webp',
          price: 299.0,
          category: 'Books',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Rhinestone Mini Hoop Earring Set',
          image:
            'https://www.lulus.com/images/product/xlarge/7333101_1485656.jpg?w=560&hdpi=1',
          price: 463.0,
          category: 'Jewelery',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Inception',
          image:
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0d3ecf38588453.5d4f34ad6ccaf.jpg',
          price: 590.0,
          category: 'Movies',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Sahara T-Shirt',
          image: 'https://www.rei.com/media/product/163975',
          price: 210.0,
          category: 'Shirt',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Mega Bloks Building Bag',
          image:
            'https://www.thespruce.com/thmb/wWkE3Rrjo3J1a7TU1juWv7padtQ=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MegaBloks-18cde220256a42ff8759bf94d319b110.jpeg',
          price: 160.0,
          category: 'Toys',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Baby Toys',
          image:
            'https://www.travelingbaby.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/n/infant_toys_1_4_1.jpg',
          price: 277.0,
          category: 'Toys',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: ' Square-Toe Ankle Boots',
          image:
            'https://www.lulus.com/images/product/xlarge/3102550_381342.jpg?w=560&hdpi=1',
          price: 832.0,
          category: 'Shoes',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Learning Friends 100 Words Book',
          image:
            'https://www.thespruce.com/thmb/TVwbhHOFKe6hoCnYhhc-474l2mk=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/amazon-learning-friends-100-words-book-c9a4fa0db84f4382adf39e885c961850.jpg',
          price: 959.0,
          category: 'Toys',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Battat Bristle Blocks',
          image:
            'https://www.thespruce.com/thmb/ZEtPQHco-YhO3sWFIs2hRLhyfQw=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/amazon-battat-bristle-blocks-444ed48004e4417d86777205e008ee10.jpg',
          price: 680.0,
          category: 'Toys',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Glamour Gold Rhinestone Earringss',
          image:
            'https://www.lulus.com/images/product/xlarge/4080870_806712.jpg?w=400&hdpi=1',
          price: 174.0,
          category: 'Jewelery',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Spykar Casual Black Shirt',
          image:
            'https://rukminim1.flixcart.com/image/400/400/l3uhvgw0/shirt/e/1/c/xxl-ytmsh01bb020whiteblack-spykar-original-imagevfywvghebuz.jpeg?q=70',
          price: 954.0,
          category: 'Shirt',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Joker',
          image:
            'https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_08339151-d79a-4b7b-8bc7-dcad04881c2c.jpg?v=1573629460',
          price: 263.0,
          category: 'Movies',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Nylon Gabardine Sneakers',
          image:
            'https://www.harryrosen.com/_next/image?url=https%3A%2F%2Fcdn.media.amplience.net%2Fi%2Fharryrosen%2F20078007075%3F%24pdp-xl%24&w=3840&q=75',
          price: 75.0,
          category: 'Shoes',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'New Stylish Long Sleeve Cotton Shirt',
          image:
            'https://static-01.daraz.com.bd/p/2b52db5af6f0c21be997e9ebc16a05d5.jpg',
          price: 734.0,
          category: 'Shirt',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Regular Fit Round-neck T-shirt',
          image:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2F03%2F61031c2fd05624e684820883d878e514e69d0079.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
          price: 339.0,
          category: 'Shirt',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'White Classic Shirt',
          image:
            'https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700',
          price: 184.0,
          category: 'Shirt',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Starter Drums Kit',
          image:
            'https://m.media-amazon.com/images/I/817sf0b1DCL._AC_UL480_FMwebp_QL65_.jpg',
          price: 605.0,
          category: 'Music',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Polo T-Shirt',
          image:
            'https://rukminim1.flixcart.com/image/432/518/klicfww0/t-shirt/h/s/g/xxl-tm687-wtlbk-kalt-original-imagymdubqzzusxd.jpeg?q=70',
          price: 792.0,
          category: 'Shirt',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'The Lord of the Rings',
          image:
            'https://www.studynovels.com/Images/StudyNovels/StudyNovels_2018104_4190_34.jpg',
          price: 995.0,
          category: 'Books',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'To Kill A Mockingbird',
          image:
            'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
          price: 559.0,
          category: 'Books',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Interstellar',
          image:
            'https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_5000x.jpg?v=1574284010',
          price: 840.0,
          category: 'Movies',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Olive Green Shirt',
          image:
            'https://assets.ajio.com/medias/sys_master/root/20220818/WncB/62fde1bdf997dd394c018b11/-473Wx593H-461150256-green-MODEL2.jpg',
          price: 112.0,
          category: 'Shirt',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Portable Electronic Drum Pad',
          image:
            'https://m.media-amazon.com/images/I/71PA9VQYifL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
          price: 372.0,
          category: 'Music',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Strong Wind 39 Inch Classical Guitar',
          image:
            'https://m.media-amazon.com/images/I/6125pIyEwaL._AC_UL480_FMwebp_QL65_.jpg',
          price: 63.0,
          category: 'Music',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Ortega Guitars 6 String Nylon Classical Guitar,',
          image:
            'https://m.media-amazon.com/images/I/61aSf1daABL._AC_UL480_FMwebp_QL65_.jpg',
          price: 607.0,
          category: 'Music',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Leather Low-Tops Shoes',
          image:
            'https://www.harryrosen.com/_next/image?url=https%3A%2F%2Fcdn.media.amplience.net%2Fi%2Fharryrosen%2F20068342048%3F%24pdp-xl%24&w=1920&q=75',
          price: 403.0,
          category: 'Shoes',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Tone Clarinet',
          image:
            'https://m.media-amazon.com/images/I/71NX0c10gtL._AC_UL480_FMwebp_QL65_.jpg',
          price: 173.0,
          category: 'Music',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Twill Shirt',
          image:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9e%2F00%2F9e000251233f60770f9beb1529e8a5bebe478f18.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
          price: 296.0,
          category: 'Shirt',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'The Great Gatsby',
          image:
            'https://media1.popsugar-assets.com/files/thumbor/6pwpfj9AGEGlNh2-o3gY4EjHLbA/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/11/08/137/n/44498184/67ab3b0c3f94e190_5_78734/i/Great-Gatsby.jpg',
          price: 790.0,
          category: 'Books',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Tenet',
          image:
            'https://cdn.shopify.com/s/files/1/0549/5835/8762/products/V_44.jpg?v=1641654624',
          price: 552.0,
          category: 'Movies',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
        {
          title: 'Yamaha Plastic Soprano Recorder',
          image:
            'https://m.media-amazon.com/images/I/41RikGcSynL._AC_UL480_FMwebp_QL65_.jpg',
          price: 77.0,
          category: 'Music',
          createdAt: '2022-01-05T20:18:05.833Z',
          updatedAt: '2022-01-05T20:18:05.833Z',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
