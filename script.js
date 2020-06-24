function change(elem) {
    elem.style.transitionDuration = "1s";
    document.body.style.transitionDuration = '1s';

    document.body.style.background = '#fefcfb';

    var x = document.getElementsByTagName('a');
    var social = document.getElementById('social').getElementsByTagName('a');
    var title = document.getElementsByTagName('h1');
    
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.transitionDuration = "1s";
      x[i].style.color = "#034078";
    }
    for(i = 0; i < social.length; i++) {
      social[i].style.transitionDuration = "1s";
      social[i].style.backgroundColor = '#034078';
      social[i].style.color = '#fefcfb';
    }
    for(i = 0; i < title.length; i++) {
      title[i].style.transitionDuration = "1s";
      title[i].style.color='#034078';
    }

    if(elem.parentElement.parentElement.id.localeCompare("social")== 0) {
        elem.style.color = '#034078';
        elem.style.background = '#fefcfb';
    }
    else {
        elem.style.color = '#fefcfb';
        elem.style.background = '#034078';
    }
  }

  function revert(elem) {
    elem.style.transitionDuration = "1s";

    if(elem.parentElement.parentElement.id.localeCompare("social") == 0) {
        elem.style.color = '#fefcfb';
        elem.style.background = '#034078';
    }
    else {
        elem.style.background = 'none';
        elem.style.color = '#034078';
    }
  }