localStorage.setItem('floorNumber', 5);
document.addEventListener('DOMContentLoaded',function(){
    floorList();
    floorCategoryList();
    floorBrandList();
});

// 관리자 층 리스트 호출 함수
function floorList(){
    const floorList = document.querySelector('#floorList tbody')
    const floorArray = JSON.parse(localStorage.getItem('floorArray'));
    let html = ``;
    for(let i = floorArray.length-1; i>=0; i--){
        let floor = floorArray[i];
        html += `
            <tr>
                <td>${floor.floorNumber}</td>
                <td>${floor.floorName}F</td>
                <td><button type="button" onclick='floorDelete(${floor.floorNumber})'>삭제</button></td>
            </tr>
        `;
    }

    floorList.innerHTML = html;
}

// 관리자 카테고리 리스트 호출 함수
function floorCategoryList(){
    const floorCategoryArray = JSON.parse(localStorage.getItem('floorCategoryArray'));
    const floorArray = JSON.parse(localStorage.getItem('floorArray'));
    let floorCategoryList = document.querySelector('#floorCategoryList tbody');

    let html = ``;
    for(let i = 0; i<floorCategoryArray.length; i++){
        let floorCategory = floorCategoryArray[i];
        let floorName = ''
        for(let j = 0; j<floorArray.length; j++){
            let floor = floorArray[j]
            if(floorCategory.floorNumber == floor.floorNumber){
                floorName = floor.floorName;
            }
        }
            html += `
                <tr>
                    <td>${floorName}F</td>
                    <td>${floorCategory.floorCategoryNumber}</td>
                    <td>${floorCategory.floorCategoryName}</td>
                    <td><button type="button" onclick='floorCategoryDelete(${floorCategory.floorCategoryNumber})'>삭제</button></td>
                </tr>
            `
        // }
    }
    floorCategoryList.innerHTML = html;
}


// 관리자 브랜드 리스트 호출 함수
function floorBrandList(){
    // 어디에
    const floorList = document.querySelector('#floorBrandList tbody')

    // 자료가져오기
    const floorCategoryArray = JSON.parse(localStorage.getItem('floorCategoryArray'));
    const floorBrandArray = JSON.parse(localStorage.getItem('floorBrandArray'));

    // 처리
    let html = ``;
    for(let i =0; i<floorBrandArray.length;i++){
        const floorBrand = floorBrandArray[i]
        let categoryName = '';
        let floorNumber = '';
        for(let j=0; j<floorCategoryArray.length; j++){
            const floorCategory = floorCategoryArray[j]
            if(floorBrand.floorCategoryNumber == floorCategory.floorCategoryNumber){
                categoryName = floorCategory.floorCategoryName;
                floorNumber = floorCategory.floorNumber;
            }
        }
        html += `
                <tr>
                    <td>${Brandfloor(floorBrand.floorCategoryNumber)}F</td>
                    <td>${categoryName}</td>
                    <td>${floorBrand.floorBrandName}</td>
                    <td>${floorBrand.floorBrandTel}</td>
                    <td><button type="button" onclick='floorBrandDelete(${floorBrand.floorBrandNumber})'>삭제</button></td>
                </tr>
            `
    }

    // 출력
    floorList.innerHTML = html;
}

function Brandfloor(floorCategoryNumber){
    const floorArray = JSON.parse(localStorage.getItem('floorArray'));
    const floorCategoryArray = JSON.parse(localStorage.getItem('floorCategoryArray'));
    let floorNumber = 0
    let floorName = ''
        for(let j=0; j<floorCategoryArray.length; j++){
            const floorCategory = floorCategoryArray[j]
            if(floorCategoryNumber == floorCategory.floorCategoryNumber){
                floorNumber = floorCategory.floorNumber;
                for(let k=0; k<floorArray.length; k++){
                    let floor = floorArray[k];
                    if(floorNumber == floor.floorNumber){
                        floorName = floor.floorName
                    }
                }
            }
        }

    return floorName;
}

function floorDelete(floorNumber){
    let floorArray = JSON.parse(localStorage.getItem('floorArray'));
    for(let j = 0; j<floorArray.length; j++){
        if(floorNumber == floorArray[j].floorNumber){
            floorArray.splice(j , 1);
            alert('삭제 성공');
        }
    }
    
    localStorage.setItem('floorArray',JSON.stringify(floorArray))
    floorList()
    return;
}

function floorCategoryDelete(floorCategoryNumber){
    let floorCategoryArray = JSON.parse(localStorage.getItem('floorCategoryArray'));
    for(let j = 0; j<floorCategoryArray.length; j++){
        if(floorCategoryNumber == floorCategoryArray[j].floorCategoryNumber){
            floorCategoryArray.splice(j , 1);
            alert('삭제 성공');
        }
    }
    
    localStorage.setItem('floorCategoryArray',JSON.stringify(floorCategoryArray))
    floorCategoryList()
    return;
}

function floorBrandDelete(floorBrandNumber){
    let floorBrandArray = JSON.parse(localStorage.getItem('floorBrandArray'));
    for(let j = 0; j<floorBrandArray.length; j++){
        if(floorBrandNumber == floorBrandArray[j].floorBrandNumber){
            floorBrandArray.splice(j , 1);
            alert('삭제 성공');
        }
    }
    
    localStorage.setItem('floorBrandArray',JSON.stringify(floorBrandArray))
    floorBrandList();
    return;
}