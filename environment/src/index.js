import './style.less';
import { log } from './utils'

log('hello world')

if (__DEV__) {
  log('In development ...')
}
