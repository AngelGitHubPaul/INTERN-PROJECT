<script setup>
const props = defineProps({
    nftDetails: {
        name: String,
        description: String,
        image: String,
        id: String,
    }
});
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl flex justify-center">
        <div class="flex flex-col items-center w-3/4 gap-3 p-4 bg-gradient-to-br from-gray-900 to-red-500 h-3/4 rounded-3xl">
            <img v-bind:src="props.nftDetails.image" alt="NFT Image" class="rounded-full h-3/5">
            <p class="text-lg text-neutral-50 font-extrabold">{{ props.nftDetails.name }}</p>
            <p class="text-neutral-50 font-bold">Description:</p>
            <p class="text-center text-neutral-50 text-md">{{ props.nftDetails.description }}</p>
            <p class="text-neutral-50 font-bold">Your Token Id: {{ props.nftDetails.id }}</p>
            <button class="p-3 font-bold text-neutral-200 bg-gray-800 rounded-xl" v-on:click="$emit('close')">Close</button>
        </div>
    </div>
</template>