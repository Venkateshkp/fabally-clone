let data;
async function getdata ()
{
    try
    {
       let res = await fetch(`http://localhost:3000/data`)
       let item = await res.json()
       console.log(item[0].hoverimg)
    //    item = item.reverse()
       localStorage.setItem("listreversedata",JSON.stringify(item))
       displaydata (item);

    }
    catch(err)
    {
        console.log(err)
    }
}
getdata ()

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


let container = document.getElementById("container");

//prodcontainer.setAttribute("class","prod-con")

function displaydata (data){
  data.forEach(e => {
      let div = document.createElement("div")
      div.setAttribute("class","inside-container")
      let imagebox = document.createElement('div')
      let img = document.createElement('img')
      img.setAttribute("class","imges")
      img.src = e.actualImg;
      imagebox.setAttribute("class","image-container")
      imagebox.append(img)
      let titles = document.createElement("p")
      titles.innerText= e.heading;
      titles.setAttribute("class","heading")
      let flex = document.createElement('div')
      flex.setAttribute("class","flex-box")
      let price = document.createElement('p')
      price.innerText = "₹" + e.normalPrice; 
      price.setAttribute("class","discount-price")
      let actualprice = document.createElement('p')
      actualprice.innerText = "₹" +  e.originalPrice;
      actualprice.setAttribute("class","actual-price")
      flex.append(price,actualprice)
      div.append(imagebox,titles,flex)
      let divs = document.createElement("div")
      let p = document.createElement('p')
      let discount = document.createElement('div')
      discount.setAttribute("class","discount-container")
      let tag = document.createElement('p')
      tag.setAttribute('class','discount-tag')
      tag.innerHTML = "30% OFF"
      discount.append(tag)

     imagebox.append(discount)

      imagebox.onmouseenter = function()
      {
        
        divs.setAttribute('class','size')
       
        p.innerHTML = "Sizes XS S L XL"
        divs.append(p)
        p.setAttribute('class','sizep')
          img.src= e.hoveringImg
          imagebox.append(divs)
      }
      imagebox.onmouseleave = function()
      {
          img.src= e.actualImg;
          divs.removeChild(p)
          imagebox.removeChild(divs)

      }
      let a =  document.createElement('a')
      a.href = "productinfo.html"
      a.append(div)
       div.onclick = function()
       {
           localStorage.setItem("proinfo",JSON.stringify(e))
       }

      container.append(a)
  });
}