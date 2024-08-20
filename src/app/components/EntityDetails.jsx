// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// export const EntityDetails = ({ id }) => {
//   const [entity, setEntity] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEntity = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/api_entities/entities/${id}/`);
//         setEntity(response.data);
//       } catch (error) {
//         setError('Error fetching entity details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEntity();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>{entity.business_name}</h1>
//       <p>Credential: {entity.credential}</p>
//       <p>Status: {entity.is_enabled ? 'Enabled' : 'Disabled'}</p>
//     </div>
//   );
// };
