import React from 'react';

interface SelectFormProps {
    data: { value: number; label: string }[];
    defaultOption: string;
    id: string;
    className?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
    error?: string;
}

const SelectForm: React.FC<SelectFormProps> = ({
    data,
    defaultOption,
    id,
    className = '',
    value,
    onChange,
    onBlur,
    error,
}) => {
    return (
        <div>
            <select
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`${className} ${error ? 'border-red-500' : ''}`}
            >
                <option value="">{defaultOption}</option>
                {data.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default SelectForm;
