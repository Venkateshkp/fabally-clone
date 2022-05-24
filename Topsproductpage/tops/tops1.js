

// fetching and displaying products
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


// tops category dropdown

document.querySelector("#topcatdisplayangle1").addEventListener("click",()=>{
    let res=document.querySelector("#topcatdisplay1").style.display;
    if(res==="block"){
        document.querySelector("#topcatdisplayangle1").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#topcatdisplay1").style="display:none"
    }
   else{
    document.querySelector("#topcatdisplayangle1").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#topcatdisplay1").style="display:block"
   }
})

        //lounge wear drop down
document.querySelector("#loungewearangle").addEventListener("click",()=>{
    let res=document.querySelector("#loungeweardisplay").style.display;
    if(res==="block"){
        document.querySelector("#loungewearangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#loungeweardisplay").style="display:none"
    }
   else{
    document.querySelector("#loungewearangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#loungeweardisplay").style="display:block"
   }
})

         //dresses drop down
document.querySelector("#dressesangle").addEventListener("click",()=>{
    let res=document.querySelector("#dressesdisplay").style.display;
    if(res==="block"){
        document.querySelector("#dressesangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#dressesdisplay").style="display:none"
    }
   else{
    document.querySelector("#dressesangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#dressesdisplay").style="display:block"
   }
})

        //skirts dropdown
document.querySelector("#skirtsangle").addEventListener("click",()=>{
    let res=document.querySelector("#skirtsdisplay").style.display;
    if(res==="block"){
        document.querySelector("#skirtsangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#skirtsdisplay").style="display:none"
    }
   else{
    document.querySelector("#skirtsangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#skirtsdisplay").style="display:block"
   }
})

     //bottoms dropdown
document.querySelector("#bottomangle").addEventListener("click",()=>{
    let res=document.querySelector("#bottomdisplay").style.display;
    if(res==="block"){
        document.querySelector("#bottomangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#bottomdisplay").style="display:none"
    }
   else{
    document.querySelector("#bottomangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#bottomdisplay").style="display:block"
   }
})

  //winter dropdown
document.querySelector("#winterangle").addEventListener("click",()=>{
    let res=document.querySelector("#winterdisplay").style.display;
    if(res==="block"){
        document.querySelector("#winterangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#winterdisplay").style="display:none"
    }
   else{
    document.querySelector("#winterangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#winterdisplay").style="display:block"
   }
})

   // size filter dropdown list
document.querySelector("#sizecaret").addEventListener("click",()=>{
    let res=document.querySelector("#sizebox").style.display;
    if(res==="block"){
        document.querySelector("#sizebox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:block"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   
   }
})

    //color filter drop down
document.querySelector("#colorcaret").addEventListener("click",()=>{
    let res=document.querySelector("#colorbox").style.display;
    if(res==="block"){
        document.querySelector("#colorbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:block"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})
    // occasion filter drop down
document.querySelector("#occasioncaret").addEventListener("click",()=>{
    let res=document.querySelector("#occasionbox").style.display;
    if(res==="block"){
        document.querySelector("#occasionbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:block"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

  //fabric filter drop down
  document.querySelector("#fabriccaret").addEventListener("click",()=>{
    let res=document.querySelector("#fabricbox").style.display;
    if(res==="block"){
        document.querySelector("#fabricbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:block"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

// pattern filter drop down
document.querySelector("#patterncaret").addEventListener("click",()=>{
    let res=document.querySelector("#patternbox").style.display;
    if(res==="block"){
        document.querySelector("#patternbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:block"
   }
})

//trend filter drop down
document.querySelector("#trendcaret").addEventListener("click",()=>{
    let res=document.querySelector("#trendbox").style.display;
    if(res==="block"){
        document.querySelector("#trendbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:block"
    document.querySelector("#patternbox").style="display:none"
   }
})

//discount filter drop down
document.querySelector("#discountcaret").addEventListener("click",()=>{
    let res=document.querySelector("#discountbox").style.display;
    if(res==="block"){
        document.querySelector("#discountbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:block"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

//sleeves filter drop down
document.querySelector("#sleevescaret").addEventListener("click",()=>{
    let res=document.querySelector("#sleevesbox").style.display;
    if(res==="block"){
        document.querySelector("#sleevesbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:block"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

//length filter drop down
document.querySelector("#lengthcaret").addEventListener("click",()=>{
    let res=document.querySelector("#lengthbox").style.display;
    if(res==="block"){
        document.querySelector("#lengthbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:block"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})
//price filter drop down
document.querySelector("#pricecaret").addEventListener("click",()=>{
    let res=document.querySelector("#pricebox").style.display;
    if(res==="block"){
        document.querySelector("#pricebox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:block"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

