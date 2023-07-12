import React from "react";

interface IInputBlockProps {
  label: string;
  inputType: string;
  placeholder: string;
  register: any;
  keyRegister: string;
  errors: any;
  require?: boolean;
  messageRequire?: string;
  messageRequireMin?: string;
  valueMin?: number;
  messageRequireMax?: string;
  valueMax?: number;

  messageMaxLength?: string;
  valueMaxLength?: number;

  valueAsNumber?: boolean;
  step?: string;
}

const InputBlock: React.FC<IInputBlockProps> = ({
  label,
  inputType,
  placeholder,
  register,
  keyRegister,
  errors,
  require,
  messageRequire,
  messageRequireMin,
  valueMin,
  messageRequireMax,
  valueMax,

  messageMaxLength,
  valueMaxLength,

  valueAsNumber,
  step,
}) => {
  return (
    <div className="input__block">
      <h5>{label}</h5>
      <input
        className={errors ? "active_error" : ""}
        type={inputType}
        step={step}
        placeholder={placeholder}
        min={1}
        {...register(`${keyRegister}`, {
          required: require === false ? false : `${messageRequire}`,
          min: { value: valueMin, message: `${messageRequireMin}` },
          max: { value: valueMax, message: `${messageRequireMax}` },
          valueAsNumber: valueAsNumber === true ? true : null,
          pattern: {
            value: valueAsNumber === true ? /^(0|[1-9]\d*)(\.\d+)?$/ : null,
          },
          maxLength:
            messageMaxLength && valueMaxLength
              ? { value: valueMaxLength, message: messageMaxLength }
              : null,
        })}
      />
      {errors && (
        <h6 className="error">{errors.message || `${messageRequire}`}</h6>
      )}
    </div>
  );
};

export default InputBlock;
