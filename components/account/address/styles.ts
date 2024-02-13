import { styled } from 'styled-components';

export const StyledAddressCard = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.token.black3};
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
