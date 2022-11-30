import { Stack, Typography } from '@mui/material'
import { Lato } from '../../constants/theme'
import { IKeyValue } from '../../interface'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import { ListSelectBox } from '../../styles'

const Select = ({
    idx,
    setIdx,
    sx,
}: {
    idx: number
    setIdx: any
    sx?: IKeyValue
}) => {
    const [open, setOpen] = useState(false)

    const LIST = [
        'Create contract file',
        'Add contract log',
        'Get contract file',
        'Get contract log',
        'Use contract utils',
    ]

    const onChangeIdx = (idx: number) => {
        setIdx(idx)
        setOpen(false)
    }

    return (
        <Stack sx={{ width: '100%', position: 'relative' }}>
            <Stack
                onClick={() => setOpen(!open)}
                direction="row"
                sx={{
                    width: '100%',
                    height: '48px',
                    border: '1px solid #546079',
                    backgroundColor: '#333b4c',
                    borderRadius: '4px',

                    alignItems: 'center',
                    justifyContent: 'space-between',

                    padding: '14px 16px',
                    boxSizing: 'border-box',

                    // String
                    fontFamily: Lato,
                    fontSize: '16px',
                    color: '#fff',
                    lineHeight: 1.13,
                    letterSpacing: '-0.24px',

                    ...sx,
                }}
            >
                <Typography>{LIST[idx]}</Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        transform: `rotate(${open ? 180 : 0}deg)`,
                        transition: 'all 1s',
                    }}
                />
            </Stack>

            <Stack
                className="drawerOpen"
                sx={{
                    width: '100%',
                    position: 'absolute',
                    top: '48px',
                    height: open ? '240px' : '0px',
                    overflow: 'hidden',
                    border: open ? '1px solid #546079' : 'none',
                    backgroundColor: '#333b4c',
                    mt: '10px',
                    padding: open ? '4px 0' : '0px',
                    borderRadius: '4px',
                }}
            >
                {LIST.map((one: string, thisIdx: number) => (
                    <ListSelectBox
                        title={one}
                        nowIdx={idx}
                        idx={thisIdx}
                        onClick={() => onChangeIdx(thisIdx)}
                    />
                ))}
            </Stack>
        </Stack>
    )
}

export default Select
