/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewForm1InputValues = {
    Field1?: string;
    Field2?: string;
    Field0?: string;
    Field3?: string;
    Field4?: number;
    Field5?: number;
    Field6?: string;
};
export declare type NewForm1ValidationValues = {
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
    Field4?: ValidationFunction<number>;
    Field5?: ValidationFunction<number>;
    Field6?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm1OverridesProps = {
    NewForm1Grid?: FormProps<GridProps>;
    Field1?: FormProps<TextFieldProps>;
    Field2?: FormProps<TextFieldProps>;
    Field0?: FormProps<TextFieldProps>;
    Field3?: FormProps<TextFieldProps>;
    Field4?: FormProps<StepperFieldProps>;
    Field5?: FormProps<StepperFieldProps>;
    Field6?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type NewForm1Props = React.PropsWithChildren<{
    overrides?: NewForm1OverridesProps | undefined | null;
} & {
    onSubmit: (fields: NewForm1InputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onValidate?: NewForm1ValidationValues;
} & React.CSSProperties>;
export default function NewForm1(props: NewForm1Props): React.ReactElement;
