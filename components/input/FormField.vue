<template>
  <div>
    <label v-if="!hideLabel" :for="name" class="block text-sm font-medium text-gray-700 mb-1">
      {{ name }}
    </label>
    <div class="relative">
      <textarea v-if="inputType === 'textarea'" :id="name" :name="name"
                v-model="value"
                rows="5"
                :placeholder="name"
                v-bind="$attrs"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                :class="{ 'border-red-300': errors && errors.$error, 'rounded-md': !extraRounded, 'rounded-full': extraRounded }"></textarea>
      <input v-else :id="name" :name="name"
             v-model="value"
             :placeholder="name"
             :type="inputType"
             v-bind="$attrs"
             class="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
             :class="{ 'border-red-300': errors && errors.$error, 'rounded-md': !extraRounded, 'rounded-full': extraRounded }"/>
      <div v-if="errors && errors.$error" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"/>
        </svg>
      </div>
    </div>
    <div v-if="errors && errors.$error">
      <p v-if="errors.hasOwnProperty('email') && !errors.email" class="mt-2 text-sm text-red-600">Incorrecte email.</p>
      <p v-else-if="errors.hasOwnProperty('required') && !errors.required" class="mt-2 text-sm text-red-600">Dit veld is verplicht.</p>
      <p v-else-if="errors.hasOwnProperty('minLength') && !errors.minLength" class="mt-2 text-sm text-red-600">Dit veld is te kort.</p>
      <p v-else-if="errors.hasOwnProperty('sameAsPassword') && !errors.minLength" class="mt-2 text-sm text-red-600">Wachtwoord komt niet overeen.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Vuelidate from "vuelidate";

export default Vue.extend({
  props: {
    errors: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: '',
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    initialValue: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: '',
    },
    extraRounded: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: '',
    }
  },

  created() {
    this.value = this.initialValue;
  },

  watch: {
    value() {
      this.$emit('update:modelValue', this.value);
    },
    modelValue() {
      this.value = this.modelValue;
    }
  }
});
</script>
