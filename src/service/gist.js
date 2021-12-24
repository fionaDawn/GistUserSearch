import axios from "axios";

export const GIT_BASE_URL = "https://api.github.com";

export const config = {
    method: 'get',
    headers: {
        'Authorization': 'Basic ZmlvbmFEYXduOmdocF9tbFJyRkdWTEdJNU9KenRLYnBPUmw4OHZHS0ZBSTQzWDdiNEw='
    }
};

export const getGistsByUsername = async (uname) => (
    await axios({ ...config, url: `${GIT_BASE_URL}/users/${uname}/gists` })
)

export const getAllForksByGistId = async (gistId) => (
    await axios({ ...config, url: `${GIT_BASE_URL}/gists/${gistId}/forks` })
)
