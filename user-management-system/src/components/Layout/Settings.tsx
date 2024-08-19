import React, { useState } from "react";

const Settings: React.FC = () => {
  const [fontSize, setFontSize] = useState("medium");

  const handleFontSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSize = event.target.value;
    setFontSize(selectedSize);

    // ドキュメントのルートに文字サイズを適用
    document.documentElement.style.fontSize = getFontSizeValue(selectedSize);
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
        <label htmlFor="font-size-select" className="settings-label">
          Select Font Size
        </label>
        <select
          id="font-size-select"
          value={fontSize}
          onChange={handleFontSizeChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
