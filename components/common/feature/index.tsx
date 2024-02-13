import { FeatureVariant1, type FeatureVariant1Props } from './variant-1';
import { FeatureVariant2, type FeatureVariant2Props } from './variant-2';
import { FeatureVariant3, type FeatureVariant3Props } from './variant-3';
import { FeatureVariant4, type FeatureVariant4Props } from './variant-4';
import { FeatureVariant5, type FeatureVariant5Props } from './variant-5';

import type { CommonFeaturePropsT } from './types';
import { FeatureVariant6Props, Variant6 } from './variant-6';

type Variant1 = {
  variant: 1;
} & FeatureVariant1Props;

type Variant2 = {
  variant: 2;
} & FeatureVariant2Props;

type Variant3 = {
  variant: 3;
} & FeatureVariant3Props;

type Variant4 = {
  variant: 4;
} & FeatureVariant4Props;

type Variant5 = {
  variant: 5;
} & FeatureVariant5Props;

type Variant6And7 = {
  variant: 6 | 7;
} & FeatureVariant6Props;

type Feature = CommonFeaturePropsT &
  (Variant1 | Variant2 | Variant3 | Variant4 | Variant5 | Variant6And7);

export const Feature = (props: Feature) => {
  if (props.variant === 1) {
    const { variant, ...rest } = props;
    return <FeatureVariant1 {...rest} />;
  } else if (props.variant === 2) {
    const { variant, ...rest } = props;
    return <FeatureVariant2 {...rest} />;
  } else if (props.variant === 3) {
    const { variant, ...rest } = props;
    return <FeatureVariant3 {...rest} />;
  } else if (props.variant === 4) {
    const { variant, ...rest } = props;
    return <FeatureVariant4 {...rest} />;
  } else if (props.variant === 5) {
    const { variant, ...rest } = props;
    return <FeatureVariant5 {...rest} />;
  } else if (props.variant === 6) {
    return <Variant6 {...props} />;
  } else if (props.variant === 7) {
    return (
      <Variant6
        {...props}
        variant={7}
      />
    );
  }
};
