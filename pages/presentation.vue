<template>
  <Window title="Présentation" background="bg-gray-700" size="w-full h-5/6 lg:w-4/5 lg:h-4/5">
    <transition name="fadeLate" appear>
      <div class="lg:flex flex-col justify-center h-full pt-6 lg:py-0">
        <div class="w-full text-white font-bold p-4 lg:p-6 lg:flex space-x-8">
          <div class="flex-shrink-0 w-1/5 hidden lg:block xl:w-1/6">
            <img src="~/assets/lorenzo.jpg" alt="Lorenzo">
          </div>
          <div class="space-y-6 lg:flex flex-col justify-center">
            <p>Bonjour, je m'appelle Lorenzo LAGOUTTE, je suis passionné par le développement depuis mon adolescence, j'ai créé ce site afin de rassembler certaines informations me concernant tel que mon CV avec mes expériences, mes formations et mes compétences, mais aussi mes liens de contact et mon Github.</p>
            <p>Possédant deux années d'expériences professionnelles en alternance durant ma formation de responsable en ingénierie des logiciels,
              j'ai développé grandement mes compétences, sur le plan du développement informatique et du développement humain.</p>
            <p>J'ai pu réaliser différents projets, tout seul ou en équipe, j'ai fait beaucoup d'intégration web, avec, notamment Wordpress, Vue JS, Nuxt JS et TailwindCSS. Egalement du back-end avec Laravel, Lumens et un peu de Symfony. Ou encore quelques autres projets avec d'autres technologies tel que Unity, Flutter, etc.</p>
            <p>Vous pouvez retrouver tous mes projets sur mon compte Github, cependant, j'ai quelques projets en privé, si vous souhaitez regarder des projets avec des technologies spécifiques ou avoir d'autres explications, contactez-moi par mail.</p>
          </div>
        </div>
        <div class="lg:flex justify-end pl-5 pb-6 space-y-4 lg:space-y-0 lg:pl-0 lg:pb-0">
          <div class="flex space-x-4 text-white font-bold px-6">
            <Mail class="w-6"/>
            <a href="mailto:lorenzo@lagoutte.dev">{{ $store.getters.getContact.email }}</a>
          </div>
          <div class="flex space-x-4 text-white font-bold px-6">
            <Phone class="w-6"/>
            <a :href="`tel:${$store.getters.getContact.phone}`">{{$store.getters.getContact.phone}}</a>
          </div>
        </div>
      </div>
    </transition>
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
