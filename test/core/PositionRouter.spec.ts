import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { commonContractsFixture } from '../fixtures/base.fixture';

describe('PositionRouter', () => {
  it('works', async () => {
    const {} = await loadFixture(commonContractsFixture);
    expect(true).to.eq(true);
  });
});
