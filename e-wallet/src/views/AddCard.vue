<template>
  <div class="addcard">
    <TopHeader :pageTitle="pageTitle" :pageCardType="pageCardType" />
    <CardSingle
      :vendor="cardVendor"
      :number="cardNumber"
      :holder="cardHolder"
      :validMonth="cardMonth"
      :validYear="cardYear"
    />
    <CardForm />
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
import CardForm from "../components/CardForm.vue";
import CardSingle from "../components/CardSingle.vue";

export default {
  components: {
    TopHeader,
    CardForm,
    CardSingle
  },
  data() {
    return {
      pageTitle: "ADD A NEW BANK CARD",
      pageCardType: "New card"
    };
  },
  computed: {
    cardNumber() {
      return this.$root.formData.number;
    },
    cardHolder() {
      return this.$root.formData.holder;
    },
    cardMonth() {
      return this.$root.formData.validMonth;
    },
    cardYear() {
      return this.$root.formData.validYear;
    },
    cardVendor() {
      return this.$root.formData.vendor;
    }
  }
};
</script>
