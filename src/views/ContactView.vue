<template>
    <section class="w-[100vw] h-[300px] bg-[url('../assets/images/contact.jpg')] bg-contain pt-[60px]">
        <div class="w-[80%] h-[60%] bg-[#111111]/80 mx-auto rounded-md">
          <p class="text-center md:text-[70px] text-[35px] pt-10 md:pt-5 font-['Impact'] pt-[20px] text-gray-200">Contact</p>
        </div>
    </section>
    <section class="w-[100vw] h-[70vh] bg-[#1E1E1E] relative md:flex md:place-content-center">
      <div class="w-[300px] text-center pt-10 mx-auto md:mx-0">
        <h1 class="text-[30px] text-gray-200 font-['Impact']">Send me a message  →</h1>
        <h1 class="text-[25px] text-gray-400 font-['Impact'] mt-5"> Or reach me here  ↓</h1>
      </div>
      <div>
        <contactForm></contactForm>
      </div>
    </section>
</template>

<script setup>
import contactForm from '../components/contactForm.vue';

</script>