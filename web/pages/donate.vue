<script setup lang="ts">
useHead({
    title: `Donate — LibreScript`,
    meta: [
        { name: 'description', content: `Thank you SOOOOO much for your support!` }
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
            Donate To LibreScript
        </h1>

        <p class="w-2/3">
            This has been a passion project of mine for as long as I can remember; and so your support is SOOOOO greatly appreciated!
        </p>

        <div class="grid grid-cols-2 gap-8">
            <ol>
                <li>Bitcoin (segwit)</li>
                <li>Bitcoin (legacy)</li>
                <li>Bitcoin (ln)</li>
                <li>Bitcoin Cash</li>
                <li>Nexa</li>
            </ol>

            <ol>
                <li>Avalanche</li>
                <li>Dash</li>
                <li>Ethereum</li>
                <li>Monero</li>
                <li>Zcash</li>
            </ol>
        </div>
    </main>

    <Footer />
</template>
