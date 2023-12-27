import axios from 'axios';
/**
 * retourne les infos user depuis l'API
 */
export const getUser = async (userId) => {
    try {
        const mainData = await axios.get(`http://localhost:3000/user/${userId}`);
        return mainData;
    }
    catch {
        return "error";
    }
}

/**
 * retourne les Activités du user depuis l'API
 */
export const getActivity = async (userId) => {
    try {
        const userActivity = await axios.get(`http://localhost:3000/user/${userId}/activity`)

        return userActivity;
    }
    catch {
        return "error";
    }
}

/**
 * retourne les AverageSessions depuis l'API
 */
export const getAverageSessions = async (userId) => {
    try {
        const userAverageSessions = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)

        return userAverageSessions;
    }
    catch {
        return "error";
    }
}

/**
 * retourne les infos perfs user depuis l'API
 */
export const getPerfs = async (userId) => {
    try {
        const perfs = await axios.get(`http://localhost:3000/user/${userId}/performance`)

        return perfs;
    }
    catch {
        return "error";
    }
}