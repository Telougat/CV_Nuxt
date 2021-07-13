<template>
  <div @click="openLink" @mousedown="startDragging" style="user-select: none;" class="z-20 flex flex-col items-center cursor-pointer text-gray-300 h-20 w-20 lg:h-28 lg:w-28">
    <component class="h-20 w-20" :is="icon"/>
    <p class="text-center font-bold">{{ title }}</p>
  </div>
</template>

<script>
import Academic from "./icons/Academic";
import Briefcase from "./icons/Briefcase";
import CV from "./icons/CV";
import Github from "./icons/Github";
import Mail from "./icons/Mail";
import UserCircle from "./icons/UserCircle";
import Informations from "./icons/Informations";

export default {
  name: "DesktopIcon",
  components: {
    Academic,
    Briefcase,
    CV,
    Github,
    Mail,
    UserCircle,
    Informations
  },
  props: {
    icon: String,
    title: String,
    link: String
  },
  data: () => {
    return {
      draggingAnimationFrame: null,
      startTime: null,
      validDrag: false
    }
  },
  methods: {
    openLink(event) {
      if (!this.validDrag) {
        event.stopPropagation();
        if (this.link.includes('https://') || this.link.includes('http://')) {
          window.open(this.link, '_blank');
        } else if (this.link.includes('mailto:')) {
          window.location.href = this.link;
        }
        else {
          this.$router.push(this.link);
        }
      }
    },
    async startDragging() {
      await this.$store.dispatch('desktop-animation/storeDraggingState', true);
      this.startTime = performance.now();
      this.draggingAnimationFrame = requestAnimationFrame(this.drag);
    },
    drag(time) {
      if (time - this.startTime < 175) { //Check if user is just clicking and no move the icon
        this.draggingAnimationFrame = requestAnimationFrame(this.drag);
        this.validDrag = false;
      }
      else if (this.$store.getters["desktop-animation/getDraggingState"]) {
        this.validDrag = true;
        this.$el.classList.add("absolute");
        this.$el.style.left = (this.$store.getters["desktop-animation/getX"] - this.$el.offsetWidth/2) + "px";
        this.$el.style.top = (this.$store.getters["desktop-animation/getY"] - this.$el.offsetHeight/2) + "px";
        this.draggingAnimationFrame = requestAnimationFrame(this.drag);
      }
      else {
        this.validDrag = false;
        cancelAnimationFrame(this.draggingAnimationFrame);
      }
    }
  }
}
</script>

<style scoped>

</style>
