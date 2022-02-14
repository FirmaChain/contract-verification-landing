import { IKeyValue } from "../../interface";
import { Divider, Stack, Typography } from "@mui/material";
import { Metropolis } from "../../constants/theme";
import { useState } from "react";

const MobileUtilizationCard = ({ data }: IKeyValue) => {
    const [hover, setHover] = useState(false);

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Stack sx={{ position: "relative", overflow: "hidden", borderRadius: "12px" }} id={""}>
                <img src={data.imgURL} alt="" style={{ width: "278px" }} draggable={false} />

                <Stack
                    className="hoverShow"
                    sx={{
                        // Box
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        position: "absolute",
                        top: hover ? 0 : 460,
                        opacity: hover ? 1 : 0,
                        borderRadius: "8px",
                        userSelect: "none",
                        padding: "0 28px",
                        boxSizing: "border-box",

                        // content
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                    }}
                >
                    <Stack className={hover ? "hoverShowDesc" : "hoverHiddenDesc"} direction="column" alignItems="center" sx={{ width: data.width, paddingTop: "50px", opacity: hover ? 1 : 0 }}>
                        <Divider
                            light={true}
                            orientation="horizontal"
                            component="div"
                            sx={{
                                width: "100%",
                                color: "#ffffff80",
                                backgroundColor: "#ffffff80",
                                mb: "20px",
                            }}
                        />

                        <Stack sx={{ width: "100%" }}>
                            {data.data.list.map((one: string, idx: number) => (
                                <Typography
                                    key={idx}
                                    sx={{
                                        fontFamily: Metropolis,
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        lineHeight: 2.11,
                                        letterSpacing: "-0.27px",
                                    }}
                                >
                                    {`• ${one}`}
                                </Typography>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className="hoverShow" sx={{ width: "100%", height: "100%", position: "absolute", top: hover ? 60 : 270 }}>
                    <Typography
                        className="hoverShow"
                        sx={{
                            fontFamily: Metropolis,
                            fontSize: hover ? "26px" : "22px",
                            fontWeight: hover ? 600 : 500,
                            textAlign: "center",
                            letterSpacing: "-1.8px",
                            color: "#fff",
                            pb: "20px",
                        }}
                    >
                        {data.data.title}
                    </Typography>
                </Stack>
            </Stack>
        </div>
    );
};

export default MobileUtilizationCard;
