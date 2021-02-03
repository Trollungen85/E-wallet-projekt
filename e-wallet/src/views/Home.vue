<template>
  <div class="home">
    <TopHeader :pageTitle="pageTitle" :pageCardType="pageCardType" />
    <card-single
      v-bind="activeCard"
      v-bind:showButton="showButton"
      v-on:removeButton="removeButton()"
    />
    <card-stack />
    <div>
      <button @click="addCardRoute" class="bottom">ADD NEW CARD</button>
    </div>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
import CardSingle from "../components/CardSingle.vue";
import CardStack from "../components/CardStack.vue";

export default {
  components: {
    TopHeader,
    CardSingle,
    CardStack
  },
  data() {
    return {
      pageTitle: "E-WALLET",
      pageCardType: "Active card",
      showButton: true
    };
  },
  methods: {
    addCardRoute() {
      this.$root.formData = {
        id: null,
        holder: "",
        number: "",
        vendor: "",
        validMonth: "MM",
        validYear: "YY"
      };
      this.$router.push("/addcard");
    },
    removeButton() {
      const index = this.activeCard;
      this.cards.splice(index, 1);
    }
  },
  computed: {
    cards: function() {
      return this.$root.$data.cards;
    },
    activeCard() {
      return this.$root.$data.cards[this.$root.$data.activeCard];
    }
  }
};
</script>

<style scoped>
.bottom {
  margin-top: 250px;
}
</style>
