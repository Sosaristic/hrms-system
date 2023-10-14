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
        <div className="toggle__line h-8 w-12 rounded-full bg-secondary-500 shadow-inner"></div>
        <div
          className={`toggle__dot absolute top-0 h-8 w-8 rounded-full bg-white shadow ${
            isChecked ? "left-4" : "left-0}"
          } `}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
