<template>
  <div class="has-navbar-fixed-top">
    <Header />
    <section :class="backgroundColor" class="hero is-fullheight">
      <div class="hero-body">
        <div class="section container">
          <router-view />
        </div>
      </div>
      <Footer class="footer hero-foot" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

import Footer from "@/components/commons/Footer/Footer.vue";
import Header from "@/components/commons/Header/Header.vue";

const Theme = namespace("Theme");
@Component({
  components: {
    Footer,
    Header
  }
})
export default class Layout extends Vue {
  @Theme.State
  public isDarkTheme!: boolean;

  @Theme.State
  public textColor!: string;

  @Theme.State
  public backgroundColor!: string;

  @Theme.State
  public iconType!: string;
}
</script>

<style>
.hero-body {
  align-items: flex-start !important;
}
</style>
