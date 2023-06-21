<script setup>
import {ref} from "vue"

defineProps(["nftDetails"]);

</script>

<template>
    <div class="flex flex-col items-center w-3/4 gap-3 p-4 bg-white h/3/4">
        <img v-bind:src="mintedNftDetails.image" alt="NFT Image">
        <p class="text-lg text-black">{{ mintedNftDetails.name }}</p>
        <p class="text-black">Description:</p>
        <p class="text-center text-black text-md">{{ mintedNftDetails.description }}</p>
        <button class="p-3 font-bold bg-red-600 rounded-xl">Close</button>
    </div>
</template>