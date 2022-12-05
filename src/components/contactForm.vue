<template>
    <form action="" class="w-[370px] ml-10 pt-10 relative">
        <label for="name" class="text-gray-200 font-semibold mr-5">Name:</label>
        <input type="text" name="name" class="w-[300px] h-[35px] rounded-sm bg-[#333333] text-gray-100 pl-[5px] focus:outline-0 mb-5">

        <label for="email" class="text-gray-200 font-semibold mr-5 ml-[3px]">Email:</label>
        <input type="email" name="email" class="w-[300px] h-[35px] rounded-sm bg-[#333333] text-gray-100 pl-[5px] focus:outline-0">

        <div class="flex mt-5">
            <label for="message" class="text-gray-200 font-semibold mr-[5px] ml-[3px]">Message:</label>
            <textarea name="message" class="w-[300px] h-[100px] rounded-sm bg-[#333333] text-gray-100 pl-[5px] focus:outline-0"></textarea>
        </div>
        <button class="w-[100px] h-[30px] rounded-md bg-gray-300 text-[#1E1E1E] font-bold mt-5 absolute right-0 hover:bg-gray-400">Send</button>
    </form>
</template>