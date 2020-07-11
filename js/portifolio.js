var allImages = Array.from(document.querySelectorAll('.sliderItem'));
var bullits = Array.from(document.querySelectorAll('.bullits ul li'));
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

var currentDivImg = 0;
lastImg = allImages.length -1;
checkImg();

for (let i = 0; i < bullits.length; i++){

  bullits[i].onclick = function(){
    currentDivImg = parseInt(bullits[i].getAttribute('data-index'));
    checkImg();
  }

}

function checkImg(){
  // console.log(currentDivImg);
  removeActives();

  if ( currentDivImg === -1){
    currentDivImg = allImages.length -1 ;
  }
  if ( currentDivImg === allImages.length   ) {
    currentDivImg = 0;
  }

  allImages[currentDivImg].classList.add('active');
  bullits[currentDivImg].classList.add('active');
  
}

function removeActives(){
  allImages.forEach(element => {
    element.classList.remove('active');
  });

  bullits.forEach(function(bullitItem){
    bullitItem.classList.remove('active');
  });
}
next.onclick = function(){
  currentDivImg++;
  checkImg();
}
prev.onclick = function(){
  currentDivImg--;
  checkImg();
}

var statics = document.querySelectorAll('.parentSpan .statics');
getNumStatic();
function getNumStatic(){

  for( var i = 0; i < statics.length; i++ ) {

    var data = parseInt(statics[i].getAttribute('data-statics'));
    if ( data === 0 ) {
      statics[i].style.width = data+'%';
      statics[i].style.color = "#000";
      statics[i].style.padding = "5px 15px";
      statics[i].style.fontWeight = "500";
      statics[i].style.fontFamily = "Arial, Helvetica, sans-serif";
      statics[i].innerText = "SOON";
    }else {
      statics[i].style.width = data - 30+'%';
    } 
  }
}
// $(document).ready(function(){
  
//   $(window).resize(function(){
//     for ( var i = 0; i < $('.statics').length; i++ ){
//       var date = parseInt($('.statics'[i]).attr('data-statics'));
//       console.log(date);
//       if(date === 0){
//         $('.statics'[i]).css('width', 5 + "px");
//         $('.statics'[i]).css('color', "#000");
//         $('.statics'[i]).css('padding', "5px 15px");
//         $('.statics'[i]).css('fontWeight', "500");
//         $('.statics'[i]).css('fontFamily', "Arial, Helvetica, sans-serif");
//         $('.statics'[i]).css('innerText',"SOON");
//         alert(9)
//       }else{
//         $('.statics'[i]).css('width', $('.parentSpan'[i]).outerWidth - $(".CouresName"[i]).outerWidth + "px" );
//         alert(0)
//       }
//     }
//   });
// });
var layout = document.querySelector('.layout');
var popupFullImg = document.querySelector('.popup-full-img');
var fullscreen = document.querySelector('.bi-x-square');

layout.onclick = function showPopup(){
  popupFullImg.style.display = "block";
}
fullscreen.onclick = function hiddePopup(){
  popupFullImg.style.display = "none";
}



// subsitution-arrow
portifolioToggleInfo();

function portifolioToggleInfo() {  

  var li = document.querySelectorAll('.tabs ul li');


    for (var i = 0; i < li.length; i++){
      li[i].onclick = function(){
        this.nextElementSibling.classList.toggle('toggleItem');
    }
  }
}
portfoliosTabs();
function portfoliosTabs(){

  // Function To Do Control Between All Tabs In Projects 

  var tabs = document.querySelectorAll('.first-li');

  for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = function(){
      var IDControl = this.getAttribute('data-tab');
      portfolioRemoveActive();
      document.getElementById(IDControl).classList.add('active');
      
    }
  }

}

function portfolioRemoveActive(){
  // project-info
  var projectInfo = document.querySelectorAll('.project-info');

  // Function To Remove All Active Class In Tabs 

  projectInfo.forEach(function(item){
    if(item.classList.contains('active')){
      item.classList.remove('active');
    }
  });

}

// Initialize all Variables I'll use it 
var 
    homeSection = document.getElementById('homeSection'),
    aboutSection = document.getElementById('aboutSection'),
    skillsSection = document.getElementById('skillsSection'),
    portfolioSection = document.getElementById('portfolioSection'),
    imagesSection = document.getElementById('imagesSection'),
    contactSection = document.getElementById('contactSection');

var 
    homeSectionli = document.querySelector('.homeSection'),
    aboutSectionli = document.querySelector('.aboutSection'),
    skillsSectionli = document.querySelector('.skillsSection'),
    portfolioSectionli = document.querySelector('.portfolioSection'),
    imagesSectionli = document.querySelector('.imagesSection'),
    contactSectionli = document.querySelector('.contactSection');




// Function To Control Active Classes in NavBar  
window.onscroll = function() {

  // For Home Section
  if ( window.pageYOffset >= homeSection.offsetTop ){
    homeSectionli.classList.add('active');
  }


  // For About Section
  if ( window.pageYOffset >= aboutSection.offsetTop ){
    removeActiveNavbar();
    aboutSectionli.classList.add('active');
  }else{
    aboutSectionli.classList.remove('active');
  }

  


  // For skills Section
  if ( window.pageYOffset >= skillsSection.offsetTop ){
    removeActiveNavbar();
    skillsSectionli.classList.add('active');
  }
  
  

  // For Portfolio Section
  if ( window.pageYOffset >= portfolioSection.offsetTop ){
    removeActiveNavbar();
    portfolioSectionli.classList.add('active');
  }
  
  

  // For images Section
  if ( window.pageYOffset >= imagesSection.offsetTop ){
    removeActiveNavbar();
    imagesSectionli.classList.add('active');
  }
  

  // For Contact Section
  if ( window.pageYOffset >= contactSection.offsetTop ){
    removeActiveNavbar();
    contactSectionli.classList.add('active');
  }
}



// Function To remove All Active Classes From List Item NavBar

function removeActiveNavbar(){
  var navbarListItem = document.querySelectorAll('.navbar-nav .nav-item');

  navbarListItem.forEach(function(listItem){
    listItem.classList.remove('active');
  });
}

