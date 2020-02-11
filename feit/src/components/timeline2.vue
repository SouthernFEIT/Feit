<template>

  <v-container fluid>
    <v-row class="text-center">
        <!-- timeline -->
        <v-col class="mb-3" cols="12">
            <h3 class="display-6 font-weight-bold mb-3">
                What We Archieved
            </h3>
            <p class="subheading font-weight-regular">
                Though the gravity still dragged at him, his muscles were making great efforts
                <br> to adjust. After the daily classes he no longer collapsed immediately into bed. 
                <br> Only the nightmares got worse.
            </p>
 
    <v-timeline>
        <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
        >
        <template v-slot:opposite>
            <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
            ></span>
        </template>
        <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">DCS Competition</h2>
            <div>
                Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.
            </div>
        </div>
        </v-timeline-item>
    </v-timeline>

           </v-col>

    </v-row>


  </v-container>
</template>
 

<script>
  // import grid from 'grid.vue';

  export default {
    name: 'timeline',

    // components: {
    //   grid,
    // },

    data: () => ({
          years: [
            {
              color: 'cyan',
              year: '1960',
            },
            {
              color: 'green',
              year: '1970',
            },
            {
              color: 'pink',
              year: '1980',
            },
            {
              color: 'amber',
              year: '1990',
            },
            {
              color: 'orange',
              year: '2000',
            },
          ],
        }),
}
</script>