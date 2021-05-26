import { ConvertISO8601ToMsPipe } from './convert-iso8601-to-ms.pipe';

describe('ConvertISO8601ToMsPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertISO8601ToMsPipe();
    expect(pipe).toBeTruthy();
  });
});
