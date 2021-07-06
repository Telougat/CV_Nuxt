<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="fixed top-0 w-screen flex justify-end bg-white px-6 bg-opacity-50">
      <p class="text-lg text-gray-700 font-bold">{{ time }}</p>
    </div>
    <div class="flex flex-col items-center bg-white py-16 px-20 rounded-xl bg-opacity-60 cursor-pointer" @click="$router.push('/home')">
      <div class="w-40 h-40 rounded-full face"></div>
      <h1 class="mt-10 text-gray-700 font-bold italic">Lorenzo LAGOUTTE</h1>
      <Enter class="h-16 mt-8 text-gray-700 fill-current"/>
    </div>
  </div>
</template>

<script>
import Enter from "~/components/icons/Enter";

export default {
  name: "index",
  layout: 'login',
  components: {
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
