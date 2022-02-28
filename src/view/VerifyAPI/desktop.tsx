import { Box, Stack } from "@mui/material";
import { BrowserView } from "react-device-detect";
import { API_DESCRIPTION, API_SECTION, API_TITLE, API_TITLE_COLORED } from "../../constants/verifyApi";
import { SectionDesc, SectionHead, SectionTitle, OutlinedWhiteButton, ContentOuterBox } from "../../styles";
import APICodeBox from "../../components/card/APICodeBox";
import { FIRMACHAIN_DOCS } from "../../constants/links";

const Desktop = () => {
    return (
        <BrowserView style={{ width: "100%" }}>
            <ContentOuterBox>
                <Stack
                    sx={{
                        width: "100%",
                        padding: "0 20px",
                        boxSizing: "border-box",
                    }}
                >
                    <Stack
                        sx={{
                            borderRadius: "24px",
                            backgroundColor: "#051527",
                            alignItems: "center",
                            p: "130px 30px 150px 30px",
                        }}
                    >
                        <Stack
                            direction="column"
                            sx={{
                                alignItems: "center",
                                gap: "78px",
                            }}
                        >
                            <Stack alignItems="center">
                                <SectionTitle sx={{ color: "#e1e7f3" }}>{API_SECTION}</SectionTitle>
                                <Box sx={{ pb: "40px" }}>
                                    <SectionHead
                                        sx={{
                                            fontSize: "58px !important",
                                            textAlign: "center",
                                            color: "#fff",
                                            letterSpacing: "-1.45px !important",
                                        }}
                                    >
                                        {API_TITLE}
                                    </SectionHead>
                                    <SectionHead
                                        sx={{
                                            textAlign: "center",
                                            color: "transparent",
                                            background: "linear-gradient(to left, #fff 0%, #0089ff 100%)",
                                            WebkitBackgroundClip: "text",
                                        }}
                                    >
                                        {API_TITLE_COLORED}
                                    </SectionHead>
                                </Box>
                                <SectionDesc
                                    sx={{
                                        width: "714px",
                                        textAlign: "center",
                                        pb: "40px",
                                        color: "#d0d5e0",
                                    }}
                                >
                                    {API_DESCRIPTION}
                                </SectionDesc>
                                <OutlinedWhiteButton title="API Docs" onClick={() => window.open(FIRMACHAIN_DOCS, "_blank")} />
                            </Stack>

                            <APICodeBox />
                        </Stack>
                    </Stack>
                </Stack>
            </ContentOuterBox>
        </BrowserView>
    );
};

export default Desktop;
