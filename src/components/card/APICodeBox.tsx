import { Button, Stack } from '@mui/material'
import { useState } from 'react'
import { IMG_VERIFY_API } from '../../constants/images'
import { Lato } from '../../constants/theme'

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

    return (
        <Stack sx={{ position: 'relative' }}>
            <img src={IMG_VERIFY_API} alt="" />
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
    )
}

export default APICodeBox
