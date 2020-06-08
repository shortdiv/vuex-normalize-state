import Location from "@/models/Location";

const getLocationById = location_id => {
  const location = Location.query()
    .where("id", parseInt(location_id))
    .get();
  return location[0];
};

const getLocationNameById = location_id => {
  return getLocationById(location_id).name;
};

const getLocationStatus = location_id => {
  return getLocationById(location_id).lockedDown;
};

export { getLocationById, getLocationStatus, getLocationNameById };
