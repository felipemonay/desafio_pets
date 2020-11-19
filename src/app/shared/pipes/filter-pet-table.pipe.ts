import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Pipe({ name: 'filterPetTable', pure: false })
export class FilterPetTable implements PipeTransform {

    transform(pet: Pet[], filter: Pet) {
        if (filter.name || filter.nickName || filter.breed || filter.species || filter.ownerName || filter.ownerPhone) {
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

            function search(pet: Pet) {
                let keys = Object.keys(filtro);

                return keys.every((key) => String(pet[key]).toLowerCase().includes(filtro[key]));
            }
            return pet.filter(search, filter);

        }
        else {
            return pet;
        }
    }

}
