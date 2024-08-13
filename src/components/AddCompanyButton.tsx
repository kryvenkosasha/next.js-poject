'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Button from './Button';
// import CompanyFormModal from '../CompanyFormModal/CompanyFormModal';
const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </>
  );
}
