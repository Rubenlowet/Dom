//oefening1
let bodyRef = document.body;
bodyRef.classList.remove("bg-aqua");
bodyRef.classList.add("bg-olive");

let bgsil = document.getElementsByClassName("bg-silver");
for (var i = 0; i < bgsil.length; i++) {
bgsil[i].classList.add("bg-teal");
bgsil[i].classList.remove("bg-silver");
}

let bq=document.getElementsByTagName("blockquote")
for (var i = 0; i < bq.length; i++) {
bq[i].classList.add("bg-white");
}
//oefening2
document.querySelector("#my-table").classList.add("bg-purple");

let cop=document.querySelectorAll(".container p");
for (var i = 0; i < cop.length; i++) {
cop[i].classList.add("shadow");
};

//oefening3
let ex3 = document.getElementsByTagName("pre");
for (var i = 0; i < ex3.length; i++) {
ex3[i].style.color="#AC08CA";
ex3[i].style.backgroundColor="#CABBAC";
ex3[i].style.borderTop="3px solid red";
ex3[i].style.borderBottom="3px solid red";
}

document.querySelector("h3").innerHTML="<em>Italic title ! yeah !</em>";
document.querySelector("h2").innerHTML="<strong>HTML doesn't work !</strong>";

//oefening4
let LI = document.querySelector("ul").appendChild(document.createElement("LI"));
LI.innerHTML="My best friend is <a href='http://www.google.com'>Google</a>";

document.querySelector("ul li a:link").style.color="#11FF11";

//oefening5
let OL = document.querySelector("ol");
let OLCh = OL.children;
iEnd=OLCh.length;
for (var i = 0; i < iEnd; i++) {
OL.removeChild(OLCh[0]);
}

let array = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (var i = 0; i < array.length; i++) {
let spaceless=array[i].replace(" ", "");
LI=document.querySelector("ul").appendChild(document.createElement("LI"));
LI.innerHTML=("<a href='http://www."+ spaceless +".com'>"+array[i]+"</a>");
};
