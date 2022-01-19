import { Box, Stack } from "@mui/material";
import { BrowserView } from "react-device-detect";
import { FIRMACHAIN_DOCS, VERIFY_TOOL } from "../../constants/links";
import { IMG_ABOUT_1, IMG_ABOUT_2 } from "../../constants/images";
import { ABOUT_API_DESCRIPTION, ABOUT_API_TITLE, ABOUT_DESCRIPTION, ABOUT_SECTION, ABOUT_TITLE } from "../../constants/about";
import { ContentOuterBox, OutlinedBlueButton, SectionDesc, SectionHead, SectionTitle } from "../../styles";

const Desktop = () => {
    return (
        <BrowserView style={{ width: "100%" }}>
            <ContentOuterBox>
                <Stack
                    sx={{
                        width: "100%",
                        alignItems: "center",
                        p: "120px 0 166px 0",
                        maxWidth: "1200px",
                        gap: "238px",
                    }}
                >
                    <Stack
                        direction="row"
                        sx={{
                            width: "100%",
                            justifyContent: "space-between",
                            position: "relative",
                        }}
                    >
                        <Stack sx={{ zIndex: 2 }}>
                            <SectionTitle sx={{ color: "#0875f5" }}>{ABOUT_SECTION}</SectionTitle>
                            <SectionHead
                                sx={{
                                    color: "#161718",
                                    maxWidth: "331px",
                                    width: "100%",
                                    pb: "40px",
                                }}
                            >
                                {ABOUT_TITLE}
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    width: "378px",
                                    pb: "40px",
                                    color: "#4a4d51",
                                }}
                            >
                                {ABOUT_DESCRIPTION}
                            </SectionDesc>

                            <OutlinedBlueButton title="Verify Tool" onClick={() => window.open(VERIFY_TOOL, "_blank")} />
                        </Stack>
                        <Box sx={{ position: "absolute", right: 0 }}>
                            <img
                                src={IMG_ABOUT_1}
                                alt=""
                                draggable={false}
                                style={{
                                    maxWidth: "740px",
                                    maxHeight: "482px",
                                    width: "100%",
                                }}
                            />
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        sx={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <img
                                src={IMG_ABOUT_2}
                                alt=""
                                draggable={false}
                                style={{
                                    position: "absolute",
                                    maxWidth: "670px",
                                    width: "100%",
                                }}
                            />
                        </Box>
                        <Stack sx={{ alignItems: "flex-end" }}>
                            <SectionTitle sx={{ color: "#0875f5" }}>{ABOUT_SECTION}</SectionTitle>
                            <SectionHead
                                sx={{
                                    maxWidth: "417px",
                                    width: "100%",
                                    pb: "40px",
                                    textAlign: "right",
                                    color: "#161718",
                                }}
                            >
                                {ABOUT_API_TITLE}
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    width: "100%",
                                    textAlign: "right",
                                    color: "#4a4d51",
                                    paddingBottom: "40px",
                                }}
                            >
                                {ABOUT_API_DESCRIPTION}
                            </SectionDesc>
                            <OutlinedBlueButton title="API Docs" onClick={() => window.open(FIRMACHAIN_DOCS, "_blank")} />
                        </Stack>
                    </Stack>
                </Stack>
            </ContentOuterBox>
        </BrowserView>
    );
};

export default Desktop;
