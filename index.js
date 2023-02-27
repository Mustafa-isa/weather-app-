const searchBtn = document.getElementById('searchBtn')
const btn  = document.getElementById('btn')
const notFound = document.querySelector*(".notFound")
const img  = document.getElementById('img')
const info = document.querySelector*(".info")
let degree =  document.querySelector(".temp-degree")
let condation =  document.querySelector(".condation")

let day =  document.getElementById('dAY')
let month =  document.getElementById('month')
let year =  document.getElementById('year')

//start logic
function clicking(){

let city = searchBtn.value
if(city){

fetch(`https://api.weatherapi.com/v1/forecast.json?key=a98ebbee63a147c0877141605232202&q=${city}`)
.then( res =>{
    res.json
})
.then(data =>{
    if (data.cod === 404){
        console.log('404')
    }else{

console.log(data)

    }
})

}
else{

console.log('ther is no value')

}

}
btn.addEventListener('click' ,clicking())