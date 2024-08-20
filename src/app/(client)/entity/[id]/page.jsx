// "use client"
// import { useRouter } from 'next/navigation';
// import {EntityDetails} from '../../../components/EntityDetails';
// import { useEffect, useState } from 'react';

// const EntityPage = () => {
//     const router = useRouter();
//     const [entityId, setEntityId] = useState(null);

   

//     useEffect(() => {
//         if (router.query && router.query.id) {
//             setEntityId(router.query.id);
//             console.log('Details:', router.query.id)
//         }
//     }, [router.query]);

//     return (
//         <div>
//             <EntityDetails entityId={entityId} />
//         </div>
//     );
// };

// export default EntityPage;

