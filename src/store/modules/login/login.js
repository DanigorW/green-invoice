import axios from "axios";
import router from '@/router'

export default {
    state: {
        userData: [],
        errorFromServer: "",
        isLoading: false,
    },
    mutations: {
        UPDATE_USER_DATA(state, payload) {
            state.userData.push(payload);
        },
        UPDATE_ERROR_STATUS(state, val) {
            state.errorFromServer = val;
        },
        SET_IS_LOADING(state, bool) {
            state.isLoading = bool;
        }
    },
    actions: {
        LOGIN({
            commit
        }, payload) {
            return axios.post('https://jupiter.d.greeninvoice.co.il/api/v1/account/login', payload)
                .then(data => {
                    commit("UPDATE_USER_DATA", data.data);
                    commit("UPDATE_ERROR_STATUS", '');
                    commit("SET_IS_LOADING", true),
                        localStorage.setItem('id', JSON.stringify(data.data.id))
                })
                .catch(e => {
                    commit("UPDATE_ERROR_STATUS", e.response.data.errorMessage);
                });
        },
    },

    getters: {
        GET_USER_DATA(state) {
            return state.userData
        },
        IS_THERE_ERROR_FROM_SERVER(state) {
            return state.errorFromServer
        },
        GET_IS_LOADING(state) {
            return state.isLoading
        }

    }
}