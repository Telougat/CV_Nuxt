<template>
  <Window title="CV" size="w-full h-5/6 lg:w-4/5 lg:h-4/5 bg-gray-200">
    <transition name="fadeLate" appear>
      <div class="px-4 lg:px-8 py-10 text-gray-800">
        <div class="flex justify-center text-white bg-gray-700 rounded-xl overflow-x-hidden">
          <div @click="openTab(1)" class="tab-button tab-button-1 flex-1 flex flex-col items-center justify-center py-6 menu-item active select-none cursor-pointer">
            <Briefcase class="w-8" />
            <p class="hidden lg:block">Éxperiences</p>
          </div>
          <div @click="openTab(2)" class="tab-button tab-button-2 flex-1 flex flex-col items-center justify-center py-6 menu-item select-none cursor-pointer border-l-4 border-r-4 border-gray-800">
            <Academic class="w-8"/>
            <p class="hidden lg:block">Formations</p>
          </div>
          <div @click="openTab(3)" class="tab-button tab-button-3 flex-1 flex flex-col items-center justify-center py-6 menu-item select-none cursor-pointer">
            <Skills class="w-6 h-auto text-white fill-current"/>
            <p class="hidden lg:block">Compétences</p>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <div v-if="currentTab === 1" :key="`tab-1`" class="space-y-8 mt-16">
            <div v-for="experience in experiences" class="bg-gray-600 shadow-xl px-4 py-6 rounded-xl flex space-x-6">
              <div class="flex flex-col justify-center">
                <img v-if="experience.img" class="w-14 p-1 rounded-xl bg-gray-700 shadow-xl" :src="require(`~/assets/${experience.img}`)" :alt="experience.company">
              </div>
              <div class="text-gray-100">
                <p class="text-xl font-bold">{{ experience.job }} · {{ experience.date }}</p>
                <p class="italic">{{ experience.company }}</p>
                <p>{{ experience.places }}</p>
              </div>
            </div>
          </div>
          <div v-if="currentTab === 2" :key="`tab-2`" class="space-y-8 mt-16">
            <div v-for="formation in formations" class="bg-gray-600 shadow-xl px-4 py-6 rounded-xl">
              <div class="text-gray-100">
                <p class="text-xl font-bold">{{ formation.title }} · {{ formation.date }}</p>
                <p class="italic">{{ formation.institution }}</p>
                <p>{{ formation.places }}</p>
              </div>
            </div>
          </div>
          <div v-if="currentTab === 3" :key="`tab-3`">
            <h3 class="title-card">Logiciel</h3>
            <div class="grid lg:grid-cols-2 mt-8">
              <div v-for="skill in softwareSkills" class="lg:px-4 mb-10 flex space-x-6">
                <p class="w-1/3 bg-gray-600 py-1 px-2 text-white font-bold rounded-lg flex flex-col justify-center">{{ skill.name }}</p>
                <div class="flex flex-auto items-center">
                  <div class="border border-2 border-gray-600 p-1 w-full">
                    <div class="h-5 bg-gray-600" :style="`width: ${skill.level * 20}%;`"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="title-card">Autres</h3>
            <div class="grid lg:grid-cols-2 mt-8">
              <div v-for="skill in otherSkills" class="lg:px-4 mb-10 flex space-x-6">
                <p class="w-1/3 bg-gray-600 py-1 px-2 text-white font-bold rounded-lg flex flex-col justify-center">{{ skill.name }}</p>
                <div class="flex flex-auto items-center">
                  <div class="border border-2 border-gray-600 p-1 w-full">
                    <div class="h-5 bg-gray-600" :style="`width: ${skill.level * 20}%;`"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Window>
</template>

<script>
import {mapGetters} from "vuex";
import Briefcase from "../components/icons/Briefcase";
import Academic from "../components/icons/Academic";
import Skills from "../components/icons/Skills";

export default {
  name: "resume",
  components: {Skills, Academic, Briefcase},
  data: () => {
    return {
      currentTab: 1
    }
  },
  methods: {
    openTab(tab) {
      document.querySelectorAll('.tab-button').forEach((button) => button.classList.remove('active'));
      document.querySelector('.tab-button-'+tab).classList.add('active');
      this.currentTab = tab;
    }
  },
  computed: {
    ...mapGetters({
      experiences: 'getExperiences',
      formations: 'getFormations',
      softwareSkills: 'getSoftwareSkills',
      otherSkills: 'getOtherSkills'
    })
  }
}
</script>

<style scoped>
  .menu-item.active {
    @apply bg-gray-800 cursor-default shadow-inner;
  }
  .menu-item.active p {
    @apply relative;
  }
  .menu-item.active p:after {
    content: '';
    height: 2px;
    @apply absolute w-12 bg-white left-1/2 bottom-0 -mb-2 transform -translate-x-1/2;
  }
  .title-card {
    @apply bg-gray-600 py-2 px-4 rounded-xl mt-8 text-white text-xl font-bold;
  }
  .title-card:first-of-type {
    @apply mt-16;
  }
  .pin {
    @apply bg-gray-600 w-4 h-4 rounded-full;
  }
</style>
