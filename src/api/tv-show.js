import axios from "axios";
// import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../config";
import { CONFIG } from '../config'


export class TVShowAPI {
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}discover/tv${API_KEY_PARAM}`, CONFIG);
        return response.data.results;
        // return FAKE_POPULARS;
    } 

    static async fetchRecomendations(tvShowId){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`, CONFIG);
        return response.data.results;
        // return FAKE_RECOMMENDATIONS;
    } 

    static async fetchByTitle(title){
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`, CONFIG);
        return response.data.results;
    } 
}