<template>
  <div class="show">
    <div class="inner_results" v-for="(list, index) in resultsP" :key="index">
      <p class="top_link">{{ list.link }}</p>
      <p class="link_text">
        <a :href="list.link">{{ list.title }}</a>
      </p>
      <p class="description">
        {{ list.snippet }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InnerResults",
  props: ["resultsP"],
};
</script>

<style></style>
