<template>
  <div>
    <header>
      <h1>{{ pageTitle }}</h1>
      <h2>{{ pageCardType }}</h2>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: String,
    pageCardType: String
  }
};
</script>

<style scoped>
.addCard .home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.addCard .home h1 {
  font-weight: bold;
}
h1 {
  text-align: center;
  margin: 0;
  -webkit-box-flex: 2;
  flex: 2;
  line-height: 2rem;
  font-size: 2rem;
  padding: 1.5rem 0;
  text-transform: uppercase;
  color: black;
}
h2 {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
  flex: 1;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  padding: 0.25rem;
  text-transform: uppercase;
}
</style>
