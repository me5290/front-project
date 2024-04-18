// 로그인 버튼을 눌렀을때 실행되는 함수
function loginBtn(){
    console.log('로그인 버튼');

    const putId = document.querySelector('#putId').value;
    const putPw = document.querySelector('#putPw').value;

    const member = document.querySelector('#member');
    const memberServices = document.querySelector('#memberServices');

    let userArray = JSON.parse(localStorage.getItem('userArray'));

    let html = '';

    for(let i = 0; i < userArray.length; i++){
        if(putId == userArray[i].userId && putPw == userArray[i].userPw){
            loginBg.style.display = 'none';
            loginWrap.style.display = 'none';

            memberServices.style.display = 'none';
            member.style.display = 'block';

            html = `
            <p>
                ${userArray[i].userId} 님
            </p>
            <p>
                point : 0
            </p>
            <div id="memberBtn">
                <button type="button">
                    회원정보 수정
                </button>
                <button type="button">
                    포인트 조회
                </button>
                <button onclick="logoutBtn()" type="button">
                    로그아웃
                </button>
            </div>
            `;
            member.innerHTML = html;
            localStorage.setItem('memberNumber', JSON.stringify(userArray[i].userNum));

            location.reload(true);
            return;
        }
    }

    alert('아이디 혹은 비밀번호가 일치하지 않습니다.');

}

// 로그아웃 버튼을 눌렀을때 실행되는 함수
function logoutBtn(){
    console.log('로그아웃 버튼');
    const member = document.querySelector('#member');
    const memberServices = document.querySelector('#memberServices');

    memberServices.style.display = 'flex';
    member.style.display = 'none';

    localStorage.removeItem('memberNumber');

    location.reload(true);

}