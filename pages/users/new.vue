<script setup lang="ts">
import type { UserForm } from "@/components/Form/FormUser.vue";
import type { UserValidationError } from "@/core/entities/user";

useHead({
  title: "Create User",
});

const form = ref<UserForm>({ name: "", email: "" });
const validationError = ref<UserValidationError>();

const { data, error, execute } = await useFetch("/api/users", {
  method: "post",
  body: form,
  immediate: false,
  watch: false,
});

const onSubmit = async () => {
  await execute();
  if (error.value != null) {
    console.log(error.value.data);
    validationError.value = error.value.data?.data?.validationError;
    return;
  }
  console.log(data.value);
};
</script>
<template>
  <div>
    <p>create user</p>
    <FormUser v-model="form" :validation-error="validationError" class="mt-4 mx-auto" @submit-form="onSubmit" />
  </div>
</template>
