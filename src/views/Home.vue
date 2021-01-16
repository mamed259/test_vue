<template>
  <div>
    <SearchPackage class="main"/>

    <footer>
      <b-container class="bv-example-row">
        <b-media class="media-about-me">
          <template #aside>
            <b-img src="../img/me.jpg" width="120"></b-img>
          </template>
          <h5>Hummatov Mammad</h5>
          <a href="https://github.com/mamed259/test_vue" target="_blank">Link to github repository</a>
        </b-media>
      </b-container>

    </footer>
  </div>

</template>
<script>
// @ is an alias to /src
import SearchPackage from "@/components/SearchPackage";

export default {
  name: 'Home',
  components: {
    SearchPackage,
  },


}
</script>

<style lang="scss" scoped>
@import '../scss/main';
</style>
