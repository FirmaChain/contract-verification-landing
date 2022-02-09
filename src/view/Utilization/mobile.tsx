import { Fragment } from "react";
import { Stack } from "@mui/material";
import { MobileView } from "react-device-detect";
import { IKeyValue } from "../../interface";
import { UTILIZATION_DATA } from "../../constants/common";
import { UTIL_DESCRIPTION_MOBILE, UTIL_SECTION, UTIL_TITLE_MOBILE } from "../../constants/utilization";
import { SectionDesc, SectionHead, SectionTitle } from "../../styles";
import MobileUtilizationCard from "../../components/card/MobileUtilizationCard";
import Carousel from "../../components/carousel/Carousel";

const Mobile = () => {
    const CardSize = 278;
    const CardGap = 30;

    return (
        <MobileView>
            <Stack alignItems="center" p="60px 0 70px 0">
                <Stack alignItems="center" p="0 16px">
                    <SectionTitle sx={{ color: "#0875f5" }}>{UTIL_SECTION}</SectionTitle>
                    <SectionHead sx={{ textAlign: "center", pb: "24px" }}>{UTIL_TITLE_MOBILE}</SectionHead>
                    <SectionDesc
                        sx={{
                            color: "#4a4d51",
                            textAlign: "center",
                            pb: "60px",
                        }}
                    >
                        {UTIL_DESCRIPTION_MOBILE}
                    </SectionDesc>
                </Stack>
                <Carousel
                    length={UTILIZATION_DATA.length}
                    cardSize={CardSize}
                    gap={CardGap}
                    style={{
                        width: "100vw",
                        overflow: "hidden",
                        position: "relative",
                        padding: "0 25px 40px",
                    }}
                    children={
                        <Fragment>
                            {UTILIZATION_DATA.map((one: IKeyValue, idx: number) => (
                                <MobileUtilizationCard key={idx} data={one} />
                            ))}
                        </Fragment>
                    }
                />
            </Stack>
        </MobileView>
    );
};

export default Mobile;
