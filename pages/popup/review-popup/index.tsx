import { useState } from 'react';

import Button from '@/ui/button';
import Container from '@/ui/container';

import { ReviewPopup } from '@/components/common/popups';

export default function ReviewPopupPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Container>
      <Button
        onClick={() => {
          setIsPopupOpen(true);
        }}
      >
        Open Popup
      </Button>
      <ReviewPopup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
        }}
      />
    </Container>
  );
}
