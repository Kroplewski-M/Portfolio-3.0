<template>
    <section class="w-[100vw] h-[300px] bg-[url('../assets/images/skillsBackground.jpg')] bg-cover pt-[60px]">
        <div class="w-[80%] h-[60%] bg-[#111111]/80 mx-auto rounded-md">
          <p class="text-center md:text-[70px] text-[35px] pt-10 md:pt-0 font-['Impact'] pt-[20px] text-gray-200">Skills&Projects</p>
        </div>
    </section>
    <section class="w-[100vw] pb-10 bg-[#1E1E1E] pt-10">
        <div class="md:flex mx-auto md:w-[850px]">
            <img src="@/assets/images/skillsImage.jpg" alt="" class="md:w-[500px] md:h-[500px] w-[200px] h-[200px] mx-auto md:mx-0 rounded-md">
            <div class="ml-5">
                <p class="font-semibold text-gray-200 text-[50px] underline md:-mt-[20px]">Skills</p>
                <p class="text-gray-400 md:w-[400px] leading-loose">Since the beginning of my web dev journey I have learned a lot of things which help me solve day to day challenges. 
                I proficiently know the main three pillars of web dev: HTML, CSS and JS. Also, 
                I use tailwind CSS in majority of my project so I am very familiar and comfortable with it. 
                Also, my main front-end framework is Vue (when I need to use one).</p>
                <p class="mt-5 text-gray-200 font-semibold text-[20px]">All Skills:</p>
                <ul class="text-gray-400 font-bold list-disc ml-5 mt-[5px]">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>VueJS</li>
                    <li>TailwindCSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>Supabase</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="w-[100vw] pb-10 bg-[#222222] pt-10">
        <div class="md:w-[80%] w-[90%] h-[90%] bg-[#111111] mx-auto rounded-md">
            <p class="text-gray-200 underline text-[50px] font-semibold text-center">Projects</p>
            <div class="flex flex-wrap mx-auto xl:w-[1200px] w-[310px] mt-10">
                <div v-for="project in projectStore.projects" class="md:w-[300px] w-[250px] h-[400px] bg-[#1E1E1E] rounded-md mb-5 mx-auto md:ml-10 md:mr-0">
                   
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {useProjectStore} from '@/stores/projectStore.js';


const projectStore = useProjectStore();
console.log(projectStore.projects);

</script>