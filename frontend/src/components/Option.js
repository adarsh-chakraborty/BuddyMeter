import classes from './Option.module.css';

const Option = ({ option, isSelected, onSelect, index }) => {
  return (
    <div>
      <label
        className={`${classes.optionParent} cursor-pointer flex items-center`}
      >
        <input type="radio" value={option} name="que" className="hidden" />
        <span
          className={`w-4 h-4 inline-block mr-1 border border-gray-400 transition duration-200 ${classes.box}`}
        ></span>
        <span className="pl-1">{option}</span>
      </label>
    </div>
  );
};

export default Option;
