import React, { Component } from 'react';

import { getRoster } from '../../../services/footballservice';

import './Roster.css';

class Roster extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roster: []
        }
    }

    componentDidMount() {
        getRoster().then((roster) => {
            // console.log("before state change",roster);
            this.setState({
                roster: roster.players
            }) 
        })
    }

    render() {
        // const { roster } = this.state;
        // console.log(this.state.roster)

        let rosterList = this.state.roster.map((roster, i) => {
            return (
                <tr key={i}>
                    <td>{roster.jerseyNumber}</td>
                    <td>{roster.name}</td>
                    <td>{roster.position}</td>
                    <td>{roster.dateOfBirth}</td>
                    <td>{roster.nationality}</td>
                    <td>{roster.marketValue}</td>
                </tr>
            )
        })

        return (
            <div>
                <h5 id="teamName">Team Roster</h5>
                <div className="rosterList">
                    <table className="table table-striped table-hover">
                        <thead id="table-header">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Date of Birth</th>
                            <th>Nationality</th>
                            <th>Market Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rosterList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Roster;