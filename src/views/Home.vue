<template>

  <div class="home">
    <p class="welcome">Workout App <br ></p>
    <h1 id="Retour">Liste de tes exercices</h1>

    <p>
      <b-button size="lg" variant="success"  type="submit" v-b-popover.hover="'Ajoute un nouvel exercice à cette liste avec ce bouton'" title="Ajoute !" ><router-link
          to="/newExercice"
          style="text-decoration:none; color:black">Ajouter un exercice</router-link></b-button>
    </p>


<div v-for="exercice in exercices" :key="exercice.idexercice" >

  <div class="container">
    <div class="row align-items-start">
      <div class="col-sm">
          <b-card id="bcard">
            <template #header>
              <h4 class="mb-0">{{ exercice.nomExercice }}</h4>
            </template>

          <b-card-body>
             <b-card-title>Difficulté : {{ exercice.difficulty }}</b-card-title>
             <b-card-sub-title class="mb-2"> Catégorie : {{ exercice.categorieNom }}</b-card-sub-title>
            <b-card-text>
                {{ exercice.description }}
                  </b-card-text>
           </b-card-body>

  

          <b-card-body>
            <b-button style="background:none">
              <deleteexercice
                v-bind:exercice="exercice"
                @event_delete="delete_Exercice">
                <!--vbind: attributs-->
                
              </deleteexercice>
            </b-button>

            <b-button style="background:none">
              <updateExercice
                  v-bind:exercice="exercice"
                   @event_update="updateExercice">
                  <!--vbind: attributs-->
           
              </updateExercice>
            </b-button>
          </b-card-body>

    <b-card-footer> Nombre de répétitions : {{ exercice.reps }}</b-card-footer>

    
  </b-card> <br>



      </div>

    </div>
    
    
     </div>
  
</div>

  

    
  </div>
</template>

<script>
// dvlpmnt d'instance liée au composant
// @ is an alias to /src
import axios from "axios"; //pour accéder à l'API
import updateExercice from "./updateExercice.vue";
import Deleteexercice from "./deleteexercice.vue";
// import de la MàJ de la lecture
export default {
  name: "home", // nom route
  components: { updateExercice, Deleteexercice }, //définition élément personnalisé "lectures" dans l'instance components
  data() {
    // lié à l'instance de vue créée et ajoute toutes les propriétés ci-dessous.
    return {
      //données à retourner
      exercice: {
        idexercice: "",
        nomExercice: "",
        difficulty: "",
        reps: "",
        description: "",
        Categorie_ID: ""
      },
      exercices: [], // création liste exercices
      url: "http://localhost:8000/api/exerciceList/",
      showCreate: false
    };
  },
  methods: {
    get_exerciceList() {
      axios //déclarer Axios, qui va aller chercher l'info dans l'API
        .get(this.url) //url de la méthode appelée
        .then(response => {
          //réponse avec param 'response'
          this.exercices = response.data; //charger le this.exercice est envoyé dedans les données récupérées de l'API.
          console.log(this.exercices);
        })
        .catch(error => {
          console.log(error);
        });
    },

    delete_Exercice(idexercice) {
      axios
        .delete(this.url+"Remove/" + idexercice)
        .then(response => {
          console.log(response.data);
          this.get_exerciceList();
        })
        .catch(error => {
          console.log(error);
        });
    },

    updateExercice(exercice) {
      console.log(exercice);
      axios
        .put(this.url+"Update/" + exercice.idexercice, exercice) //url de la méthode appelée: envoie de la lecture modifiée
        .then(response => {
          console.log(response.data);
          this.get_exerciceList();
        })
        .catch(error => {
          console.log(error);
        });
      console.log("update item " + exercice.idexercice);
    }
  },
  mounted() {
    // permet le montage de la page
    this.get_exerciceList(); // dans page on trouvera liste lectures
  }
};
</script>

<!--CSS-->
<style scoped>


table {
 margin-left: 6em;
 margin-right: 6em;

}
th {
  text-align: center;
  background-color: darkseagreen;
}
tr {
  letter-spacing: 0.5px;
}
/* td{
  border : solid 1px;
} */


p {
  text-align: center;
  margin-right: 4px;
}

.bcard {
padding: 15%;
margin: 15%;


}


.welcome {
  text-align: center;
  font-size: 45px;
  padding: 5px;
  background-color: #e0ffe4;
}



</style>
