<script setup lang="ts">
import type { UserFormValidationError } from "@/server/validators/userFormValidator";

export type UserForm = { name: string; email: string };

const form = defineModel<UserForm>({ required: true });
defineProps<{ validationError?: UserFormValidationError }>();
defineEmits(["submit-form"]);
</script>
<template>
  <v-form class="w-50" @submit.prevent="$emit('submit-form')">
    <v-text-field
      v-model="form.name"
      density="compact"
      label="Your name"
      :error-messages="validationError?.name?._errors"
    />
    <v-text-field
      v-model="form.email"
      density="compact"
      label="Your email"
      :error-messages="validationError?.email?._errors"
    />
    <BtnSubmit type="submit" class="d-block mx-auto">Create</BtnSubmit>
  </v-form>
</template>
