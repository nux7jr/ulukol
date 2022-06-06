<template>
  <div class="feedback">
    <h3 class="feedback__heading">Обратная связь</h3>
    <FeedbackFrom />
  </div>
</template>
<script>
import FeedbackFrom from "@/components/FeedbackForm.vue";
export default {
  name: "Feedback",
  components: {
    FeedbackFrom,
  },
};
</script>
<style scoped>
.feedback__heading {
  margin-top: 0;
}
</style>
