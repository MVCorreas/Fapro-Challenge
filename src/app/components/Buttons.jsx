export const MainButton = ({name, onClick}) => {
  return (
    <button  onClick={onClick} className="btn btn-ghost p-4 w-40 bg-purple-700 hover:bg-violet-400 text-white rounded-full">
      {name}
    </button>
  );
};

export const OutlinedButton = ({name, onClick}) => {
  return (
    <button  onClick={onClick} className=" btn w-32  bg-transparent  text-violet-200 hover:bg-violet-400  text-purple-700 rounded-full">
      {name}
    </button>
  );
};

export const LightButton = ({name, onClick}) => {
  return (
    <button  onClick={onClick} className=" btn w-32 bg-violet-400 hover:bg-violet-700  text-white rounded-full">
      {name}
    </button>
  );
};

export const GradientButton = ({name, onClick}) => {
  return (
<button onClick={onClick} className='p-4 bg-gradient-to-r from-amber-400 via-yellow-300 to-purple-300 w-full rounded-full text-2xl'>{name}</button>
  )
  
}