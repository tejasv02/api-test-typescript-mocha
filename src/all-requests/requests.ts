import axios from "axios";
import { url } from "inspector";
import _ from "lodash";

class Requests {
    async getReq() {
        return (await axios.request({
            method: 'get',
            url: 'https://httpbin.org/get'
          }));
    }

    async postReq() {
        return (await axios.request({
            method: 'post',
            url: 'https://httpbin.org/post'
          }));
    }
}

export const requests = new Requests();



