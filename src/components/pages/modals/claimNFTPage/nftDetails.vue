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
    <div class="flex justify-center shadow-xl card w-96 bg-base-100">
        <div class="flex flex-col items-center w-3/4 gap-3 p-4 bg-gradient-to-br from-gray-900 to-red-500 h-3/4 rounded-3xl">
            <img v-bind:src="props.nftDetails.image" alt="NFT Image" class="rounded-full h-3/5">
            <p class="text-lg font-extrabold text-neutral-50">{{ props.nftDetails.name }}</p>
            <p class="font-bold text-neutral-50">Description:</p>
            <p class="overflow-y-auto text-center max-h-18 text-neutral-50 text-md">{{ props.nftDetails.description }}</p>
            <p class="font-bold text-neutral-50">Your Token Id: {{ props.nftDetails.id }}</p>
            <button class="p-3 font-bold bg-gray-800 text-neutral-200 rounded-xl" v-on:click="$emit('close')">Close</button>
        </div>
    </div>
</template>