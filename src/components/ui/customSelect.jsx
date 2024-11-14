import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const CustomSelect = ({ options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select-container">
            <div className="custom-select" onClick={toggleDropdown}>
                <span>{selectedOption ? selectedOption.label : placeholder}</span>
                <div className={`arrow ${isOpen ? 'open' : ''}`}><FaAngleDown /></div>
            </div>

            <div className={`custom-select-dropdown ${isOpen ? 'open' : ''}`}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`custom-select-option ${selectedOption?.label === option.label ? "selected" : ""}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CustomSelect;
