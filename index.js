const mybtn=document.getElementById("mybtn");
const myinput=document.getElementById("myinput");
const temp=document.getElementById("temp");
const myspan=document.getElementById("myspan");
const condition=document.getElementById("condition");

const API_KEY = '23b05f8b053f2ed7548b0a5fc1c6d27b';

mybtn.onclick=function(){
    getdata(myinput.value);
}

function roundToDecimal(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}


async function getdata(city){

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then(response => response.json())
    .then(value=>{
        console.log(value);
        myspan.textContent=value.name;

        let temp1 = roundToDecimal(value.main.temp - 273.15,1);
        temp.textContent=`${temp1} \u00B0 c`;

        condition.textContent=`${value.weather[0].description}`;
    
    }
    );


}

// JSON.stringify(data);

// console.log(data.name);