<template lang="html">
  <div class="main">
      <main>

      </main>
     <body>

     </body>
      <footer class="page-footer amber darken-3">
          <div class="container">
            <div class="row">

              <router-link class="grey-text text-lighten-4" to="/siteMap">Карта сайта |</router-link>
              <router-link class="grey-text text-lighten-4" to="/confPolitics"> Политика конфиденциальности</router-link>


            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
                © 2021 Copyright Text
                <ul>

                    <li> <router-link class="grey-text text-lighten-4 right" to="/aboutUs">О Hас</router-link> </li>
                    <li> <router-link class="grey-text text-lighten-4 right" to="/siteDevelopment"> Разработка сайтов </router-link> </li>
                    <li> <router-link class="grey-text text-lighten-4 right" to="/contacts">Контакты</router-link> </li>
                </ul>

            </div>
          </div>
        </footer>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.main
{
    max-height:0%;

}
  body {
    display: flex;
    min-height: 20vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
 ul
  {
      float: right;
      display: flex;
  }
  li
  {
      padding: 0 1em;
  }
</style>
