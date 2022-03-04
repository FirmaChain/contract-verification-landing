import { Stack, Typography } from "@mui/material";
import { MobileView } from "react-device-detect";
import { CONTACT_DESCRIPTION_MOBILE, CONTACT_TITLE } from "../../constants/contact";
import { CONTACT_MAIL } from "../../constants/links";
import { Lato, Metropolis } from "../../constants/theme";
import { ContainedBlueButton, ContentOuterBox } from "../../styles";

const Mobile = () => {
    return (
        <MobileView style={{ width: "100%" }}>
            <ContentOuterBox sx={{ backgroundColor: "#ebf6ff" }}>
                <Stack
                    sx={{
                        width: "100%",
                        alignItems: "center",
                        p: "50px 0",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "30px",
                            fontFamily: Metropolis,
                            color: "#161718",
                            fontWeight: "bold",
                            lineHeight: 1, // 1.87,
                            letterSpacing: "-0.75px",
                            pb: "16px",
                        }}
                    >
                        {CONTACT_TITLE}
                    </Typography>
                    <Typography
                        sx={{
                            width: "266px",
                            fontFamily: Lato,
                            fontSize: "16px",
                            lineHeight: 1.25,
                            letterSpacing: "-0.24px",
                            color: "#4a4d51",
                            pb: "30px",
                            textAlign: "center",
                        }}
                    >
                        {CONTACT_DESCRIPTION_MOBILE}
                    </Typography>
                    <ContainedBlueButton title="Contact us" onClick={() => window.open(`mailto:${CONTACT_MAIL}`)} />
                </Stack>
            </ContentOuterBox>
        </MobileView>
    );
};

export default Mobile;
