import { IKeyValue } from "../../interface";
import { Divider, Stack, Typography } from "@mui/material";
import { Metropolis } from "../../constants/theme";
import { useState } from "react";

const UtilizationCard = ({ data }: IKeyValue) => {
    const [hover, setHover] = useState(false);

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Stack sx={{ position: "relative", overflow: "hidden", borderRadius: "12px" }} id={data.data.title}>
                <img src={data.imgURL} alt="" style={{ maxWidth: "380px" }} draggable={false} />
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
                        borderRadius: "12px",
                        userSelect: "none",
                        padding: "0 50px",
                        boxSizing: "border-box",

                        // content
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                    }}
                >
                    <Stack
                        className={hover ? "hoverShowDesc" : "hoverHiddenDesc"}
                        sx={{
                            width: data.width,
                            alignItems: "center",
                            gap: "20px",
                            paddingTop: "80px",
                            opacity: hover ? 1 : 0,
                        }}
                    >
                        <Divider
                            light={true}
                            orientation="horizontal"
                            component="div"
                            sx={{
                                width: "100%",
                                color: "#ffffff80",
                                backgroundColor: "#ffffff80",
                            }}
                        />

                        <Stack sx={{ width: "100%" }}>
                            {data.data.list.map((one: string, idx: number) => (
                                <Typography
                                    key={idx}
                                    sx={{
                                        fontFamily: Metropolis,
                                        fontSize: "22px",
                                        fontWeight: 400,
                                        lineHeight: 2,
                                        letterSpacing: "-0.33px",
                                    }}
                                >
                                    {`• ${one}`}
                                </Typography>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className="hoverShow" sx={{ width: "100%", height: "100%", position: "absolute", top: hover ? 100 : 375 }}>
                    <Typography
                        className="hoverShow"
                        sx={{
                            fontFamily: Metropolis,
                            fontSize: hover ? "32px" : "28px",
                            fontWeight: hover ? 600 : 500,
                            textAlign: "center",
                            color: "#fff",
                            letterSpacing: "-1.8px",
                        }}
                    >
                        {data.data.title}
                    </Typography>
                </Stack>
            </Stack>
        </div>
    );
};

export default UtilizationCard;
