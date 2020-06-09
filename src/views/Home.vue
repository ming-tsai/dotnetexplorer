<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const userConfig = namespace("Tools");
@Component
export default class Footer extends Vue {
  @userConfig.State
  public isDarkTheme!: boolean;
}
</script>

<style scoped />
