import { FalseyValuePipe } from './falsey-value.pipe';

describe('FalseyValuePipe', () => {
  it('create an instance', () => {
    const pipe = new FalseyValuePipe();
    expect(pipe).toBeTruthy();
  });
});
