import { useRouter } from 'next/router';
import React from 'react';

const id = () => {
   const router = useRouter();
   return (
      <div>
         <h2>{router.query.id}</h2>
      </div>
   );
};

export default id;