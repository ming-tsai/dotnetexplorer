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
const userConfig = namespace("UserConfig");
@Component
export default class Header extends Vue {
  @userConfig.State
  public isDarkTheme!: boolean;

  @userConfig.State
  public textColor!: string;

  @userConfig.State
  public backgroundColor!: string;

  @userConfig.State
  public iconType!: string;

  @userConfig.Action
  public updateTheme!: (isDark: boolean) => Promise<boolean>;
}
</script>
