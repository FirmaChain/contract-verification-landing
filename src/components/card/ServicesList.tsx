import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SERVICE_LIST } from "../../constants/common";
import { Lato } from "../../constants/theme";
import { IKeyValue } from "../../interface";

const ServiceList = () => {
    const [hover, setHover] = useState(-1);

    return (
        <Stack direction="row" justifyContent="center" gap="30px" sx={{ width: "100%" }}>
            {SERVICE_LIST.map((one: IKeyValue, idx: number) => (
                <div key={idx} onMouseEnter={() => setHover(idx)} onMouseLeave={() => setHover(-1)}>
                    <Stack direction="column" sx={{ textAlign: "center", cursor: "pointer" }} onClick={() => one.goURL && window.open(one.goURL, "_blank")}>
                        <Box sx={{ pb: "20px" }}>
                            <img
                                className={"allTransitionHalfSecond"}
                                src={one.imgURL}
                                alt=""
                                style={{ width: "278px", height: "190px", transform: `scale(${hover === idx ? 1.05 : 1})` }}
                                draggable={false}
                            />
                        </Box>
                        <Typography
                            sx={{
                                pb: "8px",
                                fontSize: "24px",
                                fontFamily: Lato,
                                fontWeight: "bold",
                                lineHeight: 1.25,
                                letterSpacing: "-0.36px",
                                color: "#161718",
                            }}
                        >
                            {one.title}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: Lato,
                                fontSize: "18px",
                                lineHeight: 1,
                                letterSpacing: "-0.27px",
                                color: "#161718",
                            }}
                        >
                            {one.desc}
                        </Typography>
                    </Stack>
                </div>
            ))}
        </Stack>
    );
};

export default ServiceList;
