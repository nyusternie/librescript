<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

const isShowingMobile = ref(false)

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
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex flex-1">
                <div class="hidden lg:flex lg:gap-x-12">
                    <NuxtLink to="/playground" class="text-lg font-semibold leading-6 text-gray-900">
                        Playground
                    </NuxtLink>

                    <NuxtLink to="/showcase" class="text-lg font-semibold leading-6 text-gray-900">
                        Showcase
                    </NuxtLink>

                    <NuxtLink to="/about" class="text-lg font-semibold leading-6 text-gray-900">
                        About
                    </NuxtLink>
                </div>

                <div class="flex lg:hidden">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-10 w-auto" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <NuxtLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="~/assets/icon.png" alt="" />
            </NuxtLink>

            <div class="hidden lg:flex flex-1 justify-end">
                <NuxtLink to="https://github.com/nyusternie/librescript" target="_blank" class="text-lg font-semibold leading-6 text-gray-900">
                    View Source <span aria-hidden="true">&rarr;</span>
                </NuxtLink>
            </div>
        </nav>

        <!-- Mobile menu, show/hide based on menu open state. -->
        <div v-if="isShowingMobile" class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>
            <div class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
                <div class="flex items-center justify-between">
                    <div class="flex flex-1">
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <NuxtLink to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="~/assets/icon.png" alt="" />
                    </NuxtLink>

                    <div class="flex flex-1 justify-end">
                        <a href="javascript://" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>

                <div class="mt-6 space-y-2">
                    <NuxtLink to="/playground" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Playground
                    </NuxtLink>

                    <NuxtLink to="/showcase" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Showcase
                    </NuxtLink>

                    <NuxtLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        About
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>
