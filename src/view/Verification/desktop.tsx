import { Box, Stack } from "@mui/material";
import { Fragment, useMemo } from "react";
import { BrowserView } from "react-device-detect";
import Carousel from "../../components/carousel/Carousel";
import { VERIFICATION_SERVICE_LIST } from "../../constants/common";
import { IMG_VERIFICATION_V1 } from "../../constants/images";
import { VERIFICATION_DESCRIPTION, VERIFICATION_SECTION, VERIFICATION_TITLE } from "../../constants/verification";
import useWindowSize from "../../hooks/useWindowSize";
import { SectionDesc, SectionHead, SectionTitle } from "../../styles";

const Desktop = () => {
    const windowSize = useWindowSize();
    const CardGap = 30;

    const CardSize = useMemo(() => {
        if (windowSize.width === undefined) return 1260 - CardGap * 2;
        let size = windowSize.width > 1200 ? 1260 : windowSize.width;

        return size - CardGap * 2;
    }, [windowSize, CardGap]);

    return (
        <BrowserView>
            <Stack
                sx={{
                    width: "100%",
                    alignItems: "center",
                    p: "130px 0 160px 0",
                    maxWidth: "1200px",
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        width: "100%",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        pb: "84px",
                    }}
                >
                    <Stack direction="column" justifyContent="flex-start">
                        <SectionTitle sx={{ color: "#0875f5" }}>{VERIFICATION_SECTION}</SectionTitle>
                        <SectionHead
                            sx={{
                                maxWidth: "580px",
                                width: "100%",
                            }}
                        >
                            {VERIFICATION_TITLE}
                        </SectionHead>
                    </Stack>
                    <SectionDesc
                        sx={{
                            maxWidth: "383px",
                            width: "100%",
                            color: "#4a4d51",
                            textAlign: "right",
                        }}
                    >
                        {VERIFICATION_DESCRIPTION}
                    </SectionDesc>
                </Stack>
                <Box>
                    <Carousel
                        length={VERIFICATION_SERVICE_LIST.length}
                        cardSize={CardSize}
                        gap={CardGap}
                        style={{
                            width: "100vw",
                            maxWidth: "1260px",
                            overflow: "hidden",
                            position: "relative",
                            paddingBottom: "40px",
                        }}
                        children={
                            <Fragment>
                                {VERIFICATION_SERVICE_LIST.map((value, index) => {
                                    return <img key={index} src={value.imgURL} alt={value.title} style={{ width: `${CardSize}px`, maxWidth: "100%" }} draggable={false} />;
                                })}
                            </Fragment>
                        }
                    />
                </Box>
            </Stack>
        </BrowserView>
    );
};

export default Desktop;
