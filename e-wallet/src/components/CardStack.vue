<template>
  <div>
    <section
      v-for="(card, index) in cards"
      :key="card.id"
      @click="onClick(index)"
      class="cardStack"
    >
      <CardSingle
        class="stack"
        :key="card.id"
        :id="card.id"
        :number="card.number"
        :holder="card.holder"
        :validMonth="card.validMonth"
        :validYear="card.validYear"
        :vendor="card.vendor"
      />
    </section>
  </div>
</template>

<script>
import CardSingle from "../components/CardSingle.vue";

export default {
  components: {
    CardSingle
  },
  computed: {
    cards() {
      return this.$root.cards;
    }
  },
  methods: {
    onClick(index) {
      this.$root.activeCard = index;
    }
  }
};
</script>

<style scoped>
.cardStack {
  display: grid;
  grid-auto-rows: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.stack {
  z-index: 1;
}
</style>
