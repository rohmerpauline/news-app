<template>
    <div>
        <h1 v-for="item in news" :key="item" :item="item"> </h1>
        <NewsCard/>
       <!--  <p v-for="item in news" v-bind:key="item.id"></p> -->

    </div>
</template>


<script>
import { mapState } from 'vuex';
import NewsCard from "@/components/NewsCard.vue";

export default {
    components: {
        NewsCard
    },
    computed: mapState(["articles"])
}
</script>