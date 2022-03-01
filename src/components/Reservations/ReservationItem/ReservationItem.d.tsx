import {
  Guest,
  Host,
} from '../../../types/reservations';

export interface ReservationItemProps {
  id: string
  guest: Guest
  host: Host
  dateFrom: string
  dateTo: string
  status: string
  statusName: string
  firstMessageTime: string
}
