<template>
    <router-link class="news-link" :to="{ name: 'news-details', params: { title: article.title } }">
        <article>
            <h4> {{ article.title }} </h4>
            <section class="article__container">
                <p class="article__text"> {{ article.description }} </p>
                <div v-if="article.urlToImage != null" class="article__image">
                    <img :src="article.urlToImage">
                </div>
            </section>
            <hr>
        </article>
    </router-link>
</template>

<script>

export default {
  props: {
    article: {
        type : Object,
        required : true
    } 
  },
  data(){
      return {
          title: this.article.title
      }
  },
  computed: {
      /* no id for articles in the API, show the first 3 words in the URL as GET value */
      getUrl(){
          return this.article.title.split(' ').slice(0, 3).join(' ').replace(/\s/g, '')
      },
  }
}
</script>

<style scoped>

article {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 2%;
}

article:hover{
    transform: scale(1.02);
}

h4 { 
    font-size : 20px;
    font-weight : 600;
    color : #0540F2;
}

.article__container {
    display: grid;
    grid-template-columns: 75% 15%;
    grid-column-gap: 15px;
    margin-bottom: 20px;
    color : #373740;
}

.article__text {
    font-size : 16px;
}
.article__image {
    width: 100px;
    height: 100px;
}

.news-link {
    text-decoration: none;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

hr { 
    width : 70%;
    color : #373740;
    opacity: 30%;
}

</style>