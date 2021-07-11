<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="fixed top-0 flex items-center justify-end z-50 h-8 bg-white bg-opacity-75 px-4 w-screen space-x-3">
      <Locked class="h-5 text-gray-700"/>
      <p class="text-lg text-gray-700 font-bold tracking-wider select-none">{{ time }}</p>
    </div>
    <div class="flex flex-col items-center p-5 rounded-xl cursor-pointer" @click="$router.push('/home')">
      <div class="w-40 h-40 rounded-full face"></div>
      <h1 class="mt-6 text-gray-700 font-bold italic select-none">Lorenzo LAGOUTTE</h1>
      <p class="bg-white bg-opacity-75 px-2 py-1 text-gray-700 italic mt-8 text-xl">Entrer</p>
    </div>
  </div>
</template>

<script>
import Enter from "~/components/icons/Enter";
import Locked from "../components/icons/Locked";

export default {
  name: "index",
  layout: 'login',
  components: {
    Locked,
    Enter
  },
  data: () => {
    return {
      time: null,
    }
  },
  mounted() {
    requestAnimationFrame(this.refreshTime);
  },
  methods: {
    refreshTime() {
      let now = new Date();
      this.time = this.zeroLead(now.getHours(), 2) + ":" + this.zeroLead(now.getMinutes(), 2);
      requestAnimationFrame(this.refreshTime);
    },
    zeroLead(num, numberOfZeros) {
      let zero = numberOfZeros - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    }
  }
}
</script>

<style scoped>
  .face {
    background-image: url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=albert-dera-ILip77SbmOE-unsplash.jpg&w=1920");
    @apply bg-cover bg-top;
  }
</style>
