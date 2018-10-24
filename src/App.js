import React, { Component, Fragment } from 'react';
import axios from 'axios'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            members: [],
            events: [],
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
        .then(response => response.data.results)
        .then(membersData => {
            this.setState({
                members: membersData
                .slice(0, 3)
                .map(member => ({
                  name: member.name,
                  tahunLahir: member.birth_year,
                }))
            })
        })

        axios.get('https://swapi.co/api/films/')
        .then(response => response.data.results)
        .then(filmsData => {
            this.setState({
                events: filmsData
                .slice(0, 3)
                .map(film => ({
                  title: film.title,
                  owner: film.producer,
                  date: film.release_date,
                  description: film.opening_crawl,
                }))
            })
        })
    }

    render() {
    const { members, events } = this.state

        return (
            <Fragment>
                <BrowserRouter>
                  <div>
                        <NavBar />
                        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <Route exact path="/" render={() => (
                                <Home members={members} events={events}/>
                            )} />
                            <Route exact path="/about" component={About} />
                            <Route path="/about/me" render={() => <h1>about me</h1>} />
                            
                            <Route path="/user/:id" component={User}/>
                        </div>
                        <Footer />
                  </div>
                </BrowserRouter>         
            </Fragment>
        );
    }
}

export default App;
