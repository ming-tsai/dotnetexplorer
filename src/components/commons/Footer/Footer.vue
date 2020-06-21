<template>
  <footer :class="backgroundColor">
    <div class="content has-text-centered">
      <p :class="textColor" class="is-size-7">
        Made with
        <b-icon type="is-danger" icon="heart" size="is-small"> </b-icon>
        by
        <a
          href="https://github.com/ming-tsai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b-icon :type="iconType" icon="robot" size="is-small"> </b-icon>
        </a>
      </p>
      <p>
        <a
          href="https://github.com/ming-tsai/dotnetexplorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b-icon :type="iconType" pack="fab" icon="github-alt"> </b-icon>
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts" src="./Footer.ts"></script>
<style scoped src="./Footer.css"></style>
