import { Controller, Get, Post, Render, Request, Res, UseFilters, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { LoginGuard } from './common/guards/login.guard';
import { LoginFailedExceptionFilter } from './common/filters/login-failed-exceptions.filters';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('public/home')
  homepage() {
    return
  }

  @Get('sign-up')
  @Render('users/new')
  signUp(): object {
    return {
      "page_title": "Sign Up"
    }
  }

  @Get('login')
  @Render('public/login')
  loginPage(@Request() req) {
    return {
      "page_title": "Login",
      "flash_message": req.flash('alert')[0]
    }
  }

  @UseGuards(LoginGuard)
  @UseFilters(LoginFailedExceptionFilter)
  @Post('/login')
  login(@Request() req, @Res() res: Response) {
    res.redirect(`/users/${req.user.id}`);
  }

  @Post('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout();
    res.redirect('/');
  }
}
