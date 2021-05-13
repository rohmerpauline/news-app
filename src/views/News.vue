<template>
    <div>
        <h1 v-if="category != 'general'">{{ category.toUpperCase() }}</h1>
        <h1 v-else>TOP NEWS</h1>
        <NewsCard v-for="article in articles.articles" :key="article.title" :article = "article"/>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import NewsCard from "@/components/NewsCard.vue";

export default {
    data(){
        return { 
            category: this.$route.params.category,
        }
    },
    components: {
        NewsCard
    },
    mounted() {
        return this.getNews(this.category)
    },
    computed: {
        ...mapState('news', ['articles']),
    },
    methods: {
        ...mapActions('news', ['getNews']),
  },
}
</script>

<style scoped>
    div {
        position: relative;
        top: 50px;
    }
</style>