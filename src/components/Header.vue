<template>
    <div class="header">
    <header>
        <div class="header__header">
            <router-link :to="{ name: 'home' }">
            <img  class="header__logo" src="../assets/images/logo-news.png" alt="logo-news">
            </router-link>
            <i @click="isHidden = !isHidden" class="header__menuicone fas fa-bars"></i>
        </div>
    </header>
        <nav>
            <ul v-if="!isHidden == true" class="header__menu">
                <i @click="isHidden = !isHidden" class="header__crossicone fas fa-times"></i>
                <li @click="isHidden = !isHidden">
                    <router-link class="nav__link" :to="{ name: 'home', params: { category: 'general' } }">
                        NEWS
                    </router-link>
                </li>
                <li @click="isHidden = !isHidden" v-for="category2 in categories" :key="category2">
                    <router-link v-if="category2 != 'general'" class="nav__link" :to="{ name: 'news', params: { category: category2 } }">
                        {{ category2.toUpperCase() }} 
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isHidden: true,
            categories: [ "general", "business", "entertainment", "health", "science", "sports", "technology" ],
        }
    },
}

</script>


<style>

.header {
    margin-bottom: 150px;
}

.header__header {
    width: 90%;
    margin : 50px 5% 50px 5%;
    position: absolute;
    display :grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
}

.header__logo {
    width: 300px;
}

.header__menuicone {
    margin-top : 40px;
    transform : scale(2);
}

.header__crossicone {
    justify-content: right;
    padding-top : 20px;
}

.header__menu {
    position: absolute;
    top : 0px;
    width : 100%;
}

nav {
  padding: 30px;
  font-size: 18px;
  font-weight: 300;
  display: flex;
  justify-content: center;
}

.nav__link {
    margin : 0px 10px 10px 10px;
    font-family: 'Titillium Web', sans-serif;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #373740;
}

nav a.router-link-exact-active {
  color : #0540F2;
}

ul {
    list-style-type: none;
    background-color:white;
    margin-top: 0px;
    z-index: 1;
}

li {
    padding-top : 10px;
}

</style>