# Weather App with React

- Ability to add unlimited cities by their name to a list, this list will be kept in redux (mandatory), example cities: Miami, London, Berlin, Frankfurt, Istanbul, Ankara.
- - Ability to remove the city
- Ability to refresh all cities unless they have been refreshed within last 60 seconds (caching)
- Ability to search and shortlist the list of the added cities by searchbox realtime
- - It has an `About` and `Home` pages. Home will host the Weather App itself and About view will host simple Text with Name of the App and the version.


## API:

I worked with https://openweathermap.org/ and used their free API. In order to work with them you need to signup to get an `APIKEY`. APIKey shall be stored on serverside only. 

Get started documentation is at https://openweathermap.org/appid and we will be working with `Weather Data` API which is at https://openweathermap.org/current . This API is able to query current weather by different properties like ZIP, Coordinate or Name of the city. We will use the Name of the city as the query property. The example API Endpoint is at https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22 

##Build and Start

- `yarn add redux react-redux redux-thunk`.
- `yarn add react-router-dom`.
- `yarn add axios`.
- `git clone "https://github.com/erikflowers/weather-icons.git", //for weather icons`.
- yarn start


##Preview
