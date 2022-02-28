import { Stack } from "@mui/material";
import { MobileView } from "react-device-detect";
import { API_DESCRIPTION_MOBILE, API_SECTION, API_TITLE_COLORED, API_TITLE_MOBILE } from "../../constants/verifyApi";
import { SectionDesc, SectionHead, SectionTitle, OutlinedWhiteButton, ContentOuterBox } from "../../styles";
import APICodeBox from "../../components/card/APICodeBox";
import { FIRMACHAIN_DOCS } from "../../constants/links";

const Mobile = () => {
    return (
        <MobileView style={{ width: "100%" }}>
            <Stack
                alignItems="center"
                sx={{
                    width: "100%",
                    backgroundColor: "#051527",
                    p: "60px 0 70px 0",
                }}
            >
                <ContentOuterBox>
                    <Stack gap="50px">
                        <Stack alignItems="center">
                            <SectionTitle sx={{ color: "#fff" }}>{API_SECTION}</SectionTitle>
                            <SectionHead
                                sx={{
                                    maxWidth: "242px",
                                    width: "100%",
                                    color: "#fff",
                                    textAlign: "center",
                                }}
                            >
                                {API_TITLE_MOBILE}
                            </SectionHead>
                            <SectionHead
                                sx={{
                                    textAlign: "center",
                                    color: "transparent",
                                    background: "linear-gradient(to left, #fff 0%, #0769D9 100%)",
                                    WebkitBackgroundClip: "text",
                                    pb: "30px",
                                }}
                            >
                                {API_TITLE_COLORED}
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    color: "#d0d5e0",
                                    maxWidth: "342px",
                                    width: "100%",
                                    textAlign: "center",
                                    pb: "50px",
                                }}
                            >
                                {API_DESCRIPTION_MOBILE}
                            </SectionDesc>

                            <OutlinedWhiteButton title="API Docs" onClick={() => window.open(FIRMACHAIN_DOCS, "_blank")} />
                        </Stack>
                        <APICodeBox />
                    </Stack>
                </ContentOuterBox>
            </Stack>
        </MobileView>
    );
};

export default Mobile;
