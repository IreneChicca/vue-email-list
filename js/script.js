const { createApp } = Vue;

createApp({
  data() {
    return {
      mail: "",
      prova: "sss",
      arrayMail: [],
    };
  },

  mounted() {
    for (i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.mail = response.data.response;
          this.arrayMail.push(response.data.response);
        });
    }
  },
}).mount("#app");
