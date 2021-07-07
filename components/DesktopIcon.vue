<template>
  <div @dblclick="openLink" @mousedown="startDragging" style="user-select: none;" :style="{ left: x, top: y }" class="absolute top-1/2 left-1/2 z-20 flex flex-col items-center cursor-pointer text-gray-300">
    <component class="h-20 w-20" :is="icon"/>
    <p class="text-center">{{ title }}</p>
  </div>
</template>

<script>
import Academic from "./icons/Academic";
import Briefcase from "./icons/Briefcase";

export default {
  name: "DesktopIcon",
  components: {
    Academic,
    Briefcase
  },
  props: {
    icon: String,
    title: String,
    link: String,
    x: String,
    y: String
  },
  data: () => {
    return {
      draggingAnimationFrame: null,
      startTime: null
    }
  },
  methods: {
    openLink() {
      this.$router.push(this.link);
    },
    async startDragging() {
      await this.$store.dispatch('desktop-animation/storeDraggingState', true);
      this.startTime = performance.now();
      this.draggingAnimationFrame = requestAnimationFrame(this.drag);
    },
    drag(time) {
      if (time - this.startTime < 100) { //Check if user is just clicking and no move the icon
        this.draggingAnimationFrame = requestAnimationFrame(this.drag);
      }
      else if (this.$store.getters["desktop-animation/getDraggingState"]) {
        this.$el.style.left = (this.$store.getters["desktop-animation/getX"] - this.$el.offsetWidth/2) + "px";
        this.$el.style.top = (this.$store.getters["desktop-animation/getY"] - this.$el.offsetHeight) + "px";
        this.draggingAnimationFrame = requestAnimationFrame(this.drag);
      }
      else {
        cancelAnimationFrame(this.draggingAnimationFrame);
      }
    }
  }
}
</script>

<style scoped>

</style>
