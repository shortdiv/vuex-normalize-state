// import Machine from "@/models/Machine";
import Location from "@/models/Location";

const selectLocation = (state, payload) => {
  state.selectedLocation = payload;
};

const selectMachine = (state, payload) => {
  state.selectedMachine = payload;
};

const lockdown = (state, payload) => {
  console.log(state);
  Location.update({
    where: payload.neighborhood,
    data: {
      lockedDown: payload.toLockdown
    }
  });
};

export default {
  selectLocation,
  selectMachine,
  lockdown
};
