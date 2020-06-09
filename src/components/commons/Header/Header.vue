<template>
  <b-navbar :class="backgroundColor" class="hero-header">
    <template slot="end">
      <b-navbar-item tag="div">
        <section>
          <b-switch
            :value="isDarkTheme"
            passive-type="is-info"
            class="navbar-item"
            @input="updateTheme"
          >
            <a :class="textColor">{{
              isDarkTheme ? "Dark Mode" : "Light Mode"
            }}</a>
          </b-switch>
        </section>
      </b-navbar-item>
    </template>
  </b-navbar>
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
