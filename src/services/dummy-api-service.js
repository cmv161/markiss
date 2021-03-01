

export default class DummyApiService {

  delay = () => {   //задержка, эмуляция получения данных  с сервера
    return new Promise((resolve,reject) => { setTimeout(() => resolve(), 1000) }
    )
  }
  
  getAllData = async (test) => {
    await this.delay()
    return this._Data;
  }

  


  // getPersonImage = () => {
  //   return `https://placeimg.com/400/500/people`
  // };

  // getStarshipImage = () => {
  //   return `https://placeimg.com/600/400/tech`;
  // };

  // getPlanetImage = () => {
  //   return `https://placeimg.com/400/400/nature`
  // };
  _Data = [
    {

      name: 'Royal Canin',
      description: 'Для взрослых собак крупных пород: 26-44 кг,',
      price: '1194',
      key: 1,
      category:'feed',
      src: "https://petandme.ru/upload/iblock/92f/92fb86ef02baa8a709dbef586fdb9b24.png" ,

    },

    {
      name: 'Purina Pro Plan',
      description: 'Для взрослых собак средних пород, с курицей и рисом',
      price: '3930',
      key: 2,
      category:'feed',
      src: "https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/e0/ad/a0/450900_400x400.jpg",
    },

    {
      name: 'ACANA',
      description: 'Для взрослых собак средних пород, с курицей и рисом',
      price: '3100',
      key: 3,
      category:'feed',
      src: "https://petandme.ru/upload/iblock/235/235ea615b4ae6ecbfb42110901c0a2df.jpeg"  ,
    },

    {
      name: 'Purina Pro Plan',
      description: 'Для взрослых собак средних пород, с курицей и рисом',
      price: '3930',
      key: 4,
      category:'feed',
      src: "https://petandme.ru/upload/iblock/3f4/3f4a4b560bc23236fce77e0808aca6ec.jpeg" ,
    },

    {
      name: 'Purina Pro Plan',
      description: 'Для взрослых собак средних пород, с курицей и рисом',
      price: '3930',
      key: 5,
      category:'feed',
      src: "https://petandme.ru/upload/iblock/785/785c80bfe3d506cbf228d0c0aaf8e6f5.jpeg" ,
    },

    {
      name: 'Vitrum Zoo MAX',
      description: 'Для взрослых собак крупных пород, 300 шт.',
      price: '2500',
      key: 6,
      category:'vitamins',
      src: "https://petandme.ru/upload/iblock/da5/da5feb30b6afad3bd31576aaa9505192.jpeg" ,
      
    },

    {
      name: 'Animal Pac Cat and Dogs',
      description: 'Для взрослых собак средних пород, 300 шт.',
      price: '3700',
      key: 7,
      category:'vitamins',
      src: "https://petandme.ru/upload/iblock/c4b/c4b05268f250da1c6dc3d887d4aa001c.jpeg" ,
    },

    {
      name: 'Purina  ZooVit Extreem pro',
      description: 'Для взрослых собак средних пород, 100 шт',
      price: '1600',
      key: 8,
      category:'vitamins',
      src: "https://petandme.ru/upload/iblock/4f9/4f9abdd556e286111536195a09dea143.jpeg" ,
    },

    {
      name: 'Now Food Cat Hell',
      description: 'Для взрослых собак средних пород, 150 шт ',
      price: '1980',
      key: 9,
      category:'vitamins',
      src: "https://petandme.ru/upload/iblock/920/92081fae650105c933035b8aa5f52d30.jpeg" ,
    },

    {
      name: 'Activ Animal redmi 8pro',
      description: 'Для взрослых собак средних пород, 200 шт ',
      price: '4300',
      key: 10,
      category:'vitamins',
      src:  "https://petandme.ru/upload/iblock/755/755f0d8d1feca6937b49832a9119fb3c.jpeg",
    },

    {
      name: 'Smart Cat',
      description: 'Силикагелевый наполнитель с pH индикатором, 3л.',
      price: '450',
      key: 11,
      category:'toilet',
      src: "https://petandme.ru/upload/iblock/6d0/6d035182cb94231cb7a7d5d43e1b9626.jpeg" ,
    },

    {
      name: 'Fresh Step',
      description: 'Crystals - наполнитель впитывающий, силикагель',
      price: '760',
      key: 12,
      category:'toilet',
      src: "https://petandme.ru/upload/iblock/f6f/f6f6752365cdfed6454af9af79a34ade.png" ,
    },

    {
      name: 'Pretty Cat',
      description: 'Наполнитель силикагелевый "Кристаллы чистоты"',
      price: '3900',
      key: 13,
      category:'toilet',
      src: "https://petandme.ru/upload/iblock/67d/67db61b70fd97b027c1006b5dab14bd1.jpeg" ,
    },

    {
      name: 'Little Friends',
      description: 'Наполнитель силикагелевый Оригинальный',
      price: '560',
      key: 14,
      category:'toilet',
      src: "https://petandme.ru/upload/iblock/27f/27fdd08a3c601ca5f2acae68a26c7b9d.jpeg" ,
    },

    {
      name: 'Зооник',
      description: 'Силикагелевый наполнитель, 3,8л',
      price: '480',
      key: 15,
      category:'toilet',
      src: "https://petandme.ru/upload/iblock/bbb/bbb4913f5cf9d7e55f909b12299824bc.jpeg"  ,
    }


  ];


  

}
