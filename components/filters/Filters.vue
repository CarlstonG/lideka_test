<template>
  <div>
    <div v-for="filter in filters" v-if="filter.type === 'LIST'" :key="filter.id" class="mb-10">
      <div class="mb-3 text-md text-gray-700">{{ filter.label }}</div>
      <List :component-key="componentKey" v-if="filter.type === 'LIST'" :values="filter.values" :filter-key="filter.id" @params="onParams"
            :is-boolean="filter.id === 'filter.v.availability'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import List from "~/components/filters/fields/List.vue";
import _ from 'lodash';

export default Vue.extend({
  components: {List},
  props: {
    filters: {
      type: [],
      default: () => []
    },
    componentKey: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      collectedParams: {} as {},
    };
  },

  methods: {
    onParams(filterKey: string, params: []) {
      _.set(this.collectedParams, filterKey.replaceAll('.', '-'), params || []);
      this.$emit('selectedFilters', this.collectedParams);
    }
  },
})
</script>

