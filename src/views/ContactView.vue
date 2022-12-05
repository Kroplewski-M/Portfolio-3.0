<template>
    <section class="w-[100vw] h-[300px] bg-[url('../assets/images/contact.jpg')] bg-contain pt-[60px]">
        <div class="w-[80%] h-[60%] bg-[#111111]/80 mx-auto rounded-md">
          <p class="text-center md:text-[70px] text-[35px] pt-10 md:pt-5 font-['Impact'] pt-[20px] text-gray-200">Contact</p>
        </div>
    </section>
    <section class="w-[100vw] h-[70vh] bg-[#1E1E1E]">
      <contactForm></contactForm>
    </section>
</template>

<script setup>
import contactForm from '../components/contactForm.vue';

</script>