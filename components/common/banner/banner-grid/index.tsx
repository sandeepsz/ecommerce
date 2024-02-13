import { BannerVariant3, type BannerVariant3Props } from './banner-3';

type BannerProps = {
  variant: 3;
} & BannerVariant3Props;

export const Banner = (props: BannerProps) => {
  if (props.variant === 3) {
    const { variant, ...rest } = props;
    return <BannerVariant3 {...rest} />;
  }
};
