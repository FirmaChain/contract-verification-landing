import { IKeyValue } from '../../interface'
import { Divider, Stack, Typography } from '@mui/material'

const UtilizationCard = ({ data }: IKeyValue) => {
    return (
        <Stack sx={{ position: 'relative' }} id={data.data.title}>
            <img src={data.imgURL} alt="" style={{ maxWidth: '380px' }} />
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
                <Stack
                    sx={{
                        width: data.width,
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '28px',
                            fontWeight: 'bold',

                            letterSpacing: '-0.42px',
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
                        }}
                    />

                    <Stack sx={{ width: '100%' }}>
                        {data.data.list.map((one: string, idx: number) => (
                            <Typography
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
        </Stack>
    )
}

export default UtilizationCard
