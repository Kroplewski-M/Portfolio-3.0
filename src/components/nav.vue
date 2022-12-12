<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="w-[100vw] h-[80px] bg-[#1E1E1E] flex relative z-50">
    <img
      src="@/assets/images/logo.png"
      alt="logo"
      class="w-[80px] ml-[10px] hover:cursor-pointer"
      @click.prevent="home()"/>
    <div
      class="flex text-gray-200 font-semibold md:space-x-10 md:text-[18px] md:absolute md:right-10 md:mt-[25px] md:visible z-50"
      :class="[
        showMobileMenu
          ? 'visible text-[30px] flex-col text-center space-y-10 mt-[20vh]'
          : 'invisible',
      ]"
    >
      <p class="hover:underline hover:cursor-pointer" @click.prevent="showMobileMenu = false, home()">Home</p>
      <p class="hover:underline hover:cursor-pointer" @click.prevent="showMobileMenu = false, about()">About</p>
      <p class="hover:underline hover:cursor-pointer" @click.prevent="showMobileMenu = false, projects()">Skills&Projects</p>
      <p class="hover:underline hover:cursor-pointer" @click.prevent="showMobileMenu = false, contact()">Contact</p>
    </div>
    <!-- Mobile Menu -->
    <div class="mt-[25px] absolute right-10 visible md:invisible">
      <img
        src="@/assets/images/mobileMenu.png"
        alt="burger-menu"
        @click.prevent="showMobileMenu = true"
        class="w-[30px] hover:cursor-pointer"
      />
    </div>
    <section
      v-if="showMobileMenu"
      class="w-[100vw] h-[100vh] fixed top-0 bg-[#1E1E1E]"
    >
      <img
        src="@/assets/images/close.png"
        alt="burger-menu"
        @click.prevent="showMobileMenu = false"
        class="w-[30px] hover:cursor-pointer absolute right-5 mt-[10px]"
      />
    </section>
  </nav>
</template>

<script setup>
import { ref } from "vue";
let showMobileMenu = ref(false);

function home(){
  window.location.href = '/';
}
function about(){
  window.location.href = '/About';

}
function projects(){
  window.location.href = '/SkillsProjects';

}
function contact(){
  window.location.href = '/Contact';
}
</script>
