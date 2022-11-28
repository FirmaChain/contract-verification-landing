import { Box, Stack, Typography } from '@mui/material'
import { SERVICE_LIST } from '../../constants/common'
import { Lato } from '../../constants/theme'
import { IKeyValue } from '../../interface'

const ServiceList = () => {
    return (
        <Stack direction="row" gap="30px" sx={{ width: '100%' }}>
            {SERVICE_LIST.map((one: IKeyValue, idx: number) => (
                <Stack direction="column" sx={{ textAlign: 'center' }}>
                    <Box sx={{ pb: '20px' }}>
                        <img src={one.imgURL} alt="" />
                    </Box>
                    <Typography
                        sx={{
                            pb: '10px',
                            fontSize: '24px',
                            fontFamily: Lato,
                            fontWeight: 'bold',
                            lineHeight: 1.25,
                            letterSpacing: '-0.36px',
                            color: '#161718',
                        }}
                    >
                        {one.title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: Lato,
                            fontSize: '18px',
                            lineHeight: 1.67,
                            letterSpacing: '-0.27px',
                            color: '#161718',
                        }}
                    >
                        {one.desc}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    )
}

export default ServiceList
