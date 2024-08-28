import { useState } from "react";
import { SingleValue } from "react-select";
import SelectCompo from "./SelectCompo";

const Settings = () => {
  const [fontSize, setFontSize] = useState("medium");

  const handleFontSizeChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    if (selectedOption) {
      const selectedSize = selectedOption.value;
      setFontSize(selectedSize);
      document.documentElement.style.fontSize = getFontSizeValue(selectedSize);
    }
  };

  const getFontSizeValue = (size: string) => {
    switch (size) {
      case "small":
        return "12px";
      case "medium":
        return "16px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  };

  return (
    <div>
      <h2>Settings</h2>
      <div className="settings-item">
        <div className="settings-label">
          <h3>
            Select Font Size
          </h3>
          <p>Current Font Size: {fontSize}
          </p>
        </div>
        <SelectCompo onChange={handleFontSizeChange} />
      </div>
    </div>
  );
};

export default Settings;
