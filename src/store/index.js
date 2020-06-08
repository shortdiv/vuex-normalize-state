import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMachine: null,
    selectedLocation: null,
    lockedDownLocations: [],
    machines: [
      {
        name: "Leela",
        lastStocked: "Feb 2019",
        condition: "Working",
        location: "Lake View",
        latlng: [-87.6554288, 41.94705],
        inventory: [
          {
            productName: "Yay Chips",
            supply: 0
          },
          {
            productName: "Chips of Cookies",
            supply: 1
          },
          {
            productName: "Bag of Bretzels",
            supply: 3
          },
          {
            productName: "Corn Crisps",
            supply: 11
          },
          {
            productName: "Triangle Chips",
            supply: 2
          },
          {
            productName: "Cheese Dust",
            supply: 0
          }
        ]
      },
      {
        name: "Hermes",
        lastStocked: "Feb 2019",
        condition: "Working",
        location: "Wicker Park",
        latlng: [-87.67745208740234, 41.910457611083984],
        inventory: [
          {
            productName: "Yay Chips",
            supply: 10
          },
          {
            productName: "Chips of Cookies",
            supply: 15
          },
          {
            productName: "Bag of Bretzels",
            supply: 3
          },
          {
            productName: "Corn Crisps",
            supply: 11
          },
          {
            productName: "Triangle Chips",
            supply: 2
          },
          {
            productName: "Cheese Dust",
            supply: 0
          }
        ]
      },
      {
        name: "Bender",
        lastStocked: "Feb 2019",
        condition: "Working",
        location: "Lake View",
        latlng: [-87.6554288, 41.94705],
        inventory: [
          {
            productName: "Yay Chips",
            supply: 10
          },
          {
            productName: "Chips of Cookies",
            supply: 15
          },
          {
            productName: "Bag of Bretzels",
            supply: 3
          },
          {
            productName: "Corn Crisps",
            supply: 11
          },
          {
            productName: "Triangle Chips",
            supply: 2
          },
          {
            productName: "Cheese Dust",
            supply: 0
          }
        ]
      },
      {
        name: "Farnsworth",
        lastStocked: "Feb 2019",
        condition: "Working",
        location: "Lake View",
        latlng: [-87.6554288, 41.94705],
        inventory: [
          {
            productName: "Yay Chips",
            supply: 10
          },
          {
            productName: "Chips of Cookies",
            supply: 15
          },
          {
            productName: "Bag of Bretzels",
            supply: 3
          },
          {
            productName: "Corn Crisps",
            supply: 11
          },
          {
            productName: "Triangle Chips",
            supply: 2
          },
          {
            productName: "Cheese Dust",
            supply: 0
          }
        ]
      },
      {
        name: "Fry",
        lastStocked: "Feb 2019",
        condition: "Working",
        location: "Wicker Park",
        latlng: [-87.67745208740234, 41.910457611083984],
        inventory: [
          {
            productName: "Yay Chips",
            supply: 10
          },
          {
            productName: "Chips of Cookies",
            supply: 15
          },
          {
            productName: "Bag of Bretzels",
            supply: 3
          },
          {
            productName: "Corn Crisps",
            supply: 11
          },
          {
            productName: "Triangle Chips",
            supply: 2
          },
          {
            productName: "Cheese Dust",
            supply: 0
          }
        ]
      },
      {
        name: "Wash Bucket",
        lastStocked: "Jan 2020",
        condition: "Working",
        location: "Boystown",
        latlng: [-87.6492669, 41.9438833],
        inventory: [
          {
            productName: "Yay Chips",
            supply: 10
          },
          {
            productName: "Chips of Cookies",
            supply: 15
          },
          {
            productName: "Bag of Bretzels",
            supply: 3
          },
          {
            productName: "Corn Crisps",
            supply: 11
          },
          {
            productName: "Triangle Chips",
            supply: 2
          },
          {
            productName: "Cheese Dust",
            supply: 0
          }
        ]
      }
    ]
  },
  getters: {
    getInventory(state) {
      const machine = state.machines.filter(
        machine => machine.name === state.selectedMachine
      )[0];
      return machine ? machine.inventory : [];
    },
    machinesInLocation(state) {
      return state.machines.filter(
        machine => machine.location === state.selectedLocation
      );
    },
    lastStockedAt(state) {
      const machine = state.machines.filter(
        machine => machine.name === state.selectedMachine
      );
      return machine.length > 0 ? machine[0].lastStocked : "";
    },
    isLocationLockeddown(state) {
      const loc = state.lockedDownLocations.filter(
        location => state.selectedLocation === location
      );
      return loc.length > 0;
    }
  },
  actions: {
    selectMachine({ commit }, payload) {
      commit("selectMachine", payload);
    },
    selectLocation({ commit }, payload) {
      commit("selectLocation", payload);
    },
    toggleLockdown({ state, commit }, payload) {
      let updateMachines = [];
      state.machines.map(machine => {
        const shldLockDown =
          machine.location === payload.neighborhood && payload.toLockdown;
        updateMachines.push({
          ...machine,
          condition: shldLockDown ? "Locked Down" : "Working"
        });
      });
      const isAlreadyLockedDown =
        state.lockedDownLocations.indexOf(payload.neighborhood) > -1;
      commit("lockdown", {
        machines: updateMachines,
        isAlreadyLockedDown,
        neighborhood: payload.neighborhood
      });
    }
  },
  mutations: {
    selectMachine(state, payload) {
      state.selectedMachine = payload;
    },
    selectLocation(state, payload) {
      state.selectedLocation = payload;
    },
    lockdown(state, payload) {
      state.machines = payload.machines;
      payload.isAlreadyLockedDown
        ? state.lockedDownLocations.splice(payload.lockedDownLocationInd, 1)
        : state.lockedDownLocations.push(payload.neighborhood);
    }
  },
  modules: {}
});
