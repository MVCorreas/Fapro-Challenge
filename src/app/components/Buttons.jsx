export const MainButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-ghost p-2 w-full max-w-[150px] bg-purple-700 hover:bg-violet-400 text-white rounded-full"
    >
      {name}
    </button>
  );
};


export const OutlinedButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn w-full max-w-[150px] bg-transparent text-violet-200 hover:bg-violet-400 text-purple-700 rounded-full"
    >
      {name}
    </button>
  );
};

export const LightButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn w-full max-w-[150px] bg-violet-400 hover:bg-violet-700 text-white rounded-full"
    >
      {name}
    </button>
  );
};


export const GradientButton = ({name, onClick}) => {
  return (
<button onClick={onClick} className='p-4 bg-gradient-to-r from-amber-500 to-yellow-200 w-full max-w-[250px] rounded-full text-2xl text-black'>{name}</button>
  )
  
}