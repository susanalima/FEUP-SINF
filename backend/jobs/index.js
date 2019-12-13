import Test from './Test';
import PO_SO from './PO_SO';
import SI_PI from './SI_PI';
import PP_SR from './PP_SR';
import SG_RG from './SG_RG';
import createSO from './createSO';
import createPI from './createPI';
import createSR from './createSR';
import createRG from './createRG';

export const RETURN_TYPES = {
  END_SUCCESS: 'END_SUCCESS',
  END_ACTION_FAIL: 'END_ACTION_FAIL',
  END_TRIGGER_FAIL: 'END_TRIGGER_FAIL',
  END_NO_NEW_DOCUMENTS: 'END_NO_NEW_DOCUMENTS',
};

export default { Test, PO_SO, createSO, SI_PI, createPI, PP_SR, createSR, createSO, createRG, SG_RG };
