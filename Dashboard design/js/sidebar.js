const collaps = () => {
    var sidebar = document.getElementById("sidebar");
    var styleOne = document.getElementById("style-one");
    var styleTwo = document.getElementById("style-two");
    if(sidebar.classList.contains("activeSidebar")){
        sidebar.classList.remove("activeSidebar");
        styleOne.classList.add('sidebar-small-active');
        styleTwo.classList.remove('sidebar-small-active');
    }
    else{
        sidebar.classList.add("activeSidebar");
        styleTwo.classList.add('sidebar-small-active');
        styleOne.classList.remove('sidebar-small-active');
        console.log(styleOne.classList)
    }
}


function show(shown, hidden, active, active11) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    var ul =document.getElementById("ul");
    for(let i=0; i<ul.children.length; i++){
        ul.children[i].classList.remove("activePage");
    }
    var ul1 =document.getElementById("ul1");
    for(let i=0; i<ul1.children.length; i++){
        ul1.children[i].classList.remove("activePage");
    }
    document.getElementById(active).classList.add('activePage');
    document.getElementById(active11).classList.add('activePage');
  }

  function loadHTML(){
    fetch('home.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }