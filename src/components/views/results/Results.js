import React, { Component } from 'react';

import { getResults } from '../../../services/footballservice';

import './Results.css';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    componentDidMount() {
        getResults().then((results) => {
            // console.log("before state change",results);
            this.setState({
                results: results.fixtures
            }) 
        })
    }

    render() {
        // const { results } = this.state;
        // console.log("look here",results);
        let resultsList = this.state.results.reverse().map((results, i) => {
            return (
                <tr key={i}>
                    <td>{results.matchday}</td>    
                    <td id="teamName">{results.homeTeamName}</td>
                    <td>{results.result.goalsHomeTeam}</td>
                    <td>-</td>
                    <td>{results.result.goalsAwayTeam}</td>
                    <td id="teamName">{results.awayTeamName}</td>
                </tr>
            )
        });

        return (
            <div>
                <h5 className="view-title">Recent Results</h5>
                <div className="resultsList">
                    <table className="table table-striped table-hover">
                        <thead id="table-header">
                            <tr>
                                <th>Game</th>
                                <th id="teamName">Home Team</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th id="teamName">Away Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultsList}
                        </tbody>
                    </table>
                    {/*<table className="table table-striped table-hover">
                        <thead id="table-header">
                        <tr>
                            <th>Game</th>
                            <th id="teamName">Home Team</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th id="teamName">Away Team</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="result in results">
                            <td>{{result.matchday}}</td>
                            <td id="teamName">{{result.homeTeamName}}</td>
                            <td>{{result.result.goalsHomeTeam}}</td>
                            <td>-</td>
                            <td>{{result.result.goalsAwayTeam}}</td>
                            <td id="teamName">{{result.awayTeamName}}</td>
                        </tr>
                        </tbody>
                    </table>*/}
                </div>

            </div>
        );
    }
}

export default Results;