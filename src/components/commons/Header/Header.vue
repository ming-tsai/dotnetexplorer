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

<script lang="ts" src="./Header.ts"></script>
<style src="./Header.css" scoped></style>
