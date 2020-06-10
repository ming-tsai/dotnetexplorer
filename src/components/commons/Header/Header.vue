<template>
  <nav
    :class="backgroundColor"
    class="navbar has-text-right is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <section>
      <b-switch
        :value="isDarkTheme"
        passive-type="is-info"
        class="navbar-item"
        @input="updateTheme"
      >
        <a :class="textColor">{{ isDarkTheme ? "Dark Mode" : "Light Mode" }}</a>
      </b-switch>
    </section>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const tool = namespace("Tool");
@Component
export default class Header extends Vue {
  @tool.State
  public isDarkTheme!: boolean;

  @tool.State
  public textColor!: string;

  @tool.State
  public backgroundColor!: string;

  @tool.State
  public iconType!: string;

  @tool.Action
  public updateTheme!: (isDark: boolean) => Promise<boolean>;
}
</script>
