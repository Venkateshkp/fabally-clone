
async function fetchanddisplay(){
    try {
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        console.log(res);
        displaydata(res);
    } catch (error) {
        console.log(error);
    }
}
fetchanddisplay();
function displaydata(res){
   let productsdisplay=document.querySelector("#productsdisplay");
   productsdisplay.innerHTML="";
   res.forEach((product)=>{
    let {id,product_name,image_url,price,striked_price}=product;
    let card=document.createElement("div");
    let image1=document.createElement("img");
    image1.src=image_url[0];
    image1.onmouseenter=()=>{
        image1.src=image_url[1];
    }
    image1.onmouseleave=()=>{
        image1.src=image_url[0];
    }
    let pname=document.createElement("p");
    pname.innerText=product_name;
    pname.style="font-size:14px;font-weight:500"
    let i=document.createElement("i");
    i.class="fa-solid fa-indian-rupee-sign";
    let price1=document.createElement("c");
    price1.innerText=price;
    price1.style="color:#fc6486;font-size:15px;font-weight:600";
    let p=document.createElement("c");
    p.style="color:#fc6486;font-size:15px;font-weight:600"
    p.innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i>';
    let striked=document.createElement("c");
    striked.innerText=striked_price;
    striked.style="font-size:15px;font-weight:600;text-decoration: line-through;";
    let p1=document.createElement("c");
    p1.style="color:#323232;margin-left:5px;font-size:15px;font-weight:600"
    p1.innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i>';
    card.append(image1,pname,p,price1,p1,striked);
    productsdisplay.append(card);
   })
}

//<i class="fa-solid fa-indian-rupee-sign"></i>