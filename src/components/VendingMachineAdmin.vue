<template>
  <div class="wrapper">
    <section class="machine-list">
      <h2>Machines</h2>
      <div v-for="(machine, idx) in machines" :key="idx">
        <VendingMachineItem :machine="machine" />
      </div>
    </section>
    <section class="action-section">
      <OperatorView :primaryMachine="primaryMachine" />
    </section>
  </div>
</template>

<script>
import Machine from "@/models/Machine";
import OperatorView from "./OperatorView";
import VendingMachineItem from "./VendingMachineItem";

export default {
  name: "VendingMachineAdmin",
  components: {
    OperatorView,
    VendingMachineItem
  },
  data() {
    return {
      primaryMachine: "Wash Bucket"
    };
  },
  computed: {
    machines() {
      return this.$store.getters.getMachines;
    }
  },
  created() {
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper {
  border-radius: 10px;
  background: #f4f4f6;
  border: 1px solid black;
  width: 350px;
  height: 627px;
  position: relative;
}

.machine-list {
  margin: 20px;
  overflow: scroll;
  height: 65%;
}

.action-section {
  height: 200px;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  background: #008a56;
  color: white;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
}
</style>
