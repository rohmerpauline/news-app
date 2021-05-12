<template>
    <div>
        <div v-for="article in articles.articles" :key="article.title" :article = "article">
            <div v-if="article.title == title">
                <h1>{{ article.title}} </h1>
                <p>
                    <span v-if="article.author != null">Written by {{ article.author}}. </span>
                    <span v-if="article.source.name != null">{{ article.source.name }}, </span>
                    <span>published on the {{ article.publishedAt }}</span>
                </p>
                <div v-if="article.urlToImage != null" class="oneArticle__img">
                        <img :src="article.urlToImage">
                </div>
                <p>{{ article.description }}</p>

                <BaseButton><a :href="article.url">READ MORE</a></BaseButton>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            article: {
                type : Object,
                required : true
            } 
        },
    }
</script>

<style lang="scss" scoped>

</style>