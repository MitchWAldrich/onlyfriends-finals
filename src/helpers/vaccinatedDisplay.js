import { isVaccinated } from '../helpers/isVaccinated.js';

export function vaccinatedDisplay(user) {
  if (isVaccinated(user) === true) {
    return 'Yes'
  }
}