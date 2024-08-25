// 'use client';

// import { useSession } from "../components/Providers";
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';

// export const Profile = () => {
//     const { data: session } = useSession() || {};
//   const router = useRouter();
//   const [preview, setPreview] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     getValues,
//     setValue,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//     },
//   });

// //   useEffect(() => {
// //     if (session?.user) {
// //       setValue('name', session.user.name || '');
// //       setValue('email', session.user.email || '');
// //     }
// //   }, [session, setValue]);

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const formSubmit = async (form) => {
//     const { name, email, password, image } = form;
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     if (password) formData.append('password', password);
//     if (image?.[0]) formData.append('image', image[0]);

//     try {
//       const res = await fetch('/api/auth/profile', {
//         method: 'PUT',
//         body: formData,
//       });
//       if (res.ok) {
//         toast.success('Profile updated successfully');
//         const newSession = {
//           ...session,
//           user: {
//             ...session?.user,
//             name,
//             email,
//           },
//         };
//         await update(newSession);
//       } else {
//         const data = await res.json();
//         toast.error(data.message || 'An error occurred');
//       }
//     } catch (err) {
//       toast.error(err.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="card sm:card-side bg-base-100 shadow-xl mt-4 w-3/4 mx-auto">
//       <figure className="w-1/2 p-8">
//         <img
//           src={preview || '/profileAvatar.jpeg'}
//           alt="Profile"
//           className="w-80 h-80 object-cover rounded-md"
//         />
//       </figure>

//       <div className="card-body">
//         <h1 className="card-title text-[#244999] text-2xl text-center">Edit Profile</h1>
//         <form onSubmit={handleSubmit(formSubmit)}>
//           <div className="my-2">
//             <label className="label" htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               {...register('firstName', { required: 'First Name is required' })}
//               className="input input-bordered w-full max-w-2xl"
//             />
//             {errors.name && <div className="text-error">{errors.name.message}</div>}
//             </div>
//             <div>
//             <label className="label" htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               {...register('lastName', { required: 'Last Name is required' })}
//               className="input input-bordered w-full max-w-2xl"
//             />
//             {errors.name && <div className="text-error">{errors.name.message}</div>}
//           </div>

//           <div className="my-2">
//             <label className="label" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
//                   message: 'Email is invalid',
//                 },
//               })}
//               className="input input-bordered w-full max-w-2xl"
//             />
//             {errors.email && <div className="text-error">{errors.email.message}</div>}
//           </div>

//           <div className="my-2">
//             <label className="label" htmlFor="password">New Password</label>
//             <input
//               type="password"
//               id="password"
//               {...register('password')}
//               className="input input-bordered w-full max-w-2xl"
//             />
//             {errors.password && <div className="text-error">{errors.password.message}</div>}
//           </div>

//           <div className="my-2">
//             <label className="label" htmlFor="confirmPassword">Confirm New Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               {...register('confirmPassword', {
//                 validate: (value) => value === getValues('password') || 'Passwords should match!',
//               })}
//               className="input input-bordered w-full max-w-2xl"
//             />
//             {errors.confirmPassword && <div className="text-error">{errors.confirmPassword.message}</div>}
//           </div>

//           <div className="my-2">
//             <label className="label" htmlFor="image">Profile Image</label>
//             <input
//               type="file"
//               id="image"
//               {...register('image')}
//               className="input input-bordered w-full max-w-2xl"
//               onChange={handleImageChange}
//             />
//           </div>

//           <div className="my-2">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="btn btn-primary w-full bg-[#244999] hover:bg-[#2B5F9E] text-white"
//             >
//               {isSubmitting && <span className="loading loading-spinner"></span>}
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
