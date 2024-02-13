import styled from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 9px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 36px;
  color: ${({ theme }) => theme.token.black9};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.token.black1};
  }
`;

export const SelectWrapper = styled.div`
  .ant-select {
    max-width: max-content;
  }

  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    max-width: max-content;
  }

  .ant-select-arrow {
    color: ${({ theme }) => theme.token.black9} !important;
  }
`;
