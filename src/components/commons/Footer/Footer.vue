<template>
  <footer
    :class="{
      'has-background-dark': isDarkTheme
    }"
    class="footer hero-footer has-background-light"
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
          :type="{ 'is-primary': isDarkTheme, 'is-info': !isDarkTheme }"
          icon="heart"
          size="is-small"
        >
        </b-icon>
        by
        <a href="https://github.com/ming-tsai" target="_blank">
          <b-icon
            style="vertical-align: middle"
            :type="{ 'is-primary': isDarkTheme, 'is-info': !isDarkTheme }"
            icon="robot"
            size="is-small"
          >
          </b-icon>
        </a>
      </p>
      <p>
        <a href="https://github.com/ming-tsai/dotnetexplorer" target="_blank">
          <b-icon
            style="vertical-align: middle"
            :type="{ 'is-primary': isDarkTheme, 'is-info': !isDarkTheme }"
            pack="fab"
            icon="github-alt"
            size="is-size-10"
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
