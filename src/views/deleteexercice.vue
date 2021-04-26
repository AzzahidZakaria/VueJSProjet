<template>
  <div class="deleteexercice">
    
    
    <b-button variant="danger" v-on:click="deleteexercice(exercice.idexercice)"  class="add">Effacer</b-button>
  </div>
</template>
<script>
export default {

  name: "deleteexercice",
    props: ["exercice", "exercice"], // livre concerné par la modification

  data() {
    return {
      idexercice: 0
    };
  },
  methods: {
    // Parent (home) envoie l'opération à l'enfant qui exécute la requête
    deleteexercice(idexercice) {
      this.$emit('event_delete', idexercice);
    }
  },
  created() {
    this.idexercice = this.$route.params.idexercice; // définition du idexercice qui correspond au exerciceID qui apparait dans la route
  }
};
</script>
<style scoped>

</style>
