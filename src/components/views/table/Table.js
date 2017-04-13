import React, { Component } from 'react';

import { getTable } from '../../../services/footballservice';

import './Table.css';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            table: []
        }
    }

    componentDidMount() {
        getTable().then((table) => {
            // console.log("before state change",roster);
            this.setState({
                table: table
            })
        })
    }

    render() {
       

        let currentTable = this.state.table.map((table, i) => {
            return (
                 <tr>
                    <td>{table.position}</td>
                    <td>{table.teamName}</td>
                    <td>{table.playedGames}</td>
                    <td>{table.wins}</td>
                    <td>{table.losses}</td>
                    <td>{table.draws}</td>
                    <td>{table.goalDifference}</td>
                    <td>{table.points}</td>
                </tr>
            )
        })
        return (
            <div>
                <h5 className="view-title">Current Standings for 2016 / 2017 Season</h5>
                <div className="tableList">
                <table className="table table-striped table-hover">
                    <thead id="table-header">
                        <tr>
                            <th>Position</th>
                            <th>Team</th>
                            <th>GP</th>
                            <th>W</th>
                            <th>L</th>
                            <th>D</th>
                            <th>GD</th>
                            <th>PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                       {currentTable}
                    </tbody>
                </table>
                </div>

            </div>
        );
    }
}

export default Table;