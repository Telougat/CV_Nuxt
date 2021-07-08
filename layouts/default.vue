<template>
  <div id="main" class="w-screen h-screen overflow-hidden">

    <header>
      <div class="flex items-center space-x-3 select-none">
        <User class="icon" />
        <h2 class="font-bold italic text-gray-700">Lorenzo LAGOUTTE</h2>
      </div>
      <div class="flex space-x-4 items-center">
        <Wifi class="icon"/>
        <Sound class="icon"/>
        <NuxtLink to="/">
          <Leave class="icon"/>
        </NuxtLink>
      </div>
    </header>

    <DesktopIcons/>

    <Nuxt class="absolute h-full w-full pt-8"/>

<!--    <footer>
      <h2>Bonjour</h2>
    </footer>-->

  </div>
</template>

<script>
import Wifi from "@/components/icons/Wifi";
import Sound from "~/components/icons/Sound";
import Leave from "~/components/icons/Leave";
import User from "~/components/icons/User";
import DesktopIcons from "../components/DesktopIcons";

export default {
  components: {
    DesktopIcons,
    Wifi,
    Sound,
    Leave,
    User
  }
}
</script>

<style scoped>
  #main {
    background-image: url("https://images.unsplash.com/photo-1564944062924-57874442ddea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=szabo-viktor-_h57ooIvgZ0-unsplash.jpg");
    @apply bg-cover bg-center;
  }
  header, footer {
    @apply fixed z-50 bg-white bg-opacity-75 px-4 w-screen;
  }
  header {
    @apply top-0 h-8 flex justify-between items-center w-screen;
  }
  footer {
    @apply h-12 bottom-0;
  }
  .icon {
    @apply h-5 text-gray-700 fill-current;
  }
</style>
