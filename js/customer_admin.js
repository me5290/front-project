document.addEventListener('DOMContentLoaded',function(){
    내역불러오기();
});

function 내역불러오기(){
    console.log('내역불러오기() 실행');
    let num = 1;
    let html = ''; 

    let feedList = JSON.parse( localStorage.getItem('customerArray') ) ;

    // 1. [어디에]
    const feedBox = document.querySelector('#table-content');
    // 2. [무엇을]
        // 2-1 모든 피드 출력[ 피드 목록/배열 에 있는 객체를 하나씩 호출  ]
    for( let i = 0 ; i<feedList.length ; i++  ){

        // 2-2 배열내 하나의 게시물/피드 추출 
        const feed = feedList[i];
        // 2-3 각 객체 정보를 HTML에 대입
        html += `
            <tr>
                <td>${num}</td>
                <td>${feed.name}</td>
                <td>${feed.id}</td>
                <td>${feed.title}</td></tr>
                `;
        num++;
    }; // f end 
    // 3. [출력]
    feedBox.innerHTML = html;
}