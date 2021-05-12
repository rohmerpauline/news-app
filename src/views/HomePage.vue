<template>
    <div>
        <NewsCard v-for="article in articles.articles" :key="article.title" :article = "article"/>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import NewsCard from "@/components/NewsCard.vue";

export default {
    data(){
        return { 
            category: 'general'
        }
    },
    components: {
        NewsCard
    },
    computed: {
        ...mapState('news', ['articles']),
    },
    mounted() {
        this.getNews()
    },
    methods: {
        ...mapActions('news', ['getNews'])
    }
}
</script>