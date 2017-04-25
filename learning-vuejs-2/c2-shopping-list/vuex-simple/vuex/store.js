import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// the root, initial state object
const state = {
    notes: [],
    activeNote: {}
};

// define the possible mutations that can be applied on our state
const mutations = {
    ADD_NOTE(state) {
        const newNote = {
            text: 'New note',
            favorite: false
        };
        state.notes.push(newNote);
        state.activeNote = newNote;
    },
    EDIT_NOTE(state, text) {
        state.activeNote.text = text;
    },
    DELETE_NOTE(state) {
        state.notes.$remove(state.activeNote)
        state.activeNote = state.notes[0]
    },
    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite;
    },
    SET_ACTIVE_NOTE(state, note) {
        state.activeNote = note;
    }
}

const actions = {
    addNote({ commit }) {
        const newNote = {
            text: 'New note',
            favorite: false
        }
        commit('ADD_NOTE', newNote)
    },
    editNote({ commit }, e) {
        commit('EDIT_NOTE', e.target.value)
    },
    deleteNote({ commit }) {
        commit('DELETE_NOTE')
    },
    updateActiveNote({ commit }, note) {
        commit('SET_ACTIVE_NOTE', note)
    },
    toggleFavorite({ commit }) {
        commit('TOGGLE_FAVORITE')
    }
}

const getters = {
    notes: state => state.notes,
    activeNote: state => state.activeNote
}

// create the Vuex instance by combining the state and mutation objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})