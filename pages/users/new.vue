<script setup lang="ts">
import type { UserForm } from "@/components/Form/FormUser.vue";

useHead({
  title: "Create User",
});

const form = ref<UserForm>({ name: "", email: "" });
const { data, error, execute } = await useFetch("/api/users", {
  method: "post",
  body: form,
  immediate: false,
  watch: false,
});

const onSubmit = async () => {
  await execute();
  if (error.value != null) {
    console.error(error.value);
  }
  console.log(data.value);
};
</script>
<template>
  <div>
    <p>create user</p>
    <FormUser v-model="form" class="mt-4 mx-auto" @submit-form="onSubmit" />
  </div>
</template>
