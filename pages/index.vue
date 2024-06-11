<script setup lang="ts">
/* Import modules. */
import { ref } from 'vue'

/* Initialize tabs. */
// const tabStart = ref(true)

</script>

<template>
    <main class="bg-white">
        <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
            <div class="mx-auto max-w-7xl pb-12 pt-10 sm:pb-16 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
                <div class="px-6 lg:px-0 lg:pt-4">
                    <div class="mx-auto max-w-2xl">
                        <div class="max-w-lg">
                            <img
                                class="h-14 w-auto sm:h-16"
                                src="~/assets/icon.png" alt="LibreScript"
                            />

                            <div class="mt-24 sm:mt-32 lg:mt-16">
                                <a href="javascript://" class="inline-flex space-x-6">
                                    <span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">What's new</span>
                                    <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                        <span>Just shipped v0.1.0</span>
                                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                            </div>

                            <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Powering Web &amp; Mobile Apps By Blockchains
                            </h1>

                            <p class="mt-6 text-lg leading-8 text-gray-600">
                                <span class="font-medium">LibreScript Markup Language <span class="text-amber-500">(LSML)</span></span> is compressed and then embedded directly into most MAJOR blockchains;
                                offering an unparalleled NEW level of censorship resistance for both Content Creators and Service Providers.
                            </p>

                            <!-- <p class="mt-6 text-lg leading-8 text-gray-600">
                                Mix and match from a growing library of Elements to create your vision.
                            </p> -->

                            <div class="mt-10 flex items-center gap-x-6">
                                <NuxtLink
                                    to="/playground"
                                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Open Playground
                                </NuxtLink>

                                <NuxtLink to="https://gogs.hos.im/nyusternie/librescript" target="_blank" class="text-lg font-semibold leading-6 text-gray-900">
                                    View the Open Source <span aria-hidden="true">→</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                    <div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div>

                    <div class="shadow-lg md:rounded-3xl">
                        <div class="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                            <div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true"></div>

                            <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                    <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                        <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                                            <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                    index.lsml
                                                </div>

                                                <div class="border-r border-gray-600/10 px-4 py-2">
                                                    play.lsml
                                                </div>

                                                <div class="border-r border-gray-600/10 px-4 py-2">
                                                    profile.lsml
                                                </div>

                                                <div class="border-r border-gray-600/10 px-4 py-2">
                                                    help.lsml
                                                </div>
                                            </div>
                                        </div>

                                        <pre class="px-6 pb-14 pt-6 text-white">
# SAMPLE APPLICATION NOTES
# - Content hashes are either 256-bit or 512-bit.
# - Styling managed by a modified Tailwind CSS engine.

["nexa:b4c9...267d"]["w-screen"]     # header
["avax:3e36...ae80"]["h-1/2"]        # ads_mgr_1
["bsc:3e36...ae80"]["h-1/2"]         # ads_mgr_2
["ipfs:QmbW...sMnR"]["center"]       # app_intro_vid
["nexa:nqts...drq2"]["h-1/2 center"] # login_win
["sol:3e36...ae80"]["h-1/2 center"]  # ads_mgr_3
["nexa:9b96...baa4"]["w-screen"]     # footer
</pre>
                                    </div>
                                </div>

                                <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>

                    <section class="my-5 p-3 flex flex-col gap-4 text-sm text-amber-900 bg-amber-100 border-2 border-amber-300 rounded-xl shadow-md">
                        <div class="">
                            Hashes will vary in size between 160-bit and 512-bit, depending on the blockchain network and application.
                        </div>

                        <div>
                            <h3 class="font-medium">
                                Nexa's L1 blockchain natively supports OVER 300+ frameworks and libraries, including:
                            </h3>

                            <ul class="pl-10 list-disc text-sm">
                                <li>jQuery <span class="text-amber-700 italic">(nexa:nqts...gq0n)</span></li>
                                <li>React <span class="text-amber-700 italic">(nexa:nqts...30d9)</span></li>
                                <li>Vue.js <span class="text-amber-700 italic">(nexa:nqts...qmqd)</span></li>
                                <li>plus many more...</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
        </div>
    </main>

    <Footer />
</template>
