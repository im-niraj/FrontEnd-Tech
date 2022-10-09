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
    fetch('./html/home.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }



  // pagination

  const ulTag  = document.querySelector("#ulTag");
  let totalPages = 20;

  function element(totalPages, page){
    let liTag = '';
    let activeLi = '';
    let beforePages = page -1;
    let afterPages = page +1;
    if(page > 1){
        liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span>Prev</span></li>`;
    }
    if(page > 2){
        liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
        if(page > 3){
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }
    
    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++){
        if(pageLength > totalPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength +1;
        }
        if(page == pageLength){
            activeLi = "pageActive";
        }
        else{
            activeLi = "";
        }
        liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }
    if(page < totalPages - 1){
        if(page < totalPages - 2){
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if(page < totalPages){
        liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1})"><span>Next</span></li>`;
    }


    ulTag.innerHTML = liTag; 

  }

  element(totalPages,2) //calling abouve function with passing values