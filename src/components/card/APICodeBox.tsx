import { Box, Button, Stack } from "@mui/material";
import { Fragment, useCallback, useMemo, useState } from "react";
import { BrowserView, isBrowser, MobileView } from "react-device-detect";
import {
    IMG_API_CODE_CHECK_CONTRACT_OWNER,
    IMG_API_CODE_GET_CONTRACT_FILE_DATA,
    IMG_API_CODE_GET_CONTRACT_LOG_DATA,
    IMG_API_CODE_WRITE_CONTRACT_FILE_ON_CHAIN,
    IMG_API_CODE_WRITE_CONTRACT_LOG_ON_CHAIN,
    IMG_VERIFY_API,
    M_IMG_VERIFY_API,
    M_IMG_API_CODE_WRITE_CONTRACT_FILE_ON_CHAIN,
    M_IMG_API_CODE_WRITE_CONTRACT_LOG_ON_CHAIN,
    M_IMG_API_CODE_GET_CONTRACT_FILE_DATA,
    M_IMG_API_CODE_GET_CONTRACT_LOG_DATA,
    M_IMG_API_CODE_CHECK_CONTRACT_OWNER,
    IMG_VERIFY_API_V2,
    M_IMG_VERIFY_API_V2,
} from "../../constants/images";
import { Lato } from "../../constants/theme";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "../carousel/Carousel";
import Select from "../select/APISelect";

interface ICodeBoxProps {
    status: number;
}

const MenuButton = ({ title, now, value, top, onClick }: { title: string; now: number; value: number; top: number; onClick: Function }) => (
    <Button
        onClick={() => onClick(value)}
        variant="outlined"
        sx={{
            border: "none !important",
            textTransform: "none",
            fontSize: "16px",
            fontFamily: Lato,
            lineHeight: 1.38,
            p: 0,

            letterSpacing: "-0.24px",
            width: "196px",
            height: "52px",
            borderRadius: "4px",
            backgroundColor: now === value ? "#3E4555 !important" : "#283042",
            color: "#fff",

            position: "absolute",
            top: `${top}px`,
            left: "13px",
        }}
    >
        {title}
    </Button>
);

const APICodeBox = () => {
    const windowSize = useWindowSize();

    const CardsArray = ["Module", "CosmWasm"];

    const [idx, setIdx] = useState(0);

    const GapSize = useMemo(() => {
        if (isBrowser) return 30;
        return 16;
    }, [isBrowser]);

    const CardSize = useMemo(() => {
        if (isBrowser) return 894;
        if (windowSize.width === undefined) return 288;
        return windowSize.width - GapSize;
    }, [isBrowser, windowSize]);

    const CODE_IMG_LIST = [
        IMG_API_CODE_WRITE_CONTRACT_FILE_ON_CHAIN,
        IMG_API_CODE_WRITE_CONTRACT_LOG_ON_CHAIN,
        IMG_API_CODE_GET_CONTRACT_FILE_DATA,
        IMG_API_CODE_GET_CONTRACT_LOG_DATA,
        IMG_API_CODE_CHECK_CONTRACT_OWNER,
    ];

    const MOBILE_CODE_IMG_LIST = [
        M_IMG_API_CODE_WRITE_CONTRACT_FILE_ON_CHAIN,
        M_IMG_API_CODE_WRITE_CONTRACT_LOG_ON_CHAIN,
        M_IMG_API_CODE_GET_CONTRACT_FILE_DATA,
        M_IMG_API_CODE_GET_CONTRACT_LOG_DATA,
        M_IMG_API_CODE_CHECK_CONTRACT_OWNER,
    ];

    const CodeBoxRender = useCallback(
        ({ status }: ICodeBoxProps) => {
            switch (status) {
                case 1:
                    if (isBrowser) {
                        return <img src={IMG_VERIFY_API_V2} alt="" style={{ maxWidth: `${CardSize}px` }} draggable={false} />;
                    } else {
                        return (
                            <Stack gap="20px">
                                <Select idx={idx} setIdx={setIdx} disabled={true} />

                                <Box sx={{ position: "relative" }}>
                                    <img src={M_IMG_VERIFY_API_V2} alt="" style={{ width: "100%" }} draggable={false} />
                                </Box>
                            </Stack>
                        );
                    }
                case 0:
                default:
                    if (isBrowser) {
                        return (
                            <Stack sx={{ position: "relative" }}>
                                <img src={IMG_VERIFY_API} alt="" style={{ maxWidth: `${CardSize}px` }} draggable={false} />
                                <img
                                    src={CODE_IMG_LIST[idx]}
                                    alt=""
                                    draggable={false}
                                    style={{
                                        position: "absolute",
                                        top: "80px",
                                        left: "280px",
                                        width: "511px",
                                    }}
                                />
                                <MenuButton title="Create contract file" now={idx} value={0} top={63} onClick={setIdx} />
                                <MenuButton title="Add contract log" now={idx} value={1} top={128} onClick={setIdx} />
                                <MenuButton title="Get contract file" now={idx} value={2} top={193} onClick={setIdx} />
                                <MenuButton title="Get contract log" now={idx} value={3} top={258} onClick={setIdx} />
                                <MenuButton title="Use contract utils" now={idx} value={4} top={323} onClick={setIdx} />
                            </Stack>
                        );
                    } else {
                        return (
                            <Stack gap="20px">
                                <Select idx={idx} setIdx={setIdx} />

                                <Box sx={{ position: "relative" }}>
                                    <img src={M_IMG_VERIFY_API} alt="" style={{ width: "100%" }} draggable={false} />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "78px",
                                            left: "24px",
                                            width: "calc(100% - 25px)",
                                            height: "calc(100% - 102px)",
                                            overflow: "scroll",
                                        }}
                                    >
                                        <img src={MOBILE_CODE_IMG_LIST[idx]} alt="" style={{ width: "288px" }} draggable={false} />
                                    </Box>
                                </Box>
                            </Stack>
                        );
                    }
            }
        },
        [isBrowser, idx]
    );

    return (
        <Fragment>
            <BrowserView>
                <Carousel
                    length={CardsArray.length}
                    cardSize={CardSize}
                    gap={GapSize}
                    style={{
                        width: `${CardSize + GapSize}px`,
                        overflow: "hidden",
                        position: "relative",
                        paddingBottom: "40px",
                    }}
                    children={
                        <Fragment>
                            {CardsArray.map((value, index) => {
                                return <CodeBoxRender key={index} status={index} />;
                            })}
                        </Fragment>
                    }
                />
            </BrowserView>
            <MobileView>
                <Carousel
                    length={CardsArray.length}
                    cardSize={CardSize - GapSize}
                    gap={GapSize}
                    style={{
                        width: "100vw",
                        overflow: "hidden",
                        position: "relative",
                        paddingBottom: "40px",
                    }}
                    children={
                        <Fragment>
                            {CardsArray.map((value, index) => {
                                return <CodeBoxRender key={index} status={index} />;
                            })}
                        </Fragment>
                    }
                />
            </MobileView>
        </Fragment>
    );
};

export default APICodeBox;
