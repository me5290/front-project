
document.addEventListener('DOMContentLoaded', function(){view()});


function view(){
    //누구를
    const eNum = JSON.parse(localStorage.getItem('eventNumber'));

    const eventList = JSON.parse(localStorage.getItem('eventList'));

    //어디에
    const eventView = document.querySelector('.eventView');

    //무엇을
    html ='';
    
    for(let i = 0 ; i <eventList.length ; i ++){
        if(eNum == eventList[i].eNum ){
            html += `<div class ="eName">
                        <h3>${eventList[i].eName}</h3>
                        <span>기간 : ${eventList[i].sDate} ~ ${eventList[i].eDate}</span>
                    </div>
                    <img src="${eventList[i].eImg}"> 
                    <div>${eventList[i].eContent}</div>`
                    
        }   
    }
    //출력
    eventView.innerHTML=html;
}
//삭제함수
function eDelete(){
    let eNum = JSON.parse(localStorage.getItem('eventNumber'));
    const eventList = JSON.parse(localStorage.getItem('eventList'));
    
    for(let i =0 ; i < eventList.length ; i++){
        if(eNum == eventList[i].eNum){
            eventList.splice(i,1);
            alert('게시물이 삭제되었습니다.');
            localStorage.setItem('eventList',JSON.stringify(eventList));
            localStorage.removeItem('eventList')
            location.href='event.html'
            return;
        }
    }
    
}