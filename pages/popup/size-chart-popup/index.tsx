import { useState } from 'react';

import Button from '@/ui/button';
import Container from '@/ui/container';

import { SizeChartPopup } from '@/components/common/popups';

import { dataSource, columns } from '@/data/size-chart';

export default function SizeChartPopupPage() {
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
      <SizeChartPopup
        title='Pants Size Chart'
        columns={columns}
        dataSource={dataSource}
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
        }}
      />
    </Container>
  );
}
