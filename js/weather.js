// developer.accuweather.com
// API Key = MqWwn3UvDmn20U4QZHZBSotTAbx3LDUG
// 
// API City Search:
// http://dataservice.accuweather.com/locations/v1/cities/search
// Query Parameters: apikey, q (texto a procurar)
// Outros parâmetros não obrigatórios: language = "pt-br", 
// details = false, offset = 25
//
// API Current Conditions:
// http://dataservice.accuweather.com/currentconditions/v1/
// Query Parameters: apikey, language (opcional)

const APIkey = 'ezfnfGbOcLOhuSuGPUwvFpos2cq9NEzv'

const getCityUrl = city =>
   `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${city}`
  
/********************************************
 * getCityData (cityName)
 ********************************************/
const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    // destructurin de array: armazena o primeiro item em cityData
    const [cityData] = await response.json()
    return cityData

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getWeatherUrl = key =>
   `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIkey}&language=pt-br`

/********************************************
 * getCityWeather (cityKey)
 ********************************************/
const getCityWeather = async (cityKey) => {
  try {
    if (!cityKey) {      
      throw new Error('Não foi possível obter os dados')
    }

    const weatherUrl = getWeatherUrl(cityKey)
    const response = await fetch(weatherUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    // destructurin de array: armazena o primeiro item em cityData
    const [cityWeatherData] = await response.json()
    return cityWeatherData

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const inicCity = async (cityName) => {
  const cityData = await getCityData(cityName);
    
  if (cityData) {
    const { Key } = cityData
    console.log(Key)
    cityWeatherData = await getCityWeather(Key);
    console.log(cityWeatherData)
  }
}

//inicCity('campinas');





