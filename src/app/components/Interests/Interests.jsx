// "use client"
// import React from 'react';

// import styles from './Interests.module.css';
// import { useRouter } from 'next/navigation'; 

// import useEaseIn from '../../hooks/useEaseIn';

// const interests = [
//   {
//     id: 1,
//     title: 'Programming',
//     description: 'My passion for web development exceeds boundaries. From the moment I crossed paths with web development, I have striven to transmit meaning and passion through every pixel and every byte.',
//     image: '/Programming.jpg'
//   },
//   {
//     id: 2,
//     title: 'Family',
//     description: 'Nothing makes me happier than spending time with my family. Chats, meals, asados and mates feed my soul.',
//     image: '/Family.jpg'
//   },
//   {
//     id: 3,
//     title: 'Learning',
//     description: 'I have always been utterly curious and willing to learn. No matter the discipline, every topic receives my undivided attention.',
//     image: '/Learning.jpg'
//   },
//   {
//     id: 4,
//     title: 'Nature',
//     description: 'I take pleasure in pausing my hectic life for a minute, and observing. I find peace and harmony in the warmth of the day, watch the leaves musically dance to the wind, and allow myself to drift into silence.  ',
//     image: '/Nature.jpg'
//   },
//   {
//     id: 5,
//     title: 'Exercise',
//     description: 'I firmly believe that true health requires careful attention to the mind, body, and soul. Every day, I engage in a workout routine that helps me maintain balance and oxygenate my mind. Hence, persevering perfect harmony and bliss.',
//     image: '/Exercise.jpeg'
//   }
// ];

// export const InterestsSection = () => {
//   const router = useRouter(); 
//   const sectionsRef = useEaseIn()

//   const handleFindOutMore = () => {
//     router.push('/interests'); 
//   };

//   return (
//     <section ref={(el) => (sectionsRef.current[1] = el)} className={`hidden ${styles.section}`} id='interests'>
//       <div className={styles.titleContainer}>
//         <h2 className={styles.interestTitle}>Passions and Hobbies</h2>
//         <p className={styles.interestDescription}>I consciously choose to enjoy every bit of my life. Take the time to breath in how joyful my life is. Here are some of my top interests.</p>
//       </div>
//       <div className={styles.grid}>
//         {interests.map((interest) => (
//           <ul>
// <li>{interest.title}</li> 
// <li>{interest.description}</li> 
//           </ul>
          
//         ))}
//       </div>
//       <div>
//         <button onClick={handleFindOutMore}>FIND OUT MORE</button>
//       </div>
//     </section>
//   );
// };


