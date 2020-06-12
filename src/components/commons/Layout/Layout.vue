<template>
  <div class="has-navbar-fixed-top">
    <Header />
    <section :class="backgroundColor" class="hero is-fullheight">
      <div class="hero-body">
        <div class="section container">
          <router-view />
        </div>
      </div>
      <Footer class="footer hero-foot" />
    </section>
  </div>
</template>

<script lang="ts" src="./Layout.ts"></script>
<style src="./Layout.css" scoped></style>
