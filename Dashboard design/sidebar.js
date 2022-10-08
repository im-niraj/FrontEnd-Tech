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


function show(shown, hidden) {
    console.log(shown, hidden);
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    
  }

  function loadHTML(){
    fetch('home.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }