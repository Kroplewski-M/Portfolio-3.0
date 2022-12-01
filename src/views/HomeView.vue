<template>
<div class="w-[100vw] h-[100vh] bg-[url('../assets/images/heroBackground.png')] bg-cover">
    <p class=" text-[70px] text-center text-gray-200 font-['Impact'] pt-[100px]">Hi, Im Mateusz</p>
    <p class="text-center text-gray-400 font-bold text-[20px]">A web Developer</p>
    <div class="w-[200px] mx-auto">
        <button class="w-[100%] h-[40px] bg-gray-200 mt-16 rounded-md hover:bg-gray-300 font-bold">Get in touch</button>
    </div>
</div>
</template>


<script setup>
import {useProjectStore} from '@/stores/projectStore';

const projectStore = useProjectStore();

console.log(projectStore.projects);
</script>
