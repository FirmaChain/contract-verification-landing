import { IKeyValue } from '../../interface'
import { Box, Divider, Stack, Typography } from '@mui/material'

const UtilizationCard = ({ data }: IKeyValue) => {
    return (
        <Stack sx={{ position: 'relative' }} id={data.data.title}>
            <img src={data.imgURL} alt="" />
            <Stack
                className="hoverShow"
                sx={{
                    // Box
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    position: 'absolute',
                    borderRadius: '12px',
                    opacity: 0,
                    userSelect: 'none',
                    padding: '0 50px',
                    boxSizing: 'border-box',
                    ':hover': {
                        opacity: 1,
                    },

                    // content
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        lineHeight: 0.64,
                        letterSpacing: '-0.42px',
                        pb: '40px',
                    }}
                >
                    {data.data.title}
                </Typography>

                <Divider
                    light={true}
                    orientation="horizontal"
                    component="div"
                    sx={{
                        width: '100%',
                        color: '#fff',
                        backgroundColor: '#fff',
                        mb: '40px',
                    }}
                />

                <Stack sx={{ width: '100%' }}>
                    {data.data.list.map((one: string, idx: number) => (
                        <Typography
                            key={one}
                            sx={{
                                fontSize: '22px',
                                fontWeight: 500,
                                lineHeight: 2,
                                letterSpacing: '-0.33px',
                            }}
                        >
                            - {one}
                        </Typography>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default UtilizationCard
