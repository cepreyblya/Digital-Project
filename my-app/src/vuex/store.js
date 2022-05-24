import { createStore } from 'vuex'

export default createStore({
  state: {
    isActiveMain: true,
    isActiveGallery: false,
    isActiveProjects: false,
    isActiveSertificates: false,
    isActiveContacts: false,
  },
  mutations: {
    SET_ACTIVE_MAIN: (state) => {
      state.isActiveMain = true;
      state.isActiveGallery = false;
      state.isActiveProjects = false;
      state.isActiveSertificates = false;
      state.isActiveContacts = false;
    },
    SET_ACTIVE_GALLERY: (state) => {
      state.isActiveMain = false;
      state.isActiveGallery = true;
      state.isActiveProjects = false;
      state.isActiveSertificates = false;
      state.isActiveContacts = false;
    },
    SET_ACTIVE_PROJECTS: (state) => {
      state.isActiveMain = false;
      state.isActiveGallery = false;
      state.isActiveProjects = true;
      state.isActiveSertificates = false;
      state.isActiveContacts = false;
    },
    SET_ACTIVE_SERTIFICATES: (state) => {
      state.isActiveMain = false;
      state.isActiveGallery = false;
      state.isActiveProjects = false;
      state.isActiveSertificates = true;
      state.isActiveContacts = false;
    },
    SET_ACTIVE_CONTACTS: (state) => {
      state.isActiveMain = false;
      state.isActiveGallery = false;
      state.isActiveProjects = false;
      state.isActiveSertificates = false;
      state.isActiveContacts = true;
    },
  },
  actions: {
    CHANGE_TO_ACTIVE_MAIN({ commit }) {
      commit('SET_ACTIVE_MAIN')
    },
    CHANGE_TO_ACTIVE_GALLERY({ commit }) {
      commit('SET_ACTIVE_GALLERY')
    },
    CHANGE_TO_ACTIVE_PROJECTS({ commit }) {
      commit('SET_ACTIVE_PROJECTS')
    },
    CHANGE_TO_ACTIVE_SERTIFICATES({ commit }) {
      commit('SET_ACTIVE_SERTIFICATES')
    },
    CHANGE_TO_ACTIVE_CONTACTS({ commit }) {
      commit('SET_ACTIVE_CONTACTS')
    },
  },
  getters: {
    MAIN(state) {
      return state.isActiveMain
    },
    GALLERY(state) {
      return state.isActiveGallery
    },
    PROJECTS(state) {
      return state.isActiveProjects
    },
    SERTIFICATES(state) {
      return state.isActiveSertificates
    },
    CONTACTS(state) {
      return state.isActiveContacts
    },
  },
})
