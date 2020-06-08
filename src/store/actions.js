import Machine from "@/models/Machine";

const init = () => {
  // make db calls here //
  const machines = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
  ];
  Machine.insert({ data: machines });
};

const selectMachine = ({ commit }, payload) => {
  commit("selectMachine", payload);
};

const selectLocation = ({ commit }, payload) => {
  commit("selectLocation", payload);
};

const toggleLockdown = ({ state, commit }, payload) => {
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
};

export default {
  init,
  selectLocation,
  selectMachine,
  toggleLockdown
};
