import { Box, Stack, Typography } from "@mui/material";
import { IC_WELCOME_BROWSER, IC_WELCOME_CONTRACT, IC_WELCOME_FOLDER, IC_WELCOME_SHOPPING, IMG_WELCOME_BIG_CIRCLE } from "../../constants/images";
import { Lato, Metropolis } from "../../constants/theme";
import { BrowserView } from "react-device-detect";
import { WELCOME_DESCRIPTION, WELCOME_TITLE } from "../../constants/welcome";
import SmallBall from "./rotationElements/smallBall";
import BigBall from "./rotationElements/bigBall";
import Browser from "./rotationElements/browser";
import Contract from "./rotationElements/contract";
import Folder from "./rotationElements/folder";
import Cart from "./rotationElements/cart";

const Desktop = () => {
    return (
        <BrowserView style={{ width: "100%" }}>
            <Stack
                sx={{
                    width: "100%",
                    alignItems: "center",
                    pt: "100px",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                        width: "100%",
                        maxWidth: "1200px",
                    }}
                >
                    <Stack justifyContent="center" gap="40px" sx={{ maxWidth: "1200px" }}>
                        <Typography
                            sx={{
                                maxWidth: "464px",
                                width: "100%",
                                fontFamily: Metropolis,
                                fontSize: "78px",
                                fontWeight: "bold",
                                lineHeight: "1",
                                letterSpacing: "-1.95px",
                                color: "#fff",
                            }}
                        >
                            {WELCOME_TITLE}
                        </Typography>

                        <Typography
                            sx={{
                                width: "100%",
                                maxWidth: "360px",
                                fontFamily: Lato,
                                fontSize: "20px",
                                lineHeight: "1.4",
                                letterSpacing: "-0.3px",
                                color: "#fff",
                            }}
                        >
                            {WELCOME_DESCRIPTION}
                        </Typography>
                    </Stack>

                    <Stack justifyContent="flex-end">
                        <Stack
                            sx={{
                                position: "relative",
                                maxWidth: "545px",
                                maxHeight: "545px",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <img
                                src={IMG_WELCOME_BIG_CIRCLE}
                                alt=""
                                draggable={false}
                                style={{
                                    maxWidth: "545px",
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
                </Stack>
            </Stack>
        </BrowserView>
    );
};

export default Desktop;
