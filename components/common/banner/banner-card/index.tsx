import { BannerCard4, type BannerCard4Props } from './banner-card-4';

type BannerCardProps = {
  variant: 4;
} & BannerCard4Props;

export const BannerCard = (props: BannerCardProps) => {
  if (props.variant === 4) {
    const { variant, ...rest } = props;
    return <BannerCard4 {...rest} />;
  }
};
