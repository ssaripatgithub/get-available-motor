import { strictEqual } from 'assert';
import { handler } from '..';
import { Output } from '../types';

const executeLambda = async (): Promise<Output | null> => {
  const res = await handler({ queryStringParameters: {} } as any);
  let output: Output | null = null;
  if (res) {
    output = JSON.parse(res.body ?? '');
  }
  return output;
}

describe('get-available-motor', () => {
  it('should return correct number of motors', async () => {
    const output = await executeLambda();
    strictEqual(output?.length, 3);
  });
});