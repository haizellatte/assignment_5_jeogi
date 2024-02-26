import { SetMetadata } from '@nestjs/common';
import { AccountType } from 'src/domains/accounts/account.type';

export const Private = (accountType: AccountType) =>
  SetMetadata('accountType', accountType);
