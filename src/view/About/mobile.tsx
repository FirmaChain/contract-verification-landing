import { Box, Stack } from "@mui/material";
import { MobileView } from "react-device-detect";
import { FIRMACHAIN_DOCS, VERIFY_TOOL } from "../../constants/links";
import { M_IMG_ABOUT_1, M_IMG_ABOUT_2 } from "../../constants/images";
import { ABOUT_API_DESCRIPTION_MOBILE, ABOUT_API_TITLE, ABOUT_DESCRIPTION_MOBILE, ABOUT_SECTION, ABOUT_TITLE_MOBILE } from "../../constants/about";
import { ContentOuterBox, OutlinedBlueButton, SectionDesc, SectionHead, SectionTitle } from "../../styles";

const Mobile = () => {
    return (
        <MobileView style={{ width: "100%" }}>
            <ContentOuterBox>
                <Stack direction="column" alignItems="center" sx={{ width: "100%", p: "60px 0", gap: "70px" }}>
                    <Stack sx={{ width: "100%", alignItems: "center" }}>
                        <SectionTitle sx={{ color: "#0875f5" }}>{ABOUT_SECTION}</SectionTitle>
                        <SectionHead
                            sx={{
                                maxWidth: "212px",
                                width: "100%",
                                textAlign: "center",
                                pb: "24px",
                            }}
                        >
                            {ABOUT_TITLE_MOBILE}
                        </SectionHead>
                        <SectionDesc
                            sx={{
                                textAlign: "center",
                                width: "310px",
                                color: "#4a4d51",
                                paddingBottom: "30px",
                            }}
                        >
                            {ABOUT_DESCRIPTION_MOBILE}
                        </SectionDesc>
                        <OutlinedBlueButton title="Verify Tool" sx={{ mb: "50px" }} onClick={() => window.open(VERIFY_TOOL, "_blank")} />

                        <Box>
                            <img src={M_IMG_ABOUT_1} alt="" style={{ width: "100%" }} draggable={false} />
                        </Box>
                    </Stack>
                    <Stack sx={{ width: "100%", alignItems: "center" }}>
                        <SectionTitle sx={{ color: "#0875f5" }}>{ABOUT_SECTION}</SectionTitle>
                        <SectionHead sx={{ textAlign: "center", pb: "24px" }}>{ABOUT_API_TITLE}</SectionHead>
                        <SectionDesc
                            sx={{
                                textAlign: "center",
                                color: "#4a4d51",
                                pb: "30px",
                            }}
                        >
                            {ABOUT_API_DESCRIPTION_MOBILE}
                        </SectionDesc>

                        <OutlinedBlueButton title="API Docs" sx={{ mb: "50px" }} onClick={() => window.open(FIRMACHAIN_DOCS, "_blank")} />

                        <Box>
                            <img src={M_IMG_ABOUT_2} alt="" style={{ width: "100%" }} draggable={false} />
                        </Box>
                    </Stack>
                </Stack>
            </ContentOuterBox>
        </MobileView>
    );
};

export default Mobile;
