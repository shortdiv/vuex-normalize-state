import { Model } from "@vuex-orm/core";
import Machine from "@/models/Machine";

export default class Location extends Model {
  static entity = "locations";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),
      latlng: this.attr([]),
      lockedDown: this.attr(false),
      machines: this.hasMany(Machine, "machine_id")
    };
  }
  /**
   * Get location name only.
   */
  get location_name() {
    return `${this.name}`;
  }
}
