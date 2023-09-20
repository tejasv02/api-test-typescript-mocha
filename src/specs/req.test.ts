import {expect} from 'chai';
import { requests } from '../all-requests/requests';
import _ from "lodash";


describe("API Tests", async () => {
    it("Check get status code of GET Req", async () => {
        await requests.getReq().then(res => {
            expect(res.status).to.equal(200);
        });
    })

    it("Check get status code of post Req", async () => {
        await requests.postReq().then(res => {
            expect(res.status).to.equal(200);
        });
    })

})

