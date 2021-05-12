<template>
    <header>
        <div class="header__header">
       
            <router-link :to="{ name: 'top-news' }">
            <img  class="header__logo" src="../assets/images/logo-news.png" alt="logo-news">
            </router-link>
  
            <i @click="isHidden = !isHidden" class="header__menuicone fas fa-bars"></i>
        </div>
        <nav>
            <ul v-if="!isHidden == true" class="header__menu">
            <i @click="isHidden = !isHidden" class="header__menuicone fas fa-times"></i>
            <li><router-link class="nav__link" :to="{ name: 'top-news' }">NEWS</router-link></li>
            <li><router-link class="nav__link" :to="{ name: 'news-details' }">NEWS DETAILS</router-link></li>
            <li><form>
                <input id="search">
                <a href=""><i @click="isHidden = !isHidden" class="fas fa-search"></i></a>
            </form></li>
            </ul>
            <!-- <router-link class="nav__link" :to="{ name: 'news-test' }">TESTS</router-link> -->
        </nav>
    </header>
</template>


<script>

export default {
    data() {
        return {
            isHidden: true
        }
    }
}

</script>


<style scoped>

header {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
}

img { 
   width: 300px;
}

.header__header {
    display :grid;
    grid-template-columns: max-content max-content;
    margin-top : 50px;
    justify-content: space-between;
}

.header__menuicone {
    margin-top : 40px;
}


.header__menu {
    position: absolute;
    top : 10px;
    width : 100%;
    background-color: white;
}

.fas {
    transform : scale(2);
}

nav {
  padding: 30px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  height: 60px;
}

.nav__link {
    margin : 0 10px 0 10px;
}

nav a {
  font-weight: bold;
  color : #373740;
}

nav a.router-link-exact-active {
  color : #0540F2;
}

ul {
    list-style-type: none;
}

</style>