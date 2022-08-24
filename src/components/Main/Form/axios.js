import axios from 'axios';
const API_URL = 'https://testobmen.teamtema.ru';

export default class AssetsService {
    constructor() {}

    getAssets() {
        const url = `${API_URL}/api/assets/`;
        return axios.get(url).then((response) => response.data);
    }

    getCryptoAssets() {
        const url = `${API_URL}/api/crypto-assets/`;
        return axios.get(url).then((response) => response.data);
    }

    getNonCryptoAssets() {
        const url = `${API_URL}/api/non-crypto-assets/`;
        return axios.get(url).then((response) => response.data);
    }
}
