import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('public/home')
  getHello(): object {
    return this.appService.getHello();
  }

  @Get('sign_up')
  @Render('users/new')
  signUp(): object {
    return {
      "page_title": "Sign Up"
    }
  }
}
