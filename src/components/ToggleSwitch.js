import { Fragment } from "react";

export default function ToggleSwitch({
  checked,
  label,
  id,
  disabled,
  ariaInvalid,
  ariaLabelledby,
  onChange
}) {
  return (
    <Fragment>
      <label htmlFor={id}>
        <span>
          <input
            type="checkbox"
            checked={checked}
            id={id}
            disabled={disabled}
            onChange={onChange}
            aria-invalid={ariaInvalid}
            aria-labelledby={ariaLabelledby}
          />
        </span>
        {label}
      </label>
    </Fragment>
  );
}
