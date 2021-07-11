<template>
  <Window background="bg-gray-700" size="w-full h-5/6 lg:w-1/2 lg:h-2/5">
    <transition name="fadeLate" appear>
      <div class="p-6 space-y-6 text-white font-bold">
        <p>Ce site a été réalisé avec Nuxt JS et est exporté de manière statique via Cloudflare Pages.</p>
        <p>Basé sur une idée de simuler un OS tel que MacOS en application Web, vous pouvez ainsi bouger les éléments comme les icônes ou les fenêtres.</p>
        <p>Le code source du projet est disponible sur Github en cliquant <a href="https://github.com/Telougat/CV_Nuxt" target="_blank" class="hover:underline">ici</a>.</p>
      </div>
    </transition>
  </Window>
</template>

<script>
import Window from "../components/Window";
export default {
  name: "informations",
  components: {Window}
}
</script>

<style scoped>

</style>
