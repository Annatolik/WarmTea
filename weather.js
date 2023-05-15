// https://api.open-meteo.com/v1/forecast?latitude=49.85&longitude=24.00&daily=weathercode,temperature_2m_max&windspeed_unit=ms&timeformat=unixtime&forecast_days=1&timezone=Europe%2FBerlin

// https://api.openweathermap.org/data/2.5/weather?q=lviv&appiad=672fbee1c5a0cd0266c5dbab9753f661
    window.onload =getData();

function getData(){
    fetch('https://api.open-meteo.com/v1/forecast?latitude=49.85&longitude=24.00&hourly=temperature_2m&windspeed_unit=ms&timeformat=unixtime&forecast_days=1&timezone=Europe%2FBerlin')
        .then(function(response){
            return response.json();
        })
        .then(function (weather){
            console.log(JSON.stringify(weather))
            const d = new Date();
            let hour = d.getHours();
            const testDiv  = document.createElement('div');
            testDiv.className='test';
            testDiv.innerHTML=`<p>${weather.hourly.temperature_2m[hour]}&degC</p>`
          document.getElementById("temp").appendChild(testDiv);
        })}