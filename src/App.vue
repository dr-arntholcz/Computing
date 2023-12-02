
  <template>
  <!-- <div class="wrapper"> -->
    <header class="header">
      <div class="headerBox centr">
        <a href="/index.html">
          <div class="logoClass">
            <img src="../public/img/logo.jpg" alt="logo" id="logo" />
            <h2 class="logoName">Computing</h2>
          </div>
        </a>
      </div>
      <nav class="menuHeigth centr">
        <ul class="ulMenu">
          <li class="liMenu" @click="showFiltr">
            <div class="menuFiltr">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </li>
          <li class="liMenu">
            <router-link
              to="/"
              class="aMenu"
              style="border: white 1px solid; padding: 10px"
            >
              Главная
            </router-link>
          </li>
          <li class="liMenu">
            <router-link to="soft" class="aMenu"> Софт </router-link>
          </li>
          <li class="liMenu">
            <router-link to="hard" class="aMenu"> Железо </router-link>
          </li>
          <li class="liMenu">
            <router-link to="forum" class="aMenu"> Форум </router-link>
          </li>
          <li class="liMenu">
            <router-link to="info" class="aMenu"> О нас </router-link>
          </li>
        </ul>
      </nav>
    </header>
  <!-- </div> -->
  <router-view />
</template>
<script>
export default {
  methods: {
    showFiltr(){
      this.$store.commit("changeShowFiltr")
    }
  },
  mounted() {
  }
}
</script>