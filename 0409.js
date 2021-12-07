///////////////////////////////quickmenu////////////////
let quickMenu = document.querySelectorAll('.quickhover');
let quickWrap = document.querySelector('#quickmenuwrap');
let quickMenuWrap = document.querySelector('#quickhoverwrap')

function quickBtn(btn){
    
    if(btn.value == 1){
        btn.classList.remove('anioff');//버튼 돌아가는거
        quickWrap.setAttribute('class','hoverbtn');//#quickmenuwrap height:64>330
        quickMenuWrap.style.display = "flex";  
        quickMenuWrap.setAttribute('class','wraphover');//#quickhoverwrap height:0>264
        btn.classList.add('anion');//버튼 돌아가는거
        btn.setAttribute('value','0');
    } else{
        btn.classList.remove('anion');//버튼 돌아가는거
        quickWrap.setAttribute('class','offbtn');//#quickmenuwrap height:330>64
        quickMenuWrap.style.display = "block";        
        quickMenuWrap.setAttribute('class','wraphoverdown');//#quickhoverwrap height:264 >0
        btn.classList.add('anioff');//버튼 돌아가는거
        btn.setAttribute('value','1');
    }
}

/////////////////////////////headmenu///////////////////
search = document.querySelector('#search');

function searchpls(){
    if(search.getAttribute("class")=='searchoff' || search.getAttribute("class")=='' ){
        search.setAttribute('class','searchclick');
    }else{
        search.setAttribute('class','searchoff');
    }
}

/////////////////opacity animation///////////////////
const io = new IntersectionObserver(entries =>{
    entries.forEach(
        entry => { 
            if(entry.intersectionRatio>0){
                entry.target.classList.add('plus');
            } else{
                entry.target.classList.remove('plus');
            }
        })
});     

const boxEl = document.querySelectorAll('.todaybook > a > h2');
boxEl.forEach((el)=>{io.observe(el);})

const boxel = document.querySelectorAll('h1');
boxel.forEach((el)=>{io.observe(el);})

const boxel2 = document.querySelectorAll('h5');
boxel2.forEach((el)=>{io.observe(el);})


/////////////////////banner javascript/////////////////////
index=0;
bannerrolling = null;
//국내 소설 같은 메뉴 각 li에 a해서 저장되어 있음.
menu = document.querySelectorAll('.visual_menu > ul > li');
//배너 부분의 ul부분 총 8개
bannerul = document.querySelectorAll('.visual_banner > ul');
//이벤트바의 ul부분 총 8개
eventul = document.querySelectorAll('.visual_event_bar> ul');

//배너부분의 li부분 가변적임
bannerli = document.querySelectorAll('.visual_bar> li');

visualBar = document.querySelectorAll('.visaul_bar');
//이벤트바의 li부분 가변적임
eventli = document.querySelectorAll('.visual_event> li');
li = document.querySelector('.visual_event> li');
visualSub = document.querySelectorAll('.visual_submenu > div');
button1 = 
'<button class="visualBtnleft" onclick="bannerbtn1()">&lt</button>;';
button2 = '<button class="visualBtnright" onclick = "bannerbtn2()">&gt</button>;';


function buttonpls(){

    for(let k=0; k<bannerul.length; k++){
        bannerul[k].innerHTML+=button1;
        bannerul[k].innerHTML+=button2;
    }
}
buttonpls();

//visual메뉴에 호버하면 바뀌는 효과
function visual(type,n){
    eventli = document.querySelectorAll('.visual_event> li');
    bannerli = document.querySelectorAll('.visual_bar> li');
    if(n!= undefined){
        index = n;
    }
    if(type == 0){
        index--;
        if((index)<= -1){
            index = bannerli.length-1;
        }
        for(let i=0; i < bannerli.length ; i++ ){
            
            if(i == (index)){                      
                eventli[i].setAttribute('class','block');
                
                bannerli[i].setAttribute('class','on');
            }else{
                eventli[i].setAttribute('class','');
                bannerli[i].setAttribute('class','no');
            }
        }
    }else{
        index++;        
        if(index >= bannerli.length){
            index=0;}
        for(let i=0; i<bannerli.length;i++){
            if(i == index){       
                eventli[i].setAttribute('class','block');
                bannerli[i].setAttribute('class','on');
            }else{
                eventli[i].setAttribute('class','');
                bannerli[i].setAttribute('class','no');
            }
        }        
    }
}

//함수 2개 interval되도록함.
function rollingVisual(){
    bestRolling();
    visual();
}

bannerrolling = setInterval(rollingVisual,5000);

//비쥬얼메뉴에서 화살표버튼 누르면 나타나는 효과들
function bannerbtn1(){
    clearInterval(bannerrolling);
    visual(0);
    bannerrolling = setInterval(rollingVisual,5000);
}

function bannerbtn2(){
    clearInterval(bannerrolling);
    visual(1);
    bannerrolling = setInterval(rollingVisual,5000);
}

//이벤트메뉴에서 갖다대면 배너가 바뀌는 효과
function bannermenu(n){
    clearInterval(bannerrolling);
    visual(2,n);
}

//이벤트메뉴 호버하면 색깔 하얀색으로 바꾸는거//
index2=0;
function findindex(li2){    
    clearInterval(bannerrolling);    
    for(j=0;j<eventli.length;j++){
        if(eventli[j]==li2){
            eventli[j].setAttribute('class','block');
            index2= j-1;
        } else{
            eventli[j].setAttribute('class','');
        }
    }
    visual(2,index2);
}


//모든 li에 onmouseover하는 효과
visualUl=document.querySelectorAll('.visual>li');
bannerUl=document.querySelectorAll('.visual_banner > ul > li');
window.onload = function(){
    
    for(k=0;k<visualUl.length; k++){
    visualUl[k].setAttribute('onmouseover','findindex(this); clearIn();');
    visualUl[k].setAttribute('onmouseout','setIn()');
    bannerUl[k].setAttribute('onmouseover','clearIn()');
    bannerUl[k].setAttribute('onmouseout','setIn()');
   
    }
}


//주메뉴에 호버하면 나타나는 효과
function addHover(menuli){
    clearInterval(bannerrolling);    
    for(b=0;b<menu.length;b++){
        if(menuli==menu[b]){
            eventul[b].setAttribute('class','visual_event visual');
            bannerul[b].setAttribute('class','visual_bar');
            menu[b].setAttribute('class','block');
            visualSub[(b)].setAttribute('class','visualsub');

        } else{
            eventul[b].setAttribute('class','visual_eventno visual');
            bannerul[b].setAttribute('class','visual_barno');
            menu[b].setAttribute('class','');
            visualSub[(b)].setAttribute('class','visualsubno');
        }        
    }  
    visual(2,-1);  
    bannerrolling = setInterval(rollingVisual,5000);
}

//주메뉴에 호버 더하는 함수
function addMouseEvent(){
    for(k=0;k<menu.length; k++){
    menu[k].setAttribute('onmouseover','addHover(this)');
    }
}

addMouseEvent();
function clearIn (){
    clearInterval(bannerrolling);
}
function setIn(){
    bannerrolling = setInterval(rollingVisual,5000);
}

////////////////bestseller javascritp////////////////////

best=document.querySelectorAll('.bestseller >li');

bestseller = document.querySelectorAll('.bestSection');

bestrolling=null;

//메뉴에 호버 더하는 효과 
function bestAddHover(){
    for(a=0;a<best.length;a++){
        best[a].setAttribute('onmouseover','bestHover(this);');
    }
}

//호버하면 맞는 책들 배치하는 효과
function bestHover(bestli){
    for(s=0;s<best.length;s++){
        if(bestli == best[s]){
            bestseller[s].setAttribute('class','bestseller_visual bestSection');
        } else{
            bestseller[s].setAttribute('class','bestseller_visualno bestSection');
        }
    }
}

bestAddHover();

//bestRolling1();
function bestRolling1(){
    let li2 = document.querySelector('.bestseller_visual');
    let li1 = document.querySelectorAll('.bestseller_visual>.bestcollector');
    li2.prepend(li1[9]);
}

//베스트셀러 이미지 애니메이션 효과//

function bestRolling(){    
    let li2 = document.querySelector('.bestseller_visual');
    let li1 = document.querySelectorAll('.bestseller_visual>.bestcollector');
    qury = document.querySelectorAll('.bestseller_visual >.bestcollector>a>img');
    for (let i=0;i<li1.length;i++){
        if(i==li1.length-1){
            li1[li1.length-1].classList.remove('on1');
            li1[0].classList.remove('off10');
            qury[li1.length-1].style.filter = "grayscale(.1) opacity(0.8) brightness(0.3)";
            qury[1].style.filter = "grayscale(.1) opacity(0.8) brightness(0.3)";
        }
        li1[i].classList.remove('on'+(i+2));
        li1[i].classList.remove('off'+(i));
    }   
    for(let i = 0; i <li1.length; i++){
        li1[i].classList.add('on'+(i+1));
        }
        qury[0].style.filter = "unset";
    li2.appendChild(li1[0]);
}





//베스트셀러 이미지 거꾸로 가는 효과//
function bestRollingReverse(){
    qury = document.querySelectorAll('.bestseller_visual >.bestcollector>a>img');
    let li2 = document.querySelector('.bestseller_visual');
    let li1 = document.querySelectorAll('.bestseller_visual>.bestcollector');
    for (let i=0;i<li1.length;i++){
        if(i==li1.length-1){
            li1[li1.length-1].classList.remove('on1');
            li1[0].classList.remove('off10');
            qury[li1.length-1].style.filter = "grayscale(.1) opacity(0.8) brightness(0.3)";
            qury[1].style.filter = "grayscale(.1) opacity(0.8) brightness(0.3)";}
        li1[i].classList.remove('on'+(i+2));
        li1[i].classList.remove('off'+(i));
    }   
    //li1 = document.querySelectorAll('.bestseller_visual>.bestcollector');
    for(let i = 0; i <li1.length; i++){
                li1[i].classList.add('off'+(i+1));
        }
    qury[0].style.filter = "unset";
    li2.prepend(li1[9]);
    

}

//왼쪽 버튼 누를 때 효과
function bestBtnLeft(){
    clearInterval(bannerrolling);
    bestRollingReverse();
    bannerrolling = setInterval(rollingVisual,5000);
}

//오른쪽 버튼 누를 때 효과
function bestBtnRight(){
    clearInterval(bannerrolling);
    bestRolling();
    bannerrolling = setInterval(rollingVisual,5000);
}

bestCollector = document.querySelectorAll('.bestcollector');
function bestCollectorHover(){
    for(let k = 0 ; k <bestCollector.length ; k++){
        bestCollector[k].setAttribute('onmouseover','clearIn();');
        bestCollector[k].setAttribute('onmouseout','setIn();');
    }
}

bestCollectorHover();


///////////////////////////yesTV/////////////////////////
yesNavi = document.querySelectorAll('.yesTV_navi>li');
yesTVYoutube = document.querySelectorAll('.yesTV_youtube>li');
yesTV_book = document.querySelectorAll('.yesTV_book>li');

//navi에 호버효과 더하는 함수 
function tvHoverAdd(){
    for(let i = 0; i < yesNavi.length ; i++){
        yesNavi[i].setAttribute('onmouseover','tvHover(this)');
    }
}

tvHoverAdd();

//navi에 호버하면 맞는 내용 나타나는 효과
function tvHover(tv){
    for(let i = 0; i <yesNavi.length ; i++){
        if(tv == yesNavi[i]){
            yesTVYoutube[i].setAttribute('class','');
            yesTV_book[i].setAttribute('class','');
        } else{
            yesTVYoutube[i].setAttribute('class','no');
            yesTV_book[i].setAttribute('class','no');
        }
    }
}
