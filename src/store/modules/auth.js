import router from "../../router"

const AUTH_STORAGE_KEY = 'tasks_auth'

export const state = {
    auth_key: null
}

export const mutations = {
    GET_STORED_AUTH(state) {
        state.auth_key = localStorage.getItem(AUTH_STORAGE_KEY);
    },
    PERFORM_LOGIN(state, credentials) {
        state.auth_key = btoa(JSON.stringify(credentials));
        localStorage.setItem(AUTH_STORAGE_KEY, state.auth_key);
    },
    PERFORM_LOGOUT(state) {
        state.auth_key = null;
        localStorage.removeItem(AUTH_STORAGE_KEY);
    }
}

export const actions = {
    getAuth({ commit }) {
        commit('GET_STORED_AUTH')
    },
    login({ commit, getters }, credentials) {
        if (getters.authenticated === false) {
            commit('PERFORM_LOGIN', credentials)
            router.push({ name: 'TarefaList' })
        }
    },
    logout({ commit, getters }) {
        if (getters.authenticated === true) {
            commit('PERFORM_LOGOUT')
            router.push({ name: 'Login' })
        }
    }
}

export const getters = {
    authenticated: state => !!state.auth_key
}

export default {
    state,
    mutations,
    actions,
    getters
}