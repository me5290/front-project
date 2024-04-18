let userArray = [];

// 가입버튼을 눌렀을때 실행되는 함수
function joinBtn(){
    console.log

    const userId = document.querySelector('#userId').value;
    const userPw = document.querySelector('#userPw').value;
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const birth = document.querySelector('#birth').value;

    let userArray = JSON.parse(localStorage.getItem('userArray'));
    console.log(userArray);

    // 유효성 검사
    if(userId.length < 1){
        alert('아이디를 입력해주세요.');
        return;
    }
    if(userPw.length < 1){
        alert('비밀번호를 입력해주세요.');
        return;
    }
    if(userEmail.length < 1){
        alert('이메일을 입력해주세요.');
        return;
    }
    if(userName.length < 1){
        alert('이름을 입력해주세요.');
        return;
    }
    if(birth.length < 1){
        alert('생년월일을 입력해주세요.');
        return;
    }else if(birth.length != 8){
        alert('생년월일이 틀립니다 다시 입력해주세요.')
    }
    // 
    const member = {
        userNum : userArray.length,
        userId : userId,
        userPw : userPw,
        userName : userName,
    }
    console.log(member);

    userArray.push(member);

    console.log(userArray);

    localStorage.setItem('userArray' , JSON.stringify(userArray));

    location.href = '../index.html';
}

// 중복버튼 눌렀을때 실행되는 함수
function redupBtn(){
    let userArray = JSON.parse(localStorage.getItem('userArray'));
    console.log(userArray);
    const userId = document.querySelector('#userId').value;

    for(let i = 0; i < userArray.length; i++){
        if(userId == userArray[i].userId){
            document.querySelector('#userId').value = '';
            userArray = [];
            alert('중복된 아이디 입니다.');
        }else{
            alert('사용가능한 아이디 입니다.');
            return;
        }
    }
}

// 비밀번호 확인 함수
document.addEventListener('keyup' , function (){
    const userPw = document.querySelector('#userPw').value;
    const userVpw = document.querySelector('#userVpw').value;
    const passwordCheck = document.querySelector('#passwordCheck');

    let output = '';

    console.log(output);

    if(userVpw != userPw && userPw.length >= 8){
        output = `
            비밀번호가 일치하지 않습니다.
        `;
        passwordCheck.style.color = "red";
    }else if(userVpw == userPw && userPw.length >= 8){
        output = `
            비밀번호가 일치합니다.
        `;
        passwordCheck.style.color = "green";
    }else if(userPw.length < 8){
        output = `
            비밀번호는 8자 이상 입력 해주세요.
        `;
        passwordCheck.style.color = "orange";
    }else{
        output = '';
    }

    passwordCheck.innerHTML = output;
})

// 인증번호 버튼 함수
function cerNum(){
    const phoneNum = document.querySelector('.phoneNum').value;

    if(phoneNum.length >= 3){
        alert('인증번호가 전송되었습니다.');
    }else{
        alert('올바른 전화번호를 입력해주세요.');
    }
}

// 취소 버튼 함수
function back(){
    history.back();
}