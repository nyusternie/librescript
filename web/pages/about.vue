<script setup lang="ts">
useHead({
    title: `Blank — LibreScript`,
    meta: [
        { name: 'description', content: `A succinct language for embedding web & mobile application data within a blockchain.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <Header />

    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-4">
        <h1 class="text-5xl font-medium">
            About LibreScript
        </h1>

        <p>
            This journey began at the <NuxtLink to="https://coinparty.org/" target="_blank" class="text-blue-500 font-medium hover:underline">CoinParty Hackathon</NuxtLink>, back in early 2020, as <span class="font-medium">Bitcoin Markup Language (BML).</span>
        </p>

        <pre class="p-3 bg-amber-100 border border-amber-500 rounded-md shadow text-sm">
# Bitcoin Markup Language (BML) Sample
title: My First BML Webpage
css: [font-awesome@5.15.1, twitter-bootstrap@4.5.3]
body: <h1>Hello Bitcoin!</h1>
libs: [jquery@3.5.1, twitter-bootstrap@4.5.3, QmcQy4qCGt7rxgRiW7A55TP1bEbC9vFHERPVMPpGhMpMWe]</pre>

        <h3 class="text-2xl font-medium">
            Unstoppable Web (Bitcoin Apps)
        </h3>

        <NuxtLink to="https://devpost.com/software/bitcoin-apps" target="_blank" class="text-blue-500 hover:underline">
            https://devpost.com/software/bitcoin-apps
        </NuxtLink>
    </main>

    <Footer />
</template>
