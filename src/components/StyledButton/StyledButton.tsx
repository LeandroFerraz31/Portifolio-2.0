import { styled } from "@mui/material";
// biome-ignore lint/style/useImportType: <explanation>
import { ReactNode } from "react";

interface StyledButtonProps {
    children:ReactNode,
    onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color:theme.palette.primary.contrastText,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.3s ease",
        gap: "10px",
        '&:hover':{
            backgroundColor: theme.palette.secondary.light,
        }
    }));

    return (
        <>
            <StyledButton onClick={onClick} >
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton
