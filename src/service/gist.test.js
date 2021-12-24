import axios from "axios";

import { GIT_BASE_URL, getGistsByUsername, config } from "./gist";
axios.defaults.adapter = require('axios/lib/adapters/http');

jest.mock("axios");

describe("fetchGists", () => {
    describe("when API call is successful", () => {
        it("should return gist list", async () => {
            // given
            const gist = {
                data: [
                    { id: "123", owner: { login: "test123" } }, { id: "256", owner: { login: "test256" } }
                ]
            };
            axios.mockResolvedValueOnce(gist);

            // when
            const uname = "iboss-ptk";
            const result = await getGistsByUsername(uname);

            // then
            expect(axios).toHaveBeenCalledWith({ ...config, url: `${GIT_BASE_URL}/users/${uname}/gists` });
            expect(result).toEqual(gist);
        });
    });

    describe("when API call fails", () => {
        it("should return Network Error", async () => {
            // given
            const message = new Error("Network Error");
            axios.mockRejectedValueOnce(message);

            // when
            const uname = "error"

            try {
                await getGistsByUsername(uname);
            } catch (e) {
                expect(e).toEqual(message);
                expect(axios).toHaveBeenCalledWith({ ...config, url: `${GIT_BASE_URL}/users/${uname}/gists` });
            }

            // then

            // expect(result).toEqual(message);
        });
    });
});