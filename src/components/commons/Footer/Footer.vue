<template>
  <footer
    :class="{
      'has-background-dark': isDarkTheme,
      'has-background-light': !isDarkTheme
    }"
    class="footer hero-footer"
  >
    <div class="content has-text-centered">
      <p
        :class="{
          'has-text-light': isDarkTheme,
          'has-text-dark': !isDarkTheme
        }"
        class="is-size-7"
      >
        Made with
        <b-icon
          style="vertical-align: middle"
          type="is-info"
          icon="heart"
          size="is-small"
        >
        </b-icon>
        by
        <a href="https://github.com/ming-tsai" target="_blank">
          <b-icon
            style="vertical-align: middle"
            type="is-info"
            pack="fab"
            icon="github-alt"
            size="is-small"
          >
          </b-icon>
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "buefy/dist/components/icon";
import { namespace } from "vuex-class";
const userConfig = namespace("UserConfig");
@Component
export default class Footer extends Vue {
  @userConfig.State
  public isDarkTheme!: boolean;
}
</script>

<style scoped>
@import url("./Footer.css");
</style>
