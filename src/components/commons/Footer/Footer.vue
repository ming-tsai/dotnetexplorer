<template>
  <footer :class="backgroundColor">
    <div class="content has-text-centered">
      <p :class="textColor" class="is-size-7">
        Made with
        <b-icon
          style="vertical-align: middle"
          type="is-danger"
          icon="heart"
          size="is-small"
        >
        </b-icon>
        by
        <a href="https://github.com/ming-tsai" target="_blank">
          <b-icon
            style="vertical-align: middle"
            :type="iconType"
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
            :type="iconType"
            pack="fab"
            icon="github-alt"
          >
          </b-icon>
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Theme = namespace("Theme");
@Component
export default class Footer extends Vue {
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

<style scoped>
@import url("./Footer.css");
</style>
