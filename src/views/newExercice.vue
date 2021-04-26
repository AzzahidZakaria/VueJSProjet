<template>
  <div class="newserie">

     <p class="welcome">Workout App <br ></p>
    <h1>Ajoute un exercice</h1>
       <!-- <table> -->
    <!-- </table> -->

  

<div class="formulaire">
<p>  Nom exercice :  <input type="text" v-model="exercice.nomExercice"></p>
<p>  Difficulté :
<!-- <p>  Difficulté :  <input type="text" v-model="exercice.difficulty"> -->

<select v-model="exercice.difficulty">
  <option disabled value="">Choisissez</option>
  <option>Facile</option>
  <option>Moyen</option>
  <option>Difficile</option>
  <option>Très Difficile</option>
</select>
</p>

<p>  Nombre de répétition :<input type="number" v-model="exercice.reps"></p>
 <p> Description : <br> <textarea
    name="description"
    id="description"
    cols="30"
    rows="10"
    value="description"
    v-model="exercice.description"
  ></textarea> </p>

<!-- <p>  Description <input type="textarea" v-model="exercice.description"></p> -->
<p>  Catégorie : <input type="number"  min="1" max="7" v-model="exercice.categorie"></p>
<p> Introduisez le numéro correspondant à la catégorie d'exercice :  <br>
  <b>1</b> Pectoraux <br>
  <b>2</b> Dos <br>
  <b>3</b> Bras <br>
  <b>4</b> Cuisses <br>
  <b>5</b> Epaules <br>
  <b>6</b> Abdominaux <br>
  <b>7</b> Fessiers <br>
  </p>
<!-- <label for="">Catégorie </label><select name="categorie" id="idCategorie" >
      <option value="categorie.idCategorie" v-for=" categorie in categorieList" :key="categorie.idCategorie" > {{ categorie.categorieNom + categorie.idCategorie}} 
                    
                </option>
    </select>
    <v-select v-model="categorieList" :options="options" :reduce="categorie => categorie.categorieNom" label="categorie" /> -->
       
</div>
<p style="color:black"><b-button v-on:click="createExercice" size="lg" variant="success" class="add">Ajouter cet exercice</b-button> <!--envoie vers la method-->
   </p>
  <img src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn322/wp-content/uploads/2019/07/thumbnail_1200x800-1-1024x683.jpg" width="600px">
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'newExercice',
    data() {
      return{
         exercice:{
             nomExercice:"",
             difficulty:"",
             reps:"",
             description:"",
             categorie:""
         },
         categorieList:[

         ],
         url: 'http://localhost:8000/api/exerciceList/New/',
         url2:'http://localhost:8000/api/addExercice',
         
      }
     },
     methods: {
     createExercice() { //event created, récupération de la valeur dans composant
         axios
         .post(this.url, this.exercice) //récupérer l'URL+ lecture ajoutée
         .then((response) => {
           
             this.exercice = response.data.exercice; //envoyée comme réponses données liées à lecture ajoutée
             console.log(this.exercice); 
                this.get_exerciceList(); //affichage direct dans liste
          
         })
         .catch((error) => {
             console.log(error);
         })
         this.$router.push({name : "home"}) // retour vers route de la page principale ayant nom 'home'
     },
     get_categorie() {
         axios //déclarer Axios, qui va aller chercher l'info dans l'API
         .get(this.url2) //url de la méthode appelée
         .then((response) => { //réponse avec param 'response'
             this.categorieList = response.data //charger le this.reading est envoyé dedans les données récupérées de l'API.
             console.log(this.categorieList);
         })
         .catch((error) => {
             console.log(error);
         });
     }
     }, 
     mounted() {

       this.get_categorie();
     }
};
</script>
<style scoped>
h1{
  color: black;
}

.welcome {
  text-align: center;
  font-size: 45px;
  padding-top: 5px;
  background-color: #e0ffe4;
}
p{
  font-family: Arial, Helvetica, sans-serif;
  color : black;
}
table
{
margin: auto;
}
td
{
text-align :center;
}
.formulaire
{
        background-color: #dae9ec;
        width:35%;
        text-align:justificy;
        border-width: 2px;
        border-style: groove;
        border-image: initial;
        
        margin-left: auto;
  margin-right: auto;
  
        border-radius: 3px 3px 3px;
        padding: 10px;
}
input
{
          border-radius: 3px 3px 3px;
}


</style>