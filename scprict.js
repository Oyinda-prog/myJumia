let arr = []
if (localStorage.item) {
    arr = JSON.parse(localStorage.getItem("item"))
}
const get = (e)=>{
    // console.log(e);
    let item = {
        name:e.name,
        price:e.price,
        image:e.img
    }
    console.log(item);
    arr.push(item)
    console.log(arr);
    localStorage.setItem("item",JSON.stringify(arr))
}
let mycart = JSON.parse(localStorage.getItem("item"))
const loaded = ()=>{
    // image.src = mycart[1].image
    
    // console.log(mycart[0].image);
    show.innerHTML += mycart.map((value, index)=>{
        console.log(index);
        console.log(value.name);
        return`
        <div class="col-3 border border-info">
            <img src="${value.image}" alt="" class="img-fluid">
            <div class="text-center">      
                <div class="">${value.name}</div>
                <div>${value.price}</div>
            </div>
        </div>
        
        `
    })
}