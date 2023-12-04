import { arrowLeft } from "../News/services";
const Button_nobg = (props) => {
  let { title, color } = props;
  return (
    <button
      className={`ismed flex gap-3 text-sm px-4 py-3 bg-transparent border-solid border-${color} rounded-md text-${color} hover:bg-gray-600 ease-out cursor-pointer transition-all`}
    >
      {title}
      <img src={arrowLeft} alt="" className={`text-${color}`} />
    </button>
  );
};

export default Button_nobg;
