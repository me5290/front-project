function 등록(){
    const title = document.querySelector('#title').value;
    const sDate = document.querySelector('#sDate').value;
    const eDate = document.querySelector('#eDate').value;
    const content = document.querySelector('textarea').value;
    console.log(title); console.log(sDate); console.log(content);

        //등록 유효성검사
        if(title.length < 1){alert('제목을 입력해주세요'); return;}
        if(imgByte == ''){alert('이미지를 첨부해주세요'); return;}
        
        


    let eventList = JSON.parse(localStorage.getItem('eventList')); console.log(eventList)
    if(eventList == null){eventList=[]};

    //객체화
    const ewrite = {
        eNum : eventList.length >= 1 ? eventList[ eventList.length-1 ].eNum + 1 : 1,
        eName : title,
        sDate : sDate,
        eDate : eDate,
        eImg : imgByte,
        eContent : content.replace('\n','<br/>')
    }
    console.log(ewrite);

    //피드목록에 등록
    eventList.push(ewrite);
    console.log(eventList)

    //localStorage에 저장
    localStorage.setItem('eventList',JSON.stringify(eventList));

    //등록성공시
    alert('게시물이 등록되었습니다.'); location.href ='event.html';    
}

let imgByte = '';
function 이미지등록(event){ console.log('이미지등록(event)')
    //파일 읽기 클래스
    let imgFile = new FileReader();
    //파일을 js로 읽어들이기
    imgFile.readAsDataURL(event.target.files[0]); console.log(imgFile);
    //읽어온 바이트를 img 태그에 출력
    imgFile.onload = function(){
        document.querySelector('#eventImg').src = imgFile.result; console.log(imgFile)
        imgByte = imgFile.result;
    }
}