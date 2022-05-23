

async function getdata ()
{
    try
    {
       let res = await fetch(`http://localhost:3000/arrays`)
       let data = await res.json()
       console.log(data[0].hoverimg)
       displaydata (data)

    }
    catch(err)
    {
        console.log(err)
    }
}
getdata ()

let prodcontainer = document.getElementById("prod-container")
//prodcontainer.setAttribute("class","prod-con")

function displaydata (array)
{
  array.forEach(ele => {
      let div = document.createElement("div")
      div.setAttribute("class","div")
      let imagebox = document.createElement('div')
      let img = document.createElement('img')
      img.setAttribute("class","imges")
      img.src = ele.image
      imagebox.setAttribute("class","conimage")
      imagebox.append(img)
      let titles = document.createElement("p")
      titles.innerText= ele.title
      titles.setAttribute("class","title")
      let flex = document.createElement('div')
      flex.setAttribute("class","flex12")
      let price = document.createElement('p')
      price.innerText = "₹" + ele.price 
      price.setAttribute("class","price")
      let actualprice = document.createElement('p')
      actualprice.innerText = "₹" +  ele.actualprice
      actualprice.setAttribute("class","actualprice")
      flex.append(price,actualprice)
      div.append(imagebox,titles,flex)
      imagebox.onmouseenter = function()
      {
          img.src= ele.hoverimg
      }
      imagebox.onmouseleave = function()
      {
          img.src= ele.image
      }



      prodcontainer.append(div)
  });
}