const APIKEY =`e8ef7a647755ae8e6d0b16dc87e6b948`

let apiCall = function(city){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    
    fetch(url).then((response)=>
        response.json().then((data)=>{console.log(data);
            document.querySelector('#city').innerHTML= '<i class="fa-solid fa-city"></i>' + data.name;
            document.querySelector('#temp').innerHTML= '<i class="fa-solid fa-temperature-three-quarters"></i>' + data.main.temp + ' deg';
            document.querySelector('#humidity').innerHTML=  '<i class="fa-solid fa-water"></i>' + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML= '<i class="fa-solid fa-wind"></i>' + data.wind.speed + 'km/h';
        })
    )
    .catch((err)=>console.log('Erreur : ' + err));

    }

document.querySelector('form').addEventListener('submit',function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});

apiCall('cotonou');
