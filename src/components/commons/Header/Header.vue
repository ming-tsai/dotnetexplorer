<template>
  <nav
    :class="backgroundColor"
    class="navbar level is-fixed-top has-text-right"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="level-left"></div>

    <div class="level-rigth">
      <b-switch
        :value="isDarkTheme"
        passive-type="is-info"
        class="navbar-item"
        @input="updateTheme"
      >
        <a :class="textColor">{{ isDarkTheme ? "Dark Mode" : "Light Mode" }}</a>
      </b-switch>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Theme = namespace("Theme");
@Component
export default class Header extends Vue {
  @Theme.State
  public isDarkTheme!: boolean;

  @Theme.State
  public textColor!: string;

  @Theme.State
  public backgroundColor!: string;

  @Theme.State
  public iconType!: string;

  @Theme.Action
  public updateTheme!: (isDark: boolean) => Promise<boolean>;
}
</script>
