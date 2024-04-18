document.addEventListener('DOMContentLoaded' , function(){
    selectIn()
});
// 브랜드 등록부분 층,카테고리 함수 부분
function selectIn(){
    const floor = document.querySelector('#floor');
    const floorCategory = document.querySelector('#floorCategory');

    let floorArray = JSON.parse(localStorage.getItem('floorArray'))
    if(floorArray == null){
        floorArray = []
    }

    let floorCategoryArray = JSON.parse(localStorage.getItem('floorCategoryArray'))
    if(floorCategoryArray == null){
        floorCategoryArray = []
    }

    let html = ''
    for(let i = 0; i<floorArray.length; i++){
        html +=`
            <option value='${floorArray[i].floorNumber}'>${floorArray[i].floorName}F</option>
        `
    }
    floor.innerHTML = html;

    html = ''
    for(let i = 0; i<floorCategoryArray.length; i++){
        html +=`
            <option value='${floorCategoryArray[i].floorCategoryNumber}'>${floorCategoryArray[i].floorCategoryName}</option>
        `
    }
    floorCategory.innerHTML = html;
}

// 층 등록 함수
function floorIn(){
    const floorInput = document.querySelector('#floorInput').value;

    let floorArray = JSON.parse(localStorage.getItem('floorArray'))
    if(floorArray == null){
        floorArray = []
    } 
    for(let i = 0; i<floorArray.length; i++){
        if(floorArray[i].floorName == floorInput){
            alert('등록된 층입니다.');
            return;
        }
    }

    const floor = {
        floorNumber : floorArray.length >= 1 ? floorArray[floorArray.length-1].floorNumber + 1 : 1,
        floorName : floorInput
    }

    floorArray.push(floor);

    localStorage.setItem('floorArray', JSON.stringify(floorArray))

    document.querySelector('#floorInput').value = '';
    selectIn()
}

// 층별 카테고리 등록함수
function floorCategiryIn(){
    const floor = document.querySelector('#floor').value;
    const floorCategoryInput = document.querySelector('#floorCategoryInput').value;

    let floorCategoryArray = JSON.parse(localStorage.getItem('floorCategoryArray'))
    if(floorCategoryArray == null){
        floorCategoryArray = []
    } 
    for(let i = 0; i<floorCategoryArray.length; i++){
        if(floorCategoryArray[i].floorName == floorCategoryInput){
            alert('등록된 카테고리입니다.');
            return;
        }
    }

    const floorCategory = {
        floorNumber : Number(floor),
        floorCategoryNumber : floorCategoryArray.length >= 1 ? floorCategoryArray[floorCategoryArray.length-1].floorCategoryNumber + 1 : 1,
        floorCategoryName : floorCategoryInput
    }

    floorCategoryArray.push(floorCategory);

    localStorage.setItem('floorCategoryArray', JSON.stringify(floorCategoryArray))

    document.querySelector('#floorCategoryInput').value = '';
    selectIn()
}

// 브랜드 등록함수
function floorBrandIn(){
    const floorCategory = document.querySelector('#floorCategory').value;
    const floorBrandName = document.querySelector('#floorBrandName').value;
    const floorBrandTel = document.querySelector('#floorBrandTel').value

    let floorBrandArray = JSON.parse(localStorage.getItem('floorBrandArray'))
    if(floorBrandArray == null){
        floorBrandArray = []
    } 
    for(let i = 0; i<floorBrandArray.length; i++){
        if(floorBrandArray[i].floorBrandName == floorBrandArray){
            alert('등록된 브랜드입니다.');
            return;
        }
    }

    const floorBrand = {
        floorCategoryNumber : Number(floorCategory),
        floorBrandNumber : floorBrandArray.length >= 1 ? floorBrandArray[floorBrandArray.length-1].floorBrandNumber + 1 : 1,
        floorBrandName : floorBrandName,
        floorBrandTel : floorBrandTel
    }

    floorBrandArray.push(floorBrand);

    localStorage.setItem('floorBrandArray', JSON.stringify(floorBrandArray))

    document.querySelector('#floorBrand').value = '';
    selectIn()
}