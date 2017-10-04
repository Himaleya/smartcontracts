const TestERC20Token = artifacts.require('TestERC20Token.sol');


contract('ERC20Token', (accounts) => {

const supply = 720000000; // 720m

const owner = accounts[0];

const dev1 = accounts[1];


it('shall put 720m for creator', async () => {

let token = await TestERC20Token.new('EXP24K', 'EXP24K', 8, supply);

let bal = await token.balanceOf.call(owner);

assert.equal(bal.toNumber(), supply, '720m shall be the balance');

});


it('shall show a correct balance', async () => {

let token = await TestERC20Token.new('EXP24K', 'EXP24K', 8, supply);

let bal = await token.balanceOf.call(owner);

assert.equal(bal.toNumber(), supply, '720m shall be the balance');

});


it('shall make a correct transfer', () => {

let token = await TestERC20Token.new('EXP24K', 'EXP24K', 8, supply);

let bal = await token.balanceOf.call(owner);

assert.equal(bal.toNumber(), supply, '720m shall be the balance');

await token.transfer(dev1, 1000, {from: owner});

let b1 = await token.balanceOf.call(dev1);

assert.equal(b1.toNumber(), 1000, 'Expected balance of 1000');

let b2 = await token.balanceOf.call(owner);

assert.equal(b2.toNumber(), supply - 1000, 'Expected balance of 1000 less');

});

}); 
