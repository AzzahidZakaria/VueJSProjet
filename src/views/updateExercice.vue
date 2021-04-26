<template>
  <div id="updateExercice">
    <b-button variant="warning" v-on:click="showInput = true" v-if="!showInput">
      Modifier
    </b-button>
    <div v-if="showInput">
      <input type="text" v-model="exercice.nomExercice" /> <br>
      <!--liaison données bidir variable Màj automatiquement-->
     
      <input type="text" v-model="exercice.difficulty" /> <br>
      <input type="text" v-model="exercice.description" /> <br>
      <input type="number" v-model="exercice.reps" /> <br>
      

      <b-button variant="success" v-on:click="updateExercice(exercice)">Modifier</b-button>
      <!--envoie des données une fois click sur sauver-->
      <table></table>
    </div>
  </div>
</template>

<script>
export default {
  name: "updateExercice",
  props: ["exercice", "exercice"], // livre concerné par la modification
  data() {
    return {
      showInput: false
    };
  },
  methods: {
    updateExercice(exercice) {
      this.$emit("event_update", exercice);
      this.showInput = false;
    }
  }
};
</script>
<style scoped>

</style>
