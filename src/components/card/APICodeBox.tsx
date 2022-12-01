import { Box, Button, Stack } from '@mui/material'
import { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import {
    IMG_API_CODE_CHECK_CONTRACT_OWNER,
    IMG_API_CODE_GET_CONTRACT_FILE_DATA,
    IMG_API_CODE_GET_CONTRACT_LOG_DATA,
    IMG_API_CODE_WRITE_CONTRACT_FILE_ON_CHAIN,
    IMG_API_CODE_WRITE_CONTRACT_LOG_ON_CHAIN,
    IMG_VERIFY_API,
    M_IMG_VERIFY_API,
    M_IMG_API_CODE_WRITE_CONTRACT_FILE_ON_CHAIN,
    M_IMG_API_CODE_WRITE_CONTRACT_LOG_ON_CHAIN,
    M_IMG_API_CODE_GET_CONTRACT_FILE_DATA,
    M_IMG_API_CODE_GET_CONTRACT_LOG_DATA,
    M_IMG_API_CODE_CHECK_CONTRACT_OWNER,
} from '../../constants/images'
import { Lato } from '../../constants/theme'
import Select from '../select/APISelect'

const MenuButton = ({
    title,
    now,
    value,
    top,
    onClick,
}: {
    title: string
    now: number
    value: number
    top: number
    onClick: Function
}) => (
    <Button
        onClick={() => onClick(value)}
        variant="outlined"
        sx={{
            border: 'none !important',
            textTransform: 'none',
            fontSize: '16px',
            fontFamily: Lato,
            lineHeight: 1.38,
            p: 0,

            letterSpacing: '-0.24px',
            width: '196px',
            height: '52px',
            borderRadius: '4px',
            backgroundColor: now === value ? '#3E4555 !important' : '#283042',
            color: '#fff',

            position: 'absolute',
            top: `${top}px`,
            left: '13px',
        }}
    >
        {title}
    </Button>
)

const APICodeBox = () => {
    const [idx, setIdx] = useState(0)

    const CODE_IMG_LIST = [
        IMG_API_CODE_WRITE_CONTRACT_FILE_ON_CHAIN,
        IMG_API_CODE_WRITE_CONTRACT_LOG_ON_CHAIN,
        IMG_API_CODE_GET_CONTRACT_FILE_DATA,
        IMG_API_CODE_GET_CONTRACT_LOG_DATA,
        IMG_API_CODE_CHECK_CONTRACT_OWNER,
    ]

    const MOBILE_CODE_IMG_LIST = [
        M_IMG_API_CODE_WRITE_CONTRACT_FILE_ON_CHAIN,
        M_IMG_API_CODE_WRITE_CONTRACT_LOG_ON_CHAIN,
        M_IMG_API_CODE_GET_CONTRACT_FILE_DATA,
        M_IMG_API_CODE_GET_CONTRACT_LOG_DATA,
        M_IMG_API_CODE_CHECK_CONTRACT_OWNER,
    ]

    return (
        <>
            <BrowserView>
                <Stack sx={{ position: 'relative' }}>
                    <img
                        src={IMG_VERIFY_API}
                        alt=""
                        style={{ maxWidth: '894px' }}
                    />
                    <img
                        src={CODE_IMG_LIST[idx]}
                        alt=""
                        style={{
                            position: 'absolute',
                            top: '70px',
                            left: '280px',
                            width: '511px',
                        }}
                    />
                    <MenuButton
                        title="Create contract file"
                        now={idx}
                        value={0}
                        top={63}
                        onClick={setIdx}
                    />
                    <MenuButton
                        title="Add contract log"
                        now={idx}
                        value={1}
                        top={128}
                        onClick={setIdx}
                    />
                    <MenuButton
                        title="Get contract file"
                        now={idx}
                        value={2}
                        top={193}
                        onClick={setIdx}
                    />
                    <MenuButton
                        title="Get contract log"
                        now={idx}
                        value={3}
                        top={258}
                        onClick={setIdx}
                    />
                    <MenuButton
                        title="Use contract utils"
                        now={idx}
                        value={4}
                        top={323}
                        onClick={setIdx}
                    />
                </Stack>
            </BrowserView>
            <MobileView>
                <Stack gap="20px">
                    <Select idx={idx} setIdx={setIdx} />

                    <Box sx={{ position: 'relative' }}>
                        <img
                            src={M_IMG_VERIFY_API}
                            alt=""
                            style={{ width: '100%' }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '48px',
                                left: '24px',
                                width: 'calc(100% - 25px)',
                                height: 'calc(100% - 72px)',
                                overflow: 'scroll',
                            }}
                        >
                            <img
                                src={MOBILE_CODE_IMG_LIST[idx]}
                                alt=""
                                style={{ width: '288px' }}
                            />
                        </Box>
                    </Box>
                </Stack>
            </MobileView>
        </>
    )
}

export default APICodeBox
