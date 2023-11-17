"use strict";
window.onload = function () {

  let doc = document;

  let d = window.location.pathname;
  // let menuEnable = false;
  let menu = doc.getElementsByClassName("menuFiltr")[0];


  class Filtr {
    constructor() {
      this.selectSoft = doc.getElementsByClassName('groupSoft')[0];
      this.selectHard = doc.getElementsByClassName('groupHard')[0];
      // this.form = doc.getElementById("data");
      this.findButton = doc.getElementsByClassName("findBtn")[0];
      this.resetButton = doc.getElementsByClassName("resetFind")[0];

    };

    choose(name) {
      let Ach = doc.getElementsByClassName("item");
      for (let i = 0; i < Ach.length; i++) Ach[i].style.display = "none";
      Ach = doc.querySelectorAll(name);
      for (let i = 0; i < Ach.length; i++) Ach[i].style.display = "block";
    };

    resetFunction() {
      let find = doc.querySelector('input[name="answer"]:checked').value;
      let checklist = document.querySelectorAll('input[name="' + find + '"]:checked');
      if (checklist.length > 0) {

        for (let i = 0; i < checklist.length; i++) {
          checklist[i].checked = false
        }
      };

      doc.querySelector('input[name="answer"]:checked').checked = false;
      let Ach = doc.getElementsByClassName("item");
      for (let i = 0; i < Ach.length; i++) {
        Ach[i].style.display = "block"
      };
      this.typeNewsSel()
    };

    typeNewsSel() {
      if (d.search(/.*soft.html/, "") == 0) {
        this.choose(".soft");
        this.selectHard.style.display = "none";
      }

      if (-1 != d.search(/.*hard.html/, "")) {
        this.choose(".hard");
        this.selectSoft.style.display = "none";
      }
    };

    filtred=()=>  {
      let find = doc.querySelector('input[name="answer"]:checked').value;
      let checklist = doc.querySelectorAll('input[name="' + find + '"]:checked');
      if (checklist.length > 0) {

        let str = '';
        for (let i = 0; i < checklist.length; i++) {
          if (i == 0) {
            str = str + '.' + checklist[i].value
          } else {
            str = str + ',.' + checklist[i].value
          };
        };
        console.log(this);
        this.choose(str);
      } else {
        find = '.' + doc.querySelector('input[name="answer"]:checked').value;
        this.choose(find);
      }
    };
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
      doc.getElementsByClassName('form1Radio')[numberItems].checked = true;

    }
  }

  const ftr = new Filtr();


  ftr.typeNewsSel();


  if (doc.querySelector('input[name="answer"]:checked')) {
    let a = doc.querySelector('input[name="answer"]:checked');
    a.checked = false;
  }


  //formCheck

  if (document.querySelectorAll('input[name="soft"]:checked').length > 0) {
    let temp = document.querySelectorAll('input[name="soft"]:checked');
    for (let i = 0; i < temp.length; i++) {
      temp[i].checked = false;
    };
  }
  if (document.querySelectorAll('input[name="hard"]:checked').length > 0) {
    let temp = document.querySelectorAll('input[name="hard"]:checked');
    for (let i = 0; i < temp.length; i++) {
      temp[i].checked = false;
    };
  }




  ftr.selectSoft.addEventListener('click', () => {
    ftr.check('checkHard', 'checkSoft', 0)
  });

  ftr.selectHard.addEventListener('click', () => {
    ftr.check('checkSoft', 'checkHard', 1)
  });

  // ftr.form.addEventListener("submit",
  //   ftr.filtred);

  ftr.findButton.addEventListener('click',
    ftr.filtred);

  ftr.resetButton.addEventListener('click',
    ftr.resetFunction);



  menu.addEventListener("click", () => {
    // menuEnable = !menuEnable;
    if (doc.getElementsByClassName('filtr')[0].style.display == "none") {
      doc.getElementsByClassName('filtr')[0].style.display = "block";
      doc.getElementsByClassName('filtr')[0].style.position = 'fixed';
      // menu.style.position='fixed'
    } else {
      doc.getElementsByClassName('filtr')[0].style.display = "none";
      doc.getElementsByClassName('filtr')[0].style.position = '';
      // menu.style.position=''
    }
  });
};