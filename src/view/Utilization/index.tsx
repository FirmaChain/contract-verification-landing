import { ContentOuterBox } from "../../styles";
import Desktop from "./desktop";
import Mobile from "./mobile";

const Utilization = () => {
    return (
        <ContentOuterBox
            sx={{
                width: "100%",
                backgroundColor: "#ebf6ff",
                alignItems: "center",
            }}
        >
            <Desktop />
            <Mobile />
        </ContentOuterBox>
    );
};

export default Utilization;
