import axios from 'axios';

// Results
export function getResults() {
    return axios({
        method: 'GET',
        url:'http://api.football-data.org/v1/teams/66/fixtures?season=2016', 
        headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
    })
    .then(res => res.data)
    .catch(err => {
        throw err;
        return {};
    })
}

// Roster
export function getRoster() {
    return axios({
        method: 'GET',
        url:'http://api.football-data.org/v1/teams/66/players', 
        headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
    })
    .then(res => {
        var sortedRoster = res.data.players.sort(function(a, b){return a.jerseyNumber-b.jerseyNumber});
        return res.data
    })
    .catch(err => {
        throw err;
        return {};
    })
}

// Schedule
export function getSchedule() {
    return axios({
        method: 'GET',
        url:'http://api.football-data.org/v1/teams/66/players', 
        headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
    })
    .then(res => res.data.fixtures)
    .catch(err => {
        throw err;
        return {};
    })
}

// Table
export function getTable() {
    return axios({
        method: 'GET',
        url:'http://api.football-data.org/v1/competitions/426/leagueTable', 
        headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
    })
    .then(res => res.data.standing)
    .catch(err => {
        throw err;
        return {};
    })
}
