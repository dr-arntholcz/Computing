<template>
  <div class="wrapper">
    <main class="content centr">
      <div class="filtr" v-show="showFiltred">
        <form class="form filtr-color" action="" id="data" onsubmit="return false;">
          <fieldset class="filtr-color groupFiltr">
            <p class="filtr-color">Тип новостей</p>
            <br />
            <div class="filtr-color" id="v-model-multiple-checkboxes">
              <fieldset class="filtr-color groupFiltr groupSoft" @click="check('checkHard', 'checkSoft', 0)">
                <input class="filtr-color form1Radio" id="formR1A1" type="radio" name="answer" value="soft" />
                <label class="filtr-color" for="formR1A1"> Софт<br />
                  &nbsp;<input type="checkbox" id="chkdsk" name="soft" class="filtr-color checkSoft formCheck"
                    value="chkdsk" />
                  <label class="filtr-color checkSoft formCheck" for="chkdsk" name="soft"> Chkdsk</label>
                  <br />
                  &nbsp;<input type="checkbox" id="pxe" name="soft" class="filtr-color checkSoft formCheck" value="pxe" />
                  <label class="filtr-color checkSoft formCheck" for="pxe" name="soft"> PXE</label><br />
                  &nbsp;<input type="checkbox" id="windows7" name="soft" class="filtr-color checkSoft formCheck"
                    value="win7" />
                  <label class="filtr-color checkSoft formCheck" for="windows7" name="soft"> Windows 7</label><br />
                  &nbsp;<input type="checkbox" id="windows10" name="soft" class="filtr-color checkSoft formCheck"
                    value="win10" />
                  <label class="filtr-color checkSoft formCheck" for="windows10" name="soft"> Windows 10</label><br />
                  &nbsp;<input type="checkbox" id="driver" name="soft" class="filtr-color checkSoft formCheck"
                    value="driver" />
                  <label class="filtr-color checkSoft formCheck" for="driver" name="soft"> Драйвер</label><br />
                  &nbsp;<input type="checkbox" id="nvidia" name="soft" class="filtr-color checkSoft formCheck"
                    value="nvidia" />
                  <label class="filtr-color checkSoft formCheck" for="nvidia" name="soft"> Nvidia</label><br />
                </label>
              </fieldset>
              <fieldset class="filtr-color groupFiltr groupHard" @click="check('checkSoft', 'checkHard', 1)">
                <input class="filtr-color form1Radio" id="formR1A2" type="radio" name="answer" value="hard" />
                <label class="filtr-color" for="formR1A2"> Хард<br />
                  &nbsp;<input type="checkbox" id="cpu" name="hard" class="filtr-color checkHard formCheck" value="cpu" />
                  <label class="filtr-color checkHard formCheck" for="cpu" name="hard"> ЦП</label><br />
                  &nbsp;<input type="checkbox" id="ram" name="hard" class="filtr-color checkHard formCheck" value="ram" />
                  <label class="filtr-color checkHard formCheck" for="ram" name="hard"> ОЗУ</label><br /></label>
              </fieldset>
            </div>
          </fieldset>
          <button class="resetFind filtr-color button" @click="resetFunction">Сброс фильтров</button>
          <button id="find" type="submit" form="data" class="filtr-color button findBtn" @click="filtred">
            Применить
          </button>
        </form>
      </div>
      <div class="box">
        <div>
          <h1 class="baner_h1">ТЫжпрограммист</h1>
          <img src="../../public/img/love.jpeg" class="baner" />
        </div>
        <div class="booox box2">
          <div class="lable booox">
            <h1 class="booox">Новости</h1>
          </div>
          <div class="booox">
            <h2 class="lable booox">Страшный сон для твоего ПК</h2>
            <div class="booox">
              <ul class="container booox">
                <li :class="'item booox' + item.classes" v-for="item of listNews" :key="item.id">
                  <div class="cardBox booox">
                    <a class="booox" :href="item.url">
                      <h3 class="cardTitle booox">
                        {{ item.name }}
                      </h3>
                      <img class="cardImage" :src="item.imgPatch" alt="kuler1" />
                      <p class="description booox">
                        {{ item.description }}
                      </p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <ul class="ulFooter1 footerMenu centr">
        <li class="liFooter1">
          <span class="textFooter1"> All rights reserved (C) </span>
        </li>
        <li class="liFooter1">
          <span class="textFooter1"> 2004-2023 </span>
        </li>
        <li class="liFooter1">
          <span class="textFooter1"> dr. Arntholcz </span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    filtrShow: Boolean,
  },
  data: () => ({
    // selectedTypeNews: [],
    listNews: Array
  }),
  methods: {
    choose(name) {
      let Ach = document.getElementsByClassName("item");
      for (let i = 0; i < Ach.length; i++) Ach[i].style.display = "none";
      Ach = document.querySelectorAll(name);
      for (let i = 0; i < Ach.length; i++) Ach[i].style.display = "block";
    },
    check(nameDis, nameEna, numberItems) {

      let temp = document.getElementsByClassName(nameDis);
      for (let i = 0; i < temp.length; i++) {
        temp[i].disabled = true;
        temp[i].checked = false;
      };
      temp = document.getElementsByClassName(nameEna);
      for (let i = 0; i < temp.length; i++) {
        temp[i].disabled = false;
      }
      document.getElementsByClassName('form1Radio')[numberItems].checked = true;
    },
    resetFunction() {
      let find = document.querySelector('input[name="answer"]:checked').value;
      let checklist = document.querySelectorAll('input[name="' + find + '"]:checked');
      if (checklist.length > 0) {

        for (let i = 0; i < checklist.length; i++) {
          checklist[i].checked = false
        }
      };

      document.querySelector('input[name="answer"]:checked').checked = false;
      let Ach = document.getElementsByClassName("item");
      for (let i = 0; i < Ach.length; i++) {
        Ach[i].style.display = "block"
      };
      // this.typeNewsSel()
    },
    typeNewsSel() {
      if (d.search(/.*soft.html/, "") == 0) {
        this.choose(".soft");
        this.selectHard.style.display = "none";
      }

      if (-1 != d.search(/.*hard.html/, "")) {
        this.choose(".hard");
        this.selectSoft.style.display = "none";
      }
    },
    filtred() {
      let find = document.querySelector('input[name="answer"]:checked').value;
      let checklist = document.querySelectorAll('input[name="' + find + '"]:checked');
      if (checklist.length > 0) {

        let str = '';
        for (let i = 0; i < checklist.length; i++) {
          if (i == 0) {
            str = str + '.' + checklist[i].value
          } else {
            str = str + ',.' + checklist[i].value
          };
        };
        this.choose(str);
      } else {
        find = '.' + document.querySelector('input[name="answer"]:checked').value;
        this.choose(find);
      }
    }
  },
  computed: {
    showFiltred() {
      return this.$store.state.showFiltr
    },
    getListNews() {
      return this.$store.state.listAllNews
    },
  },
  created() {
    this.listNews = this.getListNews;
  },
  mounted() {
  }
};
</script>