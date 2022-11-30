import { isBrowser } from 'react-device-detect'
import { IKeyValue } from '../interface'
import {
    IMG_SERVICE_DOCS,
    IMG_SERVICE_FAUCET,
    IMG_SERVICE_VERIFY,
    IMG_SERVICE_DONUE,
    IMG_UTILIZATION_ECONTRACT,
    IMG_UTILIZATION_ECOMMERCE,
    IMG_UTILIZATION_SERVICE,
    M_IMG_UTILIZATION_ECOMMERCE,
    M_IMG_UTILIZATION_ECONTRACT,
    M_IMG_UTILIZATION_SERVICE,
} from './images'

export const UTILIZATION_DATA: IKeyValue[] = [
    {
        width: isBrowser ? '198px' : '162px',
        imgURL: isBrowser
            ? IMG_UTILIZATION_ECONTRACT
            : M_IMG_UTILIZATION_ECONTRACT,
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
        width: isBrowser ? '212px' : '173px',
        imgURL: isBrowser
            ? IMG_UTILIZATION_ECOMMERCE
            : M_IMG_UTILIZATION_ECOMMERCE,
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
        width: isBrowser ? '270px' : '222px',
        imgURL: isBrowser ? IMG_UTILIZATION_SERVICE : M_IMG_UTILIZATION_SERVICE,
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
