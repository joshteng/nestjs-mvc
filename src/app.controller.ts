import { Controller, Get, Post, Render, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { LoginGuard } from './common/guards/login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(AuthenticatedGuard)
  @Get()
  @Render('public/home')
  homepage(@Request() req): object {
    return { user: req.user }
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
  loginPage() {
    return {
      "page_title": "Login"
    }
  }


  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Res() res: Response) {
    res.redirect('/');
  }
}
