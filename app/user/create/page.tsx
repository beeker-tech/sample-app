'use client';
import { Text, Card } from '@tremor/react';
import Form from './form/form';

export default function CreateUserPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1 className="text-left font-medium text-3xl">Create User</h1>
      <Text>Fill in the user details</Text>
      <Card className="mt-6 w-96">
        <Form />
      </Card>
    </main>
  );
}
