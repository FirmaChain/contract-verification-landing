import { Box, Stack } from '@mui/material'

const Indicator = ({
    length,
    nowIdx,
    setIdx,
}: {
    length: number
    nowIdx: number
    setIdx: any
}) => {
    return (
        <Stack direction="row" justifyContent="center" gap="12px">
            {new Array(length).fill(null).map((_: any, idx: number) => (
                <Box
                    className="buttonSelect"
                    onClick={() => setIdx(idx)}
                    sx={{
                        width: nowIdx === idx ? '30px' : '8px',
                        height: '8px',
                        backgroundColor: nowIdx === idx ? '#0875f5' : '#cccccc',
                        borderRadius: '5px',
                    }}
                />
            ))}
        </Stack>
    )
}

export default Indicator
