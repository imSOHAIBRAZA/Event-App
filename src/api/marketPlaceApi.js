import { getItem } from "../utils/localStore";
import { Base_Url } from '../app.constant';
import axios from "axios";


class EventsApi {

   

    static getEventsByDate = async (limit, skip) => {
        const ajaxRequestHeaders = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        let response = await axios({
            url: `${Base_Url}/events?start=2019-12-12&end=2020-12-18`,
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
            'authorization' :  TOKEN
        };
        let response = await axios({
            url: `${Base_Url}/events/${id}`,
            method: "GET",
            headers: ajaxRequestHeaders,
            
        });
        return response;
    }
}

export default EventsApi;




// async function getUserAsync(name) {
//     try{
//       let response = await fetch(`https://api.github.com/users/${name}`);
//       return await response.json();
//     }catch(err){
//       console.error(err);
//       // Handle errors here
//     }
//   }

//   async function getUserAsync(name) 
// {
//   await fetch(`https://api.github.com/users/${name}`).then(async (response)=> {
//   return await response.json()
// }

// async function getUserAsync(name) 
// {
//   let response = await fetch(`https://api.github.com/users/${name}`);
//   let data = await response.json()
//   return data;
// }

// getUserAsync('yourUsernameHere')
//   .then(data => console.log(data)); 