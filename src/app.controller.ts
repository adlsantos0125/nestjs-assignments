import { Controller, Get, Param, } from '@nestjs/common';

@Controller('prime-number')
export class PrimeNumberController {

    @Get(':n')
    checkPrime(@Param('n') n: string): { isPrime: boolean } {
        const numberN = parseInt(n, 10);
        const isPrime = this.isPrime(numberN);
        return { isPrime };
    }

    private isPrime(num: number): boolean {
        if (num < 2) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        
        return true; 
    }
}