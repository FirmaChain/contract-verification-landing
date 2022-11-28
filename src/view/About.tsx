import { Box, Stack } from '@mui/material'
import { IMG_ABOUT_1, IMG_ABOUT_2 } from '../constants/images'
import {
    RedirectButton,
    SectionDesc,
    SectionHead,
    SectionTitle,
} from '../styles'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const About = () => {
    return (
        <>
            <Box sx={{ width: '100%', margin: '0 30px' }}>
                <Stack sx={{ width: '100%', alignItems: 'center' }}>
                    <Stack
                        direction="row"
                        sx={{
                            pt: '140px',
                            width: '100%',
                            maxWidth: '1200px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Stack>
                            <SectionTitle>About</SectionTitle>
                            <SectionHead
                                sx={{
                                    width: '443px',
                                    pb: '40px',
                                }}
                            >
                                Trusted verification service of integrity.
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    width: '378px',
                                    pb: '40px',
                                }}
                            >
                                Due to the nature of the blockchain-based data,
                                everything is transparent and cannot be
                                modified. Ensure integrity with reliable
                                verification services.
                            </SectionDesc>

                            <Box>
                                <RedirectButton>
                                    Verify service{' '}
                                    <KeyboardArrowRightIcon
                                        sx={{ fontSize: '18px' }}
                                    />
                                </RedirectButton>
                            </Box>
                        </Stack>
                        <Box>
                            <img src={IMG_ABOUT_1} alt="" />
                        </Box>
                    </Stack>
                </Stack>
            </Box>

            <Box sx={{ width: '100%', margin: '0 30px' }}>
                <Stack sx={{ width: '100%', alignItems: 'center' }}>
                    <Stack
                        direction="row"
                        sx={{
                            pt: '140px',
                            pb: '130px',
                            width: '100%',
                            maxWidth: '1200px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <img
                                src={IMG_ABOUT_2}
                                alt=""
                                style={{ position: 'absolute' }}
                            />
                        </Box>
                        <Stack sx={{ alignItems: 'flex-end' }}>
                            <SectionTitle>About</SectionTitle>
                            <SectionHead
                                sx={{
                                    width: '541px',
                                    pb: '40px',
                                    textAlign: 'right',
                                }}
                            >
                                Provides an
                                <br />
                                open API
                                <br />
                                for easy deployment.
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    width: '485px',
                                    pb: '40px',
                                    textAlign: 'right',
                                }}
                            >
                                It is an open API provided by the Firma chain,
                                and only the functions required by the
                                enterprise can be used in conjunction. It can be
                                introduced even if you are not a blockchain
                                developer, from creating contract files to
                                inquiring.
                            </SectionDesc>

                            <Box>
                                <RedirectButton>
                                    API Docs{' '}
                                    <KeyboardArrowRightIcon
                                        sx={{ fontSize: '18px' }}
                                    />
                                </RedirectButton>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default About
