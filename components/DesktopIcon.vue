<template>
  <div @dblclick="openLink" @mousedown="beginDrag" class="absolute top-1/2 left-1/2 z-20 flex flex-col items-center cursor-pointer border-dashed border-white hover:bg-white">
    <Academic class="h-20 w-20 text-gray-400 fill-current"/>
    <p class="text-center text-gray-500">Compétences</p>
  </div>
</template>

<script>
import Academic from "./icons/Academic";

export default {
  name: "DesktopIcon",
  components: {
    Academic,
  },
  props: {
    link: String,
  },
  methods: {
    openLink() {
      console.log("Open link");
    },
    beginDrag() {
      console.log("Mouse Down");
      console.log(this);
      this.$root.$emit('begindrag');
    }
  }
}
</script>

<style scoped>

</style>
