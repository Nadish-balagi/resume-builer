function addnewwefield(){
    //console.log("Adding New Field")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","enter here");

    let weob=document.getElementById("we");
    let weaddbuttonob=document.getElementById("weaddbutton");
    weob.insertBefore(newnode,weaddbuttonob);
}
function addnewaqfield(){
    //console.log("Adding New Field")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("aqfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","enter here");

    let aqob=document.getElementById("aq");
    let aqaddbuttonob=document.getElementById("aqaddbutton");
    aqob.insertBefore(newnode,aqaddbuttonob);
}
function addnewskfield(){
    //console.log("Adding New Field")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("skfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","enter here");

    let skob=document.getElementById("sk");
    let skaddbuttonob=document.getElementById("skaddbutton");
    skob.insertBefore(newnode,skaddbuttonob);
}
//genrating cv
function generatecv(){
    let namefield=document.getElementById("namefield").value;
    let namet1=document.getElementById("namet");
    namet1.innerHTML=namefield;
    document.getElementById("namet2").innerHTML=namefield;
    document.getElementById("contactt").innerHTML=document.getElementById("contactfield").value;
    document.getElementById("addresst").innerHTML=document.getElementById("Addressfield").value;
    document.getElementById("objt").innerHTML=document.getElementById("objfield").value;
    document.getElementById("lit").innerHTML=document.getElementById("linkedfield").value;
    document.getElementById("git").innerHTML=document.getElementById("gitfield").value;
    document.getElementById("mailt").innerHTML=document.getElementById("mailfield").value;
    document.getElementById("acht").innerHTML=document.getElementById("achfield").value;

    
    let aqs=document.getElementsByClassName("aqField");
    let str2 =" ";
    for (let e of aqs) {
        str2 =str2+`<li>${e.value}</li>`;
    }
    document.getElementById("aqt").innerHTML = str2;
    

 let wes=document.getElementsByClassName("weField");
    let str =" ";
    for (let e of wes) {
        str =str+`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;
    
    let sks=document.getElementsByClassName("skField");
    let str1 =" ";
    for (let e of sks) {
        str1 =str1+`<li>${e.value}</li>`;
    }
    document.getElementById("skt").innerHTML = str1;
document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";

}
function printcv(){
    window.print();

}
