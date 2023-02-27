const searchBtn = document.getElementById('searchBtn')
const btn  = document.getElementById('btn')
const notFound = document.querySelector*(".notFound")
const img  = document.getElementById('img')
const info = document.getElementById('info')
let degree =  document.querySelector(".temp-degree")
let condation =  document.querySelector(".condation")
let city = searchBtn.value
let day =  document.getElementById('dAY')
let month =  document.getElementById('month')
let year =  document.getElementById('year')
console.log(notFound , img ,info , degree , condation ,day ,month ,year)
//start logic

console.log(info)




btn.addEventListener('click' , function(){
    if(searchBtn.value!== ''){
let url = `https://api.weatherapi.com/v1/forecast.json?key=a98ebbee63a147c0877141605232202&q=${searchBtn.value}`
        fetch(url)
        .then( response =>{
           return response.json()
        })
        .then(data =>{
        console.log(data)
 let main =document.querySelector('.main')
        condation.innerText =  data.current.condition.text
        let src =  data.current.condition.icon
        img.src ="src"
        console.log(data.current.condition.icon,data.current.condition.text)
main.style.opacity ='1'
main.style.transition ='.5s'
main.style.display ='block'
degree.innerText =  data.current.temp_c
document.querySelector('.details').innerText = data.current.last_updated

            })
        }
        else{
        console.log('ther is no value')
        
        }
})