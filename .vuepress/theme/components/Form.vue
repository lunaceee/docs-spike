<template>
  <div class="feedback">
    <div class="helptext">
      <h3>Did you find this doc useful??</h3>
      <p>Your feedback helps us improve these docs</p>
    </div>
    <div class="feedback-icons">
      <form name="votes" method="POST" netlify>
        <input type="hidden" name="path">
        <input type="hidden" name="vote">
      </form>
      <img src="./illo-thumb-up.svg" alt v-on:click="upvote">
      <img src="./illo-thumb-down.svg" alt v-on:click="downvote">
    </div>
  </div>
</template>

<style scoped>
.feedback {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eaecef;
  border-bottom: 1px solid #eaecef;
}

.helptext {
  padding: 2rem 6rem 2rem 0;
}

h3,
p {
  line-height: 0.5;
}

form {
  display: inline;
}
</style>

<script>
function submit(vote) {
  const path = window.location.pathname;
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "form-name=votes&path=" + path + "&vote=" + vote
  });
}

export default {
  data() {
    return {
      upvoteCount: 0
    };
  },
  methods: {
    upvote: function(e) {
      submit("1");
    },
    downvote: function(e) {
      submit("-1");
    }
  }
};
</script>
