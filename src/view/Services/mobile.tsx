import { Fragment, useState } from "react";
import { Stack } from "@mui/material";
import { MobileView } from "react-device-detect";
import { IKeyValue } from "../../interface";
import { SectionHead, SectionTitle } from "../../styles";
import { SERVICE_LIST } from "../../constants/common";
import { SERVECES_SECTION, SERVICE_TITLE_MOBILE } from "../../constants/services";
import MobileServiceCard from "../../components/card/MobileServiceCard";
import Carousel from "../../components/carousel/Carousel";

const Mobile = () => {
    const CardSize = 278;
    const CardGap = 16;

    return (
        <MobileView>
            <Stack
                sx={{
                    width: "100%",
                    p: "70px 0 80px 0",
                    alignItems: "center",
                }}
            >
                <SectionTitle
                    sx={{
                        textAlign: "center",
                        color: "#0875f5",
                    }}
                >
                    {SERVECES_SECTION}
                </SectionTitle>
                <SectionHead
                    sx={{
                        pb: "50px",
                        textAlign: "center",
                        color: "#161718",
                        maxWidth: "302px",
                        width: "100%",
                    }}
                >
                    {SERVICE_TITLE_MOBILE}
                </SectionHead>

                <Carousel
                    length={SERVICE_LIST.length}
                    cardSize={CardSize}
                    gap={CardGap}
                    style={{
                        width: "100vw",
                        overflow: "hidden",
                        position: "relative",
                        padding: "0 40px 40px",
                    }}
                    children={
                        <Fragment>
                            {SERVICE_LIST.map((one: IKeyValue, idx: number) => (
                                <MobileServiceCard data={one} key={idx} />
                            ))}
                        </Fragment>
                    }
                />
            </Stack>
        </MobileView>
    );
};

export default Mobile;
