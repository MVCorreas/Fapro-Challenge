"use client"
import React, { Suspense } from 'react';
import { SignInScreen } from "@/app/views/SignInScreen";

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInScreen />
    </Suspense>
  );
}
