/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/**
 * 菜单模块的vuex
 */

const state = {
  collapsed: localStorage.getItem('collapsed') === 'true',
};

const getters = {
  collapsed: state => state.collapsed,
};

const types = {
  SET_COLLAPSED: 'SET_COLLAPSED',
};

const mutations = {
  [types.SET_COLLAPSED](state, val) {
    state.collapsed = val;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
