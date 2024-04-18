

// function 테이블출력(){
//     const tbody = document.querySelector('tbody');
//     const parkCalc = JSON.parse(localStorage.getItem("parkCalc"))
//     console.log(parkCalc)
//     let price = 0;
//     let html = "";
//     for (let i = 0 ; i<parkCalc.length; i++){
//         html += `<tr><td>${parkCalc[i].cNum}</td><td>${parkCalc[i].enFullTime}</td><td>${parkCalc[i].oFullTime}</td><td>${parkCalc[i].price.toLocaleString()}</td><td><button type="button" onclick="삭제함수(${i})">삭제</button></td></tr>`
//         price += parkCalc[i].price;
//     }
//     html += `<tr>총계 : ${price.toLocaleString()}</tr>`
//     tbody.innerHTML = html;

// }
정렬()

function 정렬(i){ // parkcalc를 정렬해주는 함수
    const tbody = document.querySelector('tbody');
    const parkCalc = JSON.parse(localStorage.getItem("parkCalc"))
    let sorted = ["cNum","enFullTime","oFullTime","price"]; //매개변수로 받은 i의 인덱스에 따라 어떤 속성으로 정렬할지 정함
    let temp =""
    let a = sorted[i];
    let html = "";

    if (parkCalc.length == 0){
        tbody.innerHTML = html;
        return;
    }
    for(let i = 0; i<parkCalc.length; i++){
        for(let j = 0; j<parkCalc.length; j++){
            if(parkCalc[i][a] > parkCalc[j][a]){ //정렬함수
                temp=parkCalc[j];
                parkCalc[j] = parkCalc[i]
                parkCalc[i] = temp
            }
        }
    }
    
    localStorage.setItem(`parkCalc`,JSON.stringify(parkCalc));
    let price = 0;
    for (let i = 0 ; i<parkCalc.length-1; i++){  //정렬된 값 기반으로 정렬된만큼의 합계 (ex 출차시간으로 했을시 2023-12-28시에 나온 차들의 총합 가격 출력, i+1까지 참조해야하므로 length -1 까지만)
        if (parkCalc[i][a] == parkCalc[i+1][a]){ //정렬이 되었을때 만약 나보다 앞에있는놈이 나와 같은 a를 가진다?= 아직 총합을 표현할 타이밍이 아님
            html += `<tr><td>${parkCalc[i].cNum}</td><td>${parkCalc[i].enFullTime}</td><td>${parkCalc[i].oFullTime}</td><td>${parkCalc[i].price.toLocaleString()}</td><td><button type="button" onclick="삭제함수(${i})">삭제</button></td></tr>`
            price += parkCalc[i].price;
        }
        else{ //정렬이 되었을때 만약 나보다 앞에 있는놈이 나와 다른 a를 가진다? = 내가 마지막 인덱스이므로 총합과 함께 출력
            let daily = 0;
            for (let j= 0; j<parkCalc.length; j++){ //총합 구하기
                if (parkCalc[i][a] == parkCalc[j][a]){
                    daily += parkCalc[j].price
                }
            }
            html +=`<tr><td>${parkCalc[i].cNum}</td><td>${parkCalc[i].enFullTime}</td><td>${parkCalc[i].oFullTime}</td><td>${parkCalc[i].price.toLocaleString()}</td><td><button type="button" onclick="삭제함수(${i})">삭제</button></td></tr>
                    <tr><td>${parkCalc[i][a]}</td><td>총합</td><td>${daily.toLocaleString()}</td></tr>`
                    price += parkCalc[i].price;
        }
    }
    let daily =0; //빠진 맨 마지막인덱스(무조건 뒤에 총합이 나와야하므로 else문쪽으로) 추가
    for (let j= 0; j<parkCalc.length; j++){
        if (parkCalc[parkCalc.length-1][a] == parkCalc[j][a]){
            daily += parkCalc[j].price
        }
    }
    html += `<tr><td>${parkCalc[parkCalc.length-1].cNum}</td><td>${parkCalc[parkCalc.length-1].enFullTime}</td><td>${parkCalc[parkCalc.length-1].oFullTime}</td><td>${parkCalc[parkCalc.length-1].price.toLocaleString()}</td><td><button type="button" onclick="삭제함수(${parkCalc.length-1})">삭제</button></td></tr>
    <tr><td>${a == undefined? '전체':parkCalc[parkCalc.length-1][a]}</td><td>총합</td><td>${daily.toLocaleString()}</td></tr>`
    price += parkCalc[parkCalc.length-1].price;
    html += `<tr>총계 : ${price.toLocaleString()}</tr>`
    tbody.innerHTML = html;
}

function 삭제함수(i){
    const parkCalc = JSON.parse(localStorage.getItem("parkCalc"))
    parkCalc.splice(i,1);
    localStorage.setItem(`parkCalc`,JSON.stringify(parkCalc));
    정렬();
}