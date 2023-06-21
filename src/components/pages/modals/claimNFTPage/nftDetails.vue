<script setup>
const props = defineProps({
    nftDetails: {
        name: String,
        description: String,
        image: String,
    }
});
</script>

<template>
    <div class="flex flex-col items-center w-3/4 gap-3 p-4 bg-white h-3/4">
        <img v-bind:src="props.nftDetails.image" alt="NFT Image" class="rounded-full h-3/5">
        <p class="text-lg text-black">{{ props.nftDetails.name }}</p>
        <p class="text-black">Description:</p>
        <p class="text-center text-black text-md">{{ props.nftDetails.description }}</p>
        <button class="p-3 font-bold bg-red-600 rounded-xl" v-on:click="$emit('close')">Close</button>
    </div>
</template>