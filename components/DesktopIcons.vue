<template>
  <div @mousemove="updateCursorPosition" class="absolute h-full w-screen pt-10 pb-12 top-0 left-0">
    <div class="relative w-screen h-full">
      <DesktopIcon/>
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
  data: () => {
    return {
      cursorPositionX: null,
      cursorPositionY: null,
      dragging: false,
    }
  },
  mounted() {
    this.$on('begindrag', function() {
      console.log("Passage dans l'event");
    });
  },
  methods: {
    updateCursorPosition(event) {
      this.cursorPositionX = event.clientX;
      this.cursorPositionY = event.clientY;
    }
  }
}
</script>

<style scoped>

</style>
