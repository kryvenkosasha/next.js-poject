'use client';
import React, { useState } from 'react';
import CompanyFormModal from '../CompanyFormModal/CompanyFormModal';

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Add Company</button>
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
