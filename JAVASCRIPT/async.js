let refelem=document.getElementById("ref");
async function getData(){
    try{
        let api="https://fakestoreapi.com/products";
        let res=await fetch(api);
        let data=await res.json();
        console.log(data);
         display(data)
    }
    catch(err){
        alert("something went wrong")
}
}
