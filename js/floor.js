localStorage.setItem('floorNumber', 3);
document.addEventListener('DOMContentLoaded',function(){
    var floorNumber = JSON.parse(localStorage.getItem('floorNumber'));
    floorNavIn(floorNumber);
    floorBrandIn(floorNumber)
});

function floorNavIn(floorNumber){
    console.log(floorNumber)
    const floorNav = document.querySelector('.floorNav')
    let floorArray = JSON.parse(localStorage.getItem('floorArray'));
    if(floorArray == null){
        floorArray = [{floorNumber:1,floorName:"1"},{floorNumber:2,floorName:"2"},{floorNumber:3,floorName:"3"}]
        localStorage.setItem('floorArray', JSON.stringify(floorArray))
    }
    let html = ``;
    for(let i = floorArray.length-1; i>=0; i--){
        let floor = floorArray[i];
        html += `
            <li class='${floor.floorNumber == floorNumber ? 'current': ''}' onclick='floorBrandIn(${floor.floorNumber})'>${floor.floorName}F</li>
        `;
    }

    floorNav.innerHTML = html;
}

function floorBrandIn(floorNumber){
    let floorCategoryArray = JSON.parse(localStorage.getItem('floorCategoryArray'));
    if(floorCategoryArray == null){
        floorCategoryArray = [
            {floorNumber:1,floorCategoryNumber:1,floorCategoryName:"화장품"},
            {floorNumber:1,floorCategoryNumber:2,floorCategoryName:"ACC"},
            {floorNumber:2,floorCategoryNumber:3,floorCategoryName:"여성패션"},
            {floorNumber:2,floorCategoryNumber:4,floorCategoryName:"남성패션"},
            {floorNumber:3,floorCategoryNumber:5,floorCategoryName:"키즈"},
            {floorNumber:3,floorCategoryNumber:6,floorCategoryName:"스포츠"}
        ]

        localStorage.setItem('floorCategoryArray', JSON.stringify(floorCategoryArray))
    }
    let floorContent = document.querySelector('.floorContent');
    localStorage.setItem('floorNumber', floorNumber);
    floorNavIn(floorNumber)

    let html = ``;
    for(let i = 0; i<floorCategoryArray.length; i++){
        let floorCategory = floorCategoryArray[i]
        if(floorCategory.floorNumber == floorNumber){
            html += `
                <div class="section">
                    <h4>${floorCategory.floorCategoryName}</h4>
                    ${floorBrandIn2(floorCategory.floorCategoryNumber)}
                </div>
            `
        }
    }
    floorContent.innerHTML = html;
}

function floorBrandIn2(floorCategoryNumber){
    let floorBrandArray = JSON.parse(localStorage.getItem('floorBrandArray'));
    if(floorBrandArray == null){
        floorBrandArray = [
            {floorCategoryNumber:1,floorBrandNumber:1,floorBrandName:"MAC",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:1,floorBrandNumber:2,floorBrandName:"BOBBYBROWN",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:1,floorBrandNumber:3,floorBrandName:"YSL",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:1,floorBrandNumber:4,floorBrandName:"CHANEL",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:1,floorBrandNumber:5,floorBrandName:"JOMALON",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:2,floorBrandNumber:6,floorBrandName:"TAGHEUER",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:2,floorBrandNumber:7,floorBrandName:"ROLLEX",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:2,floorBrandNumber:8,floorBrandName:"MONBLANCE",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:2,floorBrandNumber:9,floorBrandName:"GUCCI",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:3,floorBrandNumber:10,floorBrandName:"POLO",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:3,floorBrandNumber:11,floorBrandName:"RACOSTE",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:3,floorBrandNumber:12,floorBrandName:"TOMBOY",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:4,floorBrandNumber:13,floorBrandName:"BENPOL",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:4,floorBrandNumber:14,floorBrandName:"GALLUXY",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:4,floorBrandNumber:15,floorBrandName:"HAZZYS",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:4,floorBrandNumber:16,floorBrandName:"ZIODANO",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:5,floorBrandNumber:17,floorBrandName:"KANGOL",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:5,floorBrandNumber:18,floorBrandName:"BABY",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:5,floorBrandNumber:19,floorBrandName:"LEGO",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:5,floorBrandNumber:20,floorBrandName:"KIDS",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:5,floorBrandNumber:21,floorBrandName:"ADIOS",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:6,floorBrandNumber:22,floorBrandName:"NIKE",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:6,floorBrandNumber:23,floorBrandName:"ADIDAS",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:6,floorBrandNumber:24,floorBrandName:"ASISC",floorBrandTel:"010-1234-1234"},
            {floorCategoryNumber:6,floorBrandNumber:25,floorBrandName:"NUBALANCE",floorBrandTel:"010-1234-1234"},
        ]

        localStorage.setItem('floorBrandArray', JSON.stringify(floorBrandArray))
    }
    let html = ``;
    for(let i =0; i<floorBrandArray.length;i++){
        const floorBrand = floorBrandArray[i]
        if(floorBrand.floorCategoryNumber == floorCategoryNumber){
            html += `
                <p><span class="brand">${floorBrand.floorBrandName}</span><span class="Tel">${floorBrand.floorBrandTel}</span></p>
            `
        }
    }
    return html;
}