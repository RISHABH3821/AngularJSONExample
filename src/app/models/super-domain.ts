import { Domain } from './domain';

export interface SuperDomain extends Domain {
  id: number;
  storage: number;
  monthlyVisitorCapacity: number;
  availableDomains: number;
  usedDomains: number;
  subDomain: Domain[];
}
