<template>
  <div class="has-navbar-fixed-top">
    <Header />
    <section class="hero is-fullheight is-fixed-bottom is-fixed-top">
      <div :class="backgroundColor" class="hero-body">
        <div class="section is-medium container">
          <router-view />
        </div>
      </div>
    </section>
    <Footer class="footer" />
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
footer {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
}

.hero-body {
  align-items: flex-start !important;
}
</style>
