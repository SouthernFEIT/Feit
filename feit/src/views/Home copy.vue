<template>
  <div>
    <!-- icon to use  -->
    <!-- plugins > vuetify.js -->
    <!-- icon value  -->
    <parallax/>
    
    <timeline/>
    <grid/>
    
    <v-icon>
      $Working
    </v-icon>  

    <!-- Typeface Example, just to demo -->
    <!-- Delete if you want to -->
    <TypefaceExample />


    <!-- Uncomment if you want to implement TimeLine -->
    <!-- <TimeLine /> -->
    
  </div>

</template>
<script>
  // import TimeLine from '../components/timeline/TimeLine';
  import TypefaceExample from '../components/typeface/TypefaceExample'
  import timeline from '../components/timeline'
  import parallax from '../components/parallax'
  import grid from '../components/grid'

  export default {
    name: "Home",
    components: {
      // TimeLine,
      TypefaceExample,
      timeline,
      parallax,
      grid
    }
  };
</script>
<style scoped>

</style>