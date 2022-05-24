let url="http://localhost:3000/curvesData";
getData(url);
async function getData(url)
{
    try 
    {
        let res=await fetch(url);
        let data=await res.json();
        console.log(data);
        let container=document.getElementById("productContainer");
        displayData(data,container);  
    } 
    catch (error) 
    {
        console.log(error);
    }
}
function displayData(data,container)
{
    container.innerHTML="";
    data.forEach(element => {
        let productCard=document.createElement('div');
        let productImg=document.createElement('img');
        productImg.src=element.image_url[0];
        productImg.addEventListener('mouseenter',function()
        {
            productImg.src=element.image_url[1];
        })
        productImg.addEventListener('mouseleave',function()
        {
            productImg.src=element.image_url[0];
        })
        let productName=document.createElement('h4');
        productName.textContent=element.product_name;
        let productPrice=document.createElement('p');
        productPrice.textContent="Rs: " +element.price;
        productCard.append(productImg,productName,productPrice);
        container.append(productCard);
        
    });
}
let filterOptions=document.querySelectorAll(".filterOptions");
let filterContent=document.querySelectorAll(".filterContent");
for(let i=0;i<filterOptions.length;i++)
{    
    filterOptions[i].addEventListener('click',function()
    {
        for(let j=0;j<filterOptions.length;j++)
        {
        filterContent[j].style.display="none";
        }
        if(filterContent[i].style.display==="none")
        {
            filterContent[i].style.display="flex";
            
        }
        else if(filterContent[i].style.display==="flex")
        {
            filterContent[i].style.display="none"; 
        }
        
    });
}
document.getElementById("rightContainer").addEventListener('dblclick',function()
        {
            for(j=0;j<filterOptions.length;j++)
            {
            filterContent[j].style.display="none";
            } 
            for(j=0;j<document.querySelectorAll(".options").length;j++)
            {
                document.querySelectorAll(".optionsContent")[j].style.display="none";
            } 
        });
let options=document.querySelectorAll(".options");
let optionsContent=document.querySelectorAll(".optionsContent");
console.log(options,optionsContent);
for( let k=0;k<options.length;k++)
{
    options[k].addEventListener('click',function()
    {
        
            optionsContent[k].style.display="block";
        
    });
}