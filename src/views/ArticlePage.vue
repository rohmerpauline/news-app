<template>
    <article>
        <ArticlePage/>
    </article>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import NewsDetails from "#/components/NewsDetails.vue";

    export default {
        data(){
            return { 
                title: this.$route.params.title,
            }
        },
        components: {
            NewsDetails,
        },
         computed: {
            ...mapState('news', ['articles']),
        },
        mounted() {
            this.getNews();
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
}

.oneArticle__img {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    width: 400px;
    height: auto;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>