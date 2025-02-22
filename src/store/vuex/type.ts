import { IHomeState } from './home/home-type'
import { ILoginState } from './login/login-type'
// root模块的类型
export interface IRootState {
  name: string
  age: number
}
// 写一个所有子模块类型的接口
export interface IModuleState {
  home: IHomeState
  login: ILoginState
}
// 将根模块与子模块接口合并导出
export type IStore = IRootState & IModuleState
