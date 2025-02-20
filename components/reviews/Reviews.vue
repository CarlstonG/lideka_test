<template>
  <div>
    <div class="mx-auto">
      <div class="lg:col-span-4 mb-10">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Reviews</h2>
        <p>
          Voor {{ product.title }}
        </p>

        <div v-if="product.stars > 0" class="mt-3 flex items-center">
          <h2 class="font-extrabold text-7xl mr-4">{{ product.stars }}</h2>
          <div>
            <div class="flex items-center">
              <svg v-for="star in product.stars" :key="star" class="flex-shrink-0 h-7 w-7 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="sr-only">{{ product.stars }} out of 5 stars</p>
          </div>
          <p class="ml-2 text-sm text-gray-900">Gebaseerd op {{ product.totalReviews }} {{ product.totalReviews == 1 ? 'review' : 'reviews' }}</p>
        </div>

        <div class="mt-6">
          <h3 class="sr-only">Review data</h3>

          <dl class="space-y-3">
            <div v-for="i in stars" class="flex items-center text-sm">
              <dt class="flex-1 flex items-center">
                <p class="w-3 font-medium text-gray-900">{{ i }}<span class="sr-only"> star reviews</span></p>
                <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                  <svg class="flex-shrink-0 h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <div class="ml-3 relative flex-1">
                    <div class="h-3 bg-gray-100 border border-gray-200 rounded-full"></div>

                    <div v-if="reviewByStars[i]" :style="reviewByStars[i] ? `width: calc(${reviewByStars[i].length} / ${product.totalReviews} * 100%);` : `width: 0`" class="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </dt>
              <dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">{{ reviewByStars[i] ? reviewByStars[i].length : '' }}</dd>
            </div>
          </dl>
        </div>

        <div class="mt-10" id="reviewForm">
          <h3 class="text-lg font-medium text-gray-900">Schrijf een review</h3>
          <p class="mt-1 text-sm text-gray-600">Als je dit product hebt gekocht, laat een recensie achter voor andere klanten!</p>

          <a href="#" v-show="!showReviewForm" @click.prevent="showReviewForm = true" class="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full">Schrijf een review</a>
          <ReviewForm v-if="showReviewForm" class="mt-4" :product="product" @close="showReviewForm = false; fetchReviews()" />
        </div>
      </div>

      <div class="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
        <h3 class="sr-only">Recent reviews</h3>

        <div class="flow-root">
          <div class="-my-12 divide-y divide-gray-200">
            <div class="py-12" v-for="review in filteredReviews" :key="review.id">
              <div class="flex items-center">
                <div class="flex items-center">
                  <div class="mt-1 flex items-center">
                    <svg v-for="i in review.stars" class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 class="ml-2 font-bold text-gray-900">{{ review.title }}</h4>
                  <p class="sr-only">{{ review.stars }} van de 5 sterren</p>
                </div>
              </div>

              <div class="mt-2">
                <p class="text-sm text-gray-600">
                  {{ review.description }}
                </p>
              </div>

              <div v-if="review.photos.length > 0" class="mt-4 flex space-x-4">
                <a v-for="photo in review.photos" :data-fancybox="review.id" :href="photo" :key="photo">
                  <img :src="photo" loading="lazy" alt="Photo for review" class="h-20 w-20 rounded-lg bg-center bg-cover">
                </a>
              </div>

              <div class="text-gray-500 mt-1 text-sm">
                Door {{ review.reviewer.name }} {{ review.reviewer.source ? `- ${review.reviewer.source}` : '' }}
              </div>
            </div>

            <div v-if="hasNewReviewsToDisplay" class="flex justify-center pt-4">
              <button @click.prevent="showMoreReviews" type="button" class="px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Toon meer reviews
              </button>
            </div>

            <!-- More reviews... -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import ReviewForm from "~/components/reviews/ReviewForm.vue";
import {getReviews} from "~/services/ApiService";
import {safeGet, nl2br, isVideo} from "~/services/Helpers";
import _ from 'lodash';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

export default Vue.extend({
  components: {ReviewForm},
  props: {
    product: {
      type: Object,
      required: true
    },
    reviews: {
      type: Array,
      default: [],
    }
  },

  data() {
    return {
      reviewByStars: {},
      showReviewForm: false,
      stars: [5,4,3,2,1],
      reviewsToShow: 10,
    }
  },

  computed: {
    hasNewReviewsToDisplay() {
      return this.reviews.length - 1 > this.reviewsToShow;
    },

    filteredReviews() {
      return this.reviews.splice(0, this.reviewsToShow);
    },
  },

  methods: {
    doIsVideo(video) {
      return isVideo(video);
    },

    async fetchReviews() {
      this.reviewByStars = _.groupBy(this.reviews, 'stars');
    },

    showMoreReviews() {
      this.reviewsToShow += 10;
    },
  },

  created() {
    this.fetchReviews();
  },

  mounted() {
    if (Object.keys(this.$route.query).includes('new-review')) {
      this.showReviewForm = true;
      this.$nextTick(() => {
        document.getElementById('reviewForm').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      });
    }
  },
})
</script>
