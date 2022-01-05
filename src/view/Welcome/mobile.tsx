import { Stack, Typography } from "@mui/material";
import { MobileView } from "react-device-detect";
import { IMG_WELCOME_BIG_CIRCLE, M_IMG_MAIN_VISUAL } from "../../constants/images";
import { WELCOME_DESCRIPTION_MOBILE, WELCOME_TITLE_MOBILE } from "../../constants/welcome";
import { GRAYef, Lato, Metropolis } from "../../constants/theme";
import BigBall from "./rotationElements/bigBall";
import SmallBall from "./rotationElements/smallBall";
import Browser from "./rotationElements/browser";
import Contract from "./rotationElements/contract";
import Folder from "./rotationElements/folder";
import Cart from "./rotationElements/cart";

const Mobile = () => {
    return (
        <MobileView style={{ width: "100%" }}>
            <Stack direction="column" gap="20px" alignItems="center" sx={{ boxSizing: "border-box", p: "0 30px" }}>
                <Typography
                    sx={{
                        fontFamily: Metropolis,
                        fontSize: "37px",
                        fontWeight: "bold",
                        lineHeight: 1.08,
                        letterSpacing: "-0.93px",
                        color: "#fff",
                        textAlign: "center",
                        pt: "104px",
                    }}
                >
                    {WELCOME_TITLE_MOBILE}
                </Typography>
                <Typography
                    sx={{
                        maxWidth: "278px",
                        width: "100%",
                        fontFamily: Lato,
                        fontSize: "16px",
                        lineHeight: 1.25,
                        letterSpacing: "-0.24px",
                        textAlign: "center",
                        color: GRAYef,
                        pb: "8px",
                    }}
                >
                    {WELCOME_DESCRIPTION_MOBILE}
                </Typography>
            </Stack>

            {/* <Stack>
                <img
                    src={M_IMG_MAIN_VISUAL}
                    alt=""
                    draggable={false}
                    style={{
                        objectFit: "contain",
                        margin: "46px",
                    }}
                />
            </Stack> */}
            <Stack
                justifyContent={"flex-end"}
                alignItems={"center"}
                sx={{
                    paddingTop: "20px",
                }}
            >
                <Stack
                    sx={{
                        position: "relative",
                        maxWidth: "300px",
                        maxHeight: "300px",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <img
                        src={IMG_WELCOME_BIG_CIRCLE}
                        alt=""
                        draggable={false}
                        style={{
                            maxWidth: "300px",
                            width: "100%",
                        }}
                    />

                    <BigBall />
                    <SmallBall />
                    <Browser />
                    <Contract />
                    <Folder />
                    <Cart />
                </Stack>
            </Stack>
        </MobileView>
    );
};

export default Mobile;
