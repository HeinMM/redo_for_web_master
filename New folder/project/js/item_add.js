let category = ["makeup","lipstick","oil","lotation"];
let subCategory = [
    {name:"Tonemone",category_id:0},
    {name:"Mesha",category_id:0},
    {name:"3CE",category_id:1},
    {name:"Innisfree",category_id:1},
    {name:"NatureRepublic",category_id:2},
    {name:"NatureRepublic",category_id:3},
    {name:"Innisfree",category_id:3},
];
category.map((el,index)=>{
    $("#cate").append(`<option value=${index}>${el}</option>`);
});
subCategory.map((el,index)=>{
    $("#subCate").append(`<option value="${index}" data-category="${el.category_id}">${el.name}</option>`);
});

$("#cate").on("change",function () {
    let currentCategoryId = $(this).val();
    $("#subCate option").hide();
    $(`[data-category=${currentCategoryId}]`).show();
});