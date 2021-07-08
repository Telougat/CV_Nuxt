<template>
  <div @click="$router.push('/home')" @mousemove="updateCursorPosition" @mouseup="setDraggingState(false)" class="w-full h-full overflow-x-hidden z-30">
    <div class="relative w-full h-full flex justify-center items-center overflow-hidden">
      <transition name="fade" appear>
        <div @click="stopPropagation" ref="window-frame" :class="fullscreen ? 'w-full h-full' : 'w-4/5 h-4/5'" class="bg-gray-100 rounded-xl">
          <div @mousedown="setDraggingState(true)" class="h-10 bg-gray-400 bg-opacity-50 flex items-center justify-between px-4 rounded-t-xl">
            <div class="flex space-x-2">
              <NuxtLink to="/home" class="pin red flex items-center justify-center"><Close class="close hidden text-white fill-current" /></NuxtLink>
              <div @click="setFullscreen" class="pin yellow"><Close class="close hidden text-black fill-current" /></div>
              <div class="pin green"><Close class="close hidden text-black fill-current" /></div>
            </div>
            <div>
              <h2 class="select-none">{{ title }}</h2>
            </div>
          </div>
          <div class="overflow-y-auto overflow-x-hidden">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Close from "~/components/icons/Close";

export default {
  name: "Window",
  components: {
    Close
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      animationFrame: null,
      dragging: false,
      initialWindowPosition: {
        x: null,
        y: null
      },
      cursor: {
        x: null,
        y: null
      },
      startCursor: {
        x: null,
        y: null
      },
      windowFrame: null,
      fullscreen: false,
    }
  },
  mounted() {
    this.windowFrame = this.$refs['window-frame'];
  },
  methods: {
    setFullscreen() {
      this.fullscreen = !this.fullscreen;

      if (this.fullscreen) {
        this.$refs['window-frame'].style.left = "0px";
        this.$refs['window-frame'].style.top = "0px";
      }
    },
    stopPropagation(event) {
      event.stopPropagation();
    },
    updateCursorPosition(event) {
      this.cursor = {
        x: event.clientX,
        y: event.clientY
      }
    },
    setDraggingState(isDragging) {
      if (isDragging) {
        this.dragging = true;
        this.startCursor = {
          x: this.cursor.x,
          y: this.cursor.y
        }
        this.initialWindowPosition = {
          x: this.$refs['window-frame'].offsetLeft,
          y: this.$refs['window-frame'].offsetTop
        }
        this.$refs['window-frame'].style.position = "absolute";
        this.animationFrame = requestAnimationFrame(this.draggingAnimation);
      } else {
        this.dragging = false;
        cancelAnimationFrame(this.animationFrame);
      }
    },
    draggingAnimation() {
      if (this.dragging) {
        this.$refs['window-frame'].style.left = this.initialWindowPosition.x - (this.startCursor.x - this.cursor.x) + "px";
        this.$refs['window-frame'].style.top = this.initialWindowPosition.y - (this.startCursor.y - this.cursor.y) + "px";
        this.animationFrame = requestAnimationFrame(this.draggingAnimation);
      }
      else {
        cancelAnimationFrame(this.draggingAnimation);
      }
    }
  }
}
</script>

<style scoped>
  .pin {
    @apply h-3 w-3 rounded-full;
    padding: 3px;
  }
  .pin:hover {
    @apply cursor-pointer;
  }
  .pin:hover .close {
    @apply block;
  }
  .pin.red {
    @apply bg-red-700;
  }
  .pin.yellow {
    @apply bg-yellow-500;
  }
  .pin.green {
    @apply bg-green-600;
  }
</style>
