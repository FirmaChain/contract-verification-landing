import { Stack } from '@mui/material'
import UtilizationCard from '../components/card/UtilizationCard'
import { UTILIZATION_DATA } from '../constants/common'
import { IKeyValue } from '../interface'
import {
    ContentOuterBox,
    SectionDesc,
    SectionHead,
    SectionTitle,
} from '../styles'
import { BrowserView, MobileView } from 'react-device-detect'
import MobileUtilizationCard from '../components/card/MobileUtilizationCard'
import { useState } from 'react'
import Indicator from '../components/indicator'

const Utilization = () => {
    const [idx, setIdx] = useState(0)

    const [startOffset, setStartOffest] = useState(null)
    const handleDragStart = (event: any) => {
        if (event.type === 'touchstart') {
            setStartOffest(event.changedTouches[0].screenX)
        } else {
            setStartOffest(event.pageX)
        }
    }

    const handleDragEnd = (event: any) => {
        let endOffset
        if (event.type === 'touchend') {
            endOffset = event.changedTouches[0].screenX
        } else {
            endOffset = event.pageX
        }

        const result = (startOffset && startOffset - endOffset) || 0

        if (result < -50 && idx > 0) {
            setIdx(idx - 1)
        } else if (result > 50 && idx < 2) {
            setIdx(idx + 1)
        }
    }

    return (
        <ContentOuterBox
            sx={{
                width: '100%',
                backgroundColor: '#ebf6ff',
                alignItems: 'center',
            }}
        >
            <BrowserView style={{ width: '100%' }}>
                <Stack
                    direction="column"
                    sx={{
                        pt: '130px',
                        pb: '150px',
                        alignItems: 'center',
                    }}
                >
                    <SectionTitle sx={{ color: '#0875f5' }}>
                        Utilization field
                    </SectionTitle>
                    <SectionHead
                        sx={{
                            width: '730px',
                            textAlign: 'center',
                            pb: '40px',
                        }}
                    >
                        FIRMA VERIFY authenticates a wide range of data.
                    </SectionHead>
                    <SectionDesc
                        sx={{
                            width: '606px',
                            color: '#4a4d51',
                            textAlign: 'center',
                            pb: '100px',
                        }}
                    >
                        Apply FIRMA VERIFY to authenticate a wide range of data
                        including online/offline transactions data, contract
                        data and archived data.
                        <br /> Apply FIRMA VERIFY in any area that requires a
                        high level of security and trust.
                    </SectionDesc>
                    <Stack
                        direction="row"
                        sx={{ width: '100%', justifyContent: 'center' }}
                        gap="30px"
                    >
                        {UTILIZATION_DATA.map(
                            (data: IKeyValue, idx: number) => (
                                <UtilizationCard data={data} key={idx} />
                            )
                        )}
                    </Stack>
                </Stack>
            </BrowserView>
            <MobileView>
                <Stack alignItems="center" p="60px 0 70px 0">
                    <Stack alignItems="center" p="0 16px">
                        <SectionTitle sx={{ color: '#0875f5' }}>
                            utilization field
                        </SectionTitle>
                        <SectionHead sx={{ textAlign: 'center', pb: '24px' }}>
                            FIRMA VERIFY authenticates
                            <br /> a wide range of data.
                        </SectionHead>
                        <SectionDesc
                            sx={{
                                color: '#4a4d51',
                                textAlign: 'center',
                                pb: '60px',
                            }}
                        >
                            Apply FIRMA VERIFY to authenticate
                            <br /> a wide range of data including
                            <br /> online/offline transactions data,
                            <br /> contract data and archived data.
                            <br /> Apply FIRMA VERIFY in any area that
                            <br /> requires a high level of security and trust.
                        </SectionDesc>
                    </Stack>
                    <div
                        onMouseDown={handleDragStart}
                        onMouseUp={handleDragEnd}
                        onTouchStart={handleDragStart}
                        onTouchEnd={handleDragEnd}
                        style={{
                            width: '100vw',
                            overflow: 'hidden',
                            position: 'relative',
                            paddingBottom: '40px',
                        }}
                    >
                        <Stack
                            className="horizentalScroll"
                            direction="row"
                            sx={{
                                width: 278 * 3 + 30 * 2,

                                overflow: 'hidden',
                                gap: '16px',

                                transform: `translateX(${
                                    16 - 278 * idx - 16 * idx
                                }px)`,
                            }}
                        >
                            {UTILIZATION_DATA.map((one: IKeyValue) => (
                                <MobileUtilizationCard
                                    data={one}
                                    key={one.title}
                                />
                            ))}
                        </Stack>
                    </div>
                    <Indicator length={3} nowIdx={idx} setIdx={setIdx} />
                </Stack>
            </MobileView>
        </ContentOuterBox>
    )
}

export default Utilization

// 305 -> 5 -> -305
