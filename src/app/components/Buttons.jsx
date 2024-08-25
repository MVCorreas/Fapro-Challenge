export const MainButton = ({ name, onClick, bgColor = 'bg-dark-pink', hoverColor = 'hover:bg-light-pink'}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-ghost p-2 w-full max-w-[150px] ${bgColor} ${hoverColor} rounded-full text-white text-md`}
    >
      {name}
    </button>
  );
};


export const OutlinedButton = ({ name, onClick, textColor = 'text-dark-teal', hoverColor = 'hover:bg-light-teal', hoverText = 'hover:text-white', borderColor = 'border-dark-teal'}) => {
  return (
    <button
      onClick={onClick}
      className={`btn w-full max-w-[150px] bg-transparent ${textColor} ${hoverColor} ${hoverText} ${borderColor} rounded-full text-md`}
    >
      {name}
    </button>
  );
};

export const LightButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn w-full max-w-[150px] bg-violet-400 hover:bg-violet-700 text-white rounded-full text-md"
    >
      {name}
    </button>
  );
};