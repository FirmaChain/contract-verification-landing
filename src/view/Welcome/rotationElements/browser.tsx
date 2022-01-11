import { Box, Stack } from "@mui/material";
import { useMemo } from "react";
import { isBrowser } from "react-device-detect";
import { IC_WELCOME_BROWSER } from "../../../constants/images";

const Browser = () => {
    const BoxWidth = useMemo(() => {
        if (isBrowser) return "440px";
        return "235px";
    }, [isBrowser]);

    const BoxHeight = useMemo(() => {
        if (isBrowser) return "440px";
        return "235px";
    }, [isBrowser]);

    const ElementSize = useMemo(() => {
        if (isBrowser) return "86px";
        return "43px";
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
                zIndex: 2,
            }}
        >
            <Stack
                className="merryGoRound-14s"
                sx={{
                    width: BoxWidth,
                    height: BoxHeight,
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                }}
            >
                <img
                    src={IC_WELCOME_BROWSER}
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

export default Browser;
