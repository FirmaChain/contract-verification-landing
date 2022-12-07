import { Box, Stack, Typography } from '@mui/material'
import { Lato } from '../../constants/theme'
import { IKeyValue } from '../../interface'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'

import CircleIcon from '@mui/icons-material/Circle'
import useGlobalState from '../../hooks/useGlobalState'
import { IC_CHECK_BLUE, IC_CHECK_WHITE } from '../../constants/images'

const NetworkSelect = ({
    idx,
    setIdx,
    sx,
}: {
    idx: number
    setIdx: any
    sx?: IKeyValue
}) => {
    const [open, setOpen] = useState(false)
    const { headerState } = useGlobalState()

    const BACKGROUND_SX = [
        {
            backdropFilter: 'blur(30px)',
            backgroundColor: '#3079D6', //'rgba(48, 121, 214, 0.2)',
        },
        {
            backgroundColor: '#3079D6', // '#3078d6',
        },
        {
            backgroundColor: '#3079D6',
        },
    ]

    const LIST = ['IMPERIUM-4', 'COLOSSEUM']

    const onChangeIdx = (idx: number) => {
        setIdx(idx)
        setOpen(false)
    }

    return (
        <Stack
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
            sx={{ width: '100%', position: 'relative' }}
        >
            <Stack
                direction="row"
                gap="5px"
                sx={{
                    height: '31px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '15.5px',
                    userSelect: 'none',
                    cursor: 'pointer',
                    padding: '0 8px 0 14px',

                    ...BACKGROUND_SX[headerState],

                    fontSize: '13px',
                    letterSpacing: '-0.2px',
                    color: '#fff',
                    fontWeight: 600,
                    fontFamily: Lato,
                }}
            >
                <CircleIcon sx={{ fontSize: '10px', color: '#09f5a4' }} />
                <Stack direction="row" alignItems="center" gap="2px">
                    {LIST[idx]}
                    <KeyboardArrowDownIcon
                        sx={{
                            color: '#fff',
                            fontSize: '20px',
                            transform: `rotate(${open ? 180 : 0}deg)`,
                            transition: 'all 0.3s',
                        }}
                    />
                </Stack>
            </Stack>

            <Box
                className="drawerOpen"
                style={{
                    width: '153px',
                    position: 'absolute',
                    top: '31px',
                    padding: '0 10px 10px 10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: open ? `${LIST.length * 36 + 10 + 16}px` : '0px',
                    overflow: 'hidden',
                }}
            >
                <Stack
                    sx={{
                        width: '100%',
                        backgroundColor: '#fff',
                        height: `${LIST.length * 36 + 10}px`,
                        mt: '10px',
                        padding: '8px 0',
                        borderRadius: '4px',
                        boxShadow: open
                            ? '0 1px 10px 0 rgba(0, 0, 0, 0.16)'
                            : 'none',
                    }}
                >
                    {LIST.map((one: string, thisIdx: number) => (
                        <Stack
                            onClick={() => onChangeIdx(thisIdx)}
                            direction="row"
                            gap="6px"
                            sx={{
                                cursor: 'pointer',
                                height: '36px',
                                alignItems: 'center',
                                padding: '0 8px',
                                '.arrow': {
                                    color:
                                        idx === thisIdx ? '#316ff5' : '#343539',
                                },
                                ':hover': {
                                    color: '#fff',
                                    backgroundColor: '#316ff5',
                                    '.arrow': {
                                        color: '#fff',
                                    },
                                    '.imageHover': {
                                        backgroundImage: `url(${IC_CHECK_WHITE})`,
                                    },
                                },
                            }}
                        >
                            <Stack
                                alignItems="center"
                                sx={{
                                    width: '20px',
                                    height: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {idx === thisIdx && (
                                    <Box
                                        className="imageHover"
                                        sx={{
                                            width: '14px',
                                            height: '14px',
                                            backgroundImage: `url(${IC_CHECK_BLUE})`,
                                            backgroundSize: 'cover',
                                        }}
                                    />
                                )}
                            </Stack>
                            <Typography
                                sx={{
                                    fontFamily: Lato,
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    letterSpacing: '-0.21px',
                                }}
                            >
                                {one}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Stack>
    )
}

export default NetworkSelect
