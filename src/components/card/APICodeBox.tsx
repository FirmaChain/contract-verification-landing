import { Button, Stack } from '@mui/material'
import { IMG_VERIFY_API } from '../../constants/images'
import { Lato } from '../../constants/theme'

const APICodeBox = () => {
    return (
        <Stack sx={{ position: 'relative' }}>
            <img src={IMG_VERIFY_API} alt="" />
            <Button
                variant="outlined"
                sx={{
                    border: 'none !important',
                    textTransform: 'none',
                    fontSize: '17px',
                    fontFamily: Lato,
                    lineHeight: 1.38,
                    p: 0,

                    letterSpacing: '-0.24px',
                    width: '196px',
                    height: '52px',
                    borderRadius: '4px',
                    backgroundColor: '#3E4555 !important',
                    color: '#fff',

                    position: 'absolute',
                    top: '63px',
                    left: '13px',
                }}
            >
                Create contract file
            </Button>

            <Button
                variant="outlined"
                sx={{
                    border: 'none !important',
                    textTransform: 'none',
                    fontSize: '17px',
                    fontFamily: Lato,
                    lineHeight: 1.38,
                    p: 0,

                    letterSpacing: '-0.24px',
                    width: '196px',
                    height: '52px',
                    borderRadius: '4px',
                    backgroundColor: '#3E4555 !important',
                    color: '#fff',

                    position: 'absolute',
                    top: '130px', // 63 * 2 + 2 * 2?
                    left: '13px',
                }}
            >
                Add contract log
            </Button>

            <Button
                variant="outlined"
                sx={{
                    border: 'none !important',
                    textTransform: 'none',
                    fontSize: '17px',
                    fontFamily: Lato,
                    lineHeight: 1.38,
                    p: 0,

                    letterSpacing: '-0.24px',
                    width: '196px',
                    height: '52px',
                    borderRadius: '4px',
                    backgroundColor: '#283042 !important',
                    color: '#ffffff',

                    position: 'absolute',
                    top: '195px', // 63 * 3 + 2 * 3
                    left: '13px',
                }}
            >
                Get contract file
            </Button>

            {/* <Button
                variant="outlined"
                sx={{
                    border: '1px solid red', // 'none !important',
                    textTransform: 'none',
                    fontSize: '17px',
                    fontFamily: Lato,
                    lineHeight: 1.38,
                    p: 0,

                    letterSpacing: '-0.24px',
                    width: '196px',
                    height: '52px',
                    borderRadius: '4px',
                    backgroundColor: 'transparent !important', // '#3E4555 !important',
                    color: '#fff',

                    position: 'absolute',
                    top: '193px', // 63 * 3 + 2 * 2?
                    left: '13px',
                }}
            >
                Create contract file
            </Button> */}
        </Stack>
    )
}

export default APICodeBox
