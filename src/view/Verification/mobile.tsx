import { Box, Stack } from "@mui/material";
import { Fragment, useMemo } from "react";
import { MobileView } from "react-device-detect";
import Carousel from "../../components/carousel/Carousel";
import { VERIFICATION_SERVICE_LIST } from "../../constants/common";
import { VERIFICATION_DESCRIPTION_MOBILE, VERIFICATION_SECTION, VERIFICATION_TITLE_MOBILE } from "../../constants/verification";
import useWindowSize from "../../hooks/useWindowSize";
import { SectionDesc, SectionHead, SectionTitle } from "../../styles";

const Mobile = () => {
    const windowSize = useWindowSize();
    const CardGap = 30;

    const CardSize = useMemo(() => {
        if (windowSize.width === undefined) return 330;
        return windowSize.width - CardGap * 2;
    }, [windowSize, CardGap]);

    return (
        <MobileView>
            <Stack direction="column" alignItems="center" sx={{ width: "100%", p: "70px 0", gap: "50px" }}>
                <Stack alignItems="center">
                    <SectionTitle sx={{ color: "#0875f5" }}>{VERIFICATION_SECTION}</SectionTitle>
                    <SectionHead
                        sx={{
                            color: "#161618",
                            textAlign: "center",
                            pb: "24px",
                        }}
                    >
                        {VERIFICATION_TITLE_MOBILE}
                    </SectionHead>
                    <SectionDesc
                        sx={{
                            color: "#4a4d51",
                            maxWidth: "340px",
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        {VERIFICATION_DESCRIPTION_MOBILE}
                    </SectionDesc>
                </Stack>
                <Box>
                    <Carousel
                        length={VERIFICATION_SERVICE_LIST.length}
                        cardSize={CardSize}
                        gap={CardGap}
                        style={{
                            width: "100vw",
                            overflow: "hidden",
                            position: "relative",
                            paddingBottom: "40px",
                        }}
                        children={
                            <Fragment>
                                {VERIFICATION_SERVICE_LIST.map((value, index) => {
                                    return <img key={index} src={value.imgURL} alt={value.title} style={{ width: `${CardSize}px`, objectFit: "contain" }} draggable={false} />;
                                })}
                            </Fragment>
                        }
                    />
                </Box>
            </Stack>
        </MobileView>
    );
};

export default Mobile;
