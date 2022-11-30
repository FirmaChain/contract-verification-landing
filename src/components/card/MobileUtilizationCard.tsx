import { IKeyValue } from '../../interface'
import { Divider, Stack, Typography } from '@mui/material'

const MobileUtilizationCard = ({ data }: IKeyValue) => {
    return (
        <Stack sx={{ position: 'relative' }} id={''}>
            <img src={data.imgURL} alt="" style={{ width: '278px' }} />

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
                    padding: '0 28px',
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
                <Stack
                    direction="column"
                    alignItems="center"
                    sx={{ width: data.width }}
                >
                    <Typography
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            lineHeight: 0.75,
                            letterSpacing: '-0.36px',
                            pb: '20px',
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
                            mb: '20px',
                        }}
                    />

                    <Stack sx={{ width: '100%' }}>
                        {data.data.list.map((one: string, idx: number) => (
                            <Typography
                                key={one}
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    lineHeight: 2.11,
                                    letterSpacing: '-0.27px',
                                }}
                            >
                                - {one}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default MobileUtilizationCard
