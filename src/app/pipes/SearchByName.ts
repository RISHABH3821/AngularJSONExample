import { Pipe, PipeTransform } from '@angular/core';
import { SuperDomain } from '../../app/models/super-domain';
 
@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  transform(domains: SuperDomain[], searchText: string) {
    return domains.filter(domain => domain?.domain.search(searchText)!==-1);
  }
}
