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
            <ol class="flex flex-col gap-6">
                <li>
                    <h3 class="font-bold tracking-widest uppercase">
                        Bitcoin
                        <span class="text-xs text-amber-600">segwit</span>
                    </h3>
                </li>

                <li>
                    <h3 class="font-bold tracking-widest uppercase">
                        Bitcoin
                        <span class="text-xs text-amber-600">classic</span>
                    </h3>
                </li>

                <li>
                    <h3 class="font-bold tracking-widest uppercase">
                        Bitcoin
                        <span class="text-xs text-amber-600">lightning</span>
                    </h3>
                </li>

                <li>
                    <h3 class="font-bold tracking-widest uppercase">
                        Bitcoin Cash
                    </h3>

                    <NuxtLink to="" target="_blank" class="text-xs text-gray-500 italic hover:underline">
                        bitcoincash:XXX
                    </NuxtLink>
                </li>

                <li>
                    <h3 class="font-bold tracking-widest uppercase">
                        Nexa
                    </h3>

                    <NuxtLink to="https://explorer.nexa.org/address/nexa:nqtsq5g5wnltcdpm82g5t4rgxx3repxzpc5x6ceav5pqt9ty" target="_blank" class="text-xs text-gray-500 italic hover:underline">
                        shomari.nexa
                        <span class="block">nexa:nqtsq5g5wnltcdpm82g5t4rgxx3repxzpc5x6ceav5pqt9ty</span>
                    </NuxtLink>
                </li>
            </ol>

            <ol class="flex flex-col gap-6">
                <li>
                    <h3 class="font-bold tracking-widest uppercase">
                        Avalanche
                    </h3>

                    <NuxtLink to="https://subnets.avax.network/c-chain/address/0x27a9b30DBe015842098F4CD31f0301a1cEE74bfe" target="_blank" class="text-xs text-gray-500 italic hover:underline">
                        shomari.avax
                        <span class="block">0x27a9b30DBe015842098F4CD31f0301a1cEE74bfe</span>
                    </NuxtLink>
                </li>

                <li>Dash</li>

                <li>
                    <h3 class="font-bold tracking-widest uppercase">
                        Ethereum
                    </h3>

                    <NuxtLink to="https://etherscan.io/address/0x27a9b30DBe015842098F4CD31f0301a1cEE74bfe" target="_blank" class="text-xs text-gray-500 italic hover:underline">
                        shomari.eth
                        <span class="block">0x27a9b30DBe015842098F4CD31f0301a1cEE74bfe</span>
                    </NuxtLink>
                </li>

                <li>Monero</li>

                <li>Zcash</li>
            </ol>
        </div>
    </main>

    <Footer />
</template>
