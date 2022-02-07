import { isBrowser } from "react-device-detect";
import { IKeyValue } from "../interface";
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
    M_IMG_SERVICE_VERIFY,
    M_IMG_SERVICE_FAUCET,
    M_IMG_SERVICE_DOCS,
    M_IMG_SERVICE_DONUE,
    M_IMG_VERIFICATION_V1,
    M_IMG_VERIFICATION_V2,
    IMG_VERIFICATION_V1,
    IMG_VERIFICATION_V2,
} from "./images";
import { DONUE, FIRMACHAIN_DOCS, FIRMACHAIN_ECOSYSTEM, FIRMACHAIN_FAUCET, VERIFY_TOOL } from "./links";

export const MENU_LIST: IKeyValue[] = [
    { title: "VERIFY TOOL", goURL: VERIFY_TOOL },
    { title: "API DOCS", goURL: FIRMACHAIN_DOCS },
    { title: "ECOSYSTEM", goURL: FIRMACHAIN_ECOSYSTEM },
];

export const UTILIZATION_DATA: IKeyValue[] = [
    {
        width: isBrowser ? "200px" : "147px",
        imgURL: isBrowser ? IMG_UTILIZATION_ECONTRACT : M_IMG_UTILIZATION_ECONTRACT,
        data: {
            title: "E-Contract",
            list: ["Standard contract", "Work contract", "Salary contract", "Sales contract"],
        },
    },
    {
        width: isBrowser ? "212px" : "155px",
        imgURL: isBrowser ? IMG_UTILIZATION_ECOMMERCE : M_IMG_UTILIZATION_ECOMMERCE,
        data: {
            title: "E-Commerce",
            list: ["Securities trading", "Shopping mall", "Second-hand deals", "Auction"],
        },
    },
    {
        width: isBrowser ? "270px" : "197px",
        imgURL: isBrowser ? IMG_UTILIZATION_SERVICE : M_IMG_UTILIZATION_SERVICE,
        data: {
            title: "Service",
            list: ["Document verification", "Performance verification", "History inquiry", "Accounting ledger"],
        },
    },
];

export const SERVICE_LIST: IKeyValue[] = [
    {
        imgURL: isBrowser ? IMG_SERVICE_VERIFY : M_IMG_SERVICE_VERIFY,
        goURL: VERIFY_TOOL,
        title: "Verify Tool",
        desc: "Verification service",
    },
    {
        imgURL: isBrowser ? IMG_SERVICE_FAUCET : M_IMG_SERVICE_FAUCET,
        goURL: FIRMACHAIN_FAUCET,
        title: "Faucet",
        desc: "Testnet faucet",
    },
    {
        imgURL: isBrowser ? IMG_SERVICE_DOCS : M_IMG_SERVICE_DOCS,
        goURL: FIRMACHAIN_DOCS,
        title: "Verify docs",
        desc: "FIRMA VERIFY Guide",
    },
    {
        imgURL: isBrowser ? IMG_SERVICE_DONUE : M_IMG_SERVICE_DONUE,
        goURL: DONUE,
        title: "Donue",
        desc: "E-Contract verification",
    },
];

export const VERIFICATION_SERVICE_LIST: IKeyValue[] = [
    {
        title: "Pahse 1: Module",
        imgURL: isBrowser ? IMG_VERIFICATION_V1 : M_IMG_VERIFICATION_V1,
    },
    {
        title: "Coming Soon",
        imgURL: isBrowser ? IMG_VERIFICATION_V2 : M_IMG_VERIFICATION_V2,
    },
];
