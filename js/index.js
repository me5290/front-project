// 메인배너 S

//기본셋팅
document.addEventListener('DOMContentLoaded', function(){
    let eventArray = JSON.parse(localStorage.getItem('eventList'));
    console.log(eventArray);
    if(eventArray==null){
        eventArray=[
            {
                eContent : "환영 이벤트",
                eDate : "2024-1-14",
                eImg: "../img/event_view/event_1_view.png",
                eName : "앱 신년 이벤트",
                eNum : 1,
                sDate: "2023-12-15"
            },
            {
                eContent: "크리스마스 현장으로 여러분을 초대합니다!",
                eDate:"2023-12-31",
                eImg: "../img/event_view/event_2_view.PNG",
                eName: "La Boutique d'Harry",
                eNum: 2,
                sDate: "2023-12-17"
            },
            {
                eContent : "그린프랜즈가 되어 주세요!",
                eDate : "2024.01.17",
                eImg : "../img/event_view/event_3_view.jpg",
                eName : "1월 365 리사이클 캠페인",
                eNum : 3,
                sDate : "2024.01.08",
            }
        ]
        localStorage.setItem("eventList", JSON.stringify(eventArray));
    }

    //1.어디에
    const eList = document.querySelector('#eList');

    //2.무엇을
    html = ``;    

    for(let i = eventArray.length-1 ; i>=eventArray.length-3 ; i--){
        const e = eventArray[i]
        html+=`<a href="#" onclick='eventpage(${e.eNum})'>
                    <ul class="event">
                        <img class="eImge" src="${e.eImg}"/>
                        <li class="eName">${e.eName}</li>
                        <li class="eDate">기간 : ${e.sDate}~${e.eDate}</li>
                    </ul>
                </a> `
    }
    
    //3.출력
    eList.innerHTML=html;

    let current = 1;
    const slides = document.querySelectorAll('.slide');
    setInterval(slideTime,5000)

    //next
    function nextSlide() {
        let target = document.querySelector(`.slide${current}`);
        target.classList.remove("active");
        current = current < slides.length ? current + 1 : 1;
        target = document.querySelector(`.slide${current}`);
        target.classList.add("active");
        console.log(current)
    }

    function slideTime(){
        setTimeout(nextSlide, 3000);
    }
});

// 이벤트 뷰페이지 이동 함수
function eventpage(eNum){
    localStorage.setItem('eventNumber',eNum)
    location.href = 'sub/eventview.html'
}

// 메인배너 E