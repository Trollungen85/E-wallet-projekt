<template>
  <article
    class="card"
    :class="cardColor"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <header>
      <button
        class="removeButton"
        v-show="showButton"
        v-on:click="removeButton"
        v-if="hover"
      >
        X
      </button>
      <img alt="Chip logo" src="../assets/chip-dark.svg" />
      <img
        v-if="vendor == 'vendor-bitcoin'"
        src="../assets/vendor-bitcoin.svg"
        alt="Bitcoin logo"
      />
      <img
        v-if="vendor == 'vendor-blockchain'"
        src="../assets/vendor-blockchain.svg"
        alt="Blockchain logo"
      />
      <img
        v-if="vendor == 'vendor-evil'"
        src="../assets/vendor-evil.svg"
        alt="Evil logo"
      />
      <img
        v-if="vendor == 'vendor-ninja'"
        src="../assets/vendor-ninja.svg"
        alt="Ninja logo"
      />
    </header>
    <section class="card-number" v-if="number">
      {{ cardNumber }}
    </section>
    <section class="card-info">
      <aside class="card-holder">
        <h3>CARDHOLDER NAME</h3>
        <p>{{ holder }}</p>
      </aside>
      <aside class="valid">
        <h3>VALID UNTIL</h3>
        <p>{{ validMonth }} / {{ validYear }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  },
  props: {
    id: NaN,
    holder: String,
    vendor: String,
    number: String,
    validMonth: String,
    validYear: String,
    showButton: Boolean
  },
  computed: {
    cardColor() {
      if (this.vendor == "vendor-bitcoin") {
        return "bitcoin";
      } else if (this.vendor == "vendor-blockchain") {
        return "blockchain";
      } else if (this.vendor == "vendor-evil") {
        return "evil";
      } else if (this.vendor == "vendor-ninja") {
        return "ninja";
      } else {
        return "";
      }
    },
    cardNumber() {
      return this.number.match(/.{1,4}/g).join(" ");
    }
  },
  methods: {
    removeButton() {
      this.$emit("removeButton");
    }
  }
};
</script>

<style scoped>
.card {
  max-width: 24rem;
  height: 14.7rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  grid-auto-rows: 2.6rem;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
  box-sizing: border-box;
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}
.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
}
.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}
.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}
.card header {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
}
.card-number {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  font-size: 1.6rem;
  letter-spacing: 0.07rem;
  padding: 0.5rem 0 0;
}
.card-info {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 1;
}
.card-holder {
  flex: 1;
  text-transform: uppercase;
}
h3 {
  font-size: 0.9rem;
  margin-bottom: 0;
}
p {
  font-size: 1.1rem;
  margin-top: 0;
  padding-top: 0.3rem;
}
.removeButton {
  margin-top: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  z-index: 1;
  position: absolute;
}
</style>
