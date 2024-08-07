<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  expenses: {
    id?: string;
    description: string;
    amount: number;
    created_at?: Date;
  }[];
}

const props = defineProps<Props>();

const formatDate = (date?: Date) => {
  if (!date) return '';
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};
</script>

<template>
  <q-list dense class="expenses" v-if="props.expenses.length > 0">
    <q-item
      v-for="expense in props.expenses"
      :key="expense.id || expense.description"
    >
      <q-item-section>
        <q-card-section class="flex row justify-between">
          <div>{{ expense.description }}</div>
          <div>{{ expense.amount }}</div>
          <div>{{ formatDate(expense.created_at) }}</div>
        </q-card-section>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style scoped>
.expenses {
  min-width: 400px;
  max-width: 80vw;
}
</style>
