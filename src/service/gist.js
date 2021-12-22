import axios from "axios";

const GIT_BASE_URL = "https://api.github.com";

export const getGistsByUsername = async (uname) => {
    // try {
    const response = await axios.get(`${GIT_BASE_URL}/users/${uname}/gists`)
    return response.data;
    // } catch (e) {
    //     // dispatch error
    //     return e.response.data;
    // }
}