import { SetMetadata } from '@nestjs/common';
import { CountryEnum } from "../enum/country.enum";
export const COUNTRY_KEY=  'countries'
export const Countries = (...args: CountryEnum[]) => SetMetadata(COUNTRY_KEY, args);
