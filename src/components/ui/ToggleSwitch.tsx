interface ToggleSwitchProps {
  isChecked: boolean;
  updateToggleState: (value: boolean) => void;
}
const ToggleSwitch = ({ isChecked, updateToggleState }: ToggleSwitchProps) => {
  const handleToggle = () => {
    updateToggleState(!isChecked);
  };
  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="toggle__line h-6 w-10 rounded-full bg-secondary-500 shadow-inner md:h-8 md:w-12"></div>
        <div
          className={`toggle__dot absolute top-0 h-6 w-6 rounded-full bg-white shadow md:h-8 md:w-8 ${
            isChecked ? "left-4" : "left-0}"
          } `}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
