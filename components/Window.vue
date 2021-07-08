<template>
  <div @click="clicked" class="w-full h-full flex justify-center items-center">
    <div class="z-20 w-4/5 h-4/5 bg-gray-100 rounded-xl">
      <div class="h-10 bg-gray-700 bg-opacity-50 flex items-center justify-between px-4 rounded-t-xl">
        <div class="flex space-x-2">
          <NuxtLink to="/home" class="pin red flex items-center justify-center"><Close class="close hidden text-black fill-current" /></NuxtLink>
          <div class="pin yellow"><Close class="close hidden text-black fill-current" /></div>
          <div class="pin green"><Close class="close hidden text-black fill-current" /></div>
        </div>
        <div>
          <h2>{{ title }}</h2>
        </div>
      </div>
      <div class="overflow-y-auto overflow-x-hidden">
        <slot></slot>
      </div>
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
  methods: {
    clicked(event) {
      console.log(event);
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
