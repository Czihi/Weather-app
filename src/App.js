import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form2 from './Form2';
import Result from './Result';
import Image from './Image';
const APIKey = '19d6f8c65d72c23ed423c1b6b007518b'
class App extends Component {
  state={
    value: "",
    date: "",
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    feels: '',
    pressure: '',
    wind: '',
    clouds: '',
    err: '',
  }

  handleInputChange = e =>{
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e =>{
    e.preventDefault();
    const API =`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}`

    fetch(API)
        .then(response => {
          if(response.ok){
              return response;
          }
          throw Error("Brak informacji o takim mieście")
        })
        .then(response => response.json())
        .then(data => {
          const time= new Date().toLocaleTimeString()
          this.setState(prevState=>({
            err: false,
            date: time,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            clouds: data.clouds.all,
            feels : data.main.feels_like,
          }))
        })
        .catch(err => {
          console.log(err)
          this.setState(prevState=>({
            err: true,
              date: "",
              sunrise: '',
              sunset: '',
              temp: '',
              pressure: '',
              wind: '',
              feels: '',
              clouds: '',
              city: prevState.value
          }))
        })
  }

  render()
  {
    return (
        <div className="App">
          <Form2
              value={this.state.value}
              change={this.handleInputChange}
              submit={this.handleCitySubmit}
          />
          <Result
          weather={this.state}
          />
          <Image
              temperature={this.state.temp}
              windSpeed={this.state.wind}
          />

        </div>
    );
  }
}

export default App;
