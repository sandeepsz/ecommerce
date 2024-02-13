import { type ComponentProps } from 'react';

import IGGallery from './variant-1';
import { InstagramGallery3 } from './variant-3';

type InstagramGalleryProps =
  | ({
      variant: 1 | 2;
    } & ComponentProps<typeof IGGallery>)
  | ({
      variant: 3;
    } & ComponentProps<typeof InstagramGallery3>);

export const InstagramGallery = (props: InstagramGalleryProps) => {
  if (props.variant === 1 || props.variant === 2) {
    return <IGGallery {...props} />;
  } else if (props.variant === 3) {
    const { variant, ...rest } = props;
    return <InstagramGallery3 {...rest} />;
  }
};
