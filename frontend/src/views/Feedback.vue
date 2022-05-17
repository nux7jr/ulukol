<template>
  <div class="feedback">
    <h3>Обратная связь</h3>
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
