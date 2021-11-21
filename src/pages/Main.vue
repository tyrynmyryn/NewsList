<template>
  <div class="container">
    <div class="btn btn_add" @click="$router.push('/addnews')">Добавить</div>
    <NewsList />
  </div>
</template>

<script>
import NewsList from "@/components/NewsList/NewsList.vue";
export default {
  components: {
    NewsList,
  },
};
</script>