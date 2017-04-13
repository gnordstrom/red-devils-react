import axios from 'axios';

// Results
export function getResults() {
    return axios({
        method: 'GET',
        url:'http://api.football-data.org/v1/teams/66/fixtures?season=2016&timeFrame=p365', 
        headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
    })
    .then(res => res.data)
    // .then(res => {
    //     console.log("bob",res)
    //     var newArr = res.data.fixtures
    //     var newArrLength = res.data.fixtures.length;
    //     var checkStatus = function(res) {
    //         for (var i = 0; i < newArrLength; i++) {
    //             if (res.data.fixtures[i].status === "TIMED") {
    //                 res.data.fixtures.splice(i, 1)
    //                 return res.data.fixtures;
    //             } else {
    //                 return res.data.fixtures;
    //             }
    //         }
    //     };
    //     checkStatus();
    //     // return res.data
    // })
    .catch(err => {
        throw err;
        // return {};
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
        res.data.players.sort(function(a, b){return a.jerseyNumber-b.jerseyNumber});
        return res.data;
    })
    .catch(err => {
        throw err;
        // return {};
    })
}

// Schedule
export function getSchedule() {
    return axios({
        method: 'GET',
        url:'http://api.football-data.org/v1/teams/66/fixtures?season=2016&timeFrame=n365', 
        headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
    })
    .then(res => res.data.fixtures)
    .catch(err => {
        throw err;
        return {};
    })
}

// Table
// export function getTable() {
//     return axios({
//         method: 'GET',
//         url:'http://api.football-data.org/v1/competitions/426/leagueTable', 
//         headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
//     })
//     .then(res => res.data.standing)
//     .catch(err => {
//         throw err;
//         return {};
//     })
// }
