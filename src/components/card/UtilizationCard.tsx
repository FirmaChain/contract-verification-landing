import { IKeyValue } from '../../interface'
import { Stack } from '@mui/material'

const UtilizationCard = ({ data }: IKeyValue) => {
    return (
        <Stack sx={{ position: 'relative' }} id={data.data.title}>
            <img src={data.imgURL} alt="" />
        </Stack>
    )
}

export default UtilizationCard
