beforeEach(async () => {
    await device.reloadReactNative();
});

describe('Two minus three', function () {
    it('2 - 3 = -1', async () => {
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('-1');
    })
});

describe('Enter the numbers 0-9',function(){
    it('1234567890', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button-4')).tap();
        await element(by.id('input-button-5')).tap();
        await element(by.id('input-button-6')).tap();
        await element(by.id('input-button-7')).tap();
        await element(by.id('input-button-8')).tap();
        await element(by.id('input-button-9')).tap();
        await element(by.id('input-button-0')).tap();
        await expect(element(by.id('display-text'))).toHaveText('1234567890');
    })
});


describe('Enter a rational number in decimal representation',function(){
    it('0.1', async () => {
        await element(by.id('input-button-0')).tap();
        await element(by.id('input-button-.')).tap();
        await element(by.id('input-button-1')).tap();
        await expect(element(by.id('display-text'))).toHaveText('0.1');
    })
});


describe('Try to enter a negative rational number',function(){
    it('5', async () => {
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-5')).tap();
        await expect(element(by.id('display-text'))).toHaveText('5');
    })
});

describe('Clear the last  number input',function(){
    it('1 - 3 = -2', async () => {
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-c')).tap();
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('-2');
    })
});

describe('Clear the last operation input',function(){
    it('1 - 2 = 1', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-c')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('1');
    })
});

describe('Bring the calcularor back to the initial state',function(){
    it('1 = 1', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-ce')).tap();
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('1');
    })
});

describe('The addition operator',function(){
    it('1 + 1 = 2', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('2');
    })
});

describe('The substraction operator',function(){
    it('1 - 1 = 0', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('0');
    })
});

describe('The division operator',function(){
    it('10 / 2 = 5', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-0')).tap();
        await element(by.id('input-button-/')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('5');
    })
});

describe('The multiplication operator',function(){
    it('3 * 5 = 15', async () => {
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button-*')).tap();
        await element(by.id('input-button-5')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('15');
    })
});

describe('Do an operation with + and -',function(){
    it('1 + 4 - 2 = 3', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-4')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('3');
    })
});

describe('Do an operation with * and /',function(){
    it('5 * 6 / 2 = 15', async () => {
        await element(by.id('input-button-5')).tap();
        await element(by.id('input-button-*')).tap();
        await element(by.id('input-button-6')).tap();
        await element(by.id('input-button-/')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('15');
    })
});

describe('Do an operation with = between them',function(){
    it('(1 + 7) * 2 = 16', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-7')).tap();
        await element(by.id('input-button-=')).tap();
        await element(by.id('input-button-*')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('16');
    })
});


describe('Addition with 0',function(){
    it('1 + 0 = 1', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-0')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('1');
    })
});


describe('Substraction with 0',function(){
    it('1 - 0 = 1', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-0')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('1');
    })
});


describe('Multiplication with 0',function(){
    it('0 * 5 = O', async () => {
        await element(by.id('input-button-0')).tap();
        await element(by.id('input-button-*')).tap();
        await element(by.id('input-button-5')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('0');
    })
});


describe('Division by 0',function(){
    it('1 / 0 = Infinity', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-/')).tap();
        await element(by.id('input-button-0')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('Infinity');
    })
});


describe('Division 0 by x',function(){
    it('0 / 3 = 0', async () => {
        await element(by.id('input-button-0')).tap();
        await element(by.id('input-button-/')).tap();
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('0');
    })
});

describe('Substraction with A > B',function(){
    it('3 - 1 = 2', async () => {
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('2');
    })
});

describe('Substraction with A < B',function(){
    it('3 - 4 = -1', async () => {
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-4')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('-1');
    })
});

describe('Substraction with A = B',function(){
    it('1 - 1 = 0', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button--')).tap();
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('0');
    })
});

describe('Rational number with periodic decimal',function(){
    it('2 / 3 = 0.6666666666666666', async () => {
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-/')).tap();
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('0.6666666666666666');
    })
});

describe('Rational number with non periodic decimal',function(){
    it('9 / 2 = 4.5 ', async () => {
        await element(by.id('input-button-9')).tap();
        await element(by.id('input-button-/')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('4.5');
    })
});

describe('Put + in front of a number and do an operation afterwards',function(){
    it('+ 2 * 3 = 6 ', async () => {
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-*')).tap();
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('6');
    })
});

describe('Put / operator in front of a number and do an operation afterwards',function(){
    it('1 + 2 = 3 ', async () => {
        await element(by.id('input-button-/')).tap();
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('3');
    })
});

describe('Put * operator in front of a number and do an operation afterwards',function(){
    it('3 / 2 = 1.5', async () => {
        await element(by.id('input-button-*')).tap();
        await element(by.id('input-button-3')).tap();
        await element(by.id('input-button-/')).tap();
        await element(by.id('input-button-2')).tap();
        await element(by.id('input-button-=')).tap();
        await expect(element(by.id('display-text'))).toHaveText('1.5');
    })
});


describe('Enter a long number',function(){
    it('1111111111111111', async () => {
        for(i= 0; i< 16; i++){
            await element(by.id('input-button-1')).tap();
        }
        await expect(element(by.id('display-text'))).toHaveText('1111111111111111');
    })
});

describe('Enter number after result',function(){
    it('1 + 4 = 5 an then concat 9 = 59', async () => {
        await element(by.id('input-button-1')).tap();
        await element(by.id('input-button-+')).tap();
        await element(by.id('input-button-4')).tap();
        await element(by.id('input-button-=')).tap();
        await element(by.id('input-button-9')).tap();
        await expect(element(by.id('display-text'))).toHaveText('59');
    })
});


