<script setup lang="ts">
useHead({
    title: `Playground — LibreScript`,
    meta: [
        { name: 'description', content: `Spend some time in the LibreScript learning how-to build your next BIG idea safu.` }
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
    <main class="bg-sky-100 grid min-h-screen grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
        <header class="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
            <NuxtLink to="/">
                <span class="sr-only">Your Company</span>
                <img class="h-14 w-auto sm:h-16" src="~/assets/icon.png" alt="LibreScript" />
            </NuxtLink>
        </header>

        <main class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div class="max-w-lg">
                <p class="text-xl font-medium leading-8 text-indigo-600 tracking-widest">
                    Script Builder Playground
                </p>

                <h1 class="mt-4 text-4xl font-thin tracking-tight text-gray-900 sm:text-6xl italic">
                    Under Construction
                </h1>

                <p class="mt-6 text-base leading-7 text-gray-800">
                    Thanks for visiting our Playground!
                    You're still a bit early, but be sure to check back soon..
                </p>

                <div class="mt-10">
                    <NuxtLink to="/" class="text-lg font-light leading-7 text-indigo-600">
                        <span aria-hidden="true">&larr;</span> back to home
                    </NuxtLink>
                </div>
            </div>
        </main>

        <footer class="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
            <div class="border-t border-gray-100 bg-sky-200 p-10">
                <NuxtLink to="https://github.com/nyusternie/librescript" target="_blank" class="flex items-center text-sm text-sky-500 hover:underline">
                    check out the open source

                    <svg class="pl-1 w-5 h-auto" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                    </svg>
                </NuxtLink>
            </div>
        </footer>

        <div class="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
            <img src="https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?q=80&w=1887&auto=format&fit=crop&w=1825&q=80" alt="" class="absolute inset-0 h-full w-full object-cover" />
        </div>
    </main>
</template>
