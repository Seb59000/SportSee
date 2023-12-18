import dataMocked from '../data/data'
import axios from 'axios'

const DataRetriever = async (cas) => {
    let results = []
    switch (cas) {
        case 1:
            results.push(dataMocked.USER_MAIN_DATA[0].userInfos.firstName)
            results.push(dataMocked.USER_ACTIVITY[0].sessions)
            results.push(dataMocked.USER_AVERAGE_SESSIONS[0])
            results.push(dataMocked.USER_PERFORMANCE[0].data)
            results.push(dataMocked.USER_MAIN_DATA[0].score * 100)
            results.push(dataMocked.USER_MAIN_DATA[0].score)
            results.push(dataMocked.USER_MAIN_DATA[0].keyData.calorieCount / 1000)
            results.push(dataMocked.USER_MAIN_DATA[0].keyData.proteinCount)
            results.push(dataMocked.USER_MAIN_DATA[0].keyData.carbohydrateCount)
            results.push(dataMocked.USER_MAIN_DATA[0].keyData.lipidCount)
            break;
        case 2:
            results.push(dataMocked.USER_MAIN_DATA[1].userInfos.firstName)
            results.push(dataMocked.USER_ACTIVITY[1].sessions)
            results.push(dataMocked.USER_AVERAGE_SESSIONS[1])
            results.push(dataMocked.USER_PERFORMANCE[1].data)
            results.push(dataMocked.USER_MAIN_DATA[1].score * 100)
            results.push(dataMocked.USER_MAIN_DATA[1].score)
            results.push(dataMocked.USER_MAIN_DATA[1].keyData.calorieCount / 1000)
            results.push(dataMocked.USER_MAIN_DATA[1].keyData.proteinCount)
            results.push(dataMocked.USER_MAIN_DATA[1].keyData.carbohydrateCount)
            results.push(dataMocked.USER_MAIN_DATA[1].keyData.lipidCount)
            break;
        case 3:
            const mainData = await axios.get('http://localhost:3000/user/12')
            const userActivity = await axios.get('http://localhost:3000/user/12/activity')
            const userAverageSessions = await axios.get('http://localhost:3000/user/12/average-sessions')
            const perfs = await axios.get('http://localhost:3000/user/12/performance')
            results.push(mainData.data.data.userInfos.firstName)
            results.push(userActivity.data.data.sessions)
            results.push(userAverageSessions.data.data)
            results.push(perfs.data.data.data)
            results.push(mainData.data.data.todayScore * 100)
            results.push(mainData.data.data.todayScore)
            results.push(mainData.data.data.keyData.calorieCount / 1000)
            results.push(mainData.data.data.keyData.proteinCount)
            results.push(mainData.data.data.keyData.carbohydrateCount)
            results.push(mainData.data.data.keyData.lipidCount)
            console.log(mainData.data.data.keyData.calorieCount / 1000)
            console.log(dataMocked.USER_MAIN_DATA[0].score)
            break;
        default:
            break;
    }

    return results
}

export default DataRetriever