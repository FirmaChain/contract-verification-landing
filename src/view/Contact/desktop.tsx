import { Stack, Typography } from "@mui/material";
import { BrowserView } from "react-device-detect";
import { CONTACT_DESCRIPTION, CONTACT_TITLE } from "../../constants/contact";
import { CONTACT_MAIL } from "../../constants/links";
import { Lato, Metropolis } from "../../constants/theme";
import { ContainedBlueButton, ContentOuterBox } from "../../styles";

const Desktop = () => {
    return (
        <BrowserView style={{ width: "100%" }}>
            <ContentOuterBox>
                <Stack
                    sx={{
                        maxWidth: "1200px",
                        width: "100%",
                        pb: "100px",
                        alignItems: "center",
                    }}
                >
                    <Stack
                        sx={{
                            width: "100%",
                            height: "310px",
                            borderRadius: "16px",
                            backgroundColor: "#ebf6ff",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "44px",
                                fontFamily: Metropolis,
                                color: "#161718",
                                fontWeight: "bold",
                                lineHeight: 1,
                                letterSpacing: "-1.1px",
                                pb: "20px",
                            }}
                        >
                            {CONTACT_TITLE}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: Lato,
                                fontSize: "18px",
                                lineHeight: 1.22,
                                letterSpacing: "-0.27px",
                                color: "#4a4d51",
                                pb: "36px",
                            }}
                        >
                            {CONTACT_DESCRIPTION}
                        </Typography>
                        <ContainedBlueButton title="Contact us" onClick={() => window.open(`mailto:${CONTACT_MAIL}`)} />
                    </Stack>
                </Stack>
            </ContentOuterBox>
        </BrowserView>
    );
};

export default Desktop;
