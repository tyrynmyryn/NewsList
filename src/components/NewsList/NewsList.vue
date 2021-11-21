<template>
  <News
    v-for="item, index in $store.state.data"
    :title="item.title"
    :newsIndex="index"
    :newsId="item.id"
    :key="item.id"
  />
</template>

<script>
import News from "@/components/News/News.vue";
export default {
  components: {
    News
  },
};
</script>

<style>
</style>