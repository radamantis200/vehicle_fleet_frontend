import React from 'react';

interface FormTextAreaProps {
    label: string;
    name: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    error?: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
    label,
    name,
    id,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
}) => {
    return (
        <div className="col-span-2">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <textarea
                name={name}
                id={id}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${error ? 'border-red-500' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default FormTextArea;
