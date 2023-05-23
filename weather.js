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
            const testDiv2  = document.createElement('div');
            testDiv.className='test';
            let currentTemperature = weather.hourly.temperature_2m[hour];
            testDiv.innerHTML=`<p>${currentTemperature}&degC</p>`
            document.getElementById("temp").appendChild(testDiv);
            testDiv2.innerHTML=`<p>Температура на вулиці зараз ${currentTemperature}&degC, тому в таку погоду ми рекомендуємо вам випити цей чай:</p>`
            document.getElementById("tea_by_temp_text2").appendChild(testDiv2);
            const weatherIcon = document.getElementById("tea_by_weather_icon");
            const weatherText1 = document.getElementById("tea_by_weather_t1");
            const weatherText2 = document.getElementById("tea_by_weather_t2");
        
            if (currentTemperature >= 0 && currentTemperature <= 7) {
              weatherIcon.src = "tea-catalog/tea11.png";
              weatherText1.textContent = "Green Ginger";
              weatherText2.textContent = "Зелений чай з імбиром. Це освіжаючий і ароматний напій, який поєднує в собі користь зеленого чаю та пряного смаку імбиру. Цей чай допоможе вам зігрітися в прохолодну погоду.";
            } else if (currentTemperature >= 8 && currentTemperature <= 12) {
              weatherIcon.src = "tea-catalog/tea6.png";
              weatherText1.textContent = "Honey Mango";
              weatherText2.textContent = "Це чай з ніжним солодким смаком і ароматом, нагадуючим мед та свіжу манго. Споживання манго може бути корисним для загального здоров'я, зокрема для зміцнення імунної системи, підтримки здоров'я шкіри та очей, а також для підтримки здоров'я серця.";
            } else if (currentTemperature >= 13 && currentTemperature <= 16) {
              weatherIcon.src = "tea-catalog/tea16.png";
              weatherText1.textContent = "Royal Dessert";
              weatherText2.textContent = "Це ароматний та смачний напій, який має смак та аромат вишні. Цей чай можна подавати як гарячий або льодяний напій, в залежності від вподобань. Також, червоний вишневий чай може мати вітаміни, мінерали та інші корисні сполуки, що сприяють загальному здоров'ю.";
            } else if (currentTemperature >= 17 && currentTemperature <= 26) {
              weatherIcon.src = "tea-catalog/tea18.png";
              weatherText1.textContent = "Strawberry";
              weatherText2.textContent = "Чай з полуницею є ароматним і смачним напоєм, який використовує сушені плоди полуниці для створення особливого смаку та аромату. Чай з полуницею може бути вживаний як гарячий або охолоджений напій. Він чудово підходить для освіження влітку або як теплий напій в холодну пору року.";
            } else {
              weatherIcon.src = "tea-catalog/tea4.png";
              weatherText1.textContent = "Earl Grey";
              weatherText2.textContent = "Це сорт чаю, який має виразний аромат бергамоту, цитрусових фруктів. Цей чай можна пити в будь-який час дня, оскільки він має помірний рівень кофеїну. Запах бергамоту може мати позитивний вплив на настрій і допомогти зняти стрес та тривогу.";
            }
        })
}



