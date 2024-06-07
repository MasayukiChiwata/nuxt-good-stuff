<script setup lang="ts">
export type UserForm = { name: string; email: string };
const form = defineModel<UserForm>({ required: true });
defineEmits(["submit-form"]);
</script>
<template>
  <v-form class="w-50" @submit.prevent="$emit('submit-form')">
    <TextfieldForm v-model="form.name" label="Your name" />
    <TextfieldForm v-model="form.email" label="Your email" />
    <BtnSubmit type="submit" class="d-block mx-auto">Create</BtnSubmit>
  </v-form>
</template>
