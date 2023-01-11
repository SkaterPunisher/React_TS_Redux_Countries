import styled from 'styled-components';

export const InfoMeta = styled.div`
  margin-top: 3 rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  aling-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;
