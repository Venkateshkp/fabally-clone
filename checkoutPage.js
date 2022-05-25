import navBar from "./components/navBar.js";
import footer from "./components/footer.js";
let navBarDiv=document.getElementById("navBar");
navBarDiv.innerHTML=navBar();
let footerDiv=document.getElementById("footer");
footerDiv.innerHTML=footer();
let url="http://localhost:3000/curvesData";
  getData(url);
  async function getData(url)
  {
      try 
      {
         let res=await fetch(url);
         let data=await res.json();
         let leftContainer=document.getElementById("photoContainer");
         let rightContainer=document.getElementById("detailsContainer");
         displayData(data,leftContainer,rightContainer); 
      } 
      catch (error) {
         console.log(error); 
      }
  }
  function displayData(data,leftContainer,rightContainer)
  {
      let productId=JSON.parse(localStorage.getItem('checkoutId'))[0];
      data.forEach(element => {
          if(element.id==productId)
          {
            let imageArr=element.image_url;
            for(let i=0;i<imageArr.length;i++)
            {
                let productImage=document.createElement('img');
                productImage.src=imageArr[i];
                leftContainer.append(productImage);
            }
            let productTitle=document.createElement('h2');
            productTitle.textContent=element.product_name;
            let productPrice=document.createElement('p');
            productPrice.textContent="₹ " +element.price;
            productPrice.style.textDecoration="line-through";
            productPrice.style.display="inline";
            productPrice.style.fontWeight="700";
            productPrice.style.fontSize="20px";
            let discountPrice=document.createElement('p');
            discountPrice.textContent="₹ " +Math.ceil(element.price*(1-element.discount/100));
            discountPrice.style.fontWeight="700";
            discountPrice.style.fontSize="20px";
            discountPrice.style.display="inline";
            discountPrice.style.marginRight="10px";
            discountPrice.style.color="#ffa2b6";
            let discount=document.createElement('p');
            discount.textContent=`(${element.discount}% OFF)`;
            discount.style.display="inline";
            let text1=document.createElement('p');
            text1.textContent="Inclusive of all taxes";
            let productId=document.createElement('p');
            productId.textContent=`SKU: ${element.id}`;
            rightContainer.append(productTitle,productPrice,discountPrice,discount,text1,productId);
            localStorage.removeItem('checkoutId');
          }
      });
      let descriptionHead=document.querySelectorAll(".descriptionHead");
      let descriptionContent=document.querySelectorAll(".descriptionContent");
      descriptionContent[0].style.display="block";
      for(let i=0;i<descriptionHead.length;i++)
      {
          descriptionHead[i].addEventListener('click',function()
          {
              for(let j=0;j<descriptionContent.length;j++)
              {
                  descriptionContent[j].style.display="none";
              }
              descriptionContent[i].style.display="block";
          })
      }
  }