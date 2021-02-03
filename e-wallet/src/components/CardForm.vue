<template>
  <div>
    <section class="card-form">
      <form @submit.prevent="createcards">
        <div class="card-form-number">
          <label for="cardNumber" class="col-2">CARD NUMBER</label>
          <input
            type="text"
            @keypress="isNumber($event)"
            maxlength="16"
            v-model="formData.number"
            placeholder="XXXX XXXX XXXX XXXX"
            class="col-2"
            @input="cardNumber"
            required
          />
        </div>
        <div class="card-form-holder">
          <label for="cardHolder" class="col-2">CARD HOLDER</label>
          <input
            type="text"
            v-model="formData.holder"
            placeholder="Firstname Lastname"
            class="col-2"
            @input="cardHolder"
            required
          />
        </div>
        <div class="card-form-valid">
          <div class="card-form-valid-month">
            <label for="cardMonth" class="col-1">MONTH</label>

            <select
              name="cardMonth"
              class="col-1"
              v-model="formData.validMonth"
              @change="cardMonth"
              required
            >
              <option v-for="n in 12" :key="n" :value="10 > n ? '0' + n : n">
                {{ 10 > n ? "0" + n : n }}
              </option>
            </select>
          </div>
          <div class="card-form-valid-year">
            <label for="cardYear" class="col-1">YEAR</label>
            <select
              name="cardYear"
              class="col-1"
              v-model="formData.validYear"
              @change="cardYear"
              required
            >
              <option v-for="n in 5" :key="n" :value="10 > n ? '2' + n : n">
                {{ 10 > n ? "202" + n : n }}
              </option>
            </select>
          </div>
        </div>
        <div class="card-form-vender">
          <label for="cardVender" class="col-2">VENDOR</label>
          <select
            name="cardVender"
            class="col-2"
            v-model="formData.vendor"
            @change="cardVendor"
            required
          >
            <option value="vendor-bitcoin">Bitcoin Inc</option>
            <option value="vendor-blockchain">Blockchain Inc</option>
            <option value="vendor-evil">Evil Corp</option>
            <option value="vendor-ninja">Ninja Bank</option>
          </select>
        </div>
        <button>ADD NEW CARD</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        id: null,
        vendor: "",
        number: "",
        holder: "",
        validMonth: "",
        validYear: ""
      }
    };
  },
  methods: {
    createcards: function() {
      (this.formData.id = Date.now()),
        this.$root.cards.push(this.formData),
        this.$router.push("/");
    },
    cardNumber() {
      this.$root.formData.number = this.formData.number;
    },
    cardHolder() {
      this.$root.formData.holder = this.formData.holder;
    },
    cardMonth() {
      this.$root.formData.validMonth = this.formData.validMonth;
    },
    cardYear() {
      this.$root.formData.validYear = this.formData.validYear;
    },
    cardVendor() {
      this.$root.formData.vendor = this.formData.vendor;
    },
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 2rem 0 0;
}
.card-form-valid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
label {
  font-family: "PT Mono", monospace;
  text-transform: uppercase;
  font-size: 0.8rem;
}
input,
select {
  padding: 0.8rem;
  outline-color: black;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.4rem;
}
</style>
