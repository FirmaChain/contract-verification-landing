import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { Box, Stack } from "@mui/material";
import { isBrowser } from "react-device-detect";
import { PC_IMG_WELCOME_BACKGROUND, M_IMG_WELCOME_BACKGROUND } from "../../constants/images";
import useGlobalState from "../../hooks/useGlobalState";
import Desktop from "./desktop";
import Mobile from "./mobile";

const BACKGROUND = {
    width: "100%",
    backgroundImage: isBrowser ? `url(${PC_IMG_WELCOME_BACKGROUND})` : `url(${M_IMG_WELCOME_BACKGROUND})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: isBrowser ? "720px" : "635px",
    height: "100%",
    boxSizing: "border-box",
    padding: isBrowser ? "0 30px" : "0",
};

const Welcome = () => {
    const { setHeaderState } = useGlobalState();

    const interTopRef = useRef(null);
    const interBottomRef = useRef(null);

    const topIntersection = useIntersection(interTopRef, {
        root: null,
        rootMargin: "0px",
        threshold: 1,
    });

    const bottomIntersection = useIntersection(interBottomRef, {
        root: null,
        rootMargin: "0px",
        threshold: 1,
    });

    useEffect(() => {
        if (topIntersection && bottomIntersection) {
            topIntersection.isIntersecting && bottomIntersection.isIntersecting && setHeaderState(0);

            !topIntersection.isIntersecting && bottomIntersection.isIntersecting && setHeaderState(1);

            !topIntersection.isIntersecting && !bottomIntersection.isIntersecting && setHeaderState(2);
        }
    }, [topIntersection, bottomIntersection]);

    return (
        <Stack sx={{ width: "100%" }}>
            <Box ref={interTopRef} />
            <Stack direction="row" sx={{ ...BACKGROUND }}>
                <Desktop />
                <Mobile />
            </Stack>
            <Box ref={interBottomRef} />
        </Stack>
    );
};

export default Welcome;
