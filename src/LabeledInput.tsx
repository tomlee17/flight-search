import { HTMLProps, InputHTMLAttributes } from "react";

interface ILabeledInput extends HTMLProps<HTMLInputElement> {
    labelClass: string,
    inputClass: string,
}

export function LabeledInput(props: ILabeledInput) {

    return (
        <>
            <label className={props.labelClass} htmlFor={props.id}>
                {props.children}
            </label>
            <input className={props.inputClass}
                onChange={props.onChange}
                value={props.value}
                id={props.id} type={props.type}
                {...(props.min && { min: props.min })}
            />
        </>
    );
}