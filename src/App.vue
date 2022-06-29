<template>
  <div class="container">
    <div class="row g-3">
      <div class="spinner-border" role="status" v-if="isLoading">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="col-3" v-for="product in readyProducts" :key="product.id">
        <div class="card-header">
          <p class="text-nowrap text-truncate">{{ product.title }}</p>
        </div>
        <div class="card">
          <div class="card-body">
            <img :src="product.image" class="card-image p-3" alt="" />
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { computed, onMounted, ref } from "@vue/runtime-core";
import { fetchProduct } from "./composables/fetch";
export default {
  setup() {
    let readyProducts = ref("");
    let isLoading = ref(false);

    let fetching = async () => {
      isLoading.value = true;

      let { products } = await fetchProduct();
      readyProducts.value = products.value;

      console.log(readyProducts.value);

      isLoading.value = false;
    };

    onMounted(() => fetching());
    return { readyProducts, isLoading };
  },
};
</script>

<style scoped>
.card-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
</style>
