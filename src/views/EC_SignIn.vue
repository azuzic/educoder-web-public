<script setup>
import { userStore } from "@/main.js";
userStore.signInElectron();
</script>
<template>
    <div class="flex-center-full">
        <EC_ButtonGoogle @click="userStore.signInElectron();"/>
    </div>
</template>