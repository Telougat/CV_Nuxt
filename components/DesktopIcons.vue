<template>
  <div class="absolute h-full w-screen pt-8 pb-12 top-0 left-0 z-20 overflow-hidden">
    <div @mouseleave="stopDragging" @mouseup="stopDragging" @mousemove="updateCursorPosition" class="relative w-screen h-full">
      <DesktopIcon
        icon="Academic"
        title="Formations"
        link="/presentation"
        x="2%"
        y="3%"
      />
      <DesktopIcon
        icon="Briefcase"
        title="Expériences"
        link="/home"
        x="1.9%"
        y="18.5%"
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
