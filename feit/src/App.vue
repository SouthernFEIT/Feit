<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: "App",

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
  --primary-color: #4816D7;
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
}

h1,h2,h3,h4,h5,h6, a {
  font-family: feit-semibold;
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
  font-size: 1.1rem;      
}

.hero-title {
  font-size: 2.5rem;
  line-height: 1.2;
}

.sub-herotitle {
  font-size: 1.8rem;
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
}

</style>
