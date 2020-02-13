<template>
  <div>
    <section class="hero-section">
      <v-container class="flex-column align-start text-left">
        <h2 class="hero-title">Welcome To Faculty Of Engineering and IT</h2>
        <p class="hero-subtitle pt-3">Official FEIT website from Southern University College.</p>
        <br />
        <button class="primary-btn">Learn More</button>
      </v-container>
    </section>

    <section class="about-section">
      <v-container class="flex-column">
        <!-- FEIT card -->
        <div class="feit-container">
          <div class="feit__left">
            <div class="feit-left__card">
              <v-icon class="feit--svg">$Teacher</v-icon>
              <p class="paragraph pt-2">20 Lecturers</p>
            </div>
            <div class="feit-left__card">
              <v-icon class="feit--svg">$Building</v-icon>
              <p class="paragraph pt-2">20 Lecturers</p>
            </div>
            <div class="feit-left__card">
              <v-icon class="feit--svg">$EducationHat</v-icon>
              <p class="paragraph pt-2">20 Lecturers</p>
            </div>
          </div>
          <div class="feit__right">
            <p class="paragraph">Programme Offered</p>
            <h6 class="sub-herotitle">2 Bachelor Degree Programme</h6>
            <h6 class="sub-herotitle">3 Diploma Programme</h6>
          </div>
        </div>

        <div class="about-bottom-container">
          <h3 class="bold-title">About FEIT</h3>
          <div class="about-bottom__content">
            <p
              class="paragraph"
            >The faculty of Engineering and Information Technology (FEIT) is a faculty within the Southern University College (Southern UC). It was established on August 12, 2012 after Southern College (SC) was upgraded to Southern UC. The history reaches back to two decades ago, when the Department of Computer Science was first established in 1991, followed by the Department of Electrical and Electronics Engineering in 2004. These two departments were then integrated and renamed as the School of Engineering and Information Technology (SEIT) in March 2006.</p>
            <p
              class="paragraph"
            >Nestled in the intricate beauty of lush greeneries and foliage, the faculty is on the second floor of Southern UC’s main building. Currently, the faculty has 40% of the teaching staff who are Ph.D holders specializing in different fields of studies.</p>
            <p
              class="paragraph"
            >With experienced and highly qualified teaching staff and state of the art facilities in the faculty, the diplomas and degree programs offered are accredited by the Malaysian Qualifications Agency (MQA) or recognized by the Engineering Accreditation Council Malaysia (EAC).</p>
          </div>
        </div>
      </v-container>
    </section>
    <!--  -->

    <!-- Our objectives -->
    <section class="objectives-section">
      <v-container class="flex-column">
        <h3 class="mb-3 text-center">Our Objectives</h3>
        <div class="objectives-cards-container">
          <div class="objectives__card">
            <v-icon class="mb-3 objectives-cards--logo">$BriefCase</v-icon>
            <h4 class="mt-4 mb-1">Opportunities</h4>
            <p
              class="paragraph"
            >Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.</p>
          </div>

          <div class="objectives__card">
            <v-icon class="mb-3 objectives-cards--logo">$CreativeIdea</v-icon>
            <h4 class="mt-4 mb-1">Ideas</h4>
            <p
              class="paragraph"
            >Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.</p>
          </div>

          <div class="objectives__card">
            <v-icon class="mb-3 objectives-cards--logo">$PersonalDevelopment</v-icon>
            <h4 class="mt-4 mb-1">Skills</h4>
            <p
              class="paragraph"
            >Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.</p>
          </div>
        </div>
      </v-container>
    </section>

    <v-container class="flex-column">
      <!-- video -->
      <iframe
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="100%"
        height="443"
        onload="this.style.height=(this.contentWindow.document.body.scrollHeight+9)+'px';"
        type="text/html"
        src="https://www.youtube.com/embed/F93eFpRlIUE"
      ></iframe>

      <!-- timeline -->
      <TimeLine />
    </v-container>

    <section class="last-section">
      <v-container>
        <div class="last__left">
          <h3>Know more about your seniors.</h3>
          <p
            class="paragraph"
          >Sometimes you might wonder or worried about your plan after graduating from college. Then, it is a good time for you to take a look about other senior, seeing where they work, or even contact them.</p>
          <button class="primary-btn mt-5">Find out more</button>
        </div>
        <img class="last__right" src="../assets/images/sample_seniors.png" alt="seniors_in_works" />
      </v-container>
    </section>
  </div>
</template>
 

<script>
import TimeLine from "../components/timeline/TimeLine";

export default {
  name: "Home",

  components: {
    TimeLine
  },

  data: () => ({
    years: [
      {
        color: "cyan",
        year: "1960"
      },
      {
        color: "green",
        year: "1970"
      },
      {
        color: "pink",
        year: "1980"
      },
      {
        color: "amber",
        year: "1990"
      },
      {
        color: "orange",
        year: "2000"
      }
    ]
  })
};
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-flow: column;
  min-height: 70vh;
  text-align: center !important;
  background: url(../assets/images/hero.png);
}

.hero-section .container {
  min-height: inherit;
  justify-content: center;
}

.hero-section * {
  color: #fff !important;
}

.hero-subtitle {
  opacity: 0.6;
}

.about-section {
  width: 100%;
  position: relative;
  background: var(--primary-color--light);
  padding-bottom: 1.5em;
}

.about-section .bold-title {
  border-right: 3px solid var(--primary-color);
}

.feit-container {
  display: grid;
  grid-template-areas: "c c";
  grid-auto-columns: 1fr 1fr;
  width: 100%;
  background: #fff;
  border-top: 5px solid var(--primary-color);
  margin-top: -2em;
  padding: 2em;
  min-height: 20vh;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.15);
}

.feit--svg {
  width: 100%;
  height: 100%;
  object-fit: cover !important;
}

.feit__left {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 1.5em;
  /* background: red; */
}

.feit__right {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.feit-left__card .paragraph {
  margin-bottom: 0 !important;
  padding-top: 0;
}

.feit-left__card {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-right: 1em;
}

.feit__right .paragraph {
  padding-top: 0;
}

.feit__right .sub-herotitle {
  margin-bottom: 0.5em;
}

.about-bottom-container {
  padding-top: 3em;
  display: grid;
  grid-template-areas: "c c";
  grid-auto-columns: 30% 1fr;
}

.about-bottom-container .bold-title {
  text-align: right;
  padding-right: 1em;
  height: fit-content;
}

.about-bottom-container .paragraph {
  padding-top: 0;
  padding-left: 3em;
}

.objectives-section {
  padding: 5em 0;
}

.objectives-cards-container {
  display: flex;
  margin-top: 2.5em;
}

.objectives__card {
  padding: 0 2.5em 0 0;
}

.objectives-cards--logo {
  max-width: 50px;
  max-height: 50px;
  width: 100%;
  height: 100%;
}

iframe {
  box-shadow: 0px 20px 30px rgba(29, 12, 79, 0.3);
  border-radius: 7px;
  margin: 0em 0 3em 0;
}

.last-section {
  background: var(--primary-color--light);
  min-height: 40vh;
  padding: 3em 0;
}

.last-section .container {
  align-items: center;
}

.last__left {
  padding-right: 2em;
}

.last__right {
  max-width: 50%;
}

@media screen and (max-width: 600px) {
  .feit-container {
    grid-template-areas: "c";
    grid-auto-columns: unset;
  }

  .feit--svg {
    max-width: 75px;
    max-height: 75px;
  }

  .feit__left {
    justify-content: flex-start;
    padding: 0;
  }

  .feit__right {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin-top: 2em;
    padding-top: 2em;
  }

  .about-bottom-container {
    grid-template-areas: "c";
    grid-auto-columns: unset;
  }

  .about-bottom-container .bold-title {
    text-align: left;
    padding-right: 1em;
    width: max-content;
    height: fit-content;
  }

  .about-bottom-container .paragraph {
    padding-left: 0;
    padding-top: 1em;
  }

  .objectives-cards-container {
    flex-flow: column;
  }

  .objectives__card {
    padding: 1.5em 0;
  }

  .last-section .container {
    flex-flow: column-reverse;
  }

  .last__left {
    padding: 3em 0 2em 0;
  }

  .last__right {
    max-width: 100%;
  }
}
</style>