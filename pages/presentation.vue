<template>
  <Window title="Présentation" background="bg-gray-700" size="w-full h-5/6 lg:w-4/5 lg:h-4/5">
    <div class="flex flex-col justify-center h-full">
      <div class="w-full text-white font-bold p-6 flex space-x-8">
        <div class="flex-shrink-0 w-1/5">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=albert-dera-ILip77SbmOE-unsplash.jpg&w=1920" alt="Lorenzo">
        </div>
        <div class="space-y-6">
          <p>Bonjour, moi c'est Lorenzo LAGOUTTE, je suis passionné par le développement depuis mon adolescence,
            j'ai créé ce site afin de rassembler certaines informations me concernant tel que mon CV avec mes éxpériences, mes formations et mes compétences, mais aussi mes liens de contact et mon Github.</p>
          <p>Possédant deux années d'éxpériences professionels en alternance durant ma formation de responsable en ingénierie des logiciels,
            j'ai développé grandement mes compétences, que ce soit sur le plan du développement informatique mais aussi du développement humain.</p>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="flex space-x-4 text-white font-bold px-6">
          <Mail class="w-6"/>
          <a href="mailto:lorenzo@lagoutte.dev">lorenzo@lagoutte.dev</a>
        </div>
        <div class="flex space-x-4 text-white font-bold px-6">
          <Phone class="w-6"/>
          <a href="tel:+33624446270">06 24 44 62 70</a>
        </div>
      </div>
    </div>
  </Window>
</template>

<script>
import Mail from "../components/icons/Mail";
import Phone from "../components/icons/Phone";
export default {
  name: "presentation",
  components: {Phone, Mail},
}
</script>

<style scoped>

</style>
