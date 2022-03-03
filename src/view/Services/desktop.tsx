import { Box, Stack } from "@mui/material";
import { BrowserView } from "react-device-detect";
import { SectionHead, SectionTitle } from "../../styles";
import { SERVECES_SECTION, SERVICE_TITLE } from "../../constants/services";
import ServiceList from "../../components/card/ServicesList";

const Desktop = () => {
    return (
        <BrowserView>
            <Stack
                sx={{
                    maxWidth: "1200px",
                    width: "100%",
                    p: "150px 0 100px 0",
                    alignItems: "center",
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        width: "100%",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        pb: "70px",
                    }}
                >
                    <Stack direction="column" justifyContent="flex-start">
                        <SectionTitle sx={{ color: "#0875f5" }}>{SERVECES_SECTION}</SectionTitle>
                        <SectionHead sx={{ maxWidth: "857px", width: "100%" }}>{SERVICE_TITLE}</SectionHead>
                    </Stack>
                    {/* <Stack direction="row" alignItems="center" gap="10px">
                            <ArrowCircleLeftOutlinedIcon
                                sx={{ color: GRAYa0, fontSize: '28px' }}
                            />
                            <Stack direction="row" gap="5px">
                                <Typography
                                    sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        fontFamily: Lato,

                                        letterSpacing: '-0.6px',
                                        color: '#0875f5',
                                    }}
                                >
                                    1
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        fontFamily: Lato,

                                        letterSpacing: '-0.6px',
                                        color: '#999999',
                                    }}
                                >
                                    /1
                                </Typography>
                            </Stack>
                            <ArrowCircleRightOutlinedIcon
                                sx={{ color: GRAYa0, fontSize: '28px' }}
                            />
                        </Stack> */}
                </Stack>
                <Box sx={{ pb: "60px" }}>
                    <ServiceList />
                </Box>
                {/* <Indicator length={1} nowIdx={0} setIdx={() => {}} /> */}
            </Stack>
        </BrowserView>
    );
};

export default Desktop;
