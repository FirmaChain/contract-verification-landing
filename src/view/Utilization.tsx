import { Stack } from '@mui/material'
import UtilizationCard from '../components/card/UtilizationCard'
import { UTILIZATION_DATA } from '../constants/common'
import { IKeyValue } from '../interface'
import { SectionDesc, SectionHead, SectionTitle } from '../styles'

const Utilization = () => {
    return (
        <Stack
            sx={{
                width: '100%',
                backgroundColor: '#ebf6ff',
                alignItems: 'center',
            }}
        >
            <Stack
                direction="column"
                sx={{
                    pt: '130px',
                    pb: '150px',
                    alignItems: 'center',
                    maxWidth: '1200px',
                }}
            >
                <SectionTitle sx={{ pb: '40px' }}>
                    Utilization field
                </SectionTitle>
                <SectionHead
                    sx={{ width: '650px', textAlign: 'center', pb: '40px' }}
                >
                    FIRMA VERIFY can be used in various fields.
                </SectionHead>
                <SectionDesc
                    sx={{ width: '530px', textAlign: 'center', pb: '100px' }}
                >
                    It can be introduced into various fields such as contracts,
                    transactions, and records made online or offline.
                    <br />
                    FIRMA VERIFY can be applied wherever higher confidence is
                    needed.
                </SectionDesc>
                <Stack
                    direction="row"
                    sx={{ width: '100%', justifyContent: 'center' }}
                    gap="30px"
                >
                    {UTILIZATION_DATA.map((data: IKeyValue, idx: number) => (
                        <UtilizationCard data={data} key={idx} />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Utilization
