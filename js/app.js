const cityForm = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')

const buscaCidade = async (cityName) => {  
  const { Key, LocalizedName } = await getCityData(cityName)

  const { WeatherText, Temperature, IsDayTime, WeatherIcon } = await getCityWeather(Key);

  const weather = document.querySelector('[data-js="weather-details"]');
  const cidade = weather.querySelector('.cidade');
  const clima = weather.querySelector('.clima');
  const temperatura = weather.querySelector('.temperatura > span');
  
  cidade.textContent = LocalizedName;
  clima.textContent = WeatherText;
  temperatura.textContent = Temperature.Metric.Value;
  timeIcon.innerHTML = `<img src="./images/icons/${WeatherIcon}.svg" />`
  timeImg.src = IsDayTime ? './images/day.svg' : './images/night.svg'
  
  if (Key) {
    localStorage.setItem('cidade', cityName);
  }

  cityCard.classList.remove('hidden')  
  cityForm.reset()
}

cityForm.addEventListener('submit', async event => {
  event.preventDefault()
  
  buscaCidade(event.target.city.value)
})

const lastCity = localStorage.getItem('cidade')

if (lastCity) {
  cityForm.city.value = lastCity
  buscaCidade(lastCity)
}
