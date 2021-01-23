import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomerController {
  @Get()
  getAll() {
    console.log('getting all customers');
  }
}
