<template>
  <div class="entrainement">
    <span v-if="showInput == true">
      {{ entrainement }}
      <b-button v-on:click="showInput = true"
        >Ajouter un entrainement
      </b-button>
      <br
    /></span>

    <br />

    <div>
      <h5 style="color:black;">Entrainement numéro : {{ idIndex }}</h5>
      <b-card class="entrainement" sub-title="Votre entrainement est composé des exercices suivants : "> <br>
        <div v-for="exercice_entrainement in entrainement" :key="exercice_entrainement.identrainement_exercice">
          <p>
           {{ exercice_entrainement.nomExercice }} <b-button size="sm" variant="danger" v-on:click=" deleteExerciceEnt(exercice_entrainement.identrainement_exercice)">
              Supprimer cet exercice</b-button>
          </p>
        </div>
        
        <select v-model="selected">
          <option :selected=true >Choisi un exercice</option>
          <option v-for="exercice in exerciceList" v-bind:value="exercice.idexercice" :key="exercice.idexercice">
            {{ exercice.nomExercice }}
          </option>
        </select>
        <b-button size="sm" variant="success" v-on:click="addExerciceEnt(selected,idIndex)" :disabled="selected== 'Choisi un exercice'" >Ajouter cet exercice</b-button>
        <br />
      </b-card>
    </div>
    <!-- <b-button variant="success" v-on:click="updateEntrainement(entrainement)">Ajouter un entraînement</b-button> -->

    <b-button variant="danger" v-on:click="deleteEntrainement(idIndex)"> Supprimer cet entrainement</b-button> <br>
  </div> 
</template>

<script>
export default {
  name: "entrainement",
  props: ["entrainement", "idIndex", "exerciceList"],
  data() {
    
    return {
      selected: "Choisi un exercice",
      showInput: false
    };
  },
  methods: {
    addExerciceEnt(exercice,entrainement) {
      this.$emit("event_add_exercice", exercice,entrainement);
    },
    deleteExerciceEnt(id) {
      this.$emit("event_delete_exercice", id);
    },
    deleteEntrainement(id) {
      this.$emit("event_delete_entrainement", id);
    }
  }
};
</script>

<style>
.entrainement {
  background-color: rgb(236, 235, 235);
  /* width: 450px;
    margin: 5px auto;
    padding : 8px; */
}
</style>
