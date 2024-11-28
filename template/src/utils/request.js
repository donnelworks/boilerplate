import { baseurl } from "./path";
import NetInfo from "@react-native-community/netinfo";
import { SheetManager } from "react-native-actions-sheet";

const request = async (ENDPOINT, AUTH_TOKEN, REQUEST_PAYLOAD) => {
    const netInfo = await NetInfo.fetch();

    if (!netInfo.isConnected) {
        SheetManager?.show('no-internet-sheet');
    }

    const BASE_URL = baseurl;

    let bodyData = JSON.stringify(REQUEST_PAYLOAD);
    let requestObject = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: bodyData,
        timeout: 60000
    }
    
    if (AUTH_TOKEN) {
        requestObject.headers.Authorization = AUTH_TOKEN;
    }
    
    const res = await fetch(BASE_URL + ENDPOINT, requestObject);
    
    let resData = await res.text();
    let responseJson = JSON.parse(resData);
    
    if (!responseJson.success) {
        throw {
            success: false,
            statusMessage: responseJson.status_message,
            data: responseJson.data
        }
    }
    
    return responseJson;
}

export default request;