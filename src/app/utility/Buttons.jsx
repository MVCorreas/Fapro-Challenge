export const MainButton = ({name}) => {
  return (
    <button className=" btn w-32 bg-purple-700 hover:bg-violet-400  text-white rounded-md">
      {name}
    </button>
  );
};

export const OutlinedButton = ({name}) => {
  return (
    <button className=" btn w-32 btn-outline hover:bg-violet-400  text-purple-700 rounded-md">
      {name}
    </button>
  );
};
