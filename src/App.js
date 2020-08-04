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
import About from "./components/About"
import ConvertRate from "./components/ConvertRate";
import Converter from "./components/Converter";
import BottomBar from "./components/BottomBar";


const APIKey = process.env.REACT_APP_AUTH_TOKEN;
class App extends Component {
    state = {
        size: 1920,
        amount: 0,
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
        firstRate: '',
        secondRate: '',
        firstValue: '',
        secondValue: '',
        firstCode: '',
        secondCode: '',
        firstErr:'',
        secondErr:'',
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
    handleAmountChange = e => {
        this.setState({
            amount: e.target.value
        })
    };

    handleFirstChange = e => {
        this.setState({
            firstValue: e.target.value
        })
    };

    handleSecondChange = e => {
        this.setState({
            secondValue: e.target.value
        })
    };

    handleCitySubmit = e => {
        e.preventDefault();
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}`;

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
                    currency: prevState.valueNBP.toUpperCase(),
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
                    currency: prevState.valueNBP.toUpperCase(),
                }))
            });
        document.getElementById("oneCode").style.display="block";
        document.getElementById("twoCodes").style.display="none"
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

    handleFirstCurrency = (e) => {
        e.preventDefault();
        if(this.state.firstValue.toUpperCase()!=="PLN") {
            const APICode = `https://api.nbp.pl/api/exchangerates/rates/a/${this.state.firstValue}`;
            fetch(APICode)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw Error("Brak informacji o walucie")
                })
                .then(response => response.json())
                .then(data => {
                    this.setState(prevState => ({
                        firstErr: false,
                        firstRate: data.rates[0].mid,
                        firstCode: prevState.firstValue.toUpperCase()
                    }))
                }).catch(err => {
                console.log(err);
                this.setState(prevState => ({
                    firstErr: true,
                    firstRate: '',
                    firstCode: prevState.firstValue.toUpperCase()
                }))
            })
        }
        else{
            this.setState(prevState => ({
                firstErr: false,
                firstRate: 1,
                firstCode: prevState.firstValue.toUpperCase()
            }))
        }
        if(this.state.secondValue.toUpperCase()!=="PLN") {
            const APICode2 = `https://api.nbp.pl/api/exchangerates/rates/a/${this.state.secondValue}`;
            fetch(APICode2)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw Error("Brak informacji o walucie")
                })
                .then(response => response.json())
                .then(data => {
                    this.setState(prevState => ({
                        secondErr: false,
                        secondRate: data.rates[0].mid,
                        secondCode: prevState.secondValue.toUpperCase()
                    }))
                }).catch(err => {
                console.log(err);
                this.setState(prevState => ({
                    secondErr: true,
                    secondRate: '',
                    secondCode: prevState.secondValue.toUpperCase()
                }))
            });
        }
        else{
            this.setState(prevState => ({
                secondErr: false,
                secondRate: 1,
                secondCode: prevState.secondValue.toUpperCase()
            }))
        }

        document.getElementById("oneCode").style.display="none";
        document.getElementById("twoCodes").style.display="block"
    };





    render() {
        return (
            <Router>
                <div className="App">
                    <TopNavbar/>
                    <BottomBar/>
                    <Route path="/Weather-app" exact render={
                        () => {
                            document.title = "Strona główna";
                            return (
                                <div className="App">
                                    <h3 className="subtitleResponsive">Interesują Cię:</h3>
                                    <div className="api-group">
                                        <API
                                            h3Label="Kursy walut"
                                            link="/Weather-app/currencies"
                                            buttonLabel="Narodowy Bank Polski API"
                                            source="coins"
                                            alt="coins"
                                        />
                                        <API
                                            h3Label="Pogoda"
                                            link="/Weather-app/weather"
                                            buttonLabel="Open Weather Map API"
                                            source="weather"
                                            alt="weather"
                                        />
                                    </div>
                                </div>
                            );
                        }
                    }/>
                    <Route path="/Weather-app/weather" render={
                        () => {
                            document.title = "Open Weather Map API";
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

                    <Route path="/Weather-app/currencies" render={
                        () => {
                            document.title = "Narodowy Bank Polski API";
                            return (
                                <div className="App">
                                    <CodSection
                                        check={this.handleCodesRequest}
                                    />
                                    <div className="groupForms">
                                        <Form2NBP
                                            value={this.state.valueNBP}
                                            change={this.handleInputChangeNBP}
                                            submit={this.handleCurrencySubmit}
                                        />
                                        <ConvertRate
                                            amountValue={this.state.amount}
                                            firstValue={this.state.firstValue}
                                            secondValue={this.state.secondValue}
                                            amountChange={this.handleAmountChange}
                                            firstChange={this.handleFirstChange}
                                            secondChange={this.handleSecondChange}
                                            submit={this.handleFirstCurrency}
                                        />
                                    </div>
                                    <div  id="twoCodes">
                                    <Converter
                                    convert={this.state}
                                    />
                                    </div>
                                    <br/>
                                    <br/>
                                    <div id="oneCode">
                                    <div className="tendencies-group">
                                        <Tendency
                                            nowthen={this.state}
                                            period={"Tygodniowy"}
                                            periodDiff={5}
                                        />
                                        <Tendency
                                            nowthen={this.state}
                                            period={"Miesięczny"}
                                            periodDiff={22}
                                        />
                                        <Tendency
                                            nowthen={this.state}
                                            period={"Kwartalny"}
                                            periodDiff={65}
                                        />
                                    </div>
                                    <ResultNBP
                                        currencies={this.state}
                                    />
                                    </div>
                                </div>
                            );
                        }
                    }/>

                    <Route path="/Weather-app/codes" render={
                        () => {
                            document.title = "Kursy walut";
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

                    <Route path="/Weather-app/author" render={
                        () => {
                            document.title = "Autor";

                            return (
                                <div className="App">
                                    <About/>
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
