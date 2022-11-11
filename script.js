var vote=0;
var rule_1=0;
co="o"
current_player=true;
window.onload=hello();
function hello(){
    bn = document.createElement("div");
    bn.innerHTML="Choose a color";
    bn.classList.add("moo");
    se= document.getElementById("mo");
     se.appendChild(bn);
    bn_but1=document.createElement("button");
    bn_but1.innerHTML="Done";
    bn_tab=document.createElement("table");
    bn_tab.classList.add("tab")
    bn_tr1=document.createElement("tr");
    bn_tab.appendChild(bn_tr1);
    bn_tr2=document.createElement("tr");
    bn_tab.appendChild(bn_tr2);
    bn_td1=document.createElement("td");
    bn_td1.classList.add("team");
    bn_td1.style.background="orange";
    bn_tr1.appendChild(bn_td1);
    bn_td2=document.createElement("td");
    bn_td2.classList.add("team");
    bn_td2.style.background="brown";
    bn_tr1.appendChild(bn_td2);
    bn_td3=document.createElement("td");
    bn_td3.classList.add("team");
    bn_td3.style.background="yellow";
    bn_tr1.appendChild(bn_td3);
    bn_td4=document.createElement("td");
    bn_td4.classList.add("team");
    bn_td4.style.background="blue";
    bn_tr2.appendChild(bn_td4);
    bn_td5=document.createElement("td");
    bn_td5.classList.add("team");
    bn_td5.style.background="green";
    bn_tr2.appendChild(bn_td5);
    bn_td6=document.createElement("td");
    bn_td6.classList.add("team");
    bn_td6.style.background="red";
    bn_tr2.appendChild(bn_td6);
    bn.appendChild(bn_tab);
    bn_but1.onclick=function(){
     if(vote===0){
      var too=document.createElement("div")
      too.innerHTML="Please select a colour";
      se.appendChild(too);
      too.classList.add("hell");
      setTimeout(function(){
       se.removeChild(too) 
      },1500)
     }
     else{
        call();
        se.removeChild(bn)
    }}
    bn_td1.onclick=function(){
       bn_td1.innerHTML="Selected";
       bn_td2.innerHTML="";
       bn_td3.innerHTML="";
       bn_td4.innerHTML="";
       bn_td5.innerHTML="";
       bn_td6.innerHTML="";
       vote=1;
    }
    bn_td2.onclick=function(){
       bn_td2.innerHTML="Selected";
       bn_td1.innerHTML="";
       bn_td3.innerHTML="";
       bn_td4.innerHTML="";
       bn_td5.innerHTML="";
       bn_td6.innerHTML="";
       vote=2;
    }
    bn_td3.onclick=function(){
      bn_td3.innerHTML="Selected";
      bn_td2.innerHTML="";
      bn_td1.innerHTML="";
      bn_td4.innerHTML="";
      bn_td5.innerHTML="";
      bn_td6.innerHTML="";
      vote=3;
    }
    bn_td4.onclick=function(){
      bn_td4.innerHTML="Selected";
      bn_td2.innerHTML="";
      bn_td3.innerHTML="";
      bn_td1.innerHTML="";
      bn_td5.innerHTML="";
      bn_td6.innerHTML="";
      vote=4;
    }
    bn_td5.onclick=function(){
      bn_td5.innerHTML="Selected";
      bn_td2.innerHTML="";
      bn_td3.innerHTML="";
      bn_td4.innerHTML="";
      bn_td1.innerHTML="";
      bn_td6.innerHTML="";
      vote=5;
    }
    bn_td6.onclick=function(){
      bn_td6.innerHTML="Selected";
      bn_td2.innerHTML="";
      bn_td3.innerHTML="";
      bn_td4.innerHTML="";
      bn_td5.innerHTML="";
      bn_td1.innerHTML="";
      vote=6;
    }
    bn_but1.classList.add("but");
    bn.appendChild(bn_but1)
}
var player_co="#0000ff";
var play_co="";
var playe_co="#00ff00";
var vaa=-1;
var meet=-1;
var meen=5;
var com=[];
function call(){
m_vote=vote;
var a="orange";
var b="brown";
var c="yellow";
var d="blue";
var e="green";
var f="red";
switch (m_vote){
 case 1: 
  player_co=a;
  break;
 case 2:
  player_co=b;
  break;
 case 3:
  player_co=c;
  break;
 case 4:
  player_co=d;
  break;
 case 5:
  player_co=e;
  break;
 case 6:
  player_co=f;
  break;

}
 let va_1=Math.ceil(Math.random()*6);
 while (va_1===m_vote) {
   va_1=Math.ceil(Math.random()*6);  
 }
 switch (va_1){
 case 1: 
  playe_co=a;
  break;
 case 2:
  playe_co=b;
  break;
 case 3:
  playe_co=c;
  break;
 case 4:
  playe_co=d;
  break;
 case 5:
  playe_co=e;
  break;
 case 6:
  playe_co=f;
  break;

}
cet=0
rule_win=[
["c","c1","c2"],
["c3","c4","c5"],
["c6","c7","c8"],
["c","c4","c8"],
["c2","c4","c6"],
["c","c3","c6"],
["c1","c4","c7"],
["c2","c5","c8"]
];
rule_si=["c","c1","c2","c3","c4","c5","c6","c7","c8"];
man_1=1;
man_2=2;
deep_shit=[]
met=Math.ceil(Math.random()*2);
mama=document.createElement("div");
se.appendChild(mama);
mama.classList.add("hell");
setTimeout(function(){
  se.removeChild(mama) 
  },500)
sep=choice(deep_shit)
}
function choice(role_0){
seem =0;
if (cet===0){
if (met===1){
   mama.innerHTML="its your turn"
   current_player=false;
   role_0[0]=man_1;
   rule_1=1;
}
else{
  mama.innerHTML="Its my turn";
  current_player=true;
  b_2(com)
  role_0[0]=man_2;
}
}
else {
 if(rule_1%2===0){
 role_0[rule_si.indexOf(com[vaa])]=2;
 }
 else{
   role_0[rule_si.indexOf(com[vaa])]=1;  
 }
  
}

}
function lool(sab){
    if (sab===1){
      play_co=playe_co; 
    }
    else {
      play_co=player_co; 
    }
}
food=0;
do_1=0;
nu=0;
function could(fa){
cee=fa.children[0]
pea=cee.getAttribute('id');
   for (van of com) {
    if(van===pea&& pea!==""){
      return false;
      }
     } return true;
}
function col(ca){
 cant=could(ca);
 if(cant===true){
   seen=0;
   var l_1
   rule_1++;
   var sam_s=document.createElement("div")
   sam_s.classList.add("hell")
       cet++;
       vaa++;
       com[vaa]=pea;
       meet++;
       var tube=choice(deep_shit);
     lool(deep_shit[rule_si.indexOf(com[vaa])]);
       ca.children[0].style.background=play_co;
       l_1=check_win(deep_shit,com,rule_win,vaa);
       if (l_1===1){
        sam_s.innerHTML="You loss";
        se.appendChild(sam_s);
        if (do_1===12){
        ca.children[0].style.background="white";
        }
         setTimeout(function(){
         se.removeChild(sam_s)  
       },1000)
       do_1=12;
       }
       if (l_1===2){
       sam_s.innerHTML="You won";
       se.appendChild(sam_s)
       if (do_1===12){
        ca.children[0].style.background="white";
        }
        setTimeout(function(){
         se.removeChild(sam_s)
       },1000)
       do_1=12
       }
       if(l_1===0){
         food++;
         if (food===9){
         do_1=12;
         sam_s.innerHTML="Its a draw";
         se.appendChild(sam_s)
         setTimeout(function(){
         se.removeChild(sam_s)
         },1000)
       }}
       if(current_player){
      current_player=false;
  }else{
      current_player=true;
  }  
  b_2(com);
  
  console.log(current_player)
       met=3;
   }}
  
function manoj() {
    if(com.length >0){
    
   for (var va of com){
    var mee=document.getElementById(va);
    mee.style.background="#ffffff";
    vaa--;
    }
    rule_1=0;
    com.splice(0,com.length);
   }
   hello();
   }
function mano(){
if(current_player) {
    if(do_1!==12){
    rule_1--;
    if(com.length >0){
    var mee=document.getElementById(com[vaa]);
    mee.style.background="#ffffff";
    com.splice(vaa,1);
    meen--;
    vaa--;
    }
    if(current_player){
      current_player=false;
  }else{
      current_player=true;
  }
    }
}}

function man(){
    if(confirm("Do u want to quite")){
        manoj();
        
    }
}
function funn(a){
    console.log("hello"+a)
}
function stop(de){
 if (de===5){
    conlsole.log("u are a fool")
 } 
}
mad=["c","c1","c2","c3","c4","c5","c6","c7","c8"]
function check_win(laa,se,me,t){
 var meep
 var deep
 var lan
 sa_1=[];
 sa_2=[];
 for (ved of com){
   if(laa[mad.indexOf(ved)]===1) {
   sa_1.splice(sa_1.length,0,ved) 
 } else{
   sa_2.splice(sa_2.length,0,ved)
 }
 }
 deep=slot_0(sa_1,me)
 meep=slot_0(sa_2,me)
 lan=first(deep,meep)
 return lan;
}

function slot_0(sem,tu){
var dt=0;
 while(dt<8){
d_1=0
   tu[dt].forEach(seag=>d_2(sem,seag))
   if(d_1===3){
   return true;
   }
  dt++;}
  return false;
}
function d_2(sem,seag){
    if (sem.includes(seag)){
    d_1++; 
   }
}
function first(fst,fdt){
  if(fst){
   return 1;   
  }
 else if(fdt){
   return 2;    
  }
  else{
  return 0;
}} 
fool_2=[];
fool_3=[];
function b_2(sta_r){
if(current_player){
var ran_1=Math.ceil(Math.random()*12)-1;
console.log(ran_1);
console.log(co)
if(dec_ch(sta_r)&& met===2){

if (ran_1<9){
   document.getElementById(mad[ran_1]).click()
}
if (ran_1>=9){
    document.getElementById(mad[4]).click()
}
co="fe";
}
else{
  detect_1(rule_win,sa_1,fool_2)
  console.log(fool_2)
  detect_1(rule_win,sa_2,fool_3)
  console.log(fool_3)
  fool_4 = check_num(fool_2,fool_3);
  fool_5 = check_num(fool_3,fool_2);
  check_num1(fool_4,sa_1,0)
  check_num1(fool_5,sa_2,1)
  console.log(fool_4)
  console.log(fool_5)
}}
co=sta_r;
}
function detect_1(far,tar,fool_1){
 var dt=0;
 while(dt<8){
   dt_1=0
   far[dt].forEach(sea=>dt_2(tar,sea))
   fool_1[dt]=dt_1
  dt++;}
}
function dt_2(tar,sea){
     if (tar.includes(sea)){
    dt_1++; 
   }
}
function dec_ch(fe){
 return fe.length===0;
}
function check_num(loo,sool){
var t=0
var loos=[]
 for(sam of loo){
   if (sool[t]!==0){
      loos[t]=-1; 
   }else {
       loos[t]=sam
   }
   t++; 
 }return loos
}
function check_num1(lool,faat,soo_2) {
var sat_3=0;
sat_2=[];
var b_te;
var sat_1=0;
  if(lool.includes(2)){
  for(ma_a of rule_win[lool.indexOf(2)]){
    if (!faat.includes(ma_a)){
    if (current_player){
    document.getElementById(ma_a).click();
    }}
  }
  } 
  else if(soo_2===0){
    for(ms_s of lool){
    if (ms_s===-1){
     sat_2[sat_3]=sat_1;
     sat_3++; 
    }
    sat_1++;
    }
    console.log(sat_2)
   b_te=tac_2(sat_2)
    for(ma_ta of rule_win[b_te]){
    if(current_player){
    if (!faat.includes(ma_ta)){
    document.getElementById(ma_ta).click();
    }}
  }
  } 
}
function tac_2(sa) {
 var ba_t=Math.ceil(Math.random()*sa.length)-1
 return ba_t;
}