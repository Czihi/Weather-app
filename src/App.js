import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Form2 from './components/Form2';
import Result from './components/Result';
import Form2NBP from './components/Form2NBP';
import ResultNBP from './components/ResultNBP';
import Image from './components/Image';
import Tendency from './components/Tendency';
import CodSection from "./components/CodSection";
import CodesTable from "./components/CodesTable";
import TopNavbar from "./components/TopNavbar";
import API from "./components/API";
import testowy from "./images/warm.png"
const APIKey = '19d6f8c65d72c23ed423c1b6b007518b';

class App extends Component {
    state = {
        size: 1920,
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
        codeErr: '',
        codes: '',
        err2: '',
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
                    err2: false,
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
                    err2: true,
                    date: "",
                    currencyName: "",
                    rates: "",
                    ratesLength: "",
                    city: '',
                    currency: prevState.valueNBP,
                }))
            });
    };
    handleCodesRequest = () => {
        const APICodes = 'https://api.nbp.pl/api/exchangerates/tables/a/';
        fetch(APICodes)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error("Brak informacji o walutach")
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    codeErr: false,
                    codes: data[0].rates,
                })
            }).catch(err => {
            console.log(err);
            this.setState({
                codeErr: true,
                codes: ''
            })
        })


    };


    render() {
        return (
            <Router>
                <div className="App">
                    <TopNavbar/>
                    <Route path="/" exact render={
                        () => {
                            document.title = "Strona główna"
                            return (
                                <div className="App">
                                    <h3>Czego szukasz na tej stronie?</h3>
                                    <div className="tendencyDiv">
                                       <API
                                       h3Label="Kursów walut"
                                       link="/currencies"
                                       buttonLabel="NBP API"
                                       source="/coins.png"
                                       alt="coins"
                                       />
                                        <API
                                            h3Label="Informacji o pogodzie"
                                            link="/weather"
                                            buttonLabel="Open Weather Map API"
                                            source="/weather.png"
                                            alt="weather"
                                        />
                                    </div>
                                </div>
                            );
                        }
                    }/>
                    <Route path="/weather" render={
                        () => {
                            document.title = "Open Weather Map API"
                            return (
                                <div className="App">
                                    <div className="tendencyDiv">
                                        <Form2
                                            value={this.state.value}
                                            change={this.handleInputChange}
                                            submit={this.handleCitySubmit}
                                        />
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
                            document.title = "NBP API"
                            return (
                                <div className="App">
                                    <div className="group">
                                        <Form2NBP
                                            value={this.state.valueNBP}
                                            change={this.handleInputChangeNBP}
                                            submit={this.handleCurrencySubmit}
                                        />
                                        <CodSection
                                            check={this.handleCodesRequest}
                                        />
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

                    <Route path="/codes" render={
                        () => {
                            document.title = "Kursy walut"
                            return (
                                <div className="App">

                                    <CodesTable
                                        check={this.handleCodesRequest}
                                        codes={this.state.codes}
                                        codeErr={this.state.codeErr}
                                    />
                                </div>
                            )
                        }
                    }/>

                    <Route path="/author" render={
                        () => {
                            document.title = "Autor"

                            return (
                                <div className="App">
                                    <img src={testowy} alt="test"/>
                                </div>
                            )
                        }
                    }/>
                </div>
            </Router>
        )
            ;
    }
}

export default App;
