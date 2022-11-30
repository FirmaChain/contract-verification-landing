import { Stack, Typography } from '@mui/material'
import { Lato } from '../../constants/theme'
import { IKeyValue } from '../../interface'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CircleIcon from '@mui/icons-material/Circle'
import useGlobalState from '../../hooks/useGlobalState'

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
            backgroundColor: 'rgba(255,255,255,0.2)',
        },
        {
            backgroundColor: '#3078d6',
        },
        {
            backgroundColor: '#397fda',
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
                    padding: '0 14px',

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
                            transition: 'all 1s',
                        }}
                    />
                </Stack>
            </Stack>

            <Stack
                className="drawerOpen"
                sx={{
                    width: '100%',
                    position: 'absolute',
                    top: '31px',

                    height: open ? LIST.length * 36 : '0px',
                    overflow: 'hidden',

                    backgroundColor: '#fff',
                    mt: '10px',
                    padding: open ? '4px 0' : '0px',
                    borderRadius: '4px',
                }}
            >
                {LIST.map((one: string, thisIdx: number) => (
                    <Stack
                        onClick={() => onChangeIdx(thisIdx)}
                        direction="row"
                        sx={{
                            cursor: 'pointer',
                            minHeight: '36px',
                            alignItems: 'center',
                            padding: '0 8px',
                            '.arrow': {
                                color: '#316ff5',
                            },
                            ':hover': {
                                color: '#fff',
                                backgroundColor: '#316ff5',
                                '.arrow': {
                                    color: '#fff',
                                },
                            },
                        }}
                    >
                        <Stack alignItems="center" sx={{ width: '20px' }}>
                            {idx === thisIdx && (
                                <CheckIcon
                                    className="arrow"
                                    sx={{ fontSize: '16px' }}
                                />
                            )}
                        </Stack>
                        <Typography>{one}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default NetworkSelect
