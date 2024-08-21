export const MainButton = ({name, onClick}) => {
  return (
    <button  onClick={onClick} className=" btn w-32 bg-purple-700 hover:bg-violet-400  text-white rounded-md">
      {name}
    </button>
  );
};

export const OutlinedButton = ({name, onClick}) => {
  return (
    <button  onClick={onClick} className=" btn w-32 btn-outline hover:bg-violet-400  text-purple-700 rounded-md">
      {name}
    </button>
  );
};

export const LightButton = ({name, onClick}) => {
  return (
    <button  onClick={onClick} className=" btn w-32 bg-violet-400 hover:bg-violet-700  text-white rounded-md">
      {name}
    </button>
  );
};
