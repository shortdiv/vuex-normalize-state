import { Model } from "@vuex-orm/core";

export default class Machine extends Model {
  static entity = "machines";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),
      lastStocked: this.attr(""),
      condition: this.attr(""),
      location_id: this.attr(""),
      inventory: this.attr([])
    };
  }
}
