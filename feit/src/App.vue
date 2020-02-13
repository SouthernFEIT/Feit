<template>
  <v-app>
    <Nav/>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from '../src/components/navBar/Nav'
import Footer from '../src/components/footer/Footer'

  export default {
    name: "App",
    components:{
      Nav,Footer
    },
    data: () => ({
      //
    })
  };
</script>

<style>

/* import local font family */
@font-face {
  font-family: feit-semibold;
  src: url('assets/fonts/Poppins-SemiBold.ttf');
  font-weight: 600;
}

@font-face {
  font-family: feit-normal;
  src: url('assets/fonts/Poppins-Regular.ttf');
  font-weight: 400;
}

/* default size */
:root {
  font-size: 18px;

  /* Not sure if we can set this through vuetify, but still added first */
  --primary-color: rgb(79, 39, 223);
  --primary-color--light: #F9F9FD;
  --grey: #5D6A8B;  
  --grey-light: #6d6d6d;
  --dark: #0C0F18;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;  
  
  font-family: feit-normal;
}

a {
  color: var(--primary-color) !important;
  text-decoration: none;
  font-family: feit-normal !important;
}

h1,h2,h3,h4,h5,h6 {
  font-family: feit-semibold;
}

.container {
  display: flex;
  padding: 1em 2em;
}

.primary-btn {
  background: var(--primary-color) !important;
  color: #fff !important;
  border-radius: 0;
  font-size: .9rem !important;
  padding: .75em 1.25em !important;
}

.primary-btn:hover {
  transition: background 300ms ease-out;
  background: #3e10be !important;
}

.cards-container {    
  display: grid;
  grid-template-areas: 'c c c'; 
  grid-auto-columns: minmax(30%, 1fr);
  gap: 2em;  
  /* background: #000;   */
  width: 100%;    
  padding: 0 0 2em 0;
}



.normal-title, .bold-title, .hero-title, .sub-herotitle {  
  color: var(--dark) !important; 
  font-family: feit-semibold;
}

.normal-title {  
  font-family: feit-normal; 
  font-size: 1.1rem;
  font-weight: 400;
}

.bold-title {  
  font-size: 1.25rem;      
}

.hero-title {
  font-size: 2rem;
  line-height: 1.2;
}

.sub-herotitle {
  font-size: 1.5rem;
  line-height: 1.1;
}

.paragraph {
  padding-top: .75em;
  font-size: .9rem;
  color: var(--grey-light) !important;
  line-height: 1.75;
  font-weight: 400 !important;
}

@media screen and (max-width: 960px) {

  :root{
    font-size: 14px;
  }
  

  .cards-container {
    grid-template-areas: 'c c';
  }
}

@media screen and (max-width: 600px){
  .cards-container {
    grid-template-areas: 'c';
  }
}
</style>
