import { Box, Divider, Stack, Typography } from "@mui/material";
import { isBrowser, isMobile } from "react-device-detect";
import { IMG_LOGO_BK } from "../../constants/images";
import { FIRMACHAIN_DOCS, FIRMACHAIN_ECOSYSTEM, INFO_MAIL, VERIFY_TOOL } from "../../constants/links";
import { GRAYef, Lato } from "../../constants/theme";
import { FooterGotoButton } from "../../styles";

const Footer = () => {
    return (
        <Stack
            alignItems="center"
            sx={{
                width: "100%",
                borderTop: isBrowser ? `1px solid ${GRAYef}` : "none",
                p: isBrowser ? "40px 30px 50px 30px" : "30px 16px 48px 16px",
                boxSizing: "border-box",
            }}
        >
            <Stack sx={{ width: "100%", maxWidth: "1200px" }}>
                <Stack
                    direction={isBrowser ? "row" : "column"}
                    justifyContent={isBrowser ? "space-between" : "center"}
                    alignItems={isBrowser ? "center" : "flex-start"}
                    sx={{ pb: "30px" }}
                    gap={isBrowser ? 0 : "22px"}
                >
                    <Box>
                        <img src={IMG_LOGO_BK} alt="" style={{ width: "152px" }} draggable={false} />
                    </Box>
                    <Stack direction="row" gap={isBrowser ? "80px" : "20px"}>
                        <FooterGotoButton menu="verify tool" onClick={() => window.open(VERIFY_TOOL, "_blank")} />
                        <FooterGotoButton menu="api docs" onClick={() => window.open(FIRMACHAIN_DOCS, "_blank")} />
                        <FooterGotoButton menu="ecosystem" onClick={() => window.open(FIRMACHAIN_ECOSYSTEM, "_blank")} />
                    </Stack>
                </Stack>

                {isMobile && <Divider sx={{ borderColor: GRAYef, mb: "22px" }} />}

                <Stack direction={isBrowser ? "row" : "column"} justifyContent="space-between" gap={isBrowser ? 0 : "20px"}>
                    <Stack direction="row" gap="16px" alignItems="center">
                        <div onClick={() => window.open(`mailto:${INFO_MAIL}`)}>
                            <Typography
                                sx={{
                                    color: "#787a7c",
                                    fontSize: "14px",
                                    fontFamily: Lato,
                                    letterSpacing: "-0.14px",
                                    cursor: "pointer",
                                }}
                            >
                                {INFO_MAIL}
                            </Typography>
                        </div>
                        <Divider orientation="vertical" sx={{ height: "12px", borderColor: "#787a7c" }} />
                        <Typography
                            sx={{
                                color: "#787a7c",
                                fontSize: "14px",
                                fontFamily: Lato,
                                letterSpacing: "-0.14px",
                                cursor: "pointer",
                            }}
                        >
                            Terms of service
                        </Typography>
                    </Stack>
                    <Typography
                        sx={{
                            fontFamily: Lato,
                            fontSize: isBrowser ? "14px" : "13px",
                            lineHeight: isBrowser ? "unset" : 1.23,
                            color: "#8d9098",
                            letterSpacing: isBrowser ? "-0.14px" : "-0.13px",
                        }}
                    >
                        ⓒ FirmaChain Pte. Ltd. {isBrowser ? "|" : <br />}
                        All Right Reserved. 71 Robinson Road, Singapore, 068895
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Footer;
