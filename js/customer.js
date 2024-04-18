document.addEventListener('DOMContentLoaded',function(){
    아이디이름가져오는함수();
});


function 문의하기(){
    const memberNumber = JSON.parse( localStorage.getItem('memberNumber') ) ;
    if(memberNumber == null){
        alert('로그인이 필요합니다.');
    }
    else{
        location.href="customer_service.html";
    }
    
}

function 등록하기(){
    console.log('등록하기() 실행');

    const id = document.getElementById('customer-id').innerText;
    const name = document.getElementById('customer-name').innerText;
    const title = document.querySelector('#customer-title').value;
    const content = document.querySelector('#customer-content').value;
    // title과 content를 잘 가져왔는지
    console.log(id);console.log(name);console.log(title);console.log(content);

    const customer = {
        name : name,
        id : id,
        title : title,
        content : content
    }
    console.log(customer);

    let customerArray = JSON.parse( localStorage.getItem('customerArray') ) ;
    // 배열을 새로 만들어준다.
    if( customerArray == null ){ customerArray = [ ] } 
    
    // 방금 가입된 회원객체 배열에 추가
    customerArray.push( customer ); 
    console.log(customerArray);
    localStorage.setItem( 'customerArray' , JSON.stringify( customerArray )  );





    location.href="customer_main.html";
}

// 로컬에서 아이디랑 이름을 가져와서 customer-service.html에 뿌려주는 기능
function 아이디이름가져오는함수(){
    console.log('아이디이름가져오는함수() 실행');

    let id = '';
    let name = '';

    const userArray = JSON.parse( localStorage.getItem('userArray') ) ;
    const memberNumber = JSON.parse( localStorage.getItem('memberNumber') ) ;
    console.log(userArray);
    console.log(memberNumber);

    console.log(userArray[0].userId);

    id = userArray[memberNumber].userId;
    name = userArray[memberNumber].userName;

    console.log(id);console.log(name);

    //html에 뿌려주는 함수?
    document.querySelector('#customer-id').textContent = id;
    document.querySelector('#customer-name').textContent = name;
}