import { IKeyValue } from '../interface'
import {
    IMG_SERVICE_DOCS,
    IMG_SERVICE_FAUCET,
    IMG_SERVICE_VERIFY,
    IMG_SERVICE_DONUE,
    IMG_UTILIZATION_ECOMMERCE,
    IMG_UTILIZATION_ECONTRACT,
    IMG_UTILIZATION_SERVICE,
} from './images'

export const UTILIZATION_DATA: IKeyValue[] = [
    {
        imgURL: IMG_UTILIZATION_ECONTRACT,
        data: {
            title: 'E-Contract',
            list: [
                'Standard contract',
                'Work contract',
                'Salary contract',
                'Sales contract',
            ],
        },
    },
    {
        imgURL: IMG_UTILIZATION_ECOMMERCE,
        data: {
            title: 'E-Commerce',
            list: [
                'Securities trading',
                'Shopping mall',
                'Second-hand deals',
                'Auction',
            ],
        },
    },
    {
        imgURL: IMG_UTILIZATION_SERVICE,
        data: {
            title: 'Service',
            list: [
                'Document verification',
                'Performance verification',
                'History inquiry',
                'Accounting ledger',
            ],
        },
    },
]

export const SERVICE_LIST: IKeyValue[] = [
    {
        imgURL: IMG_SERVICE_VERIFY,
        title: 'Verify',
        desc: 'Verification service',
    },
    { imgURL: IMG_SERVICE_FAUCET, title: 'Faucet', desc: 'Testnet faucet' },
    {
        imgURL: IMG_SERVICE_DOCS,
        title: 'Verify docs',
        desc: 'FIRMA VERIFY Guide',
    },
    {
        imgURL: IMG_SERVICE_DONUE,
        title: 'Donue',
        desc: 'E-Contract verification',
    },
]
