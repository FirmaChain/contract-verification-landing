import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import MobileServiceCard from '../components/card/MobileServiceCard'
import ServiceList from '../components/card/ServicesList'
import Indicator from '../components/indicator'
import { SERVICE_LIST } from '../constants/common'
import { IKeyValue } from '../interface'
import { ContentOuterBox, SectionHead, SectionTitle } from '../styles'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { GRAYa0, Lato } from '../constants/theme'
import { VERIFY_SERVICE } from '../constants/links'

const Services = () => {
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
        } else if (result > 50 && idx < 3) {
            setIdx(idx + 1)
        }
    }

    return (
        <ContentOuterBox>
            <BrowserView>
                <Stack
                    sx={{
                        maxWidth: '1200px',
                        width: '100%',
                        p: '150px 0 100px 0',
                        alignItems: 'center',
                    }}
                >
                    <Stack
                        direction="row"
                        sx={{
                            width: '100%',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            pb: '70px',
                        }}
                    >
                        <Stack direction="column" justifyContent="flex-start">
                            <SectionTitle sx={{ color: '#0875f5' }}>
                                Verify service
                            </SectionTitle>
                            <SectionHead
                                sx={{ maxWidth: '857px', width: '100%' }}
                            >
                                Meet other services that amplifies the usability
                                of FIRMA VERIFY.
                            </SectionHead>
                        </Stack>
                    </Stack>
                    <Box sx={{ pb: '60px' }}>
                        <ServiceList />
                    </Box>
                </Stack>
            </BrowserView>
            <MobileView>
                <Stack
                    sx={{
                        width: '100%',
                        p: '70px 0 80px 0',
                        alignItems: 'center',
                    }}
                >
                    <SectionTitle
                        sx={{
                            textAlign: 'center',
                            color: '#0875f5',
                        }}
                    >
                        verify service
                    </SectionTitle>
                    <SectionHead
                        sx={{
                            pb: '50px',
                            textAlign: 'center',
                            color: '#161718',
                            maxWidth: '302px',
                            width: '100%',
                        }}
                    >
                        Meet other services
                        <br /> that amplifies the usability
                        <br /> of FIRMA VERIFY.
                    </SectionHead>
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
                                width: 278 * 4 + 16 * 3,

                                overflow: 'hidden',
                                gap: '16px',

                                transform: `translateX(${
                                    16 - 278 * idx - 16 * idx
                                }px)`,
                            }}
                        >
                            {SERVICE_LIST.map((one: IKeyValue, idx: number) => (
                                <MobileServiceCard data={one} key={idx} />
                            ))}
                        </Stack>
                    </div>
                    <Indicator length={4} nowIdx={idx} setIdx={setIdx} />
                </Stack>
            </MobileView>
        </ContentOuterBox>
    )
}

export default Services
