import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import back from './images/back.png'
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Form2 from './components/Form2';
import Result from './components/Result';
import Form2NBP from './components/Form2NBP';
import ResultNBP from './components/ResultNBP';
import Image from './components/Image';
import Tendency from './components/Tendency';

const APIKey = '19d6f8c65d72c23ed423c1b6b007518b';

class App extends Component {
    state = {
        value: "",
        valueNBP: "",
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
        currency: '',
    };


    handleInputChange = e => {
        this.setState({
            value: e.target.value
        })
    };
    handleInputChangeNBP = e => {
        this.setState({
            valueNBP: e.target.value
        })
    };


    handleCitySubmit = e => {
        e.preventDefault();
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}`;

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("Brak informacji o takim mieście")
            })
            .then(response => response.json())
            .then(data => {
                const time = new Date().toLocaleTimeString();
                this.setState(prevState => ({
                    err: false,
                    date: time,
                    city: prevState.value,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    clouds: data.clouds.all,
                    currency: '',
                    feels: data.main.feels_like,
                }))
            })
            .catch(err => {
                console.log(err);
                this.setState(prevState => ({
                    err: true,
                    date: "",
                    sunrise: '',
                    sunset: '',
                    temp: '',
                    pressure: '',
                    wind: '',
                    feels: '',
                    clouds: '',
                    currency: '',
                    city: prevState.value
                }))
            })
    };

    handleCurrencySubmit = e => {
        e.preventDefault();
        const API = `https://api.nbp.pl/api/exchangerates/rates/A/${this.state.valueNBP}/last/255`;
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("Brak informacji o takiej walucie");
            })
            .then(response => response.json())
            .then(data => {
                const time = new Date().toLocaleTimeString();
                this.setState(prevState => ({
                    err: false,
                    date: time,
                    currencyName: data.currency,
                    rates: data.rates,
                    ratesLength: data.rates.length,
                    city: '',
                    currency: prevState.valueNBP,
                }))
            })
            .catch(err => {
                console.log(err);
                this.setState(prevState => ({
                    err: true,
                    date: "",
                    currencyName: "",
                    rates: "",
                    ratesLength: "",
                    city: '',
                    currency: prevState.valueNBP,
                }))
            })
    };


    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact render={
                        () => {
                            return (
                                <div className="App">
                                    <h3>Cześć, jakiego API chcesz uzyć ?</h3>
                                    <Link to="/currencies">
                                        <Button variant="primary">NBP API</Button>
                                    </Link>
                                    <Link to="/weather">
                                        <Button variant="primary">OpenWeatherMap API</Button>
                                    </Link>
                                </div>
                            );
                        }
                    }/>
                    <Route path="/weather" render={
                        () => {
                            return (
                                <div className="App">
                                    <div className="tendencyDiv">
                                        <Form2
                                            value={this.state.value}
                                            change={this.handleInputChange}
                                            submit={this.handleCitySubmit}
                                        />
                                        <Link to="/">
                                            <img className="backButton" src={back}
                                                 alt="back"/>
                                        </Link>
                                    </div>
                                    <Result
                                        weather={this.state}
                                    />
                                    <Image
                                        weather={this.state}
                                    />
                                </div>
                            );
                        }
                    }/>

                    <Route path="/currencies" render={
                        () => {
                            return (
                                <div className="App">
                                    <div className="tendencyDiv">
                                        <Form2NBP
                                            value={this.state.valueNBP}
                                            change={this.handleInputChangeNBP}
                                            submit={this.handleCurrencySubmit}
                                        />
                                        <Link to="/">
                                            <img className="backButton" src={back}
                                                 alt="back"/>
                                        </Link>
                                    </div>
                                    <div className="tendencyDiv">
                                        <Tendency
                                            nowthen={this.state}
                                            period={"Tygodniowy"}
                                            periodDiff={7}
                                        />
                                        <Tendency
                                            nowthen={this.state}
                                            period={"Miesięczny"}
                                            periodDiff={30}
                                        />
                                        <Tendency
                                            nowthen={this.state}
                                            period={"Kwartalny"}
                                            periodDiff={90}
                                        />
                                    </div>
                                    <ResultNBP
                                        currencies={this.state}
                                    />
                                </div>
                            );
                        }
                    }/>
                </div>
            </Router>
        );
    }
}

export default App;
