import 'styles/normalize';
import 'styles/index'
import { format } from 'utils/format';
import { log } from 'utils/log'

log(format('hello world'))

log(_.map([1, 2, 3], (item) => item * 2))

log(2);
log(CONSTANTS.APP_VERSION);
