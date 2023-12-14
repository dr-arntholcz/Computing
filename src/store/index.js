import {
  createStore
} from "vuex";

export default createStore({
  state: {
    showFiltr: false,
    listAllNews: [{
        id: 1,
        name: `Удивительное крепление кулера`,
        description: `Принесли в сервис комп с комментарием: "не включается"`,
        imgPatch: "./img/hard/horror-your-pc/kuler2.jpg",
        url: "./cooler1.html",
        classes: " hard cpu cooler ebobo",
      },
      {
        id: 2,
        name: `Подогрели ноутбук`,
        description: `Принесли ноут IP "настроить". Смотрю, а он такой`,
        imgPatch: "./img/hard/horror-your-pc/plita.jpg",
        url: "./electric-stove.html",
        classes: " notebook hard",
      },
      {
        id: 3,
        name: `ОЗУ пивасиком "угостили"`,
        description: `Комп не включается`,
        imgPatch: "./img/hard/horror-your-pc/beer.jpg",
        url: "./ram.html",
        classes: " hard ram ebobo",
      },
      {
        id: 4,
        name: `Удивительное питание ЦП`,
        description: `Принесли в сервис комп с комментарием: "не включается"`,
        imgPatch: "./img/hard/horror-your-pc/gnezdo.jpg",
        url: "./socket.html",
        classes: " hard cpu ebobo",
      },
      {
        id: 5,
        name: `Подогрели ноутбук`,
        description: `Принесли ноут IP "настроить". Смотрю, а он такой`,
        imgPatch: "./img/hard/horror-your-pc/plita.jpg",
        url: "./electric-stove.html",
        classes: " notebook hard",
      },
      {
        id: 6,
        name: `ОЗУ пивасиком "угостили"`,
        description: `Комп не включается`,
        imgPatch: "./img/hard/horror-your-pc/beer.jpg",
        url: "./ram.html",
        classes: " hard ebobo",
      },
      {
        id: 7,
        name: `Удивительное "сборка" Windows 7`,
        description: `Удивительное "сборка" Windows 7`,
        imgPatch: "./img/hard/horror-your-pc/kuler2.jpg",
        url: "./cooler1.html",
        classes: " soft win7",
      },
      {
        id: 8,
        name: `Осваиваем загрузку по PXE`,
        description: `Осваиваем загрузку по PXE`,
        imgPatch: "./img/hard/horror-your-pc/plita.jpg",
        url: "./electric-stove.html",
        classes: " soft pxe lan",
      },
      {
        id: 9,
        name: `Драйвер nvidia на Windows 10`,
        description: `Драйвер nvidia на Windows 10`,
        imgPatch: "./img/hard/horror-your-pc/beer.jpg",
        url: "./ram.html",
        classes: " soft driver win10 booox",
      },
      {
        id: 10,
        name: `Восстанавливаем систему chkdsk`,
        description: `Восстанавливаем систему chkdsk`,
        imgPatch: "./img/hard/horror-your-pc/gnezdo.jpg",
        url: "./socket.html",
        classes: " soft win7 chkdsk",
      }
    ]
  },
  getters: {
    getShowFiltr(state) {
      state.showFiltr
    }
  },
  mutations: {
    changeShowFiltr(state) {
      state.showFiltr = !state.showFiltr
    }
  },
  actions: {},
  modules: {},
});