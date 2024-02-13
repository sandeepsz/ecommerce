export interface BannerProps {
  title: string;
  subtitle?: string;
  image: string;
  onClick?: () => void;
  buttonText?: string;
  hasArrow?: boolean;
}
