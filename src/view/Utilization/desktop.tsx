import { Stack } from "@mui/material";
import { BrowserView } from "react-device-detect";
import { IKeyValue } from "../../interface";
import { UTILIZATION_DATA } from "../../constants/common";
import { UTIL_DESCRIPTION, UTIL_SECTION, UTIL_TITLE } from "../../constants/utilization";
import { SectionDesc, SectionHead, SectionTitle } from "../../styles";
import UtilizationCard from "../../components/card/UtilizationCard";

const Desktop = () => {
    return (
        <BrowserView style={{ width: "100%" }}>
            <Stack
                direction="column"
                sx={{
                    pt: "130px",
                    pb: "150px",
                    alignItems: "center",
                }}
            >
                <SectionTitle sx={{ color: "#0875f5" }}>{UTIL_SECTION}</SectionTitle>
                <SectionHead
                    sx={{
                        width: "730px",
                        textAlign: "center",
                        pb: "40px",
                    }}
                >
                    {UTIL_TITLE}
                </SectionHead>
                <SectionDesc
                    sx={{
                        width: "606px",
                        color: "#4a4d51",
                        textAlign: "center",
                        pb: "100px",
                    }}
                >
                    {UTIL_DESCRIPTION}
                </SectionDesc>
                <Stack direction="row" sx={{ width: "100%", justifyContent: "center" }} gap="30px">
                    {UTILIZATION_DATA.map((data: IKeyValue, idx: number) => (
                        <UtilizationCard data={data} key={idx} />
                    ))}
                </Stack>
            </Stack>
        </BrowserView>
    );
};

export default Desktop;
