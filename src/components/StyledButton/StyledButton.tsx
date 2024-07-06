import { styled } from "@mui/material";
// biome-ignore lint/style/useImportType: <explanation>
import { ReactNode } from "react";

interface StyledButtonProps {
    children:ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

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
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton
