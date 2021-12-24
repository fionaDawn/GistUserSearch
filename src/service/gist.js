import axios from "axios";

const GIT_BASE_URL = "https://api.github.com";

const config = {
    method: 'get',
    headers: {
        'Authorization': 'Basic ZmlvbmFEYXduOmdocF9tbFJyRkdWTEdJNU9KenRLYnBPUmw4OHZHS0ZBSTQzWDdiNEw='
    }
};

export const getGistsByUsername = async (uname) => (
    (await axios({ ...config, url: `${GIT_BASE_URL}/users/${uname}/gists` })).data
)

export const getAllForksByGistId = async (gistId) => (
    (await axios({ ...config, url: `${GIT_BASE_URL}/gists/${gistId}/forks` })).data
)
