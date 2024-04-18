
// 로그인 창 띄우는 함수
function loginPop(){
    loginBg.style.display = 'block';
    loginWrap.style.display = 'block';
}
// 로그인 창 닫는 함수
function closeBtn(){
    loginBg.style.display = 'none';
    loginWrap.style.display = 'none';
}

// 헤더 푸터 불러오기
$( document ).ready( function(){
    $('#footers').load('../common/footer.html');
})

// 관리자 만드는 함수
document.addEventListener('DOMContentLoaded' , function(){
    document.querySelector('#headers').innerHTML = `
                    <div id="header">
                    <div id="headerWrap">
                        <div id="leftHeader">
                        <h1>
                                <a href="../index.html">
                                    <img src="../img/logo.png" style="width: 280px; height: 60px;"/>
                                </a>
                            </h1>
                            <ul id="gnv">
                                <li>
                                    <a href="../sub/floor.html">
                                        층별안내
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:alert('준비중입니다.')">
                                        공지사항
                                    </a>
                                </li>
                                <li>
                                    <a href="../sub/event.html">
                                        이벤트
                                    </a>
                                </li>
                                <li>
                                    <a href="../sub/customer_main.html">
                                        고객센터
                                    </a>
                                </li>
                                <li>
                                    <a href="../sub/onload.html">
                                        오시는길·주차장
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="rightHeader">
                            <ul id="memberServices">
                                <li>
                                    <a href="#" onclick="loginPop()" id="loginBtn">
                                        로그인
                                    </a>
                                </li>
                                <li>
                                    <a href="../sub/join.html">
                                        회원가입
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        회원관리
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="member" style="display: none;">

                        </div>

                        
                        <button id="search">
                            <span>검색</span>
                            <img src="../img/search.png"/>
                        </button>
                    </div>
                </div>
                <div id="loginBg">
                    <div id="loginWrap">
                        <h3>로그인</h3>
                        <button id="closeBtn" onclick="closeBtn()">
                            <img src="../img/closeBtn.png" style="width: 40px;"/>
                        </button>
                        <div id="loginBox">
                            <form>
                                <p>아이디</p>
                                <input id="putId" type="text" placeholder="아이디"/>
                                <p>비밀번호</p>
                                <input id="putPw" type="password" placeholder="비밀번호"/>
                                <ul id="loginList">
                                    <li>
                                        <a href="#">
                                            아이디 찾기
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            비밀번호 찾기
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../sub/join.html">
                                            회원가입
                                        </a>
                                    </li>
                                </ul>
                                <input onclick="loginBtn()" id="login" type="button" value="로그인"/>
                                <input id="fastLogin" type="button" value="빠른 로그인"/>
                                <input id="otpLogin" type="button" value="OTP 인증번호 로그인"/>
                            </form>
                        </div>
                    </div>
                </div>
                    `
    let userArray = JSON.parse(localStorage.getItem('userArray'));
    let memberNumber = JSON.parse(localStorage.getItem('memberNumber'));

    if(userArray == null){
        userArray = [{
            userNum : 0,
            userId : 'admin',
            userPw : 'admin123',
            userName : '관리자',
        }];
    }
    localStorage.setItem('userArray' , JSON.stringify(userArray));
    console.log(document.querySelector('#memberServices'))
    // 로그인 유지 함수
    const member = document.querySelector('#member'); 
    const memberServices = document.querySelector('#memberServices');

    let html='';

    for(let i = 0; i < userArray.length; i++){
        if(memberNumber == userArray[i].userNum){
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

            const adminMenu = document.querySelector('.adminMenu');
            if(memberNumber == 0){
                adminMenu.style.display = 'block';
            }
            return;
        }
    }
})
