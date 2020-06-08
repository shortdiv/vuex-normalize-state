import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import VuexORM from "@vuex-orm/core";
import Machine from "@/models/Machine";

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Machine);

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
  state,
  getters,
  actions,
  mutations
});
