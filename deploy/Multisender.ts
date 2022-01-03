import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getUnnamedAccounts } = hre
  const { deploy } = deployments
  const [ deployer ] = await getUnnamedAccounts()

  await deploy('Multisender', {
    from: deployer,
    log: true,
    deterministicDeployment: false
  })
}

deploy.tags = ['Multisender']
export default deploy