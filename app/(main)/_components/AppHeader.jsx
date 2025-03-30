'use client';

import { useAuthContext } from '@/app/provider';
import Image from 'next/image';
import React from 'react';

const AppHeader = () => {
  const { user } = useAuthContext();

  return (
    <div className="p-3 flex items-center space-x-3">
      
      {user?.photoURL && (
        <Image
          src={user.photoURL}
          alt="User Image"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}

      <h1 className="text-lg font-bold">App Header</h1>
    </div>
  );
};

export default AppHeader;
