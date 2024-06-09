<script setup lang="ts">
import type { UserForm } from "@/components/Form/FormUser.vue";

useHead({
  title: "Create User",
});

const form = ref<UserForm>({ name: "", email: "" });
const validationIssues = ref<FlatValidationIssues>({ formErrors: [], fieldErrors: {} });

const { data, error, execute } = await useFetch("/api/users", {
  method: "post",
  body: form,
  immediate: false,
  watch: false,
});

const onSubmit = async () => {
  await execute();
  if (error.value != null) {
    const issues = error.value.data.data.validationIssues;
    if (isValidationIssues(issues)) {
      validationIssues.value = parseValidationIssues(issues);
    }
    return;
  }
  console.log(data.value);
};
</script>
<template>
  <div>
    <p>create user</p>
    <FormUser v-model="form" :validation-issues="validationIssues" class="mt-4 mx-auto" @submit-form="onSubmit" />
  </div>
</template>
