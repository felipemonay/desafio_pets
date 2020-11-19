import { Pipe, PipeTransform } from '@angular/core';
import { Owner } from 'src/app/models/owner';

@Pipe({ name: 'filterOwnerTable', pure: false })
export class FilterOwnerTable implements PipeTransform {

    transform(owner: Owner[], filter: Owner) {
        if (filter.name || filter.email || filter.phone) {
            const filtro = {};
            if (filter) {
                for (const key in filter) {
                    if (filter[key]) {
                        if (String(filter[key]).length > 0) {
                            Object.assign(filtro, { [key]: String(filter[key]).trim().toLowerCase() });
                        }
                    }
                }
            }

            function search(owner: Owner) {
                let keys = Object.keys(filtro);

                return keys.every((key) => String(owner[key]).toLowerCase().includes(filtro[key]));
            }
            return owner.filter(search, filter);

        }
        else {
            return owner;
        }
    }

}
