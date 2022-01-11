import { Box, Stack } from "@mui/material";
import { useMemo } from "react";
import { isBrowser } from "react-device-detect";
import { IC_WELCOME_SHOPPING } from "../../../constants/images";

const Cart = () => {
    const BoxWidth = useMemo(() => {
        if (isBrowser) return "440px";
        return "225px";
    }, [isBrowser]);

    const BoxHeight = useMemo(() => {
        if (isBrowser) return "440px";
        return "225px";
    }, [isBrowser]);

    const ElementSize = useMemo(() => {
        if (isBrowser) return "72px";
        return "38px";
    }, [isBrowser]);

    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50.5%)",
                width: BoxWidth,
                height: BoxHeight,
                zIndex: 1,
            }}
        >
            <Stack
                className="merryGoRound-14s"
                sx={{
                    width: BoxWidth,
                    height: BoxHeight,
                    justifyContent: "flex-end",
                }}
            >
                <img
                    src={IC_WELCOME_SHOPPING}
                    alt=""
                    draggable={false}
                    className="merryGoRound-reverse-14s"
                    style={{
                        maxWidth: ElementSize,
                        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                        borderRadius: "50%",
                    }}
                />
            </Stack>
        </Box>
    );
};

export default Cart;
