import Machine from "@/models/Machine";

const getMachinesByLocationId = location_id => {
  const machines = Machine.query()
    .where("location_id", parseInt(location_id))
    .get();
  return machines;
};

const getNoMachinesByLocationId = location_id => {
  return getMachinesByLocationId(location_id).length;
};

const getMachineById = machine_id => {
  const machine = Machine.query()
    .where("id", parseInt(machine_id))
    .get();
  return machine;
};

export { getMachinesByLocationId, getNoMachinesByLocationId, getMachineById };
