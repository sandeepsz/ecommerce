export type ImagePropT = {
  src: string;
  alt: string;
};

export type VideoPropT = {
  src: string;
  thumbnail: ImagePropT;
};

export type CommonFeaturePropsT = {
  tagline?: string;
  title: string;
  subtitle: string;
};
