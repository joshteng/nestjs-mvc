import { Controller, Get, Post, Render, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { LoginGuard } from './common/guards/login.guard';

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
  loginPage() {
    return {
      "page_title": "Login"
    }
  }

  @UseGuards(LoginGuard)
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
