import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type Menu = {
    name: string,
    icon: any
}

export type FarmsList = {
    standard: string,
    icon: IconDefinition,
    token1: {
        name: string,
        icon: string
    },
    token2: {
        name: string,
        icon: string
    },
    profit: string,
    pool: string,
    totalDeposits: string
}