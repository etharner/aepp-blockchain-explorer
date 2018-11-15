import Chain from '@aeternity/aepp-sdk/es/chain/epoch'

let client = null

/**
 * getEpochClient
 * @param {string} epochUrl
 * @returns EpochChain instance
 *
 * Todo: Find better place than current file
 */
export const getEpochClient = async (epochUrl = process.env.VUE_APP_EPOCH_URL) => {
  if (!client) {
    client = await Chain({
      url: epochUrl
    })
  }
  return client
}

export const resetClient = () => {
  client = null
}
