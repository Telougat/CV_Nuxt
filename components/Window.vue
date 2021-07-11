<template>
  <div @click="$router.push('/home')" @mousemove="updateCursorPosition" @mouseup="setDraggingState(false)" class="w-full h-full overflow-x-hidden z-30">
    <div class="relative w-full h-full flex justify-center items-center overflow-hidden">
      <transition name="fade" appear>
        <div @click="stopPropagation" ref="window-frame" :class="size" class="bg-gray-100 rounded-xl flex flex-col">
          <div @mousedown="setDraggingState(true)" class="h-10 bg-gray-400 bg-opacity-50 flex flex-shrink-0 items-center justify-between px-4 rounded-t-xl">
            <div class="flex space-x-2">
              <NuxtLink to="/home" class="pin red flex items-center justify-center"><Close class="close hidden text-white fill-current" /></NuxtLink>
              <div class="pin yellow"></div>
              <div class="pin green"></div>
            </div>
            <div>
              <h2 class="select-none italic text-gray-700">{{ title }}</h2>
            </div>
          </div>
          <div :class="background" class="overflow-y-auto overflow-x-hidden h-full w-full">
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
    },
    size: {
      type: String,
    },
    background: {
      type: String,
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
    }
  },
  mounted() {
    this.windowFrame = this.$refs['window-frame'];
  },
  methods: {
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
