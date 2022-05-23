

async function getdata ()
{
    try
    {
       let res = await fetch(`http://localhost:3000/student`)
       let data = await res.json()
       console.log(data[0].image)
    }
    catch(err)
    {
        console.log(err)
    }
}
getdata ()