import React, { Component } from 'react';

import { getSchedule } from '../../../services/footballservice';

import './Schedule.css';

class Schedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schedule: []
        }
    }

    componentDidMount() {
        getSchedule().then((schedule) => {
            // console.log("before state change",roster);
            this.setState({
                schedule: schedule
            })
        })
    }

    render() {
        
        let scheduleList = this.state.schedule.map((schedule, i) => {
            var newDate = schedule.date;
            var strDate = new Date(newDate).toString().split(' ');
            var currentDate = [strDate[0], ', ', strDate[1], ' ', strDate[2]];
            currentDate.join(' ');
            // console.log(strDate);
            // console.log(currentDate.join(' '));
        
            return (
                <tr key={i}>
                    <td>{currentDate}</td>
                    <td>{schedule.matchday}</td>
                    <td>{schedule.homeTeamName}</td>
                    <td> vs.</td>
                    <td>{schedule.awayTeamName}</td>

                </tr>
            )
        })

        return (
            <div>
                <h5 className="view-title">Upcoming EPL Fixtures</h5>
                <div className="scheduleList">
                    <table className="table table-striped table-hover">
                        <thead id="table-header">
                        <tr>
                            <th>Date</th>
                            <th>Game #</th>
                            <th id="teamName">Home Team</th>
                            <th>vs.</th>
                            <th id="teamName">Away Team</th>
                        </tr>
                        </thead>
                        <tbody>
                            {scheduleList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Schedule;