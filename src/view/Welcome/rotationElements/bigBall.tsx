import { Box, Stack } from "@mui/material";
import { useMemo } from "react";
import { isBrowser } from "react-device-detect";

const BigBall = () => {
    const BoxWidth = useMemo(() => {
        if (isBrowser) return "130px";
        return "80px";
    }, [isBrowser]);

    const BoxHeight = useMemo(() => {
        if (isBrowser) return "265px";
        return "150px";
    }, [isBrowser]);

    const ElementSize = useMemo(() => {
        if (isBrowser) return "38px";
        return "23px";
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
                zIndex: 5,
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
                <Box
                    className="merryGoRound-reverse-14s"
                    sx={{
                        width: ElementSize,
                        height: ElementSize,
                        borderRadius: "50%",
                        boxShadow: "0 3px 20px 0 rgba(0, 8, 36, 0.15)",
                        backgroundImage: "linear-gradient(141deg, #e2f4ff 14%, #57b5e2 86%)",
                    }}
                />
            </Stack>
        </Box>
    );
};

export default BigBall;
