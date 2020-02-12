<template>
  <div class="timeline-container">
      <div class="timeline">      
        <TimeLineItem 
            v-for="(item,index) in data" 
            :key="index"
            :year="item.year"
            :title="item.title"
            :description="item.description"
            :index="index+1"
        />
      </div>
  </div>
</template>

<script>
import TimeLineItem from './TimeLineItem'

export default {
  name: "TimeLine",
  components: {
      TimeLineItem
  },
  data() {
      return {
        data: [
            {
                year: '2015',
                title: 'DCS Competition',
                description: 'Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.'
            },
            {
                year: '2017',
                title: 'DCS Competition 2',
                description: 'Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.'
            },
            {
                year: '2019',
                title: 'DCS Competition 2',
                description: 'Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.'
            },
            {
                year: '2019',
                title: 'DCS Competition 2',
                description: 'Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.'
            },
            {
                year: '2019',
                title: 'DCS Competition 2',
                description: 'Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.'
            },
        ]
      }
  }
};
</script>

<style scoped>

.timeline-container {
    /* background: #f8f8f8; */
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
    padding: 2em 0;
}

.timeline {    
    position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;  
    padding: 1em 2em;    
}


.timeline::before {
    content: '';
    width: 5px;
    height: 100%;
    position: absolute;
    left: 50%;
    bottom: 0;
    top: 1em;
    background: rgba(93, 106, 139, 0.1);
}

@media screen and (max-width: 600px) {
    
    .timeline::before {
        left: 2em;        
    }
}


</style>
