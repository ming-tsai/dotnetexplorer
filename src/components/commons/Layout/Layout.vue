<template>
  <div class="has-navbar-fixed-top">
    <Header />
    <section class="hero is-fullheight">
      <div :class="backgroundColor" class="hero-body">
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

const tool = namespace("Tool");
@Component({
  components: {
    Footer,
    Header
  }
})
export default class Layout extends Vue {
  @tool.State
  public isDarkTheme!: boolean;

  @tool.State
  public textColor!: string;

  @tool.State
  public backgroundColor!: string;

  @tool.State
  public iconType!: string;
}
</script>

<style>
.hero-body {
  align-items: flex-start !important;
}
</style>
