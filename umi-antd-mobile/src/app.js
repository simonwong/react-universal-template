import { Toast } from 'antd-mobile'

const protoLoading = Toast.loading
const protoInfo = Toast.info
const protoFail = Toast.fail

Toast.loading = (content, duration = 0, ...rest) =>
  protoLoading(content, duration, ...rest)
Toast.info = (content, duration = 1, ...rest) =>
  protoInfo(content, duration, ...rest)
Toast.fail = (content, duration = 2, ...rest) =>
  protoFail(content, duration, ...rest)

export async function render(oldRender) {
  oldRender()
}
