import { FC } from "react";
import { styled } from "styled-components";
interface PaginationItemProps {
  children: React.ReactNode;
  current: boolean;
  onClick: (item: any) => void;
}

const PaginationItem: FC<PaginationItemProps> = ({
  children,
  current,
  onClick,
}) => {
  return (
    <Container
      onClick={onClick}
      current={current}>
      {children}
    </Container>
  );
};

interface PaginationItemStyleProps {
  current: boolean;
}

const Container = styled.div<PaginationItemStyleProps>`
  border-radius: 50%;
  padding: 2px;
  border: ${({ current }) =>
    current ? "1px solid yellow" : "1px solid white"};
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default PaginationItem;