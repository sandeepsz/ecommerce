import { useState } from 'react';

import Button from '@/ui/button';
import Container from '@/ui/container';

import { SuccessPopup } from '@/components/common/popups';

export default function SuccessPopupPage() {
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
      <SuccessPopup
        title='Thank you!'
        message='Your review was successfully submitted.'
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
        }}
      />
    </Container>
  );
}
