<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Нэвтрэх</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert v-if="error !== null" dense border="left" type="warning">
              {{error}}
            </v-alert>
            <v-form v-model="valid">
              <v-text-field prepend-icon="mdi-account" name="email" label="Э-майл" type="email" v-model="email" :error-messages="emailErrors" @input="$v.email.$touch()" @blur="$v.email.$touch()" required></v-text-field>
              <v-text-field id=" password" prepend-icon="mdi-lock" name="password" label="Нууц үг" type="password" v-model="password" :error-messages="passwodErrors" @input="$v.password.$touch()" required></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.prevent="signIn" :disabled="processing || !valid">Нэвтрэх</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  data: () => {
    return {
      email: null,
      password: null,
      valid: false,
    };
  },
  validations: {
    email: { email, required },
    password: { required },
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    processing() {
      return this.$store.getters.getProcessing;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAutheticated;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Эмайл хаягаа зөв оруулна уу.");
      !this.$v.email.required && errors.push("Эмайл хоосон байж болохгүй.");
      return errors;
    },
    passwodErrors() {
      const errors = [];
      if (!this.$v.passwod.$dirty) return errors;
      !this.$v.passwod.required && errors.push("Нууц үгээ оруулна уу.");
      return errors;
    },
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) this.$router.push("/home");
    },
  },
  methods: {
    signIn() {
      this.$store.dispatch("SignIn", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>