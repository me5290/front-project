
// 현재 선택된 주차장번호 가져오기
let ParkIndex= JSON.parse(localStorage.getItem("ParkIndex")); 

// 주차장배열가져오기,없으면 15개의 인덱스를 가진 배열 선언
let parkArray= JSON.parse(localStorage.getItem("parkArray"));
if(!parkArray){
    parkArray=[];
    for ( let i =0; i<15; i++){
        parkArray.push({carNumber:"",enTime:""});
        localStorage.setItem(`parkArray`,JSON.stringify(parkArray));
    }
}


 
function park(j){ //topPark부분 html갱신
    let html = "";
    const topPark = document.querySelector(`#topPark`);
    html += `<div id="nows">지하${j+1}층</div>`;
    for(let i = j*5; i<5+j*5; i++){ //1층:0~4번째,2층:5~9번째,3층:10~14번째식
        html += `<span onclick="sel(${i})" class="${parkArray[i].carNumber? `full`:``} ${ParkIndex==i?`select`:``}">${parkArray[i].carNumber?"차량번호 "+parkArray[i].carNumber+"이 주차됨":i+1 + "번째 주차장소"}</span>`
    }
    topPark.innerHTML = html;

}

park(0);

function sel(i){ //park로 불러온 주차장 그림을 클릭해서 원하는 장소에 주차 가능하게하기+선택시 css변경하기위해 park 재호출
    ParkIndex = i;
    localStorage.setItem(`ParkIndex`,ParkIndex)
    park(parseInt(i/5))
}





function 입차(){
    const cNum = document.querySelector("#cNum").value;
    let time = document.querySelector("#time").value;
    //유효성검사
    if(ParkIndex <0 || ParkIndex > parkArray.length){
        alert("오류가 일어났습니다.")
        return;
    }
    if(parkArray[ParkIndex].carNumber){
        alert("다른사람이 사용중인 장소입니다");
        return;
    }
    for(let i = 0; i<parkArray.length; i++){
        if(parkArray[i].carNumber == cNum){
            alert("이미 주차중인 차량입니다.")
            return;
        }
    }


    // time = time.split("-")[0]+time.split("-")[1]+time.split("-")[2].split("T")[0]+time.split("-")[2].split("T")[1].split(":")[0]+time.split("-")[2].split("T")[1].split(":")[1]
    console.log(time);
    // 위의 sel()로 선택한 parkIndex에 해당하는 자리=parkArray의 인덱스번호이므로 그 값을 바꿔줌
    parkArray[ParkIndex] ={
        carNumber : cNum,
        enTime : {year:Number(time.split("-")[0]),month :Number(time.split("-")[1]), day:Number(time.split("-")[2].split("T")[0]),hour:Number(time.split("-")[2].split("T")[1].split(":")[0]),min:Number(time.split("-")[2].split("T")[1].split(":")[1])}
        ,enFullTime: time
    }

    localStorage.setItem(`parkArray`,JSON.stringify(parkArray));
    alert("주차성공");

    park(parseInt(ParkIndex/5));
}

function 층찾기(){
    const fNum = document.querySelector("#fNum").value;
    // 객체안 배열의 indexOf
    let index = parkArray.findIndex(i => i.carNumber == fNum);
    if(index >= 0){
        alert(`${fNum}은 ${index+1}번에 있으며 지하 ${parseInt(index/5)+1}층에 있습니다`)
        park(parseInt(index/5)) 
        return;
    }
    alert("해당 차번이 존재하지 않습니다")
}

function 출차(){
    const cNum = document.querySelector("#cNum").value;
    let time = document.querySelector("#time").value;
    let index = parkArray.findIndex(i => i.carNumber == cNum);
    let price = 0;
    if(index < 0){
        alert("해당 차번이 존재하지 않습니다")
        return;
    }
    const calc ={
        cNum : cNum,
        entime : parkArray[index].enTime,
        oTime : {year:Number(time.split("-")[0]),month :Number(time.split("-")[1]), day:Number(time.split("-")[2].split("T")[0]),hour:Number(time.split("-")[2].split("T")[1].split(":")[0]),min:Number(time.split("-")[2].split("T")[1].split(":")[1])}
        ,
        enFullTime : parkArray[index].enFullTime
        ,
        oFullTime : time
    }

    price = (calc.oTime.month-calc.entime.month)*30*24*60+(calc.oTime.day-calc.entime.day)*24*60+(calc.oTime.hour-calc.entime.hour)*60+calc.oTime.min-calc.entime.min
    console.log(price);
    if (price < 0 ){
        alert("출차시간에 오류가 있는것 같습니다.");
        return;
    }
    // 달부분 고치기
    calc.price = price-30>=0?parseInt((price-30)/10)*1000:0;
    
    let parkCalc= JSON.parse(localStorage.getItem("parkCalc"));
    if(!parkCalc){
        parkCalc=[];
    }
    let temp =""
    for(let i = 0; i<parkCalc.length; i++){
        for(let j = 0; j<parkCalc.length; j++){
            if(parkCalc[i].time > parkCalc[j].time){
                temp=parkCalc[j];
                parkCalc[j] = parkCalc[i]
                parkCalc[i] = temp
            }
        }
    }
    parkCalc.push(calc);
    localStorage.setItem(`parkCalc`,JSON.stringify(parkCalc));
    parkArray[index].carNumber = "";
    parkArray[index].enTime ="";
    
    localStorage.setItem(`parkArray`,JSON.stringify(parkArray));
    park(parseInt(index/5));

    alert(`총${price}분 있었으며, 주차요금은 ${(calc.price).toLocaleString()}원 입니다`)

}