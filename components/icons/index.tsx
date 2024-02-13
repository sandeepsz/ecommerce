import ArrowIcon from './arrow.icon';
import BagIcon from './bag.icon';
import ChevronDownIcon from './chevron-down.icon';
import CloseIcon from './close.icon';
import EmailIcon from './email.icon';
import FacebookIcon from './facebook.icon';
import InstagramIcon from './instagram.icon';
import LockIcon from './lock.icon';
import LogoIcon from './logo.icon';
import MoneyIcon from './money.icon';
import PhoneIcon from './phone.icon';
import SearchIcon from './search.icon';
import TruckIcon from './truck.icon';
import TwitterIcon from './twitter.icon';
import USIcon from './us.icon';
import UserIcon from './user.icon';
import NotFound from './404.icon';
import Filter from './filter.icon.icon';
import FiveCols from './five-cols.icon';
import FourCols from './four-cols.icon';
import ThreeCols from './three-cols.icon';
import TwoColsVertical from './two-cols-vertical.icon';
import TwoColsHorizontal from './two-cols-horizontal.icon';
import ChevronRightIcon from './chevron-right.icon';
import Heart from './heart.icon';
import Help from './help.icon';
import Share from './share.icon';
import CameraIcon from './camera.icon';
import LogoutIcon from './logout.icon';
import EditIcon from './edit.icon';
import TrashIcon from './trash.icon';
import MinusIcon from './minus.icon';
import AddIcon from './add.icon';
import CouponIcon from './coupon.icon';
import PaypalIcon from './paypal.icon';
import GpayIcon from './gpay.icon';
import CreditCardIcon from './creditcard.icon';
import AfterpayIcon from './afterpay.icon';
import BrandingIcon from './branding.icon';
import PhotoIcon from './photo.icon';
import CheckIcon from './check.icon';

export default function Icon({
  type,
  color = 'currentColor',
  size = 28,
}: IconProps) {
  return (
    <>
      {
        {
          search: (
            <SearchIcon
              size={size}
              color={color}
            />
          ),
          user: (
            <UserIcon
              size={size}
              color={color}
            />
          ),
          bag: (
            <BagIcon
              size={size}
              color={color}
            />
          ),
          'chevron-down': (
            <ChevronDownIcon
              size={size}
              color={color}
            />
          ),
          'chevron-right': (
            <ChevronRightIcon
              size={size}
              color={color}
            />
          ),
          close: (
            <CloseIcon
              size={size}
              color={color}
            />
          ),
          logo: (
            <LogoIcon
              size={size}
              color={color}
            />
          ),
          arrow: (
            <ArrowIcon
              size={size}
              color={color}
            />
          ),
          'arrow-left': (
            <ArrowIcon
              size={size}
              color={color}
              direction='left'
            />
          ),
          email: (
            <EmailIcon
              size={size}
              color={color}
            />
          ),
          truck: (
            <TruckIcon
              size={size}
              color={color}
            />
          ),
          lock: (
            <LockIcon
              size={size}
              color={color}
            />
          ),
          phone: (
            <PhoneIcon
              size={size}
              color={color}
            />
          ),
          money: (
            <MoneyIcon
              size={size}
              color={color}
            />
          ),
          instagram: (
            <InstagramIcon
              size={size}
              color={color}
            />
          ),
          facebook: (
            <FacebookIcon
              size={size}
              color={color}
            />
          ),
          twitter: (
            <TwitterIcon
              size={size}
              color={color}
            />
          ),
          us: (
            <USIcon
              size={size}
              color={color}
            />
          ),
          filter: (
            <Filter
              size={size}
              color={color}
            />
          ),
          heart: (
            <Heart
              size={size}
              color={color}
            />
          ),
          help: (
            <Help
              size={size}
              color={color}
            />
          ),
          share: (
            <Share
              size={size}
              color={color}
            />
          ),
          camera: (
            <CameraIcon
              size={size}
              color={color}
            />
          ),
          logout: (
            <LogoutIcon
              size={size}
              color={color}
            />
          ),
          edit: (
            <EditIcon
              size={size}
              color={color}
            />
          ),
          trash: (
            <TrashIcon
              size={size}
              color={color}
            />
          ),
          minus: (
            <MinusIcon
              size={size}
              color={color}
            />
          ),
          add: (
            <AddIcon
              size={size}
              color={color}
            />
          ),
          coupon: (
            <CouponIcon
              size={size}
              color={color}
            />
          ),
          branding: (
            <BrandingIcon
              size={size}
              color={color}
            />
          ),
          paypal: <PaypalIcon size={size} />,
          gpay: <GpayIcon size={size} />,
          'credit-card': (
            <CreditCardIcon
              size={size}
              color={color}
            />
          ),
          photo: (
            <PhotoIcon
              size={size}
              color={color}
            />
          ),
          check: (
            <CheckIcon
              size={size}
              color={color}
            />
          ),
          'five-cols': (
            <FiveCols
              size={size}
              color={color}
            />
          ),
          'four-cols': (
            <FourCols
              size={size}
              color={color}
            />
          ),
          'three-cols': (
            <ThreeCols
              size={size}
              color={color}
            />
          ),
          'two-cols-vertical': (
            <TwoColsVertical
              size={size}
              color={color}
            />
          ),
          'two-cols-horizontal': (
            <TwoColsHorizontal
              size={size}
              color={color}
            />
          ),
          'not-found': <NotFound color={color} />,
          'after-pay': <AfterpayIcon size={size} />,
        }[type]
      }
    </>
  );
}

export type IconType =
  | 'search'
  | 'user'
  | 'bag'
  | 'chevron-down'
  | 'chevron-right'
  | 'close'
  | 'logo'
  | 'arrow'
  | 'arrow-left'
  | 'email'
  | 'lock'
  | 'phone'
  | 'money'
  | 'truck'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'us'
  | 'not-found'
  | 'filter'
  | 'heart'
  | 'help'
  | 'share'
  | 'logout'
  | 'five-cols'
  | 'four-cols'
  | 'three-cols'
  | 'two-cols-vertical'
  | 'two-cols-horizontal'
  | 'camera'
  | 'edit'
  | 'trash'
  | 'minus'
  | 'add'
  | 'coupon'
  | 'paypal'
  | 'gpay'
  | 'credit-card'
  | 'after-pay'
  | 'branding'
  | 'photo'
  | 'check';

export type IconProps = {
  type: IconType;
  size?: number;
  color?: string;
};
