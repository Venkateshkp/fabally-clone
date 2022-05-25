
async function fetchproductdata(){
    try {
        let id=JSON.parse(localStorage.getItem("product_id"));
        let response =await fetch(`http://localhost:3000/topsdata/${id}`)
        let res=await response.json();
        console.log(res);
        displaydata(res);
    } catch (error) {
        console.log(error)
    }
}
fetchproductdata();

function displaydata(res){
    let{id,product_name,image_url,price,striked_price,offer}=res;
    let leftbox=document.querySelector("#mdlleft");
    let rightbox=document.querySelector("#mdlright");
    leftbox.innerHTML="";
    let leftboxheading=document.createElement("p");
    leftboxheading.innerText=`HOME | TOPS | ${product_name}`;
    let card=document.createElement("div");
    image_url.forEach((image)=>{
      let image1=document.createElement("img");
      image1.src=image;
      card.append(image1);
    })
    leftbox.append(leftboxheading,card);
    let rightcard=document.createElement("div");
    let rightproduct_name=document.createElement("h1");
    rightproduct_name.style="font-size:20px;font-weight:600;text-transform:none;margin-bottom:8px;font-family:san-serif,arial"
    rightproduct_name.innerText=product_name;
    let r1=document.createElement("h4");
    r1.innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i>'
    r1.style="font-style:22px;font-weight:700;display:inline;font-family:san-serif,arial"
    let striked=document.createElement("h4");
    striked.innerText=striked_price;
    striked.style="font-style:20px;font-weight:700;display:inline;text-decoration:line-through;color:#000;font-family:san-serif,arial"
    let r2=document.createElement("h4");
    r2.innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i>'
    r2.style="font-style:22px;font-weight:700;color:#fc6486;margin-left:4px;display:inline;font-family:san-serif,arial";
    let price1=document.createElement("h4");
    price1.innerText=price;
    price1.style="font-style:22px;font-weight:700;color:#fc6486;display:inline;font-family:san-serif,arial";
    let discount=document.createElement("c");
    discount.innerText=`(${offer} OFF)`;
    discount.style="margin-left:20px;color:#000;font-size:11px;font-weight:700;"
    let taxinclusive=document.createElement("p");
    taxinclusive.innerText=`Inclusive of all taxes`;
    taxinclusive.style="display:block;font-size:14px;color:#03bb5c;margin-top:5px"
    let sku=document.createElement("p");
    sku.innerText=`SKU:${id}`;
    sku.style="font-size:12px;font-weight:700;margin-top:10px;color:#999;font-family:san-serif,arial"
    rightcard.append(rightproduct_name,r1,striked,r2,price1,discount,taxinclusive,sku);
    rightbox.append(rightcard);
}

