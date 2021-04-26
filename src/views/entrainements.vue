<template>
  <!-- ici je créé la liste des entrainements, qui contiennent des exercices ( wili ) -->
  <!-- je recois bien dans la console tous les entrainements en JSON, mais mtn, comment les afficher correctement, comme en MVC avec object.entries? -->
  <div class="EntrainementList">
    <div>
      <div class="newEnt">
        <h1 style="color:black">Ajoute un nouvel entrainement</h1>
        <h3 style="color:black;">
          Choisi le temps de repos de ton nouvel entrainement ci-dessous
        </h3>

        <div class="formulaire">
          <div>
            Temps de repos :
            <input type="number" v-model="entrainementNew.repos" />

            <b-button variant="success" v-on:click="createEntrainement()" class="add">Ajouter</b-button
          >
          </div>
          <!-- liaisons données bidirectionnelle-->
        </div>
        <br />
        <p>
          
        </p>
        <!-- <img
          src="https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png"
        /> -->
      </div>
    </div>
    
    
      <li v-for="(entrainement,index) in entrainementList" :key="entrainement">
          <div class="container">
            <div class="row">
                <div class="col">
                    <Entrainement
          v-bind:entrainement="entrainement" 
          v-bind:idIndex ="index"
          v-bind:exerciceList="exerciceList"
          @event_delete_exercice="deleteExerciceEnt"
          @event_add_exercice="addExerciceEntrainement"
          @event_delete_entrainement="deleteEntrainement"> 
          </Entrainement> 


                </div>
            </div>
          </div> <br> 
          
      </li>

   
    

    <!-- <img src="https://www.mensjournal.com/wp-content/uploads/2018/02/beach-workout.jpg?quality=86&strip=all" width="800px"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Entrainement from "./entrainement.vue";
import NewEntrainement from "./newEnt.vue";

export default {
  components: { Entrainement, NewEntrainement },
  name: "EntrainementList",
  data() {
    return {
      entrainementList: [],
      exerciceList:"",
      entrainementNew: {
        repos: 4
      },
  // @event_add_exercice="addExerciceEnt"
      url: "http://localhost:8000/api/"
    };
  },
  methods: {
    
    deleteExerciceEnt(idexercice) {
      axios
        .delete(this.url + "delete-exercice-entrainement/" + idexercice)
        .then(response => {
          console.log(response.data);
          this.get_entrainementList();
        })
        .catch(error => {
          console.log(error);
        });
    },

    deleteEntrainement(identrainement) {
      axios
        .delete(this.url + "delete-entrainement/" + identrainement)
        .then(response => {
          console.log(response.data);
          this.get_entrainementList();
        })
        .catch(error => {
          console.log(error);
        });
    },
    get_entrainementList() {
      axios
        .get(this.url+"entrainement")
        .then(response => {
          this.entrainementList = response.data;
          this.entrainementIdList = Object.keys(this.entrainementList);
          console.log(this.entrainementList);
        })
        .catch(error => {
          console.log(error);
        });
    },


    createEntrainement() {
      //récupération de la valeur du composant
      axios
        .post(
          this.url+"addEntrainement/New/",
          this.entrainementNew
        )
        .then(response => {
          console.log(response.data);
          this.get_entrainementList();
        })

        .catch(error => {
          console.log(error);
        });
    },

    
    addExerciceEntrainement(exercice,entrainement) {
      //récupération de la valeur du composant
      let exerciceEntrainement = {entrainement,exercice};
       axios
        .post(this.url+"add-exercice-entrainement",exerciceEntrainement)
        .then(response => {
          console.log(response.data);
          this.get_entrainementList();
        })

        .catch(error => {
          console.log(error);
        });
    },

    getExerciceList() {
      axios //déclarer Axios, qui va aller chercher l'info dans l'API
        .get(this.url+"exerciceList") //url de la méthode appelée
        .then(response => {
          //réponse avec param 'response'
          this.exerciceList = response.data; //charger le this.exercice est envoyé dedans les données récupérées de l'API.
          console.log(this.exercices);
        })
        .catch(error => {
          console.log(error);
        });
    },
    
  },
  mounted() {
    this.getExerciceList();
      this.get_entrainementList();
      
    }
};
</script>
<style scoped>
li {

   list-style-type: none;
}



</style>
