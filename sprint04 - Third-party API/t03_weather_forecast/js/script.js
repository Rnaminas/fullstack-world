const url = `https://api.openweathermap.org/data/2.5/forecast?q=kyiv&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;

const getWeather = () => fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const cityName = document.getElementById('city');
        const list = document.querySelector(".weather-list");
        cityName.innerHTML = data.city.name;
        const listWeather = data.list;
        const dayList = [];
        listWeather.forEach(function (item) {
            if (item.dt_txt.includes('15:00:00')) {
                dayList.push(item);
            }
        });
        dayList.forEach(function (item) {
            const listElement = document.createElement('li');
            const weatherName = item.weather[0].description.replace(' ', '-');
            listElement.classList.add('weather-list__item');

            const weatherDate = document.createElement('p');
            let tempDate = item.dt_txt.split(' ');
            let date = tempDate[0].split('-');
            weatherDate.classList.add('weather-date');
            weatherDate.innerHTML = `${date[2]}.${date[1]}`;

            const weatherImg = new Image(100, 100);
            weatherImg.src =`assets/images/${weatherName}.png`;

            const temperatureElement = document.createElement('p');
            temperatureElement.classList.add('temperature');

            let signatureTemperature = Math.round(item.main.temp) > 0 ? ' + ' : ' - ';
            temperatureElement.innerHTML = signatureTemperature + Math.round(item.main.temp);

            listElement.appendChild(weatherDate);
            listElement.appendChild(weatherImg);
            listElement.appendChild(temperatureElement);
            list.appendChild(listElement);
        });
    });

getWeather();