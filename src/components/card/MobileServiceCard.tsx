import { IKeyValue } from '../../interface'
import { Box, Stack, Typography } from '@mui/material'
import { Lato } from '../../constants/theme'

const MobileServiceCard = ({ data }: IKeyValue) => {
    return (
        <Stack sx={{ position: 'relative' }} alignItems="center">
            <Box sx={{ pb: '20px' }}>
                <img src={data.imgURL} alt="" style={{ width: '278px' }} />
            </Box>
            <Typography
                sx={{
                    fontFamily: Lato,
                    fontSize: '20px',
                    fontWeight: 'bold',
                    lineHeight: 1.5,
                    letterSpacing: '-0.3px',
                    color: '#161718',
                }}
            >
                {data.title}
            </Typography>
            <Typography
                sx={{
                    fontFamily: Lato,
                    fontSize: '16px',
                    lineHeight: 1.88,
                    letterSpacing: '-0.24px',
                    color: '#161718',
                }}
            >
                {data.desc}
            </Typography>
        </Stack>
    )
}

export default MobileServiceCard
