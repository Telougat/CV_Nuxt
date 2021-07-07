<template>
  <div id="main" class="w-screen h-screen overflow-hidden">

    <header>
      <div class="flex items-center space-x-3">
        <User class="icon" />
        <h2 class="font-bold italic text-gray-700">Lorenzo LAGOUTTE</h2>
      </div>
      <div class="flex space-x-4 items-center">
        <Wifi class="icon"/>
        <Sound class="icon"/>
        <Leave class="icon"/>
      </div>
    </header>

    <div class="absolute h-full w-screen pt-10 pb-12 top-0 left-0">
      <div class="relative w-screen h-full">
        <DesktopIcon/>
      </div>
    </div>

    <Nuxt class="absolute h-full w-full z-10 pt-10 pb-16"/>

    <footer>
      <h2>Bonjour</h2>
    </footer>

  </div>
</template>

<script>
import Wifi from "@/components/icons/Wifi";
import Sound from "~/components/icons/Sound";
import Leave from "~/components/icons/Leave";
import User from "~/components/icons/User";
import DesktopIcon from "../components/DesktopIcon";

export default {
  components: {
    Wifi,
    Sound,
    Leave,
    User,
    DesktopIcon
  }
}
</script>

<style scoped>
  #main {
    background-image: url("https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=ashim-d-silva-WeYamle9fDM-unsplash.jpg");
    @apply bg-cover bg-center;
  }
  header, footer {
    @apply fixed z-10 bg-white bg-opacity-75 px-4 w-screen;
  }
  header {
    @apply top-0 h-10 flex justify-between items-center w-screen;
  }
  footer {
    @apply h-12 bottom-0;
  }
  .icon {
    @apply h-5 text-gray-700 fill-current;
  }
</style>
