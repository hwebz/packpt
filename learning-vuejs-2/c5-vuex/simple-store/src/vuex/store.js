import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import * as types from './mutation_types'

Vue.use(Vuex)

const state = {
    msg: 'Hello Vue!',
    counter: 0
};

const mutations = {
    [types.CHANGE_MSG](state, msg) {
        state.msg = msg;
    },
    [types.INCREMENT_COUNTER](state) {
        state.counter++;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});