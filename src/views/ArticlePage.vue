<template>
    <main>
        <article v-for="article in articles.articles" :key="article.title" :article = "article">
            <section v-if="article.title == title">
                <h1>{{ article.title}} </h1>
                <p class="article__source">
                    <span v-if="article.author != null">Written by {{ article.author}}. </span>
                    <span v-if="article.source.name != null">{{ article.source.name }}, </span>
                    <span>published on the {{ article.publishedAt }}</span>
                </p>
                <div v-if="article.urlToImage != null" class="article__img">
                    <img :src="article.urlToImage">
                </div>
                <p class="article__description">{{ article.description }}</p>
                <BaseButton><a :href="article.url">READ MORE</a></BaseButton>
            </section>
        </article>
    </main>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        data(){
            return { 
                title: this.$route.params.title,
                category : this.$route.params.category,
            }
        },
         computed: {
            ...mapState('news', ['articles']),
        },
        mounted() {
            this.getNews(this.category);
        },
        methods: {
            ...mapActions('news', ['getNews'])
        }
}
</script>

<style scoped>

article {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    position: relative;
    top: auto;
}

h1 {
    font-size : 30px;
    line-height: 1.2;
}

.article__source {
    font-style : italic;
    line-height: 1.5;
    font-size : 18px;
}

.article__img {
    text-align: center;
    margin: 30px auto 30px auto;
    width: 400px;
    height: auto;
}

.article__description {
    font-size : 18px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>