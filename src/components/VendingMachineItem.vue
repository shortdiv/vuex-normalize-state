<template>
  <div class="machine-card">
    <div
      :class="[
        'machine-condition--tab',
        machine.condition.replace(' ', '-').toLowerCase()
      ]"
    ></div>
    <div class="machine-card--info">
      <p>{{ machine.name }}</p>
      <span :style="{ fontStyle: 'italic' }"
        >Last stocked: {{ machine.lastStocked }}</span
      >
      <a href="#" class="location-tag" @click.prevent="goToLocation">
        {{ machine.location }}
      </a>
    </div>
    <span class="machine-state">{{ machine.condition }}</span>
    <button class="service-btn" @click.prevent="restockMachine">
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "VendingMachineItem",
  props: {
    machine: Object
  },
  data() {
    return {
      machineId: null
    };
  },
  methods: {
    restockMachine() {
      this.$store.dispatch("selectMachine", this.machine.name);
      const query = this.machine.name.toLowerCase().replace(" ", "-");
      this.$router.push(`/inventory/?machine=${query}`);
    },
    goToLocation() {
      this.$store.dispatch("selectLocation", {
        location: this.machine.location,
        latlng: this.machine.latlng
      });
      const query = this.machine.location.toLowerCase().replace(" ", "-");
      this.$router.push(`/location/?neighborhood=${query}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.machine-card {
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 100px;
  box-sizing: border-box;
  padding: 10px 10px 10px 40px;
  border-radius: 3px;
  margin: 20px 10px;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease-in-out;
  }
  &:hover {
    -webkit-transform: scale(1.01, 1.01);
    transform: scale(1.01, 1.01);
    &::after {
      opacity: 1;
    }
  }
}

.machine-state {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.75em;
  font-weight: 100;
}

.machine-condition--tab {
  background: red;
  width: 5%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px 0 0 3px;
}

.working {
  background: #76c1a5;
}

.retired {
  background: #fcdd1d;
}

.broken {
  background: #d0011b;
}

.machine-card--info {
  width: 150px;

  span {
    display: block;
    font-size: 0.75em;
    &:first-of-type {
      margin-top: 0.8em;
      margin-bottom: 1em;
    }
  }
}

.location-tag {
  margin-top: 10px;
  background: rgba(14, 30, 37, 0.87);
  border-radius: 4px;
  color: #fff;
  font-size: 0.7rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: 0.5em;
  margin-right: 0.5em;
  opacity: 0.38;
  padding: 4px;
  text-decoration: none;
  text-shadow: none;
  transition: opacity 0.15s ease;
}
</style>
