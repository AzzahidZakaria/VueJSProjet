<template><!--parent-->
  <div v-bind:class="cssClass" id="app">
    <div id="nav" style="background-color:#D7E4FF; height:200px">
      <b-nav>  

        <img src="./assets/WorkoutApp.png" alt="" style="width:70px; height:70px;">
      <router-link to="/">
        Exercices </router-link> 
        
        <!--home-->
        <span style="color:black;">|</span>
        <router-link to="/newExercice"> 
      Add Exercices
      </router-link>

      <span style="color:black;">|</span>
      <router-link to="/entrainements"> 
      Entrainements
      </router-link>

    
     </b-nav>

    </div>
    <transition name="fade">
      <router-view/>
    </transition>

    <div id="footer">
     <footer class="bg-light text-center text-lg-start">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Workout App</h5>

        <p>
          Cette Application Web a été conçus par Azzahid Zakaria, apprenti Business Analyst dans le cadre du cours d'Architecture Web, dispensé au sein du Master
          de Business Analyst co-organisé par l'ICHEC et l'ECAM. Ce cours a pout but de développer mes compétences en développement Web.
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Réseau sociaux</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="https://www.facebook.com/zakaria.azzahid/" class="text-dark">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/azzahidzak" class="text-dark">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/zakariaazzahid/?hl=fr" class="text-dark">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zakaria-azzahid-8b8559106/?originalSubdomain=be" class="text-dark">linkedin</a>
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Liens</h5>

        <ul class="list-unstyled">
          
          <li class="nav-item">
            <a class="nav-link" href="/index">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/exerciceList">Liste des exercices</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/entrainement">Liste des entraînements</a>
          </li>
          
        </ul>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2021 Copyright:
    <a class="text-dark" href="https://www.linkedin.com/in/zakaria-azzahid-8b8559106/?originalSubdomain=be"> AZZAHID ZAKARIA</a>
  </div>
  <!-- Copyright -->
</footer>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      lightColor: '110, 175, 75',
      darkColor: '100, 165, 65',
      cssClass: 'green',
    };
  },
};
</script>

<style>
html{
  height: 100%;
}
.green #nav a {
  color: rgb(110, 175, 75);
}
.green #nav a.router-link-exact-active {
  color: rgb(110, 175, 75);
}
body{
 

  
  /* Background image is centered vertically and horizontally at all times */
  background-position: center center;
  /* Background image doesn't tile */
  background-repeat: no-repeat;
  /* Background image is fixed in the viewport so that it doesn't move when
     the content's height is greater than the image's height */
  background-attachment: fixed;
  /* This is what makes the background image rescale based
  on the container's size */
  background-size: cover;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  /* vertical-align: center;
  color: rgb(27, 23, 23);
  height: 100%;
  margin: 0;
  padding: 0; */
}
#nav {
  
  padding: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#nav a {
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  padding: 10px;
  margin: 5px;
}
#nav a.router-link-exact-active {
  color: rgb(120, 95, 195);
}




</style>