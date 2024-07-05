import { Camunda8 } from '@camunda8/sdk'
import {config} from 'dotenv'
config()

const c8 = new Camunda8()

const zbc = c8.getZeebeGrpcApiClient()

async function main() {
    const topology = await zbc.topology()
    console.log(topology)
    const res = await zbc.deployResource({
        processFilename: './resources/test.bpmn'
    })
    console.log(res)
}

main()