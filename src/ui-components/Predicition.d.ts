/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SliderFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PredicitionInputValues = {
    stock_ticker?: string;
    stock?: string;
    initial_price?: number;
    initial_date?: string;
    predicition_price?: number;
    predicition_date?: string;
    reasoning?: string;
    positive_error?: number;
    negative_error?: number;
    positive_kill_error?: number;
    negative_kill_error?: number;
};
export declare type PredicitionValidationValues = {
    stock_ticker?: ValidationFunction<string>;
    stock?: ValidationFunction<string>;
    initial_price?: ValidationFunction<number>;
    initial_date?: ValidationFunction<string>;
    predicition_price?: ValidationFunction<number>;
    predicition_date?: ValidationFunction<string>;
    reasoning?: ValidationFunction<string>;
    positive_error?: ValidationFunction<number>;
    negative_error?: ValidationFunction<number>;
    positive_kill_error?: ValidationFunction<number>;
    negative_kill_error?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PredicitionOverridesProps = {
    PredicitionGrid?: FormProps<GridProps>;
    stock_ticker?: FormProps<TextFieldProps>;
    stock?: FormProps<TextFieldProps>;
    initial_price?: FormProps<TextFieldProps>;
    initial_date?: FormProps<TextFieldProps>;
    predicition_price?: FormProps<TextFieldProps>;
    predicition_date?: FormProps<TextFieldProps>;
    reasoning?: FormProps<TextAreaFieldProps>;
    positive_error?: FormProps<SliderFieldProps>;
    negative_error?: FormProps<SliderFieldProps>;
    positive_kill_error?: FormProps<SliderFieldProps>;
    negative_kill_error?: FormProps<SliderFieldProps>;
} & EscapeHatchProps;
export declare type PredicitionProps = React.PropsWithChildren<{
    overrides?: PredicitionOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PredicitionInputValues) => PredicitionInputValues;
    onSuccess?: (fields: PredicitionInputValues) => void;
    onError?: (fields: PredicitionInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PredicitionInputValues) => PredicitionInputValues;
    onValidate?: PredicitionValidationValues;
} & React.CSSProperties>;
export default function Predicition(props: PredicitionProps): React.ReactElement;
