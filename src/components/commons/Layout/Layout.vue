<template>
  <div>
    <Header />
    <div id="content-area" class="page-wrapper hero-body">
      <div id="content" class="content-wrapper">
        <Content>
          <router-view />
        </Content>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "@/components/commons/Footer/Footer.vue";
import Header from "@/components/commons/Header/Header.vue";

export default {
  name: "Layout",
  components: {
    Footer,
    Header
  }
};
</script>

<style scoped>
.page-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
}
</style>
