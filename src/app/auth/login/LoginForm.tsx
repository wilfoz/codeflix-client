'use client';
import React, { useState } from 'react';
import { AuthForm } from '../../components/AuthForm';
import { useRouter } from 'next/navigation';

type ServerError = {
  message: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        router.push('/');
        return;
      }

      const payload = await response.json();
      setErrors(payload.map((error: ServerError) => error.message));
    } catch (error) {
      console.error(error);
      setErrors(['An unknown error occurred.']);
    }
  };

  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
