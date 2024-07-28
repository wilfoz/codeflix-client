'use client';
import React from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '../../components/AuthForm';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  console.log(e.target);
  e.preventDefault();
};

export default function RegisterForm() {
  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
