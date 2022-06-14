import {
  Reason,
  RejectionReasonType,
} from '../RejectionReasonsForm.d';

export interface ReasonsListD {
  reasons: Reason[]
  setReason: (arg: RejectionReasonType) => void
}
