<template>

  <!-- <v-container fluid>
    <v-row class="text-center"> -->
  <v-container fill-height fluid style="width: 100%;" class="text-center">
    <v-row align="center"
        justify="center"
        style="margin:5% auto">
<p></p>
      <!-- parallax -->
      <v-parallax
      style="width: 100%; position:relative; margin-down: -100px"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      height="300"
      class="abc"
    >
      <!-- <v-row
        align="center"
        justify="center"
        class="text-left mx-12"
      >
        <v-col class="text-left" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
          <h4 class="heading">Build your application today!</h4>

          <h2 class="heading">Welcome To Faculty Of Engineering and IT</h2>
          <h6 class="font-weight-thin">Official FEIT website from Southern University College.</h6>
        </v-col>
      </v-row> -->
      <v-row
        align="center"
        justify="center"

        class="text-left mx-12"
      >
        <v-col class="text-left" cols="8">
          <h2 class="heading">Welcome To Faculty Of Engineering and IT</h2>
          <h6 class="font-weight-thin">Official FEIT website from Southern University College.</h6> <br/>
          <v-btn rounded color="deep purple accent-4" dark>Learn More</v-btn>
          <!-- <p class="abc">abc</p> -->
        </v-col>
      </v-row>
    </v-parallax>

<!-- data:image/jpeg;base64,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 -->


    <!-- ??? -->
  
    <!-- Card -->
    <v-row class="text-center" style="margin: 0% 18%; max-width: 80%;">
      <v-card
        :elevation="24" 
        class="mx-auto mt-0 pt-0"
        max-width="800"
        outlined
        style="margin-top: 0; position: static; top: 330px; opacity: 1; margin-top: -50px"
    >
      <v-list-item three-line>
        <v-layout row wrap>
          <v-flex lg6 md6>
            <v-list-item-avatar
              v-for="n in 3"
              :key="n"
              tile
              size="80"
              color="grey"
              class="mx-3"
            >
            
            </v-list-item-avatar>
            <p class="mx-2" 
               v-for="n in 1"
              :key="n">abc</p>
          </v-flex>

        <!-- <p>20 Lecturers</p> -->
<!-- ??? -->

        <!-- <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="mx-3"
        ></v-list-item-avatar>
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="mx-3"
        ></v-list-item-avatar> -->
        

        <v-flex lg6 md6>
          <v-list-item-content class="text-left m-10">
            <!-- <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
            <v-list-item-title class="headline mb-1">Programme Offered</v-list-item-title>
            <v-list-item-subtitle>2 Bachelor Degree Programme</v-list-item-subtitle>
            <v-list-item-subtitle>3 Diploma Programme</v-list-item-subtitle>
          </v-list-item-content>
        </v-flex>
        </v-layout>
      </v-list-item>

      <!-- <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions> -->
    </v-card>
    </v-row>
    
    <v-row>
      <!-- <v-card
          class="pa-2 mx-auto mb-4"
          outlined
          tile
          max-width="100%"
        >
        <v-col>
          <v-card
            class="pa-2"
            outlined
            tile
          >
            .col
          </v-card>
        </v-col>

        <v-col>
          <v-card
            class="pa-2"
            outlined
            tile
          >
            .col
          </v-card>
        </v-col>
      </v-card> -->

    </v-row>
    <!-- <v-card
          class="pa-2 mx-auto mb-4"
          outlined
          tile
          max-width="500"
          style="margin-top: 0; position:absolute; top: 330px"
        >
          <v-list-item three-line>
            .col
          </v-list-item>
        </v-card -->

        
 
    
     <!-- <div
    audio-player
      source(src="http://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3")
    video-player
      source(src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/mp4")></div> -->

<!-- my -->
    <!-- <v-container fluid style="position: static; margin-top: 55%; "> -->
          
          <!--  -->
          <!-- <v-row>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <h3 xs-12>About FEIT</h3>
        </v-card>
      </v-col>

      <v-spacer></v-spacer>

      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <p style="text-align:left">
                  The faculty of Engineering and Information Technology (FEIT) is a faculty within the Southern University College (Southern UC). It was established on August 12, 2012 after Southern College (SC) was upgraded to Southern UC. The history reaches back to two decades ago, when the Department of Computer Science was first established in 1991, followed by the Department of Electrical and Electronics Engineering in 2004. These two departments were then integrated and renamed as the School of Engineering and Information Technology (SEIT) in March 2006.

                  Nestled in the intricate beauty of lush greeneries and foliage, the faculty is on the second floor of Southern UC’s main building. Currently, the faculty has 40% of the teaching staff who are Ph.D holders specializing in different fields of studies.

                  With experienced and highly qualified teaching staff and state of the art facilities in the faculty, the diplomas and degree programs offered are accredited by the Malaysian Qualifications Agency (MQA) or recognized by the Engineering Accreditation Council Malaysia (EAC).
          </p>
        </v-card>
      </v-col>
    </v-row> -->
    <!--  -->
          <section class="pa-4 ma-4" style="position: static; ">
            <v-layout row wrap class="mx-3">
              <v-flex xs12 sm3 md3 lg3>
                <h3 xs-12>About FEIT</h3>
              </v-flex>
              <v-flex xs12 sm8 md8 lg8>
                <p style="text-align:left">
                  The faculty of Engineering and Information Technology (FEIT) is a faculty within the Southern University College (Southern UC). It was established on August 12, 2012 after Southern College (SC) was upgraded to Southern UC. The history reaches back to two decades ago, when the Department of Computer Science was first established in 1991, followed by the Department of Electrical and Electronics Engineering in 2004. These two departments were then integrated and renamed as the School of Engineering and Information Technology (SEIT) in March 2006.

                  Nestled in the intricate beauty of lush greeneries and foliage, the faculty is on the second floor of Southern UC’s main building. Currently, the faculty has 40% of the teaching staff who are Ph.D holders specializing in different fields of studies.

                  With experienced and highly qualified teaching staff and state of the art facilities in the faculty, the diplomas and degree programs offered are accredited by the Malaysian Qualifications Agency (MQA) or recognized by the Engineering Accreditation Council Malaysia (EAC).
                </p>
              </v-flex>
            </v-layout>
          </section>
          <!--  -->

      <!-- <v-row class="text-left mx-12">
          <v-layout row wrap>
            <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
              <h3 xs-12>About FEIT</h3>
            </v-flex>
          </v-layout> -->


        <!-- <v-col cols="2">
          <h3 xs-12>About FEIT</h3>
        </v-col>
        <v-col cols="7">
          <p>
            The faculty of Engineering and Information Technology (FEIT) is a faculty within the Southern University College (Southern UC). It was established on August 12, 2012 after Southern College (SC) was upgraded to Southern UC. The history reaches back to two decades ago, when the Department of Computer Science was first established in 1991, followed by the Department of Electrical and Electronics Engineering in 2004. These two departments were then integrated and renamed as the School of Engineering and Information Technology (SEIT) in March 2006.

            Nestled in the intricate beauty of lush greeneries and foliage, the faculty is on the second floor of Southern UC’s main building. Currently, the faculty has 40% of the teaching staff who are Ph.D holders specializing in different fields of studies.

            With experienced and highly qualified teaching staff and state of the art facilities in the faculty, the diplomas and degree programs offered are accredited by the Malaysian Qualifications Agency (MQA) or recognized by the Engineering Accreditation Council Malaysia (EAC).
          </p>
        </v-col>
      </v-row> -->
    <!-- </v-container> -->

<!-- grid -->
<!-- <vuetifyMediaPlayer/> -->

        <!-- <grid/> -->
        <section class="text-left mx-12 px-10" style="width: 100%; position: static; height: auto; px-10">
          <v-col class="mb-12" cols="11">
            <h3 class="mb-3 text-center" >Our Objectives</h3>
            <v-row style="margin-left: 4%;">
              <div
                class="pa-4 ma-2"
                outlined
                tile
                v-for="n in 3"
                :key="n"
              >
                <v-icon class="mb-3" large color="green darken-2">mdi-domain</v-icon>
                        <h4 class="mb-3">Opportunities</h4>
                        <p>
                            Though the gravity still dragged at
                            
                            <br> him, his muscles were making 
                            <br>great efforts to adjust. After the 
                            <br>daily classes he no longer 
                            <br>collapsed immediately into bed. 
                            <br>Only the nightmares got worse.
                        </p>
              </div>
            </v-row>
            <!-- <v-row
                align="start"
                justify="space-between"
                class="lighten-5 text-left pb-0"
                style="height: 300px;"
              >
                <v-card
                  class="pa-2"
                  outlined
                  tile
                  >
                  

                  <v-icon class="mb-3" large color="green darken-2">mdi-domain</v-icon>
                  <h4 class="mb-3">Opportunities</h4>
                  <p>
                      Though the gravity still dragged at
                      
                      <br> him, his muscles were making 
                      <br>great efforts to adjust. After the 
                      <br>daily classes he no longer 
                      <br>collapsed immediately into bed. 
                      <br>Only the nightmares got worse.
                  </p>

                </v-card>

                <v-card
                  class="pa-2"
                  outlined
                  tile
                  >

                  <v-icon class="mb-3" large color="green darken-2">mdi-domain</v-icon>
                  <h4 class="mb-3">Opportunities</h4>
                  <p>
                      Though the gravity still dragged at
                      
                      <br> him, his muscles were making 
                      <br>great efforts to adjust. After the 
                      <br>daily classes he no longer 
                      <br>collapsed immediately into bed. 
                      <br>Only the nightmares got worse.
                  </p>

                </v-card>

                <v-card
                  class="pa-2"
                  outlined
                  tile
                  >

                  <v-icon class="mb-3" large color="green darken-2">mdi-domain</v-icon>
                  <h4 class="mb-3">Opportunities</h4>
                  <p>
                      Though the gravity still dragged at
                      
                      <br> him, his muscles were making 
                      <br>great efforts to adjust. After the 
                      <br>daily classes he no longer 
                      <br>collapsed immediately into bed. 
                      <br>Only the nightmares got worse.
                  </p>

                </v-card>
                
            </v-row> -->
          </v-col>
        </section>
        

        <!-- video -->
        <!-- <v-layout row wrap>
          <v-flex lg12 md12 xs12> -->
            <!-- <v-layout row wrap class="mx-3">
              <v-flex xs12 sm3 md3 lg12> -->
                <section style="width: 100%; float: left; position: static; ">
                  <v-col cols="12" class="text-center">
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="80%" height="443" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+9)+'px';" type="text/html" src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
                  </v-col>
                </section>
              <!-- </v-flex>
            </v-layout> -->
          <!-- </v-flex>
        </v-layout> -->
        <!-- <div>
        <iframe 
          frameborder="0" 
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          width="500%" 
          onload="this.style.height=(this.contentWindow.document.body.scrollHeight+9)+'px';"
          type="text/html" 
          src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com">
          <div>
            <small>
              <a href="https://youtubeembedcode.com/pl/">
              youtubeembedcode.com/pl/
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="http://add-link-exchange.com">
                Add-link-exchange
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://youtubeembedcode.com/pl/">
                youtubeembedcode pl
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="http://add-link-exchange.com">
                w://add-link-exchange.com
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://youtubeembedcode.com/pl/">
                youtubeembedcode pl
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="http://add-link-exchange.com">
                add-link-exchange
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://youtubeembedcode.com/de/">
                youtubeembedcode de
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="http://add-link-exchange.com">
                Add-link-exchange
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://youtubeembedcode.com/de/">
                youtubeembedcode.com/de/
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="http://add-link-exchange.com">
                www://add-link-exchange.com
              </a>
            </small>
          </div>
        </iframe>
        </div> -->
        
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
        </v-col>
        <div class="text-left">
          <v-col class="mb-12 ma-1 pa-1" cols="11">
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
      
        </div>

    <!-- picture placeholder -->
    <v-row
        align="center"
        justify="center"

        class="text-left mx-12"
      >
        <v-layout row wrap>
          <v-flex lg6 md6 xs12>
            <v-col class="text-left" style="margin: 100px auto 50px;">
              <h2 class="heading">Know more about your seniors.</h2>
              <h6 class="font-weight-thin">Sometimes you might wonder or worried about your plan after graduating from college. Then, it is a good time for you to take a look about other senior, seeing where they work, or even contact them.</h6> <br/>
              <v-btn rounded color="deep purple accent-4" dark>Find out more</v-btn>
            </v-col>
          </v-flex>

          <v-flex lg6 md6 xs12>
            <v-col>
              <v-card>
                <v-container fluid>
                  <v-row>
                    <v-col
                      v-for="n in 9"
                      :key="n"
                      class="d-flex child-flex"
                      cols="4"
                    >
                      <v-card flat tile class="d-flex">
                        <v-img
                          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                          aspect-ratio="1"
                          class="grey lighten-2"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0 mb-4"
                              align="start"
                              justify="center"
                            >
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-card>
      
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-flex>
        </v-layout>
    </v-row>
    
    <!-- draft -->
        <!-- v-row>
          <v-col cols="12" sm="6" offset-sm="3">
            <v-card>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="n in 9"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                  >
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row> -->

        <!-- testing 1 -->
        <!-- <div class="video-container mt-4">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/z9Ul9ccDOqE" frameborder="0" allowfullscreen>
            </iframe>
        </div> -->
<!-- testing -->
   


</v-row>
  </v-container>
</template>
 

<script>
  // import vuetifyMediaPlayer from '../components/vuetifyMediaPlayer';
  // import vuetify-media-player from '../ci';

  export default {
    name: 'timeline',

    components: {
      // vuetifyMediaPlayer,
    },

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

<style scoped>
  .video-container {
      position: static;
      padding-bottom: 56.25%;
      padding-top: 30px; height: 0; 
      /* overflow: hidden; */
  }
  
  .video-container iframe,
  .video-container object,
  .video-container embed 
  {
      /* position: absolute; */
      /* top: 0;
      left: 0; */
      /* width: 100%;
      height: 500px; */
      opacity: 1;
  }
</style>