import { debounce } from 'lodash';
import { useCallback } from 'react';

export const testDebounce = debounce(() => {
    console.log('hello');
}, 1000);
