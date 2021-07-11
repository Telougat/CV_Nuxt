<template>
  <div class="absolute h-full w-screen pt-8 top-0 left-0 z-20 overflow-hidden">
    <div @mouseleave="stopDragging" @mouseup="stopDragging" @mousemove="updateCursorPosition" class="relative w-screen h-full flex flex-col space-y-6 p-6">
      <DesktopIcon
        icon="UserCircle"
        title="Présentation"
        link="presentation"
      />
      <DesktopIcon
        icon="CV"
        title="CV"
        link="/resume"
      />
      <DesktopIcon
        icon="Mail"
        title="E-Mail"
        :link="`mailto:${$store.getters.getContact.email}`"
      />
      <DesktopIcon
        icon="Github"
        title="Github"
        link="https://github.com/Telougat"
      />
      <DesktopIcon
        icon="Informations"
        title="À propos"
        link="informations"
      />
    </div>
  </div>
</template>

<script>
import DesktopIcon from "./DesktopIcon";

export default {
  name: "DesktopIcons",
  components: {
    DesktopIcon
  },
  methods: {
    updateCursorPosition(event) {
      this.$store.dispatch('desktop-animation/storeCursorPosition', {
        x: event.clientX,
        y: event.clientY
      });
    },
    stopDragging() {
      this.$store.dispatch('desktop-animation/storeDraggingState', false);
    }
  }
}
</script>

<style scoped>

</style>
