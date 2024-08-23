"use client"
import React, { Suspense } from 'react';
import { RegisterScreen } from "@/app/views/RegisterScreen";

export default function Register() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterScreen />
    </Suspense>
  );
}
