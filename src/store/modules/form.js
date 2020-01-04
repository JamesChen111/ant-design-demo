import router from "../../router";
import request from "../../utils/request";
const state = {
  step: {
    payAccount: 6217562000024201661
  }
};

const mutations = {
  saveStepFormData(state, { payload }) {
    console.log("TCL: saveStepFormData -> state", state);
    state.step = {
      ...state.step,
      ...payload
    };
    console.log("TCL: saveStepFormData1 -> state", state);
  }
};

const actions = {
  async submitForm({ commit }, payload) {
    await request({
      url: "/api/form",
      method: "POST",
      data: payload.payload
    });
    commit("saveStepFormData", payload);
    router.push("/form/step-form/result");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
