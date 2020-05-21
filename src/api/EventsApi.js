import { getItem } from "../utils/localStore";
import { Base_Url } from '../app.constant';
import axios from "axios";

import moment from 'moment';


class EventsApi {



    static getEventsByDate = async (startDate, endDate) => {
        let start_data = moment().add(startDate, 'days').format('YYYY-MM-DD');
        let end_data = moment().add(endDate, 'days').format('YYYY-MM-DD');
        const ajaxRequestHeaders = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        let response = await axios({
            url: `${Base_Url}/events?start=${start_data}&end=${end_data}`,
            method: "GET",
            headers: ajaxRequestHeaders,
        });
        return response;
    };


    static eventDetail = async (id) => {
        const TOKEN = getItem("accessToken");
        const ajaxRequestHeaders = {
            "Content-Type": "application/json",
            Accept: "application/json",
            'authorization': TOKEN
        };
        let response = await axios({
            url: `${Base_Url}/events/${id}/broadcasters`,
            method: "GET",
            headers: ajaxRequestHeaders,

        });
        return response;
    }
}

export default EventsApi;
