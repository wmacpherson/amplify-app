/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Predictions(props) {
  const { prediction, overrides, ...rest } = props;
  return (
    <View
      width="848px"
      height="36px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Predictions")}
    >
      <View
        width="848px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(175,173,190,1)"
        {...getOverrideProps(overrides, "Whole")}
      ></View>
      <View
        width="162px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="11.11%"
        left="0.47%"
        right="80.42%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,13,128,1)"
        {...getOverrideProps(overrides, "Info Container")}
      ></View>
      <View
        width="197px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="11.11%"
        left="20.28%"
        right="56.49%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,13,128,1)"
        {...getOverrideProps(overrides, "Predict Container")}
      ></View>
      <View
        width="225px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="11.11%"
        left="44.22%"
        right="29.25%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,13,128,1)"
        {...getOverrideProps(overrides, "Placement Container")}
      ></View>
      <View
        width="236px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="11.11%"
        left="71.46%"
        right="0.71%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,13,128,1)"
        {...getOverrideProps(overrides, "Final Container")}
      ></View>
      <Text
        fontFamily="Open Sans"
        fontSize="15px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20.42724609375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="78px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.22%"
        bottom="22.22%"
        left="1.06%"
        right="89.74%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={prediction?.stock_ticker}
        {...getOverrideProps(overrides, "Stock Sudo")}
      ></Text>
      <Text
        fontFamily="Open Sans"
        fontSize="15px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20.42724609375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.22%"
        bottom="22.22%"
        left="11.56%"
        right="81.84%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={prediction?.initial_price}
        {...getOverrideProps(overrides, "Current Price")}
      ></Text>
      <Text
        fontFamily="Open Sans"
        fontSize="15px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20.42724609375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="99px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.22%"
        bottom="22.22%"
        left="45.64%"
        right="42.69%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={prediction?.initial_price}
        {...getOverrideProps(overrides, "Placement Price")}
      ></Text>
      <Text
        fontFamily="Open Sans"
        fontSize="15px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20.42724609375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="76px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.22%"
        bottom="22.22%"
        left="21.34%"
        right="69.69%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={prediction?.predicition_price}
        {...getOverrideProps(overrides, "Predict Price")}
      ></Text>
      <Text
        fontFamily="Open Sans"
        fontSize="15px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20.42724609375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.22%"
        bottom="22.22%"
        left="61.08%"
        right="31.49%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={prediction?.initial_date}
        {...getOverrideProps(overrides, "Placement Date")}
      ></Text>
      <Text
        fontFamily="Open Sans"
        fontSize="15px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20.42724609375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="65px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.22%"
        bottom="22.22%"
        left="34.55%"
        right="57.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={prediction?.predicition_date}
        {...getOverrideProps(overrides, "Predict Date")}
      ></Text>
      <Text
        fontFamily="Open Sans"
        fontSize="15px"
        fontWeight="400"
        color="rgba(0,255,0,1)"
        lineHeight="20.42724609375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="67px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.22%"
        bottom="22.22%"
        left="72.17%"
        right="19.93%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="+350"
        {...getOverrideProps(overrides, "Point Gain")}
      ></Text>
    </View>
  );
}
