import { Box, Stack } from "@mui/material";

const Indicator = ({ length, nowIdx, setIdx }: { length: number; nowIdx: number; setIdx: any }) => {
    return (
        <Stack direction="row" justifyContent="center" gap="2px">
            {new Array(length).fill(null).map((_: any, idx: number) => (
                <Box className="buttonSelect" key={idx} onClick={() => setIdx(idx)} sx={{ padding: nowIdx === idx ? "10px 0px" : "10px 5px", cursor: "pointer" }}>
                    <Box
                        className="buttonSelect"
                        sx={{
                            width: nowIdx === idx ? "30px" : "8px",
                            height: "8px",
                            backgroundColor: nowIdx === idx ? "#0875f5" : "#cccccc",
                            borderRadius: "5px",
                        }}
                    ></Box>
                </Box>
            ))}
        </Stack>
    );
};

export default Indicator;
