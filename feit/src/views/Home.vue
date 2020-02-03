<template>
  <div>
    <!-- icon to use  -->
    <!-- plugins > vuetify.js -->
    <!-- icon value  -->
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

  export default {
    name: "Home",
    components: {
      // TimeLine,
      TypefaceExample
    }
  };
</script>
<style scoped>

</style>