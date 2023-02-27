const searchBtn = document.getElementById('searchBtn')
const btn  = document.getElementById('btn')
const notFound = document.querySelector*(".notFound")
const img  = document.getElementById('img')
const info = document.querySelector*(".info")
let degree =  document.querySelector(".temp-degree")
let condation =  document.querySelector(".condation")
let city = searchBtn.value
let day =  document.getElementById('dAY')
let month =  document.getElementById('month')
let year =  document.getElementById('year')
console.log(notFound , img ,info , degree , condation ,day ,month ,year)
//start logic






btn.addEventListener('click' , function(){
    if(city !== ''){

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=a98ebbee63a147c0877141605232202&q=${city}`)
        .then( response =>{
           return response.json()
        })
        .then(data =>{
        console.log(data)
            })
        }
        else{
        console.log('ther is no value')
        
        }
})