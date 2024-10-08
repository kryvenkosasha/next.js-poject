import Header from '@/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
}
