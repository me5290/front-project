document.addEventListener("DOMContentLoaded",function(){
    유효성검사()
})

function 유효성검사(){
    let memberNumber = JSON.parse(localStorage.getItem("memberNumber"));
    if (!memberNumber){
        memberNumber = 0;
    }
    let goToPark = document.querySelector(`#goToPark`);

    if(memberNumber == 0){
        goToPark.style.display = "block";
    }
    else{
        goToPark.style.display = "none";
    }
}