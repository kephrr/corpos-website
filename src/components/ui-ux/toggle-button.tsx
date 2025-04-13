import React, { useState, useId } from 'react';

interface ToggleProps {
    initialValue?: boolean;
    onChange?: () => void;
    disabled?: boolean;
    activeColor?: string;
    inactiveColor?: string;
    label?: string;
    name?: string;
}

const Toggle: React.FC<ToggleProps> = ({
                                           initialValue = false,
                                           onChange,
                                           disabled = false,
                                           activeColor = '#4ade80',
                                           inactiveColor = '#d1d5db',
                                           label,
                                           name,
                                       }) => {
    const [isActive, setIsActive] = useState(initialValue);
    const id = useId();

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        const newValue = e.target.checked;
        setIsActive(newValue);
        onChange?.();
    };

    return (
        <div className="flex items-center">
            {label && (
                <label htmlFor={id} className="mr-2 text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <div className="relative inline-block w-11 h-6">
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    checked={isActive}
                    onChange={handleToggle}
                    disabled={disabled}
                    className="absolute w-full h-full opacity-0 z-10 cursor-pointer peer outline-none"
                />
                <div
                    className={`block h-6 w-11 rounded-full transition-colors duration-200 peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-${isActive ? activeColor : inactiveColor}-500 ${
                        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    }`}
                    style={{
                        backgroundColor: isActive ? activeColor : inactiveColor,
                    }}
                >
          <span
              className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ${
                  isActive ? 'translate-x-5' : 'translate-x-0'
              }`}
          />
                </div>
            </div>
        </div>
    );
};

export default Toggle;





