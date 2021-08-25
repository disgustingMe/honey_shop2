<template lang="html">
  <div class="">
      <nav class="amber darken-3">
          <div class="nav-wrapper">
            <!-- <a href="" class="brand-logo">Главная</a> -->
            <router-link class="li" to="/">Главная</router-link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                      <li> <router-link to="/aboutUs">О Нас</router-link> </li>
                      <li> <router-link to="/promotions">Акции</router-link> </li>
                      <li> <router-link to="/information">Важная информация</router-link> </li>
                      <li> <router-link to="/contacts">Контакты</router-link> </li>
                      <li> <router-link to="/peronalAccount">Личный аккаунт</router-link> </li>
                </ul>
          </div>

    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

li, .li
{
    padding:0 1em;
    font-size: 2em;
}
form
{
    padding:0 18em;
}
</style>
