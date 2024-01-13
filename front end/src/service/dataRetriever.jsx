import dataMocked from '../data/data'
import { getUser, getActivity, getAverageSessions, getPerfs } from './APIControler.js';

/**
 * switch entre API et mock
 * 
 * @param {*} cas 
 * @param {*} userId 
 */
const DataRetriever = async (cas, userId) => {
    // si params non définis
    if (cas === undefined || userId === undefined) {
        cas = "mock";
        userId = 0;
    }

    let results = []
    switch (cas) {
        case "mock":
            // utilisation des données mockées
            results.push(dataMocked.USER_MAIN_DATA[userId].userInfos.firstName)
            results.push(dataMocked.USER_ACTIVITY[userId].sessions)
            results.push(dataMocked.USER_AVERAGE_SESSIONS[userId])
            results.push(dataMocked.USER_PERFORMANCE[userId].data)
            results.push(dataMocked.USER_MAIN_DATA[userId].score * 100)
            results.push(dataMocked.USER_MAIN_DATA[userId].score)
            results.push(dataMocked.USER_MAIN_DATA[userId].keyData.calorieCount / 1000)
            results.push(dataMocked.USER_MAIN_DATA[userId].keyData.proteinCount)
            results.push(dataMocked.USER_MAIN_DATA[userId].keyData.carbohydrateCount)
            results.push(dataMocked.USER_MAIN_DATA[userId].keyData.lipidCount)
            break;
        case "API":
            // utilisation des données de l'API
            const mainData = await getUser(userId)
            const userActivity = await getActivity(userId)
            const userAverageSessions = await getAverageSessions(userId)
            const perfs = await getPerfs(userId)

            // si l'API renvoie "error" on renvoie les données mockées du user 0
            if (mainData === "error" || userActivity === "error" || userAverageSessions === "error" || perfs === "error") {
                userId = 0
                results.push(dataMocked.USER_MAIN_DATA[userId].userInfos.firstName)
                results.push(dataMocked.USER_ACTIVITY[userId].sessions)
                results.push(dataMocked.USER_AVERAGE_SESSIONS[userId])
                results.push(dataMocked.USER_PERFORMANCE[userId].data)
                results.push(dataMocked.USER_MAIN_DATA[userId].score * 100)
                results.push(dataMocked.USER_MAIN_DATA[userId].score)
                results.push(dataMocked.USER_MAIN_DATA[userId].keyData.calorieCount / 1000)
                results.push(dataMocked.USER_MAIN_DATA[userId].keyData.proteinCount)
                results.push(dataMocked.USER_MAIN_DATA[userId].keyData.carbohydrateCount)
                results.push(dataMocked.USER_MAIN_DATA[userId].keyData.lipidCount)
                alert("Connexion API défaillante, les données du mock ont été chargées. Veuillez lancer le backend sur le port 3000 afin de connecter l'API");
                break;
            }
            results.push(mainData.data.data.userInfos.firstName)
            results.push(userActivity.data.data.sessions)
            results.push(userAverageSessions.data.data)
            results.push(perfs.data.data.data)
            if (mainData.data.data.todayScore === undefined) {
                results.push(mainData.data.data.score * 100)
                results.push(mainData.data.data.score)
            } else {
                results.push(mainData.data.data.todayScore * 100)
                results.push(mainData.data.data.todayScore)
            }
            results.push(mainData.data.data.keyData.calorieCount / 1000)
            results.push(mainData.data.data.keyData.proteinCount)
            results.push(mainData.data.data.keyData.carbohydrateCount)
            results.push(mainData.data.data.keyData.lipidCount)
            break;
        default:
            // par défaut on renvoie le mock du user 0
            userId = 0
            results.push(dataMocked.USER_MAIN_DATA[userId].userInfos.firstName)
            results.push(dataMocked.USER_ACTIVITY[userId].sessions)
            results.push(dataMocked.USER_AVERAGE_SESSIONS[userId])
            results.push(dataMocked.USER_PERFORMANCE[userId].data)
            results.push(dataMocked.USER_MAIN_DATA[userId].score * 100)
            results.push(dataMocked.USER_MAIN_DATA[userId].score)
            results.push(dataMocked.USER_MAIN_DATA[userId].keyData.calorieCount / 1000)
            results.push(dataMocked.USER_MAIN_DATA[userId].keyData.proteinCount)
            results.push(dataMocked.USER_MAIN_DATA[userId].keyData.carbohydrateCount)
            results.push(dataMocked.USER_MAIN_DATA[userId].keyData.lipidCount)
            break;
    }

    return results
}

export default DataRetriever