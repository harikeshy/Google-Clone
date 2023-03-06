<template>
  <div class="result-inner">
    <div class="result_img">
      <img src="../assets/google-small.png" alt="google image" @click="goHome" />
    </div>
    <form class="container_form resultForm" @submit.prevent="search">
      <input type="text" class="formContainer__input" v-model="keyword" />
      <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor"
        class="bi bi-search icon_search" viewBox="0 0 16 16" ><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" fill="currentColor"
        class="bi bi-mic microphone" viewBox="0 0 16 16" ><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" /> <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
      </svg>
    </form>
  </div>
  <InnerResults :resultsP="googleSearchResults" />
</template>

<script>
import axios from "axios";
import InnerResults from "./InnerResults.vue";
export default {
  name: "ResultsData",
  components: {
    InnerResults,
  },
  data() {
    return {
      api_key: "Replace with google api key", // Find from google custom search api
      cx: "Replace with google cx key",
      keyword: this.$route.params.query ? this.$route.params.query.split("-").join(" ") : "",   // replace "-" from texbox search with " "
      googleSearchResults: [],
    };
  },
  methods: {
    async search() {
      const queryString = this.keyword.split(" ").join("-");  // Replace in url "%20" means spaces with "-"
      //console.log(queryString);
      this.$router.push({
        name: "ResultsData",
        params: { query: queryString },
      });

      if (this.$route.params.query) {
        try {
          const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${this.api_key}&cx=${this.cx}&q=${this.keyword}`);
          this.googleSearchResults = res.data.items;
        } catch (error) {
          console.log(error);
        }
      }
    },
    goHome() {
      this.$router.push("/");
    },
  },
  async created() {
    if (this.$route.params.query) {
      try {
        const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${this.api_key}&cx=${this.cx}&q=${this.keyword}` );
        this.googleSearchResults = res.data.items;
        //console.log(this.googleSearchResults);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>
