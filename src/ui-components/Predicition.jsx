/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Prediction } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SliderField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function Predicition(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    stock_ticker: undefined,
    stock: undefined,
    initial_price: undefined,
    initial_date: undefined,
    predicition_price: undefined,
    predicition_date: undefined,
    reasoning: undefined,
    positive_error: 0,
    negative_error: 0,
    positive_kill_error: 0,
    negative_kill_error: 0,
  };
  const [stock_ticker, setStock_ticker] = React.useState(
    initialValues.stock_ticker
  );
  const [stock, setStock] = React.useState(initialValues.stock);
  const [initial_price, setInitial_price] = React.useState(
    initialValues.initial_price
  );
  const [initial_date, setInitial_date] = React.useState(
    initialValues.initial_date
  );
  const [predicition_price, setPredicition_price] = React.useState(
    initialValues.predicition_price
  );
  const [predicition_date, setPredicition_date] = React.useState(
    initialValues.predicition_date
  );
  const [reasoning, setReasoning] = React.useState(initialValues.reasoning);
  const [positive_error, setPositive_error] = React.useState(
    initialValues.positive_error
  );
  const [negative_error, setNegative_error] = React.useState(
    initialValues.negative_error
  );
  const [positive_kill_error, setPositive_kill_error] = React.useState(
    initialValues.positive_kill_error
  );
  const [negative_kill_error, setNegative_kill_error] = React.useState(
    initialValues.negative_kill_error
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStock_ticker(initialValues.stock_ticker);
    setStock(initialValues.stock);
    setInitial_price(initialValues.initial_price);
    setInitial_date(initialValues.initial_date);
    setPredicition_price(initialValues.predicition_price);
    setPredicition_date(initialValues.predicition_date);
    setReasoning(initialValues.reasoning);
    setPositive_error(initialValues.positive_error);
    setNegative_error(initialValues.negative_error);
    setPositive_kill_error(initialValues.positive_kill_error);
    setNegative_kill_error(initialValues.negative_kill_error);
    setErrors({});
  };
  const validations = {
    stock_ticker: [],
    stock: [],
    initial_price: [],
    initial_date: [],
    predicition_price: [],
    predicition_date: [],
    reasoning: [],
    positive_error: [],
    negative_error: [],
    positive_kill_error: [],
    negative_kill_error: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          stock_ticker,
          stock,
          initial_price,
          initial_date,
          predicition_price,
          predicition_date,
          reasoning,
          positive_error,
          negative_error,
          positive_kill_error,
          negative_kill_error,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Prediction(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "Predicition")}
    >
      <TextField
        label="Stock Symbol"
        isRequired={false}
        isReadOnly={false}
        placeholder="Please Choose a Stock from the Home Page"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stock_ticker: value,
              stock,
              initial_price,
              initial_date,
              predicition_price,
              predicition_date,
              reasoning,
              positive_error,
              negative_error,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.stock_ticker ?? value;
          }
          if (errors.stock_ticker?.hasError) {
            runValidationTasks("stock_ticker", value);
          }
          setStock_ticker(value);
        }}
        onBlur={() => runValidationTasks("stock_ticker", stock_ticker)}
        errorMessage={errors.stock_ticker?.errorMessage}
        hasError={errors.stock_ticker?.hasError}
        {...getOverrideProps(overrides, "stock_ticker")}
      ></TextField>
      <TextField
        label="Stock"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock: value,
              initial_price,
              initial_date,
              predicition_price,
              predicition_date,
              reasoning,
              positive_error,
              negative_error,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.stock ?? value;
          }
          if (errors.stock?.hasError) {
            runValidationTasks("stock", value);
          }
          setStock(value);
        }}
        onBlur={() => runValidationTasks("stock", stock)}
        errorMessage={errors.stock?.errorMessage}
        hasError={errors.stock?.hasError}
        {...getOverrideProps(overrides, "stock")}
      ></TextField>
      <TextField
        label="Initial price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              initial_price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price: value,
              initial_date,
              predicition_price,
              predicition_date,
              reasoning,
              positive_error,
              negative_error,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.initial_price ?? value;
          }
          if (errors.initial_price?.hasError) {
            runValidationTasks("initial_price", value);
          }
          setInitial_price(value);
        }}
        onBlur={() => runValidationTasks("initial_price", initial_price)}
        errorMessage={errors.initial_price?.errorMessage}
        hasError={errors.initial_price?.hasError}
        {...getOverrideProps(overrides, "initial_price")}
      ></TextField>
      <TextField
        label="Initial date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price,
              initial_date: value,
              predicition_price,
              predicition_date,
              reasoning,
              positive_error,
              negative_error,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.initial_date ?? value;
          }
          if (errors.initial_date?.hasError) {
            runValidationTasks("initial_date", value);
          }
          setInitial_date(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("initial_date", initial_date)}
        errorMessage={errors.initial_date?.errorMessage}
        hasError={errors.initial_date?.hasError}
        {...getOverrideProps(overrides, "initial_date")}
      ></TextField>
      <TextField
        label="Predicition price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              predicition_price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price,
              initial_date,
              predicition_price: value,
              predicition_date,
              reasoning,
              positive_error,
              negative_error,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.predicition_price ?? value;
          }
          if (errors.predicition_price?.hasError) {
            runValidationTasks("predicition_price", value);
          }
          setPredicition_price(value);
        }}
        onBlur={() =>
          runValidationTasks("predicition_price", predicition_price)
        }
        errorMessage={errors.predicition_price?.errorMessage}
        hasError={errors.predicition_price?.hasError}
        {...getOverrideProps(overrides, "predicition_price")}
      ></TextField>
      <TextField
        label="Predicition date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price,
              initial_date,
              predicition_price,
              predicition_date: value,
              reasoning,
              positive_error,
              negative_error,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.predicition_date ?? value;
          }
          if (errors.predicition_date?.hasError) {
            runValidationTasks("predicition_date", value);
          }
          setPredicition_date(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("predicition_date", predicition_date)}
        errorMessage={errors.predicition_date?.errorMessage}
        hasError={errors.predicition_date?.hasError}
        {...getOverrideProps(overrides, "predicition_date")}
      ></TextField>
      <TextAreaField
        label="Reasoning"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price,
              initial_date,
              predicition_price,
              predicition_date,
              reasoning: value,
              positive_error,
              negative_error,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.reasoning ?? value;
          }
          if (errors.reasoning?.hasError) {
            runValidationTasks("reasoning", value);
          }
          setReasoning(value);
        }}
        onBlur={() => runValidationTasks("reasoning", reasoning)}
        errorMessage={errors.reasoning?.errorMessage}
        hasError={errors.reasoning?.hasError}
        {...getOverrideProps(overrides, "reasoning")}
      ></TextAreaField>
      <SliderField
        label="Positive error"
        isDisabled={false}
        descriptiveText=""
        isRequired={false}
        value={positive_error}
        onChange={(e) => {
          let value = e;
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              positive_error: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price,
              initial_date,
              predicition_price,
              predicition_date,
              reasoning,
              positive_error: value,
              negative_error,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.positive_error ?? value;
          }
          if (errors.positive_error?.hasError) {
            runValidationTasks("positive_error", value);
          }
          setPositive_error(value);
        }}
        onBlur={() => runValidationTasks("positive_error", positive_error)}
        errorMessage={errors.positive_error?.errorMessage}
        hasError={errors.positive_error?.hasError}
        {...getOverrideProps(overrides, "positive_error")}
      ></SliderField>
      <SliderField
        label="Negative error"
        isDisabled={false}
        isRequired={false}
        value={negative_error}
        onChange={(e) => {
          let value = e;
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              negative_error: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price,
              initial_date,
              predicition_price,
              predicition_date,
              reasoning,
              positive_error,
              negative_error: value,
              positive_kill_error,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.negative_error ?? value;
          }
          if (errors.negative_error?.hasError) {
            runValidationTasks("negative_error", value);
          }
          setNegative_error(value);
        }}
        onBlur={() => runValidationTasks("negative_error", negative_error)}
        errorMessage={errors.negative_error?.errorMessage}
        hasError={errors.negative_error?.hasError}
        {...getOverrideProps(overrides, "negative_error")}
      ></SliderField>
      <SliderField
        label="Positive kill error"
        isDisabled={false}
        isRequired={false}
        value={positive_kill_error}
        onChange={(e) => {
          let value = e;
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              positive_kill_error: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price,
              initial_date,
              predicition_price,
              predicition_date,
              reasoning,
              positive_error,
              negative_error,
              positive_kill_error: value,
              negative_kill_error,
            };
            const result = onChange(modelFields);
            value = result?.positive_kill_error ?? value;
          }
          if (errors.positive_kill_error?.hasError) {
            runValidationTasks("positive_kill_error", value);
          }
          setPositive_kill_error(value);
        }}
        onBlur={() =>
          runValidationTasks("positive_kill_error", positive_kill_error)
        }
        errorMessage={errors.positive_kill_error?.errorMessage}
        hasError={errors.positive_kill_error?.hasError}
        {...getOverrideProps(overrides, "positive_kill_error")}
      ></SliderField>
      <SliderField
        label="Negative kill error"
        isDisabled={false}
        isRequired={false}
        value={negative_kill_error}
        onChange={(e) => {
          let value = e;
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              negative_kill_error: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              stock_ticker,
              stock,
              initial_price,
              initial_date,
              predicition_price,
              predicition_date,
              reasoning,
              positive_error,
              negative_error,
              positive_kill_error,
              negative_kill_error: value,
            };
            const result = onChange(modelFields);
            value = result?.negative_kill_error ?? value;
          }
          if (errors.negative_kill_error?.hasError) {
            runValidationTasks("negative_kill_error", value);
          }
          setNegative_kill_error(value);
        }}
        onBlur={() =>
          runValidationTasks("negative_kill_error", negative_kill_error)
        }
        errorMessage={errors.negative_kill_error?.errorMessage}
        hasError={errors.negative_kill_error?.hasError}
        {...getOverrideProps(overrides, "negative_kill_error")}
      ></SliderField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
