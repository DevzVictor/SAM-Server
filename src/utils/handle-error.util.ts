/* eslint-disable prettier/prettier */
import { UnprocessableEntityException } from '@nestjs/common';

//tratamentos de erros
export function handleError(error: Error): undefined {
  const errorLines = error.message?.split('\n');
  const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

  // testar swag error do confirm password
  // if (!lastErrorLine) {
  //   console.log(error)
  // }

  throw new UnprocessableEntityException(
    lastErrorLine || 'Algum error ocorreu ao executar a operação',
  );
}
