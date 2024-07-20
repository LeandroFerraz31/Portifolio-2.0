import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.3s ease",
  gap: "10px",
  overflowX: 'hidden',  // Impede o scroll horizontal
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const ButtonComponent: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;
