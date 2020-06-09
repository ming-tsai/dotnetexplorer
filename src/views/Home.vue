<template>
  <div :class="backgroundColor" class="home"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const tool = namespace("Tool");
@Component
export default class Home extends Vue {
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

<style scoped />
