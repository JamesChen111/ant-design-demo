// import router from "../../router";
const state = {
  step: {
    payAccount: 6217562000024201661
  }
};

const mutations = {
  saveStepFormData(state, { payload }) {
    state.step = {
      ...state.step,
      ...payload
    };
    console.log(payload);
    console.log(state);
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
