<template>
  <div>
    <h2 class="uppercase text-center text-white font-bold text-3xl mx-auto mb-6 max-w-5xl">WAS ANDERE ÜBER LIDEKA SAGEN SERVICE UND QUALITÄT?</h2>
    <client-only>
      <carousel v-if="showVideoReviews" v-bind="options" :perPageCustom="[[480, 1], [768, 1], [1022, 2]]" :navigation-enabled="true"
                :navigation-prev-label="prevLabel" :navigation-next-label="nextLabel">
        <slide class="pl-1 pr-1">
          <div
              class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer"
              @click="openModal('lois')">
            <div class="flex items-center space-x-4">
              <div>
                <img src="~assets/lo.jpg" class="object-cover w-28 h-28 rounded-full"/>
              </div>
              <div>
                <div class="mb-2 flex items-center">
                  <svg v-for="i in 5" class="text-yellow-400 h-8 w-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <p class="text-white font-bold tracking-wide text-lg pb-6">
                  "Verliefd op Lideka LED-strips" <i>Lois</i>
                </p>

                <div class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-bold tracking-wide">Bekijk video</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="pl-1 pr-1">
          <div
              class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer"
              @click="openModal('daniel')">
            <div class="flex items-center space-x-4">
              <div>
                <img src="~assets/dan.jpg" class="object-cover w-28 h-28 rounded-full"/>
              </div>
              <div>
                <div class="mb-2 flex items-center">
                  <svg v-for="i in 5" class="text-yellow-400 h-8 w-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <p class="text-white font-bold tracking-wide text-lg pb-6">
                  "Mega enthousiast!" <i>Daniel</i>
                </p>

                <div class="flex items-center space-x-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-bold tracking-wide">Bekijk video</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="pl-1 pr-1">
          <div
              class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer"
              @click="openModal('2')">
            <div class="flex items-center space-x-4">
              <div>
                <img src="~assets/2.jpg" class="object-cover w-28 h-28 rounded-full"/>
              </div>
              <div>
                <div class="mb-2 flex items-center">
                  <svg v-for="i in 5" class="text-yellow-400 h-8 w-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <p class="text-white font-bold tracking-wide text-lg pb-6">
                  "Geweldige kwaliteit!" <i>Lisa</i>
                </p>

                <div class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-bold tracking-wide">Bekijk video</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="pl-1 pr-1">
          <div
              class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer"
              @click="openModal('a1')">
            <div class="flex items-center space-x-4">
              <div>
                <img src="~assets/video-reviews/3.jpg" class="object-cover w-28 h-28 rounded-full"/>
              </div>
              <div>
                <div class="mb-2 flex items-center">
                  <svg v-for="i in 5" class="text-yellow-400 h-8 w-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <p class="text-white font-bold tracking-wide text-lg pb-6">
                  "Alle feestjes voortaan op mijn kamer!" <i>Manon</i>
                </p>

                <div class="flex items-center space-x-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-bold tracking-wide">Bekijk video</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="pl-1 pr-1">
          <div
              class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer"
              @click="openModal('a2')">
            <div class="flex items-center space-x-4">
              <div>
                <img src="~assets/video-reviews/7.jpg" class="object-cover w-28 h-28 rounded-full"/>
              </div>
              <div>
                <div class="mb-2 flex items-center">
                  <svg v-for="i in 5" class="text-yellow-400 h-8 w-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <p class="text-white font-bold tracking-wide text-lg pb-6">
                  "10x mooiere kamer!" <i>Jade</i>
                </p>

                <div class="flex items-center space-x-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-bold tracking-wide">Bekijk video</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="pl-1 pr-1">
          <div
              class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer"
              @click="openModal('a3')">
            <div class="flex items-center space-x-4">
              <div>
                <img src="~assets/video-reviews/1.jpg" class="object-cover w-28 h-28 rounded-full"/>
              </div>
              <div>
                <div class="mb-2 flex items-center">
                  <svg v-for="i in 5" class="text-yellow-400 h-8 w-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <p class="text-white font-bold tracking-wide text-lg pb-6">
                  "Onwijs leuke sfeer in je kamer!" <i>Renzo</i>
                </p>

                <div class="flex items-center space-x-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-bold tracking-wide">Bekijk video</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="pl-1 pr-1">
          <div
              class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer"
              @click="openModal('a4')">
            <div class="flex items-center space-x-4">
              <div>
                <img src="~assets/video-reviews/6.jpg" class="object-cover w-28 h-28 rounded-full"/>
              </div>
              <div>
                <div class="mb-2 flex items-center">
                  <svg v-for="i in 5" class="text-yellow-400 h-8 w-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <p class="text-white font-bold tracking-wide text-lg pb-6">
                  "Super makkelijk te bedienen!" <i>Anouk</i>
                </p>

                <div class="flex items-center space-x-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-bold tracking-wide">Bekijk video</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="pl-1 pr-1">
          <div
              class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer"
              @click="openModal('a5')">
            <div class="flex items-center space-x-4">
              <div>
                <img src="~assets/video-reviews/2.jpg" class="object-cover w-28 h-28 rounded-full"/>
              </div>
              <div>
                <div class="mb-2 flex items-center">
                  <svg v-for="i in 5" class="text-yellow-400 h-8 w-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <p class="text-white font-bold tracking-wide text-lg pb-6">
                  "Super simpel gemonteerd!" <i>Tibor</i>
                </p>

                <div class="flex items-center space-x-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-bold tracking-wide">Bekijk video</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>



    <h2 class="text-left md:text-center text-white max-w-4xl mx-auto font-bold text-3xl uppercase tracking-wide mb-10">{{ title }}</h2>
    <client-only>
      <carousel v-bind="options" :perPageCustom="[[480, 1], [768, 3], [1022, 4]]" :navigation-enabled="true" :navigation-prev-label="prevLabel"  :navigation-next-label="nextLabel">
        <slide  v-for="review in reviews"  class="pl-1 pr-1 ">
          <div class="lg:col-span-2 h-full rounded-3xl p-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <div class="mt-1 flex items-center">
                  <svg v-for="i in review.stars" class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p class="sr-only">{{ review.stars }} out of 5 stars</p>
              </div>
            </div>
            <h4 class="mt-1 font-bold text-white">{{ review.title }}</h4>
            <div class="mt-1">
              <p class="text-sm text-gray-400">
                {{ review.description }}
              </p>
            </div>

            <div v-if="review.photos.length > 0" class="mt-4 flex space-x-4">
              <a v-for="photo in review.photos" :data-fancybox="review.id" :href="photo" :key="photo">
                <img :src="photo" loading="lazy" alt="Photo for review" class="h-20 w-20 rounded-lg bg-center bg-cover">
              </a>
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import Vue from "vue";
import {get} from "~/services/ApiService";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },

    showVideoReviews: {
      type: Boolean,
      default: true,
    },

    forProduct: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      reviews: [],
      options: {
        loop: true,
        perPage: 1,
        slideCount: 1,
        paginationEnabled: false,
        autoplay: true,
        autoplayTimeout: 5000,
      },
      nextLabel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" style=\"color: white;\" class=\"bi bi-caret-right\" viewBox=\"0 0 16 16\">\n" +
          "<path d=\"M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z\"/>\n" +
          "</svg>",
      prevLabel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" style=\"color: white;\" class=\"bi bi-caret-left\" viewBox=\"0 0 16 16\">\n" +
          "<path d=\"M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z\"/>\n" +
          "</svg>"
    }
  },

  methods: {
    openModal(name) {
      if (name === 'daniel') {
        this.$root.$emit('openModal', {
          video: 'https://cdn.shopify.com/s/files/1/0570/2352/9109/files/daniel.mp4?v=1638879155'
        });
      } else if (name === '3') {
        this.$root.$emit('openModal', {
          video: 'https://cdn.shopify.com/s/files/1/0570/2352/9109/files/UGC__link_pizza.mov?v=1640707713'
        });
      } else if (name === '2') {
        this.$root.$emit('openModal', {
          video: 'https://cdn.shopify.com/s/files/1/0570/2352/9109/files/Video_4-f8fa061c-f1e9-4f78-8128-904db4b0d0ce.mov?v=1640707712'
        });
      } else if (name === 'a1') {
        this.$root.$emit('openModal', {
          video: 'https://lideka.s3.eu-central-1.amazonaws.com/1.mp4'
        });
      } else if (name === 'a2') {
        this.$root.$emit('openModal', {
          video: 'https://lideka.s3.eu-central-1.amazonaws.com/2-big.mp4'
        });
      } else if (name === 'a3') {
        this.$root.$emit('openModal', {
          video: 'https://lideka.s3.eu-central-1.amazonaws.com/3-big.mp4'
        });
      } else if (name === 'a4') {
        this.$root.$emit('openModal', {
          video: 'https://lideka.s3.eu-central-1.amazonaws.com/4-big.mp4'
        });
      } else if (name === 'a5') {
        this.$root.$emit('openModal', {
          video: 'https://lideka.s3.eu-central-1.amazonaws.com/5-big.mp4'
        });
      } else {
        this.$root.$emit('openModal', {
          video: 'https://cdn.shopify.com/s/files/1/0570/2352/9109/files/isabelle.lois.mp4?v=1638874209'
        });
      }
    }
  },

  created() {
    let query = {};

    if (this.forProduct) {
      query = {
        params: {
          product: this.forProduct,
        }
      }
    }

    get('/reviews/all', query).then(({ data }) => {
      this.reviews = data ?? [];
    });

  }
});
</script>
