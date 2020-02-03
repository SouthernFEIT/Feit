import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// icon import
import BriefCase from "@/components/icon/BriefCase"
import Building from "@/components/icon/Building"
import CreativeIdea from "@/components/icon/CreativeIdea"
import EducationHat from "@/components/icon/EducationHat"
import InformationGroup from "@/components/icon/InformationGroup"
import PersonalDevelopment from "@/components/icon/PersonalDevelopment"
import Teacher from "@/components/icon/Teacher"
import Working from "@/components/icon/Working"
Vue.use(Vuetify);


export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        primary: "#F9F9FD",
        secondary: "#FFFFFF"
      }
    }
  },
  icons: {
    values: {
      BriefCase: {
        component: BriefCase
      },
      Building: {
        component: Building
      },
      CreativeIdea: {
        component: CreativeIdea
      },
      EducationHat: {
        component: EducationHat
      },
      InformationGroup: {
        component: InformationGroup
      },
      PersonalDevelopment: {
        component: PersonalDevelopment
      },
      Teacher: {
        component: Teacher
      },
      Working: {
        component: Working
      }
    }
  }
});
