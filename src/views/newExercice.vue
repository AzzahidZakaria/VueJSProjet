<template>
  <div class="">

     <p class="welcome">Workout App <br ></p>
    <h1>Ajoute un exercice</h1>
       

  

<div class="formulaire">
<p>  Nom exercice :  <input type="text" v-model="exercice.nomExercice"></p>
<p>  Difficulté :


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
     
     }, 
     mounted() {

       
     }
};
</script>
<style scoped>


.welcome {
  text-align: center;
  font-size: 45px;
  padding-top: 5px;
  background-color: #e0ffe4;
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